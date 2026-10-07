import type { APIRoute } from 'astro';
import { getD1Database } from '../../../lib/data';
import { dispatchInquiryAlerts } from '../../../lib/notifications';

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
      orderId,
      payer,
      amount,
      currency = 'USD',
      itemId,
      itemTitle
    } = body || {};

    if (!orderId || typeof orderId !== 'string') {
      return new Response(JSON.stringify({ success: false, error: 'Missing PayPal order identifier.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const payerName = payer?.name ? `${payer.name.given_name || ''} ${payer.name.surname || ''}`.trim() : (payer?.email_address || 'PayPal Customer');
    const payerEmail = payer?.email_address || '';
    const cleanAmount = String(amount || '29.00');
    const cleanItemId = String(itemId || 'generic_pack');
    const cleanItemTitle = String(itemTitle || 'Wholesale Directory Pack');

    const internalOrderId = crypto.randomUUID();

    const db = await getD1Database();
    if (db) {
      try {
        await db.prepare(`
          INSERT INTO orders (id, paypal_order_id, payer_name, payer_email, amount, currency, item_id, item_title, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', CURRENT_TIMESTAMP)
        `).bind(
          internalOrderId,
          orderId,
          payerName,
          payerEmail,
          cleanAmount,
          currency,
          cleanItemId,
          cleanItemTitle
        ).run();
      } catch (dbErr) {
        console.error('[D1 Order Save Error]:', dbErr);
      }
    }

    // Trigger instant Telegram alert directly to the site owner
    dispatchInquiryAlerts({
      inquiryId: internalOrderId,
      buyerName: payerName,
      buyerEmail: payerEmail,
      buyerCountry: 'PayPal Verified',
      serviceType: 'Paid PayPal Order',
      message: `💰 PAID ORDER: $${cleanAmount} ${currency}\nProduct: ${cleanItemTitle}\nPayPal Transaction ID: ${orderId}`
    }, locals).catch(err => console.error('[Order Notification Error]:', err));

    return new Response(JSON.stringify({
      success: true,
      orderId: internalOrderId,
      paypalOrderId: orderId,
      downloadUrl: `/api/download-pack?order_id=${encodeURIComponent(internalOrderId)}&item_id=${encodeURIComponent(cleanItemId)}`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[API Error] /api/payment/complete failed:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'An unexpected error occurred while completing your transaction.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
