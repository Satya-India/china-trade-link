import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = [
    { loc: 'https://sinotradelink.com/', priority: '1.0', changefreq: 'daily' },
    { loc: 'https://sinotradelink.com/directory', priority: '0.9', changefreq: 'daily' },
    { loc: 'https://sinotradelink.com/market-map', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/category-packs', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/concierge', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/sourcing-guide', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/for-suppliers', priority: '0.8', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/directory?district=1', priority: '0.85', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/directory?district=2', priority: '0.85', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/directory?district=3', priority: '0.85', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/directory?district=4', priority: '0.85', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/directory?district=5', priority: '0.85', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/directory?district=6', priority: '0.85', changefreq: 'weekly' },
    { loc: 'https://sinotradelink.com/directory?district=7', priority: '0.85', changefreq: 'weekly' },
  ];

  const xmlEntries = staticUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800'
    }
  });
};
