import type { APIRoute } from 'astro';
import { COUNTRIES } from '../../lib/countries';
import { NON_DEFAULT_LOCALES } from '../../lib/i18n';

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];

  const urls: { loc: string; priority: string; changefreq: string }[] = [];

  for (const loc of NON_DEFAULT_LOCALES) {
    // 5 Core Localized Pages per language (7 × 5 = 35 URLs)
    urls.push(
      {
        loc: `https://sinotradelink.com/${loc}`,
        priority: '0.95',
        changefreq: 'daily',
      },
      {
        loc: `https://sinotradelink.com/${loc}/directory`,
        priority: '0.90',
        changefreq: 'daily',
      },
      {
        loc: `https://sinotradelink.com/${loc}/category-packs`,
        priority: '0.90',
        changefreq: 'weekly',
      },
      {
        loc: `https://sinotradelink.com/${loc}/concierge`,
        priority: '0.90',
        changefreq: 'weekly',
      },
      {
        loc: `https://sinotradelink.com/${loc}/countries`,
        priority: '0.90',
        changefreq: 'weekly',
      }
    );

    // All 100 Localized Country Hubs per language (7 × 100 = 700 URLs)
    for (const c of COUNTRIES) {
      urls.push({
        loc: `https://sinotradelink.com/${loc}/country/${c.slug}`,
        priority: '0.85',
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
