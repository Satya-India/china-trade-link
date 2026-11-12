import type { APIRoute } from 'astro';
import { getD1Database, getSupplierById } from '../../lib/data';
import { dispatchInquiryAlerts } from '../../lib/notifications';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ success: false, error: 'Invalid JSON request body.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const {
      shop_id,
      buyer_name,
      buyer_email,
      buyer_country,
      buyer_phone,
      message
    } = body || {};

    if (!shop_id || typeof shop_id !== 'string' || shop_id.trim().length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'Missing supplier identifier.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!buyer_name || typeof buyer_name !== 'string' || buyer_name.trim().length < 2) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter your full name.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!buyer_email || typeof buyer_email !== 'string' || !emailRegex.test(buyer_email.trim())) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter a valid business email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const cleanShopId = String(shop_id).trim();
    const cleanName = buyer_name.trim();
    const cleanEmail = buyer_email.trim().toLowerCase();
    const cleanCountry = (buyer_country && typeof buyer_country === 'string') ? buyer_country.trim() : 'Global';
    const cleanPhone = (buyer_phone && typeof buyer_phone === 'string') ? buyer_phone.trim() : '';
    const cleanNotes = (message && typeof message === 'string') ? message.trim() : '';

    const clientIp = request.headers.get('cf-connecting-ip') ||
                     request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                     '127.0.0.1';

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
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const supplierName = supplier.clean_name || supplier.name || 'Verified Supplier';
    const internalPhone = supplier.unmasked_direct_phone || '';

    // Record the quote inquiry event in D1
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

    // Dispatch internal admin notification (Telegram / Email / Webhook)
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
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, private'
      }
    });

  } catch (err: any) {
    console.error('[API Error] /api/unlock-contact failed:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'An unexpected error occurred while submitting your quote request.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
