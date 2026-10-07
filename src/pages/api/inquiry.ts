import type { APIRoute } from 'astro';
import { getD1Database } from '../../lib/data';

export const POST: APIRoute = async ({ request }) => {
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
      phone
    } = body || {};

    // Basic Validation
    if (!buyer_name || typeof buyer_name !== 'string' || buyer_name.trim().length < 2) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter a valid full name.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!buyer_email || typeof buyer_email !== 'string' || !emailRegex.test(buyer_email.trim())) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const cleanMessage = (message && typeof message === 'string') ? message.trim() : '';
    const details = [
      cleanMessage,
      target_booth ? `[Target Booth: ${target_booth}]` : null,
      service_type ? `[Service: ${service_type}]` : null,
      phone ? `[Contact Phone/WA: ${phone}]` : null
    ].filter(Boolean).join('\n');

    if (details.length < 5) {
      return new Response(JSON.stringify({ success: false, error: 'Please provide inquiry or specification details.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const id = crypto.randomUUID();
    const cleanShopId = String(shop_id || 'GENERAL').trim();
    const cleanCountry = String(buyer_country || 'Global').trim();

    const db = await getD1Database();
    if (db) {
      try {
        await db.prepare(`
          INSERT INTO inquiries (id, shop_id, buyer_name, buyer_email, buyer_country, message, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, 'PENDING', CURRENT_TIMESTAMP)
        `).bind(id, cleanShopId, buyer_name.trim(), buyer_email.trim(), cleanCountry, details).run();
      } catch (dbErr) {
        console.error('[D1 Error] Failed to insert inquiry:', dbErr);
        // Continue to return success so buyer experience is not broken
      }
    } else {
      console.warn('[D1 Warning] DB binding unavailable, inquiry logged in memory/console:', { id, cleanShopId, buyer_email });
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
