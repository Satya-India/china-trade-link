import type { APIRoute } from 'astro';
import { getD1Database } from '../../../lib/data';
import { verifyAdminAuth } from '../../../lib/admin-auth';

function parseMessageMeta(message: string | null) {
  if (!message) return { cleanText: '', targetBooth: '', serviceType: '', phone: '' };

  let cleanText = message;
  let targetBooth = '';
  let serviceType = '';
  let phone = '';

  const boothMatch = cleanText.match(/\[Target Booth:\s*([^\]]+)\]/);
  if (boothMatch) {
    targetBooth = boothMatch[1].trim();
    cleanText = cleanText.replace(boothMatch[0], '').trim();
  }

  const serviceMatch = cleanText.match(/\[Service:\s*([^\]]+)\]/);
  if (serviceMatch) {
    serviceType = serviceMatch[1].trim();
    cleanText = cleanText.replace(serviceMatch[0], '').trim();
  }

  const phoneMatch = cleanText.match(/\[Contact Phone\/WA:\s*([^\]]+)\]/);
  if (phoneMatch) {
    phone = phoneMatch[1].trim();
    cleanText = cleanText.replace(phoneMatch[0], '').trim();
  }

  return {
    cleanText,
    targetBooth,
    serviceType,
    phone
  };
}

export const GET: APIRoute = async ({ request, url }) => {
  const isAuthorized = await verifyAdminAuth(request, url);
  if (!isAuthorized) {
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized: Invalid Admin Secret' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const db = await getD1Database();
    if (!db) {
      return new Response(JSON.stringify({ success: false, error: 'Database connection unavailable' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { results } = await db.prepare(`
      SELECT 
        i.id,
        i.shop_id,
        i.buyer_name,
        i.buyer_email,
        i.buyer_country,
        i.message,
        i.status,
        i.created_at,
        s.name as supplier_name,
        s.clean_name as supplier_clean_name,
        s.booth_no as supplier_booth_no,
        s.district as supplier_district,
        s.floor as supplier_floor,
        s.unmasked_direct_phone as supplier_phone,
        s.international_mobile as supplier_mobile,
        s.contact_person as supplier_contact
      FROM inquiries i
      LEFT JOIN suppliers s ON i.shop_id = s.shop_id
      ORDER BY i.created_at DESC
    `).all();

    const formattedLeads = (results || []).map((row: any) => {
      const meta = parseMessageMeta(row.message);
      return {
        id: row.id,
        shopId: row.shop_id,
        buyerName: row.buyer_name,
        buyerEmail: row.buyer_email,
        buyerPhone: meta.phone,
        buyerCountry: row.buyer_country || 'Global',
        message: meta.cleanText,
        rawMessage: row.message,
        targetBooth: meta.targetBooth || row.supplier_booth_no || '',
        serviceType: meta.serviceType || 'General Sourcing',
        status: row.status || 'PENDING',
        createdAt: row.created_at,
        supplierName: row.supplier_clean_name || row.supplier_name || '',
        supplierDistrict: row.supplier_district || '',
        supplierFloor: row.supplier_floor || '',
        supplierPhone: row.supplier_phone || row.supplier_mobile || '',
        supplierContact: row.supplier_contact || ''
      };
    });

    let orders: any[] = [];
    try {
      const ordersRes = await db.prepare(`
        SELECT 
          id,
          paypal_order_id,
          payer_name,
          payer_email,
          amount,
          currency,
          item_id,
          item_title,
          status,
          created_at
        FROM orders
        ORDER BY created_at DESC
      `).all();
      orders = ordersRes.results || [];
    } catch (orderErr) {
      console.warn('[Admin API] Could not load orders:', orderErr);
    }

    return new Response(JSON.stringify({
      success: true,
      count: formattedLeads.length,
      leads: formattedLeads,
      ordersCount: orders.length,
      orders: orders
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate'
      }
    });

  } catch (err: any) {
    console.error('[API Error] /api/admin/leads GET failed:', err);
    return new Response(JSON.stringify({ success: false, error: err.message || 'Failed to fetch leads' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const PATCH: APIRoute = async ({ request, url }) => {
  const isAuthorized = await verifyAdminAuth(request, url);
  if (!isAuthorized) {
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized: Invalid Admin Secret' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { id, status } = body || {};

    if (!id || !status) {
      return new Response(JSON.stringify({ success: false, error: 'Missing required fields: id, status' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const validStatuses = ['PENDING', 'CONTACTED', 'QUOTED', 'COMPLETED', 'ARCHIVED'];
    const cleanStatus = String(status).toUpperCase().trim();
    if (!validStatuses.includes(cleanStatus)) {
      return new Response(JSON.stringify({ success: false, error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const db = await getD1Database();
    if (!db) {
      return new Response(JSON.stringify({ success: false, error: 'Database connection unavailable' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await db.prepare(`
      UPDATE inquiries
      SET status = ?
      WHERE id = ?
    `).bind(cleanStatus, id).run();

    return new Response(JSON.stringify({
      success: true,
      message: `Lead ${id} status updated to ${cleanStatus}`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[API Error] /api/admin/leads PATCH failed:', err);
    return new Response(JSON.stringify({ success: false, error: err.message || 'Failed to update lead' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
