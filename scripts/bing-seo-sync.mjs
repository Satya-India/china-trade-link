#!/usr/bin/env node
/**
 * Bing Webmaster API + IndexNow Bulk SEO Indexing Script for Sino Trade Link (sinotradelink.com)
 *
 * Actions performed:
 * 1. Submits all XML sitemaps (sitemap.xml, pages.xml, suppliers-1.xml .. suppliers-6.xml) via Bing Webmaster API (SubmitFeed).
 * 2. Verifies registered feeds via GetFeeds.
 * 3. Checks GetUrlSubmissionQuota and submits priority URLs via Bing Webmaster API (SubmitUrlBatch).
 * 4. Extracts all 27,706+ URLs from live sitemaps and pushes them in 9,500-URL batches via Bing IndexNow (www.bing.com/indexnow).
 */

const SITE_URL = 'https://sinotradelink.com/';
const HOST = 'sinotradelink.com';
const API_KEY = process.env.BING_API_KEY || '0c309bcdd14f41388e4c7cd825b7f437';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

const SITEMAP_FEEDS = [
  'https://sinotradelink.com/sitemap.xml',
  'https://sinotradelink.com/sitemaps/pages.xml',
  'https://sinotradelink.com/sitemaps/suppliers-1.xml',
  'https://sinotradelink.com/sitemaps/suppliers-2.xml',
  'https://sinotradelink.com/sitemaps/suppliers-3.xml',
  'https://sinotradelink.com/sitemaps/suppliers-4.xml',
  'https://sinotradelink.com/sitemaps/suppliers-5.xml',
  'https://sinotradelink.com/sitemaps/suppliers-6.xml',
];

async function bingApiPost(method, bodyObj) {
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${method}?apikey=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(bodyObj),
  });
  const text = await res.text();
  return { status: res.status, body: text };
}

async function bingApiGet(method, params = {}) {
  const qs = new URLSearchParams({ ...params, apikey: API_KEY }).toString();
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${method}?${qs}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function extractUrlsFromSitemap(sitemapUrl) {
  const res = await fetch(sitemapUrl);
  if (!res.ok) {
    console.warn(`  [WARN] Failed to fetch ${sitemapUrl}: HTTP ${res.status}`);
    return [];
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map(m => m[1].trim());
}

async function main() {
  console.log('================================================================');
  console.log('  Sino Trade Link — Bing Webmaster API & IndexNow SEO Sync');
  console.log('================================================================\n');

  // Step 1: Submit all 8 XML Sitemaps via Bing Webmaster API (SubmitFeed)
  console.log('1. Submitting all XML Sitemaps to Bing Webmaster API (SubmitFeed)...');
  for (const feedUrl of SITEMAP_FEEDS) {
    const res = await bingApiPost('SubmitFeed', {
      siteUrl: SITE_URL,
      feedUrl,
    });
    console.log(`   -> ${feedUrl} [HTTP ${res.status}] ${res.body}`);
  }

  // Step 2: Verify registered feeds via GetFeeds
  console.log('\n2. Verifying registered sitemaps in Bing Webmaster Tools (GetFeeds)...');
  const feedsData = await bingApiGet('GetFeeds', { siteUrl: SITE_URL });
  const registeredFeeds = feedsData?.d || [];
  console.log(`   -> Total registered feeds in Bing: ${registeredFeeds.length}`);
  for (const f of registeredFeeds) {
    console.log(`      • ${f.Url} (Submitted: ${f.Submitted || 'Yes'})`);
  }

  // Step 3: Collect all URLs from pages.xml and suppliers-1..6.xml
  console.log('\n3. Fetching all live URLs from sitemaps...');
  const pageUrls = await extractUrlsFromSitemap('https://sinotradelink.com/sitemaps/pages.xml');
  console.log(`   -> Core & Category Hub URLs (pages.xml): ${pageUrls.length}`);

  let allSupplierUrls = [];
  for (let i = 1; i <= 6; i++) {
    const shardUrl = `https://sinotradelink.com/sitemaps/suppliers-${i}.xml`;
    const urls = await extractUrlsFromSitemap(shardUrl);
    console.log(`   -> Supplier Shard ${i} (${shardUrl}): ${urls.length} URLs`);
    allSupplierUrls.push(...urls);
  }

  const allUrls = Array.from(new Set([...pageUrls, ...allSupplierUrls]));
  console.log(`   -> Total Unique URLs ready for indexing: ${allUrls.length.toLocaleString()}`);

  // Step 4: Check Bing Webmaster Direct URL Quota & Submit Priority Batch (SubmitUrlBatch)
  console.log('\n4. Checking Bing Webmaster API Direct URL Submission Quota...');
  const quotaData = await bingApiGet('GetUrlSubmissionQuota', { siteUrl: SITE_URL });
  const dailyQuota = quotaData?.d?.DailyQuota ?? 0;
  const monthlyQuota = quotaData?.d?.MonthlyQuota ?? 0;
  console.log(`   -> Remaining Quota: Daily = ${dailyQuota}, Monthly = ${monthlyQuota}`);

  if (dailyQuota > 0) {
    const batchToSubmit = allUrls.slice(0, Math.min(dailyQuota, 500));
    console.log(`   -> Submitting ${batchToSubmit.length} priority URLs via SubmitUrlBatch...`);
    const batchRes = await bingApiPost('SubmitUrlBatch', {
      siteUrl: SITE_URL,
      urlList: batchToSubmit,
    });
    console.log(`   -> SubmitUrlBatch response: [HTTP ${batchRes.status}] ${batchRes.body}`);
  } else {
    console.log('   -> Daily Webmaster API quota already used today; proceeding to IndexNow bulk push.');
  }

  // Step 5: Push ALL 27,700+ URLs via Bing IndexNow (up to 10,000 URLs per POST)
  console.log('\n5. Pushing ALL URLs via Bing IndexNow Protocol (www.bing.com/indexnow)...');
  const CHUNK_SIZE = 9500;
  let chunkIndex = 0;
  for (let i = 0; i < allUrls.length; i += CHUNK_SIZE) {
    chunkIndex++;
    const chunk = allUrls.slice(i, i + CHUNK_SIZE);
    const payload = {
      host: HOST,
      key: API_KEY,
      keyLocation: KEY_LOCATION,
      urlList: chunk,
    };

    const indexNowRes = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    const respText = await indexNowRes.text();
    console.log(
      `   -> IndexNow Batch #${chunkIndex} (${chunk.length.toLocaleString()} URLs, items ${i + 1}..${i + chunk.length}): HTTP ${indexNowRes.status} ${respText || 'OK (Accepted)'}`
    );
  }

  console.log('\n================================================================');
  console.log('  Bing Webmaster API & IndexNow Sync Complete!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in bing-seo-sync:', err);
  process.exit(1);
});
