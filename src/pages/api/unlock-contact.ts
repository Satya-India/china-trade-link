import type { APIRoute } from 'astro';
import { getD1Database, getSupplierById } from '../../lib/data';
import { dispatchInquiryAlerts } from '../../lib/notifications';
import { cleanMultiline, cleanSingleLine, enforcePublicRateLimit, getPublicClientIp, readBoundedJson } from '../../lib/rate-limit';

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, private',
  'X-Content-Type-Options': 'nosniff'
};

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const rl = await enforcePublicRateLimit(request, locals, {
      scope: 'public_unlock_contact',
      windowSeconds: 600,
      maxRequests: 15
    });
    if (!rl.allowed) {
      return new Response(JSON.stringify({ success: false, error: 'Too many quote requests. Please wait a few minutes and try again.' }), {
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
    const cleanShopId = cleanSingleLine(body.shop_id, 64);
    if (!cleanShopId || !/^[a-zA-Z0-9_-]{1,64}$/.test(cleanShopId)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid or missing supplier identifier.' }), {
        status: 400,
        headers: JSON_HEADERS
      });
    }

    const cleanName = cleanSingleLine(body.buyer_name, 120);
    if (!cleanName || cleanName.length < 2) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter your full name (2–120 characters).' }), {
        status: 400,
        headers: JSON_HEADERS
      });
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
    const cleanEmail = cleanSingleLine(body.buyer_email, 254).toLowerCase();
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter a valid business email address.' }), {
        status: 400,
        headers: JSON_HEADERS
      });
    }

    const cleanCountry = cleanSingleLine(body.buyer_country, 80) || 'Global';
    const cleanPhone = cleanSingleLine(body.buyer_phone, 40);
    const cleanNotes = cleanMultiline(body.message, 2000);
    const clientIp = getPublicClientIp(request);

    const db = await getD1Database();

    // Retrieve supplier details internally for coordinator follow-up (never returned publicly)
    let supplier: any = null;
    if (db) {
      try {
        supplier = await db.prepare(`
          SELECT shop_id, name, clean_name, contact_person, booth_no, district, floor, gate,
                 unmasked_direct_phone
          FROM suppliers 
          WHERE shop_id = ? 
          LIMIT 1
        `).bind(cleanShopId).first();
      } catch (err) {
        console.error('[D1 Supplier Query Error]:', err);
      }
    }

    if (!supplier) {
      supplier = await getSupplierById(cleanShopId, db);
    }

    if (!supplier) {
      return new Response(JSON.stringify({ success: false, error: 'Supplier stall not found in directory.' }), {
        status: 404,
        headers: JSON_HEADERS
      });
    }

    const supplierName = supplier.clean_name || supplier.name || 'Listed Supplier';
    const internalPhone = supplier.unmasked_direct_phone || '';

    const inquiryId = crypto.randomUUID();
    const messageNotes = [
      cleanNotes || `Direct factory price & MOQ quote request for ${supplierName} (Booth ${supplier.booth_no || 'N/A'}).`,
      supplier.booth_no ? `[Target Booth: ${supplier.booth_no}]` : null,
      `[Service: Factory Quote Request]`,
      cleanPhone ? `[Contact Phone/WA: ${cleanPhone}]` : null,
      `[IP: ${clientIp}]`
    ].filter(Boolean).join('\n');

    if (db) {
      try {
        await db.prepare(`
          INSERT INTO inquiries (id, shop_id, buyer_name, buyer_email, buyer_country, message, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, 'PENDING', CURRENT_TIMESTAMP)
        `).bind(inquiryId, cleanShopId, cleanName, cleanEmail, cleanCountry, messageNotes).run();
      } catch (logErr) {
        console.error('[D1 Lead Insert Error]:', logErr);
      }
    }

    dispatchInquiryAlerts({
      inquiryId,
      buyerName: cleanName,
      buyerEmail: cleanEmail,
      buyerPhone: cleanPhone || undefined,
      buyerCountry: cleanCountry,
      targetBooth: supplier.booth_no || undefined,
      serviceType: 'Factory Quote Request (Direct Desk)',
      message: `${cleanNotes ? `Buyer notes: ${cleanNotes}\n` : ''}Requested quote for ${supplierName} (Booth ${supplier.booth_no || 'N/A'}, District ${supplier.district || '1'}). Internal supplier ref: ${internalPhone}`,
      shopId: cleanShopId
    }, locals).catch(err => console.error('[Quote Notification Dispatch Error]:', err));

    return new Response(JSON.stringify({
      success: true,
      inquiry_id: inquiryId,
      shop_id: cleanShopId,
      supplier_name: supplierName,
      contact_person: supplier.contact_person || 'Factory Manager',
      booth_no: supplier.booth_no || '',
      district: supplier.district || '',
      status: 'QUOTE_REQUESTED'
    }), {
      status: 200,
      headers: JSON_HEADERS
    });

  } catch (err: any) {
    console.error('[API Error] /api/unlock-contact failed:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'An unexpected error occurred while submitting your quote request.'
    }), {
      status: 500,
      headers: JSON_HEADERS
    });
  }
};
