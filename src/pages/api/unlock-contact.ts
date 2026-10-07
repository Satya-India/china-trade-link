import type { APIRoute } from 'astro';
import { getD1Database, getSupplierById } from '../../lib/data';
import { dispatchInquiryAlerts } from '../../lib/notifications';

const DAILY_UNLOCK_LIMIT = 5;

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
      buyer_phone
    } = body || {};

    if (!shop_id || typeof shop_id !== 'string' || shop_id.trim().length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'Missing stall identifier.' }), {
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

    const clientIp = request.headers.get('cf-connecting-ip') || 
                     request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     '127.0.0.1';

    const db = await getD1Database();
    let recentCount = 0;

    // Rate Limiting Enforcement (D1 Database check over past 24 hours)
    if (db) {
      try {
        const countRow = await db.prepare(`
          SELECT COUNT(*) as count FROM inquiries
          WHERE (LOWER(buyer_email) = ? OR message LIKE ?)
            AND status = 'UNLOCKED'
            AND created_at >= datetime('now', '-24 hours')
        `).bind(cleanEmail, `%[IP: ${clientIp}]%`).first();

        recentCount = Number(countRow?.count || 0);

        if (recentCount >= DAILY_UNLOCK_LIMIT) {
          return new Response(JSON.stringify({
            success: false,
            error: `Daily limit reached (${DAILY_UNLOCK_LIMIT}/${DAILY_UNLOCK_LIMIT}). To prevent automated harvesting, individual visitor accounts are limited to ${DAILY_UNLOCK_LIMIT} contact unlocks per 24 hours. To access bulk verified contacts, check our Category Excel Packs or contact our concierge desk.`,
            limitReached: true,
            reveals_left: 0
          }), {
            status: 429,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      } catch (rateErr) {
        console.error('[D1 RateLimit Check Error]:', rateErr);
      }
    }

    // Retrieve unmasked supplier contact details from D1
    let supplier: any = null;
    if (db) {
      try {
        supplier = await db.prepare(`
          SELECT shop_id, name, clean_name, contact_person, booth_no, district, floor, gate,
                 unmasked_direct_phone, international_mobile, all_wechats
          FROM suppliers 
          WHERE shop_id = ? 
          LIMIT 1
        `).bind(cleanShopId).first();
      } catch (err) {
        console.error('[D1 Supplier Query Error]:', err);
      }
    }

    // Fallback to local data helper if DB query yielded null
    if (!supplier) {
      supplier = await getSupplierById(cleanShopId, db);
    }

    if (!supplier) {
      return new Response(JSON.stringify({ success: false, error: 'Supplier stall not found in directory.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const supplierName = supplier.clean_name || supplier.name || 'Verified Stall';
    const unmaskedPhone = supplier.unmasked_direct_phone || '';
    const intlPhone = supplier.international_mobile || (unmaskedPhone.startsWith('+86') ? unmaskedPhone : `+86-${unmaskedPhone}`);
    const wechat = supplier.all_wechats || unmaskedPhone;

    // Record the unlock lead event in D1
    const unlockId = crypto.randomUUID();
    const messageNotes = [
      `[Contact Unlock] Direct line revealed for Booth ${supplier.booth_no || 'N/A'} (${supplierName}).`,
      `[IP: ${clientIp}]`,
      cleanPhone ? `[Buyer Phone: ${cleanPhone}]` : null
    ].filter(Boolean).join('\n');

    if (db) {
      try {
        await db.prepare(`
          INSERT INTO inquiries (id, shop_id, buyer_name, buyer_email, buyer_country, message, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, 'UNLOCKED', CURRENT_TIMESTAMP)
        `).bind(unlockId, cleanShopId, cleanName, cleanEmail, cleanCountry, messageNotes).run();
      } catch (logErr) {
        console.error('[D1 Lead Insert Error]:', logErr);
      }
    }

    // Dispatch real-time lead notification (Telegram / Email / Webhook)
    dispatchInquiryAlerts({
      inquiryId: unlockId,
      buyerName: cleanName,
      buyerEmail: cleanEmail,
      buyerPhone: cleanPhone || undefined,
      buyerCountry: cleanCountry,
      targetBooth: supplier.booth_no || undefined,
      serviceType: 'Contact Unlock (Direct Mobile & WeChat)',
      message: `Buyer unlocked direct stall contact for ${supplierName} (Booth ${supplier.booth_no || 'N/A'}, District ${supplier.district || '1'}). Unmasked line: ${unmaskedPhone}`,
      shopId: cleanShopId
    }, locals).catch(err => console.error('[Unlock Notification Dispatch Error]:', err));

    const revealsLeft = Math.max(0, DAILY_UNLOCK_LIMIT - (recentCount + 1));

    return new Response(JSON.stringify({
      success: true,
      shop_id: cleanShopId,
      supplier_name: supplierName,
      contact_person: supplier.contact_person || 'Stall Manager',
      booth_no: supplier.booth_no || '',
      district: supplier.district || '',
      phone: unmaskedPhone,
      intl_phone: intlPhone,
      wechat: wechat,
      reveals_left: revealsLeft
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
      error: 'An unexpected error occurred while revealing contact details.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
