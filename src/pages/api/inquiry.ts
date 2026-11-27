import type { APIRoute } from 'astro';
import { getD1Database } from '../../lib/data';
import { dispatchInquiryAlerts } from '../../lib/notifications';
import { cleanMultiline, cleanSingleLine, enforcePublicRateLimit, readBoundedJson, validateHttpUrl } from '../../lib/rate-limit';

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, private',
  'X-Content-Type-Options': 'nosniff'
};

const idempotencyReady = new WeakSet<object>();

async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

async function ensureIdempotencyTable(db: any) {
  if (idempotencyReady.has(db)) return;
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS inquiry_idempotency (
      idempotency_key TEXT PRIMARY KEY,
      inquiry_id TEXT NOT NULL,
      request_hash TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare(`CREATE INDEX IF NOT EXISTS idx_inquiry_idempotency_created ON inquiry_idempotency(created_at)`)
  ]);
  idempotencyReady.add(db);
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const rl = await enforcePublicRateLimit(request, locals, {
      scope: 'public_inquiry',
      windowSeconds: 600,
      maxRequests: 10
    });
    if (!rl.allowed) {
      return new Response(JSON.stringify({ success: false, error: 'Too many inquiries submitted. Please wait a few minutes and try again.' }), {
        status: 429,
        headers: { ...JSON_HEADERS, 'Retry-After': String(rl.retryAfter) }
      });
    }

    const parsed = await readBoundedJson(request, 16384);
    if (!parsed.ok) {
      return new Response(JSON.stringify({ success: false, error: parsed.error }), {
        status: parsed.status,
        headers: JSON_HEADERS
      });
    }

    const body = parsed.data;
    const isQuickWhatsApp = Boolean(body.quick_whatsapp);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;

    let cleanBuyerName = cleanSingleLine(body.buyer_name, 120);
    let cleanBuyerEmail = cleanSingleLine(body.buyer_email, 254).toLowerCase();

    if (isQuickWhatsApp) {
      if (cleanBuyerName.length < 2) {
        cleanBuyerName = 'WhatsApp Direct Buyer';
      }
      if (!emailRegex.test(cleanBuyerEmail)) {
        cleanBuyerEmail = 'whatsapp-lead@sinotradelink.com';
      }
    } else {
      if (!cleanBuyerName || cleanBuyerName.length < 2) {
        return new Response(JSON.stringify({ success: false, error: 'Please enter a valid full name (2–120 characters).' }), {
          status: 400,
          headers: JSON_HEADERS
        });
      }

      if (!cleanBuyerEmail || !emailRegex.test(cleanBuyerEmail)) {
        return new Response(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }), {
          status: 400,
          headers: JSON_HEADERS
        });
      }
    }

    const cleanMessage = cleanMultiline(body.message, 4000);
    const rawAlibabaUrl = cleanSingleLine(body.alibaba_url, 500);
    let cleanAlibabaUrl = '';
    if (rawAlibabaUrl) {
      const checkedUrl = validateHttpUrl(rawAlibabaUrl, 500);
      if (checkedUrl === null) {
        return new Response(JSON.stringify({ success: false, error: 'Please provide a valid http(s) product link.' }), {
          status: 400,
          headers: JSON_HEADERS
        });
      }
      cleanAlibabaUrl = checkedUrl;
    }

    const cleanOrderType = cleanSingleLine(body.order_type, 60);
    const cleanTargetBooth = cleanSingleLine(body.target_booth, 60);
    const cleanServiceType = cleanSingleLine(body.service_type, 100);
    const cleanPhone = cleanSingleLine(body.phone, 40);

    const details = [
      cleanMessage,
      cleanAlibabaUrl ? `[Alibaba Link: ${cleanAlibabaUrl}]` : null,
      cleanOrderType ? `[Order Mode: ${cleanOrderType}]` : null,
      cleanTargetBooth ? `[Target Booth: ${cleanTargetBooth}]` : null,
      cleanServiceType ? `[Service: ${cleanServiceType}]` : null,
      cleanPhone ? `[Contact Phone/WA: ${cleanPhone}]` : null
    ].filter(Boolean).join('\n');

    if (details.length < 5) {
      return new Response(JSON.stringify({ success: false, error: 'Please provide an Alibaba link, product query, or specification details.' }), {
        status: 400,
        headers: JSON_HEADERS
      });
    }

    const cleanShopId = cleanSingleLine(body.shop_id, 64) || (cleanAlibabaUrl ? 'PRODUCT_SOURCING' : 'GENERAL');
    const cleanCountry = cleanSingleLine(body.buyer_country, 80) || 'Global';
    const requestHash = await sha256Hex(
      JSON.stringify([cleanShopId, cleanBuyerName, cleanBuyerEmail, cleanCountry, details])
    );

    const explicitKey = cleanSingleLine(
      request.headers.get('Idempotency-Key') || request.headers.get('X-Idempotency-Key') || body.idempotency_key,
      128
    );
    if (explicitKey && !/^[A-Za-z0-9._:-]{8,128}$/.test(explicitKey)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid idempotency key format.' }), {
        status: 400,
        headers: JSON_HEADERS
      });
    }

    // 10-minute deterministic content-window deduplication fallback when client omits Idempotency-Key
    const bucket10m = Math.floor(Date.now() / 600_000);
    const effectiveIdemKey = explicitKey
      ? `explicit:${explicitKey}`
      : `auto:${await sha256Hex(`${requestHash}:${bucket10m}`)}`;

    const db = await getD1Database();
    if (!db) {
      console.error('[D1 Unavailable] /api/inquiry cannot persist without database binding.');
      return new Response(JSON.stringify({
        success: false,
        error: 'Inquiry database is temporarily unavailable. Please message WhatsApp +86 134 8272 5985 or support@sinotradelink.com.'
      }), {
        status: 503,
        headers: JSON_HEADERS
      });
    }

    const id = crypto.randomUUID();
    let persisted = false;

    try {
      await ensureIdempotencyTable(db);

      // Check existing idempotency entry before attempting insert
      const existing = await db
        .prepare(`SELECT inquiry_id, request_hash FROM inquiry_idempotency WHERE idempotency_key = ? LIMIT 1`)
        .bind(effectiveIdemKey)
        .first<{ inquiry_id: string; request_hash: string }>();

      if (existing?.inquiry_id) {
        if (existing.request_hash !== requestHash) {
          return new Response(JSON.stringify({
            success: false,
            error: 'Idempotency key has already been used for a different inquiry payload.'
          }), {
            status: 409,
            headers: JSON_HEADERS
          });
        }
        return new Response(JSON.stringify({
          success: true,
          deduplicated: true,
          inquiryId: existing.inquiry_id,
          message: 'Inquiry already received. Our sourcing team and stall manager will follow up shortly.'
        }), {
          status: 200,
          headers: JSON_HEADERS
        });
      }

      // Atomic D1 batch transaction: either BOTH idempotency lock AND inquiry row commit, or NEITHER commits
      await db.batch([
        db.prepare(`INSERT INTO inquiry_idempotency (idempotency_key, inquiry_id, request_hash) VALUES (?, ?, ?)`)
          .bind(effectiveIdemKey, id, requestHash),
        db.prepare(`
          INSERT INTO inquiries (id, shop_id, buyer_name, buyer_email, buyer_country, message, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, 'PENDING', CURRENT_TIMESTAMP)
        `).bind(id, cleanShopId, cleanBuyerName, cleanBuyerEmail, cleanCountry, details)
      ]);
      persisted = true;
    } catch (dbErr: any) {
      const errMsg = String(dbErr?.message || dbErr || '');
      // Handle concurrent duplicate race where inquiry_idempotency PRIMARY KEY already exists
      if (/UNIQUE constraint failed:\s*inquiry_idempotency\.idempotency_key/i.test(errMsg)) {
        try {
          const raced = await db
            .prepare(`SELECT inquiry_id, request_hash FROM inquiry_idempotency WHERE idempotency_key = ? LIMIT 1`)
            .bind(effectiveIdemKey)
            .first<{ inquiry_id: string; request_hash: string }>();
          if (raced?.inquiry_id) {
            if (raced.request_hash !== requestHash) {
              return new Response(JSON.stringify({
                success: false,
                error: 'Idempotency key conflict with a different inquiry payload.'
              }), { status: 409, headers: JSON_HEADERS });
            }
            return new Response(JSON.stringify({
              success: true,
              deduplicated: true,
              inquiryId: raced.inquiry_id,
              message: 'Inquiry already received. Our sourcing team and stall manager will follow up shortly.'
            }), { status: 200, headers: JSON_HEADERS });
          }
        } catch {}
      }

      console.error('[D1 Persistence Failure] Failed to persist inquiry:', errMsg);
      return new Response(JSON.stringify({
        success: false,
        error: 'We could not save your inquiry right now. Nothing was submitted—please retry or contact WhatsApp +86 134 8272 5985.'
      }), {
        status: 500,
        headers: JSON_HEADERS
      });
    }

    if (!persisted) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Inquiry persistence verification failed. Please retry or contact WhatsApp +86 134 8272 5985.'
      }), {
        status: 500,
        headers: JSON_HEADERS
      });
    }

    const alertPromise = dispatchInquiryAlerts({
      inquiryId: id,
      buyerName: cleanBuyerName,
      buyerEmail: cleanBuyerEmail,
      buyerPhone: cleanPhone || undefined,
      buyerCountry: cleanCountry,
      targetBooth: cleanTargetBooth || undefined,
      serviceType: cleanServiceType || (isQuickWhatsApp ? 'Alibaba Link / WhatsApp Quote' : undefined),
      message: cleanMessage || details,
      shopId: cleanShopId
    }, locals).catch(err => console.error('[Notification Dispatch Error]:', err));

    try {
      const waitUntil = (locals as any)?.runtime?.ctx?.waitUntil || (locals as any)?.cfContext?.waitUntil;
      if (typeof waitUntil === 'function') {
        waitUntil(alertPromise);
      }
    } catch {
      // Non-workerd runtime
    }

    return new Response(JSON.stringify({
      success: true,
      deduplicated: false,
      inquiryId: id,
      message: 'Inquiry received. Our sourcing team and stall manager will follow up shortly.'
    }), {
      status: 200,
      headers: JSON_HEADERS
    });

  } catch (err: any) {
    console.error('[API Error] /api/inquiry failed:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'An unexpected error occurred while processing your inquiry.'
    }), {
      status: 500,
      headers: JSON_HEADERS
    });
  }
};
