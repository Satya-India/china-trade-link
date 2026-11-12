import type { APIRoute } from 'astro';
import { getD1Database } from '../../lib/data';
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
      message,
      target_booth,
      service_type,
      phone,
      quick_whatsapp,
      alibaba_url,
      order_type
    } = body || {};

    const isQuickWhatsApp = Boolean(quick_whatsapp);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let cleanBuyerName = typeof buyer_name === 'string' ? buyer_name.trim() : '';
    let cleanBuyerEmail = typeof buyer_email === 'string' ? buyer_email.trim() : '';

    if (isQuickWhatsApp) {
      if (cleanBuyerName.length < 2) {
        cleanBuyerName = 'WhatsApp Direct Buyer';
      }
      if (!emailRegex.test(cleanBuyerEmail)) {
        cleanBuyerEmail = 'whatsapp-lead@sinotradelink.com';
      }
    } else {
      // Standard Inquiry Form Validation
      if (!cleanBuyerName || cleanBuyerName.length < 2) {
        return new Response(JSON.stringify({ success: false, error: 'Please enter a valid full name.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      if (!cleanBuyerEmail || !emailRegex.test(cleanBuyerEmail)) {
        return new Response(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    const cleanMessage = (message && typeof message === 'string') ? message.trim() : '';
    const cleanAlibabaUrl = (alibaba_url && typeof alibaba_url === 'string') ? alibaba_url.trim() : '';
    const cleanOrderType = (order_type && typeof order_type === 'string') ? order_type.trim() : '';
    const details = [
      cleanMessage,
      cleanAlibabaUrl ? `[Alibaba Link: ${cleanAlibabaUrl}]` : null,
      cleanOrderType ? `[Order Mode: ${cleanOrderType}]` : null,
      target_booth ? `[Target Booth: ${target_booth}]` : null,
      service_type ? `[Service: ${service_type}]` : null,
      phone ? `[Contact Phone/WA: ${phone}]` : null
    ].filter(Boolean).join('\n');

    if (details.length < 5) {
      return new Response(JSON.stringify({ success: false, error: 'Please provide an Alibaba link, product query, or specification details.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const id = crypto.randomUUID();
    const cleanShopId = String(shop_id || (cleanAlibabaUrl ? 'ALIBABA_DROPSHIP' : 'GENERAL')).trim();
    const cleanCountry = String(buyer_country || 'Global').trim();

    const db = await getD1Database();
    if (db) {
      try {
        await db.prepare(`
          INSERT INTO inquiries (id, shop_id, buyer_name, buyer_email, buyer_country, message, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, 'PENDING', CURRENT_TIMESTAMP)
        `).bind(id, cleanShopId, cleanBuyerName, cleanBuyerEmail, cleanCountry, details).run();
      } catch (dbErr) {
        console.error('[D1 Error] Failed to insert inquiry:', dbErr);
        // Continue to return success so buyer experience is not broken
      }
    } else {
      console.warn('[D1 Warning] DB binding unavailable, inquiry logged in memory/console:', { id, cleanShopId, buyer_email: cleanBuyerEmail });
    }

    // Trigger instant notification alerts (Telegram / Email / Webhook) safely under Cloudflare waitUntil
    const alertPromise = dispatchInquiryAlerts({
      inquiryId: id,
      buyerName: cleanBuyerName,
      buyerEmail: cleanBuyerEmail,
      buyerPhone: phone ? String(phone).trim() : undefined,
      buyerCountry: cleanCountry,
      targetBooth: target_booth ? String(target_booth).trim() : undefined,
      serviceType: service_type ? String(service_type).trim() : (isQuickWhatsApp ? 'Alibaba Link / WhatsApp Quote' : undefined),
      message: cleanMessage || details,
      shopId: cleanShopId
    }, locals).catch(err => console.error('[Notification Dispatch Error]:', err));

    try {
      const waitUntil = (locals as any)?.runtime?.ctx?.waitUntil || (locals as any)?.cfContext?.waitUntil;
      if (typeof waitUntil === 'function') {
        waitUntil(alertPromise);
      }
    } catch {
      // Non-workerd runtime; promise runs normally in background
    }

    return new Response(JSON.stringify({
      success: true,
      inquiryId: id,
      message: 'Inquiry received. Our sourcing team and stall manager will follow up shortly.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (err: any) {
    console.error('[API Error] /api/inquiry failed:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'An unexpected error occurred while processing your inquiry.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
