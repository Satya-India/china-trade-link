import type { APIRoute } from 'astro';
import { getStats } from '../lib/data';

export const GET: APIRoute = async () => {
  const stats = await getStats();
  const total = stats.totalSuppliers || 27706;
  const pageSize = 5000;
  const pageCount = Math.ceil(total / pageSize);

  const supplierSitemaps: string[] = [];
  for (let i = 1; i <= pageCount; i++) {
    supplierSitemaps.push(`  <sitemap>
    <loc>https://sinotradelink.com/sitemaps/suppliers-${i}.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://sinotradelink.com/sitemaps/pages.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
${supplierSitemaps.join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800'
    }
  });
};
