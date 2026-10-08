import type { APIRoute } from 'astro';
import { getD1Database, getAllSuppliers } from '../../lib/data';

export const GET: APIRoute = async ({ params }) => {
  const pageParam = params.page;
  const pageNum = parseInt(pageParam || '1', 10);

  if (isNaN(pageNum) || pageNum < 1) {
    return new Response('Invalid sitemap page', { status: 404 });
  }

  const pageSize = 5000;
  const offset = (pageNum - 1) * pageSize;
  const today = new Date().toISOString().split('T')[0];

  let shopIds: string[] = [];

  const db = await getD1Database();
  if (db) {
    try {
      const { results } = await db.prepare("SELECT shop_id FROM suppliers ORDER BY shop_id ASC LIMIT ? OFFSET ?").bind(pageSize, offset).all();
      if (results && results.length > 0) {
        shopIds = results.map((r: any) => String(r.shop_id));
      }
    } catch (err) {
      console.error('[D1 Error] sitemap suppliers query failed:', err);
    }
  }

  if (shopIds.length === 0) {
    const all = getAllSuppliers();
    shopIds = all.slice(offset, offset + pageSize).map(s => String(s.shop_id));
  }

  if (shopIds.length === 0 && pageNum > 1) {
    return new Response('Sitemap page not found', { status: 404 });
  }

  const urls = shopIds.map(id => `  <url>
    <loc>https://sinotradelink.com/supplier/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800'
    }
  });
};
