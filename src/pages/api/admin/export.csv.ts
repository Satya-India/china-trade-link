import type { APIRoute } from 'astro';
import { getD1Database } from '../../../lib/data';
import { verifyAdminAuth } from '../../../lib/admin-auth';

function escapeCsvField(val: any): string {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

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
    return new Response('Unauthorized: Invalid Admin Secret. Pass ?key=YOUR_SECRET or Cookie.', {
      status: 401,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }

  try {
    const db = await getD1Database();
    if (!db) {
      return new Response('Database connection unavailable', {
        status: 500,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
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

    const rows = results || [];

    const headers = [
      'Inquiry ID',
      'Date (UTC)',
      'Status',
      'Buyer Name',
      'Buyer Email',
      'Buyer Phone/WhatsApp',
      'Buyer Country',
      'Service Type',
      'Target Shop ID',
      'Target Booth No',
      'District',
      'Supplier Name',
      'Supplier Direct Mobile',
      'Supplier Contact Person',
      'Inquiry Details / RFQ'
    ];

    const csvLines = [headers.map(escapeCsvField).join(',')];

    for (const row of rows) {
      const meta = parseMessageMeta(row.message);
      const line = [
        row.id,
        row.created_at,
        row.status || 'PENDING',
        row.buyer_name,
        row.buyer_email,
        meta.phone || '',
        row.buyer_country || 'Global',
        meta.serviceType || 'General Sourcing',
        row.shop_id || '',
        meta.targetBooth || row.supplier_booth_no || '',
        row.supplier_district || '',
        row.supplier_clean_name || row.supplier_name || '',
        row.supplier_phone || row.supplier_mobile || '',
        row.supplier_contact || '',
        meta.cleanText || row.message || ''
      ].map(escapeCsvField).join(',');

      csvLines.push(line);
    }

    // Add UTF-8 BOM so Excel opens non-ASCII and Chinese characters cleanly
    const csvContent = '\uFEFF' + csvLines.join('\r\n');
    const dateStr = new Date().toISOString().split('T')[0];

    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="sinotradelink-leads-${dateStr}.csv"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache'
      }
    });

  } catch (err: any) {
    console.error('[API Error] /api/admin/export.csv failed:', err);
    return new Response(`Export error: ${err.message}`, {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
};
