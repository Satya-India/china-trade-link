import type { APIRoute } from 'astro';
import { COUNTRIES } from '../../lib/countries';
import { CATEGORY_HUBS } from '../../lib/categories';

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];

  const urls: { loc: string; priority: string; changefreq: string }[] = [
    {
      loc: 'https://sinotradelink.com/countries',
      priority: '0.9',
      changefreq: 'weekly',
    },
  ];

  // All 100 Country Hub URLs (/country/[slug])
  for (const c of COUNTRIES) {
    urls.push({
      loc: `https://sinotradelink.com/country/${c.slug}`,
      priority: '0.85',
      changefreq: 'weekly',
    });
  }

  // All 2,400 Country-Category Corridor URLs (/country/[country]-[category])
  for (const c of COUNTRIES) {
    for (const cat of CATEGORY_HUBS) {
      urls.push({
        loc: `https://sinotradelink.com/country/${c.slug}-${cat.slug}`,
        priority: '0.75',
        changefreq: 'weekly',
      });
    }
  }

  const xmlEntries = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
};
