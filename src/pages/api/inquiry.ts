import type { APIRoute } from 'astro';
import { getD1Database } from '../../lib/data';
import { dispatchInquiryAlerts } from '../../lib/notifications';
import { cleanMultiline, cleanSingleLine, enforcePublicRateLimit, readBoundedJson, validateHttpUrl } from '../../lib/rate-limit';

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, private',
  'X-Content-Type-Options': 'nosniff'
};

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

    const id = crypto.randomUUID();
    const cleanShopId = cleanSingleLine(body.shop_id, 64) || (cleanAlibabaUrl ? 'PRODUCT_SOURCING' : 'GENERAL');
    const cleanCountry = cleanSingleLine(body.buyer_country, 80) || 'Global';

    const db = await getD1Database();
    if (db) {
      try {
        await db.prepare(`
          INSERT INTO inquiries (id, shop_id, buyer_name, buyer_email, buyer_country, message, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, 'PENDING', CURRENT_TIMESTAMP)
        `).bind(id, cleanShopId, cleanBuyerName, cleanBuyerEmail, cleanCountry, details).run();
      } catch (dbErr) {
        console.error('[D1 Error] Failed to insert inquiry:', dbErr);
      }
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
