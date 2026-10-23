import { defineMiddleware } from 'astro:middleware';

function dispatchWaitUntil(context: any, promise: Promise<any>) {
  const cfCtx = context.locals?.cfContext || context.locals?.runtime?.ctx || context.locals?.runtime;
  if (cfCtx && typeof cfCtx.waitUntil === 'function') {
    cfCtx.waitUntil(promise);
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // 1. Canonical 301 Permanent Redirect: www.sinotradelink.com -> sinotradelink.com
  if (url.hostname === 'www.sinotradelink.com') {
    url.hostname = 'sinotradelink.com';
    return Response.redirect(url.toString(), 301);
  }

  const method = context.request.method;
  const pathname = url.pathname;

  // 2. Sensitive / Private / Mutation routes - NEVER cache
  const isSafeMethod = method === 'GET' || method === 'HEAD';
  const isPrivateOrAdmin =
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/api/download-pack') ||
    pathname.startsWith('/api/unlock-contact') ||
    pathname.startsWith('/api/inquiry') ||
    pathname.startsWith('/api/payment');

  if (!isSafeMethod || isPrivateOrAdmin) {
    const res = await next();
    // Enforce strict no-cache on private admin/checkout responses
    if (!res.headers.has('Cache-Control')) {
      try {
        res.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
      } catch {
        const h = new Headers(res.headers);
        h.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
      }
    }
    return res;
  }

  // 3. Static assets handled by Cloudflare Static Assets (do not intercept with Cache API)
  const isStaticAsset =
    pathname.startsWith('/_astro/') ||
    pathname.match(/\.(svg|ico|png|jpg|jpeg|webp|gif|css|js|woff2?|map)$/i);

  if (isStaticAsset) {
    return next();
  }

  // 4. Check Cloudflare Edge Cache API (caches.default) using canonical URL string key
  const cache = typeof globalThis !== 'undefined' && 'caches' in globalThis ? (globalThis as any).caches?.default : null;
  const cacheKey = url.toString();

  if (cache) {
    try {
      const cachedResponse = await cache.match(cacheKey);
      if (cachedResponse) {
        const hitHeaders = new Headers(cachedResponse.headers);
        hitHeaders.set('X-Cache-Status', 'HIT');
        const body = method === 'HEAD' ? null : cachedResponse.body;
        return new Response(body, {
          status: cachedResponse.status,
          statusText: cachedResponse.statusText,
          headers: hitHeaders
        });
      }
    } catch (err: any) {
      console.warn('[Cache API Match Warn]:', err?.message || err);
    }
  }

  // 5. Cache Miss: Execute SSR
  const response = await next();

  // 6. Apply caching headers and save to Edge Cache on successful 200
  if (response.status === 200) {
    let cacheControl = 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'; // Default 24h edge

    if (pathname.startsWith('/supplier/')) {
      // Supplier profile (27,706 pages) - 24h edge, 1h browser, 7d stale-while-revalidate
      cacheControl = 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800';
    } else if (pathname.includes('/country/') || pathname.endsWith('/countries')) {
      // Country Corridors & Hubs (2,500+ pages) - 24h edge
      cacheControl = 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800';
    } else if (pathname.includes('/directory')) {
      // Directory listing & filters - 12h edge, 30m browser
      cacheControl = 'public, max-age=1800, s-maxage=43200, stale-while-revalidate=86400';
    } else if (pathname.startsWith('/api/suppliers.json')) {
      // Directory search API - 1h edge, 5m browser
      cacheControl = 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400';
    }

    // Keep existing header only if it was already explicitly set to a public cache
    const existingCC = response.headers.get('Cache-Control') || '';
    const finalCacheControl = (existingCC.startsWith('public') && !existingCC.includes('max-age=0'))
      ? existingCC
      : cacheControl;

    let modifiedResponse: Response;
    try {
      response.headers.set('Cache-Control', finalCacheControl);
      response.headers.set('X-Cache-Status', 'MISS');
      modifiedResponse = response;
    } catch {
      const newHeaders = new Headers(response.headers);
      newHeaders.set('Cache-Control', finalCacheControl);
      newHeaders.set('X-Cache-Status', 'MISS');
      modifiedResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    }

    // Save to Cloudflare Edge Cache in background
    if (cache && method === 'GET') {
      const toCache = modifiedResponse.clone();
      const putPromise = cache.put(cacheKey, toCache).catch((err: any) => {
        console.warn('[Cache API Put Warn]:', err?.message || err);
      });
      dispatchWaitUntil(context, putPromise);
    }

    return modifiedResponse;
  } else if (response.status === 404) {
    // Short edge cache for 404s (5 mins browser, 10 mins edge) to prevent crawler hammer
    const short404Cache = 'public, max-age=300, s-maxage=600';
    let modified404: Response;
    try {
      response.headers.set('Cache-Control', short404Cache);
      modified404 = response;
    } catch {
      const h404 = new Headers(response.headers);
      h404.set('Cache-Control', short404Cache);
      modified404 = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: h404
      });
    }

    if (cache && method === 'GET') {
      const put404 = cache.put(cacheKey, modified404.clone()).catch(() => {});
      dispatchWaitUntil(context, put404);
    }

    return modified404;
  }

  return response;
});
