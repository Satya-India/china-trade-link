import type { APIRoute } from 'astro';
import { getSuppliersPaginated } from '../../lib/data';
import { cleanSingleLine, enforcePublicRateLimit } from '../../lib/rate-limit';

const ALLOWED_DISTRICTS = new Set(['', '1', '2', '3', '4', '5', '6', '7', '60']);

export const GET: APIRoute = async ({ request, locals, url }) => {
  const rl = await enforcePublicRateLimit(request, locals, {
    scope: 'public_suppliers',
    windowSeconds: 60,
    maxRequests: 60
  });
  if (!rl.allowed) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please slow down.' }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': String(rl.retryAfter),
        'Cache-Control': 'no-store'
      }
    });
  }

  const q = cleanSingleLine(url.searchParams.get('q') || '', 120);
  const rawDistrict = cleanSingleLine(url.searchParams.get('district') || '', 10);
  if (!ALLOWED_DISTRICTS.has(rawDistrict)) {
    return new Response(JSON.stringify({ error: 'Invalid district filter.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    });
  }

  const parsedLimit = parseInt(url.searchParams.get('limit') || '50', 10);
  const limit = Number.isFinite(parsedLimit) ? Math.min(100, Math.max(1, parsedLimit)) : 50;
  const parsedPage = parseInt(url.searchParams.get('page') || '1', 10);
  const page = Number.isFinite(parsedPage) ? Math.min(5000, Math.max(1, parsedPage)) : 1;
  const isFactory = url.searchParams.get('factory') === 'true';

  const { suppliers, total } = await getSuppliersPaginated({
    district: rawDistrict,
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
    sample_products: s.sample_products
  }));

  return new Response(JSON.stringify({
    total,
    returned: items.length,
    data: items
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400',
      'X-Content-Type-Options': 'nosniff'
    }
  });
};
