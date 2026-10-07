import type { APIRoute } from 'astro';
import { getD1Database, getAllSuppliers } from '../../lib/data';

const DISTRICT_MAP: Record<string, string> = {
  'toys-plush-jewelry': '1',
  'hardware-kitchen': '2',
  'stationery-sports': '3',
  'footwear-socks-daily': '4',
  'home-textiles-auto': '5',
  'garments-apparel': '6'
};

export const GET: APIRoute = async ({ url }) => {
  const orderId = url.searchParams.get('order_id') || '';
  const itemId = url.searchParams.get('item_id') || '';

  if (!orderId) {
    return new Response('Invalid or missing order reference.', { status: 400 });
  }

  const db = await getD1Database();
  let order: any = null;

  if (db) {
    try {
      order = await db.prepare("SELECT * FROM orders WHERE id = ? AND status = 'COMPLETED' LIMIT 1").bind(orderId).first();
    } catch (err) {
      console.error('[D1 Order Query Error]:', err);
    }
  }

  // Fallback if DB check is unavailable (or mock dev order)
  if (!order && !orderId.startsWith('mock_')) {
    // If not found in DB
    return new Response('Order not found or payment incomplete. Please check your confirmation email or contact support via WhatsApp.', { status: 404 });
  }

  const payerName = order?.payer_name || 'Verified Customer';
  const payerEmail = order?.payer_email || 'customer@sinotradelink.com';
  const targetDistrict = DISTRICT_MAP[itemId] || '';

  let suppliers: any[] = [];

  if (db) {
    try {
      if (targetDistrict) {
        const { results } = await db.prepare("SELECT * FROM suppliers WHERE district = ? ORDER BY shop_id ASC LIMIT 3000").bind(targetDistrict).all();
        suppliers = results || [];
      } else {
        const { results } = await db.prepare("SELECT * FROM suppliers ORDER BY shop_id ASC LIMIT 5000").all();
        suppliers = results || [];
      }
    } catch (err) {
      console.error('[D1 Suppliers Query Error]:', err);
    }
  }

  if (suppliers.length === 0) {
    const all = getAllSuppliers();
    suppliers = targetDistrict ? all.filter(s => s.district === targetDistrict) : all.slice(0, 3000);
  }

  const timestamp = new Date().toISOString().split('T')[0];
  const watermark = `# LICENSE: Single-User Commercial Sourcing License issued to ${payerName} <${payerEmail}> | Date: ${timestamp} | SinoTradeLink\r\n`;

  const headers = [
    'Stall ID',
    'Company / Stall Name',
    'District',
    'Floor',
    'Gate',
    'Street',
    'Booth Number',
    'Contact Person',
    'Direct Phone Line',
    'International Mobile',
    'WeChat ID',
    'Direct Factory Status',
    'Years in Futian Market',
    'Market Credit Score',
    'Sample Products Catalog',
    'Official Category'
  ];

  const escapeCSV = (val: any) => `"${String(val || '').replace(/"/g, '""').replace(/\r?\n/g, ' ')}"`;

  const rows = suppliers.map(s => [
    escapeCSV(s.shop_id),
    escapeCSV(s.clean_name || s.name),
    escapeCSV(s.district),
    escapeCSV(s.floor),
    escapeCSV(s.gate),
    escapeCSV(s.street),
    escapeCSV(s.booth_no),
    escapeCSV(s.contact_person || 'Stall Manager'),
    escapeCSV(s.unmasked_direct_phone),
    escapeCSV(s.international_mobile),
    escapeCSV(s.all_wechats || s.unmasked_direct_phone),
    escapeCSV(s.is_direct_factory),
    escapeCSV(s.years_in_futian),
    escapeCSV(s.market_credit_score),
    escapeCSV(s.sample_products),
    escapeCSV(s.chinese_official_category)
  ].join(','));

  const csvContent = '\uFEFF' + watermark + headers.join(',') + '\r\n' + rows.join('\r\n');
  const filename = `SinoTradeLink_${itemId || 'Wholesale'}_Verified_Directory_${timestamp}.csv`;

  return new Response(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'no-store, private'
    }
  });
};
