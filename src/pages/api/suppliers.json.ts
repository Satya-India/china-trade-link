import type { APIRoute } from 'astro';
import { getAllSuppliers } from '../../lib/data';

export const GET: APIRoute = async ({ request, url }) => {
  const q = (url.searchParams.get('q') || '').trim().toLowerCase();
  const district = url.searchParams.get('district') || '';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 200);

  const all = getAllSuppliers();

  let results = all;

  if (district) {
    results = results.filter(s => s.district === district);
  }

  if (q) {
    results = results.filter(s => {
      const text = `${s.name} ${s.clean_name} ${s.company_name} ${s.booth_no} ${s.chinese_official_category} ${s.sample_products}`.toLowerCase();
      return text.includes(q);
    });
  }

  const items = results.slice(0, limit).map(s => ({
    id: s.shop_id,
    name: s.clean_name || s.name,
    district: s.district,
    floor: s.floor,
    gate: s.gate,
    booth_no: s.booth_no,
    is_factory: s.is_direct_factory === 'Yes',
    sample_products: s.sample_products,
    masked_phone: s.unmasked_direct_phone ? `+86-${s.unmasked_direct_phone.slice(0, 3)}-***-${s.unmasked_direct_phone.slice(-4)}` : ''
  }));

  return new Response(JSON.stringify({
    total: results.length,
    returned: items.length,
    data: items
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60'
    }
  });
};
