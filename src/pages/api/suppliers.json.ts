import type { APIRoute } from 'astro';
import { getSuppliersPaginated } from '../../lib/data';

export const GET: APIRoute = async ({ locals, url }) => {
  const q = (url.searchParams.get('q') || '').trim();
  const district = url.searchParams.get('district') || '';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 200);
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
  const isFactory = url.searchParams.get('factory') === 'true';
  const { suppliers, total } = await getSuppliersPaginated({
    district,
    query: q,
    isFactory,
    page,
    pageSize: limit
  });

  const items = suppliers.map(s => ({
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
    total,
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
