import { defineMiddleware } from 'astro:middleware';

const PROD_ALLOWED_ORIGINS = new Set(['https://sinotradelink.com']);
const DEV_ALLOWED_ORIGINS = new Set([
  'https://sinotradelink.com',
  'http://localhost:4321',
  'http://127.0.0.1:4321'
]);

const SITE_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://sinotradelink.com",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests'
].join('; ');

const API_CSP = "default-src 'none'; frame-ancestors 'none'";

function isAllowedOrigin(origin: string | null, isLocalDev: boolean): boolean {
  if (!origin) return false;
  return isLocalDev ? DEV_ALLOWED_ORIGINS.has(origin) : PROD_ALLOWED_ORIGINS.has(origin);
}

function applySecurityHeaders(headers: Headers, opts: { isApi: boolean; allowedOrigin?: string | null; preserveUpstreamCsp?: boolean }) {
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=()');
  if (!opts.preserveUpstreamCsp || !headers.has('Content-Security-Policy')) {
    headers.set('Content-Security-Policy', opts.isApi ? API_CSP : SITE_CSP);
  }
  if (opts.isApi) {
    if (opts.allowedOrigin) {
      headers.set('Access-Control-Allow-Origin', opts.allowedOrigin);
      headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      headers.set('Access-Control-Allow-Headers', 'Content-Type');
      headers.set('Access-Control-Max-Age', '600');
      headers.set('Vary', 'Origin');
    } else {
      headers.delete('Access-Control-Allow-Origin');
    }
  }
}

function withHeaders(res: Response, mutate: (h: Headers) => void): Response {
  const h = new Headers(res.headers);
  mutate(h);
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: h
  });
}

function dispatchWaitUntil(context: any, promise: Promise<any>) {
  const cfCtx = context.locals?.cfContext || context.locals?.runtime?.ctx || context.locals?.runtime;
  if (cfCtx && typeof cfCtx.waitUntil === 'function') {
    cfCtx.waitUntil(promise);
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  const method = context.request.method;
  const isLocalDev = url.hostname === 'localhost' || url.hostname === '127.0.0.1';

  // 1. Canonical 301 Permanent Redirect: www.sinotradelink.com -> https://sinotradelink.com
  if (url.hostname === 'www.sinotradelink.com') {
    url.hostname = 'sinotradelink.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // 1b. Enforce HTTPS in production (preserve localhost dev)
  if (!isLocalDev && url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // 1.5. Clean unlocalized root routes mistakenly requested with a locale prefix
  // e.g. /es/supplier/12345 -> /supplier/12345, /fr/category/toys -> /category/toys
  const unlocalizedLocaleMatch = pathname.match(/^\/(?:es|pt|fr|de|ar|ru|it)\/(supplier|category|market-map|sourcing-guide|for-suppliers)(\/.*)?$/);
  if (unlocalizedLocaleMatch) {
    const canonicalPath = `/${unlocalizedLocaleMatch[1]}${unlocalizedLocaleMatch[2] || ''}`;
    url.pathname = canonicalPath;
    return Response.redirect(url.toString(), 301);
  }

  // Collapse duplicate/nested locale prefixes (e.g. /es/ru/directory -> /es/directory)
  const nonDefaultLocales = ['es', 'pt', 'fr', 'de', 'ar', 'ru', 'it'];
  const segments = pathname.split('/').filter(Boolean);
  let leadingLocaleCount = 0;
  while (leadingLocaleCount < segments.length && nonDefaultLocales.includes(segments[leadingLocaleCount])) {
    leadingLocaleCount++;
  }
  if (leadingLocaleCount > 1) {
    const primaryLocale = segments[0];
    const rest = segments.slice(leadingLocaleCount).join('/');
    url.pathname = `/${primaryLocale}${rest ? `/${rest}` : ''}`;
    return Response.redirect(url.toString(), 301);
  }

  // 1c. Explicitly block sensitive dotfile, backup, SQL, and source map probes with 404
  if (/(?:^|\/)\.(?:env|git|dev\.vars|htaccess)|(?:\.map|\.sql|\.bak|\.local)$/i.test(pathname)) {
    const h = new Headers({ 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
    applySecurityHeaders(h, { isApi: true, allowedOrigin: null });
    return new Response('Not Found', { status: 404, headers: h });
  }

  // Retired public offers must bypass the language fallback and any cached pages.
  if (/^\/(?:(?:es|pt|fr|de|ar|ru|it)\/)?(?:dropshipping|concierge)\/?$/.test(pathname)) {
    const headers = new Headers({
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    applySecurityHeaders(headers, { isApi: false });
    return new Response('This page has been permanently removed.', { status: 410, headers });
  }

  // 2. Legacy /admin and /api/admin redirects -> 301 permanent redirect to https://sinotradelink.com/app
  if (pathname === '/admin' || pathname.startsWith('/admin/') || pathname === '/api/admin' || pathname.startsWith('/api/admin/')) {
    return Response.redirect('https://sinotradelink.com/app', 301);
  }

  // 3. /ai shortcut alias -> 301 permanent redirect to https://sinotradelink.com/app/*
  if (pathname === '/ai' || pathname.startsWith('/ai/')) {
    const subPath = pathname === '/ai' || pathname === '/ai/' ? '' : pathname.slice(3);
    const target = `https://sinotradelink.com/app${subPath}${url.search}`;
    return Response.redirect(target, 301);
  }

  // 3b. Permanently retired PayPal & paid pack download endpoints -> 410 Gone
  if (
    pathname === '/api/payment' ||
    pathname.startsWith('/api/payment/') ||
    pathname === '/api/download-pack' ||
    pathname.startsWith('/api/download-pack/')
  ) {
    const goneHeaders = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, private'
    });
    applySecurityHeaders(goneHeaders, { isApi: true, allowedOrigin: null });
    return new Response(JSON.stringify({ error: 'This endpoint has been permanently removed.' }), {
      status: 410,
      headers: goneHeaders
    });
  }

  // 4. Reverse Proxy /app and /app/* -> Sino Trade AI (Cloudflare Pages)
  if (pathname === '/app' || pathname.startsWith('/app/')) {
    const targetUrl = new URL(context.request.url);
    targetUrl.hostname = 'sino-trade-ai.pages.dev';
    targetUrl.port = '';
    targetUrl.protocol = 'https:';
    if (pathname === '/app') {
      targetUrl.pathname = '/app/';
    }

    const proxyHeaders = new Headers(context.request.headers);
    proxyHeaders.set('Host', 'sino-trade-ai.pages.dev');
    proxyHeaders.set('X-Forwarded-Host', url.hostname);
    proxyHeaders.set('X-Forwarded-Proto', 'https');

    const hasBody = !['GET', 'HEAD'].includes(method);
    const proxyReq = new Request(targetUrl.toString(), {
      method,
      headers: proxyHeaders,
      body: hasBody ? context.request.body : undefined,
      redirect: 'manual'
    });

    const proxyRes = await fetch(proxyReq);

    const resHeaders = new Headers(proxyRes.headers);
    if (!resHeaders.has('Cache-Control') || pathname.includes('/api/')) {
      resHeaders.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    }
    const isAppApi = pathname.startsWith('/app/api/');
    const origin = context.request.headers.get('Origin');
    const allowedOrigin = isAllowedOrigin(origin, isLocalDev) ? origin : null;
    applySecurityHeaders(resHeaders, {
      isApi: isAppApi,
      allowedOrigin: isAppApi ? allowedOrigin : null,
      preserveUpstreamCsp: true
    });

    return new Response(proxyRes.body, {
      status: proxyRes.status,
      statusText: proxyRes.statusText,
      headers: resHeaders
    });
  }

  // 5. Public site API routes: strict CORS, CSRF Origin validation & private no-cache
  const isApiPath = pathname.startsWith('/api/');
  const origin = context.request.headers.get('Origin');
  const allowedOrigin = isAllowedOrigin(origin, isLocalDev) ? origin : null;

  if (isApiPath) {
    if (method === 'OPTIONS') {
      const h = new Headers();
      applySecurityHeaders(h, { isApi: true, allowedOrigin });
      return new Response(null, { status: allowedOrigin || !origin ? 204 : 403, headers: h });
    }
    if (!['GET', 'HEAD'].includes(method) && origin && !allowedOrigin) {
      const h = new Headers({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, private'
      });
      applySecurityHeaders(h, { isApi: true, allowedOrigin: null });
      console.warn(JSON.stringify({ event: 'security_csrf_blocked', path: pathname, method, origin }));
      return new Response(JSON.stringify({ success: false, error: 'Cross-origin request blocked.' }), {
        status: 403,
        headers: h
      });
    }
  }

  const isSafeMethod = method === 'GET' || method === 'HEAD';
  const isPrivateOrMutation =
    pathname.startsWith('/api/unlock-contact') ||
    pathname.startsWith('/api/inquiry');

  if (!isSafeMethod || isPrivateOrMutation) {
    const res = await next();
    return withHeaders(res, (h) => {
      if (!h.has('Cache-Control')) {
        h.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
      }
      applySecurityHeaders(h, { isApi: isApiPath, allowedOrigin: isApiPath ? allowedOrigin : null });
    });
  }

  // 6. Static assets handled by Cloudflare Static Assets (do not intercept with Cache API)
  const isStaticAsset =
    pathname.startsWith('/_astro/') ||
    pathname.match(/\.(svg|ico|png|jpg|jpeg|webp|gif|css|js|woff2?|map)$/i);

  if (isStaticAsset) {
    const res = await next();
    return withHeaders(res, (h) => {
      applySecurityHeaders(h, { isApi: false, preserveUpstreamCsp: true });
    });
  }

  // 7. Check Cloudflare Edge Cache API (caches.default) using deploy-versioned URL string key
  const EDGE_CACHE_VERSION = '20261128-chat-v2';
  const cache = typeof globalThis !== 'undefined' && 'caches' in globalThis ? (globalThis as any).caches?.default : null;
  const cacheKey = `${url.origin}${url.pathname}${url.search ? `${url.search}&` : '?'}__cf_ver=${EDGE_CACHE_VERSION}`;

  if (cache) {
    try {
      const cachedResponse = await cache.match(cacheKey);
      if (cachedResponse) {
        const hitHeaders = new Headers(cachedResponse.headers);
        hitHeaders.set('X-Cache-Status', 'HIT');
        applySecurityHeaders(hitHeaders, { isApi: isApiPath, allowedOrigin: isApiPath ? allowedOrigin : null });
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

  // 8. Cache Miss: Execute SSR
  const response = await next();

  // 9. Apply caching & security headers and save to Edge Cache on successful 200
  if (response.status === 200) {
    let cacheControl = 'public, max-age=600, s-maxage=86400, stale-while-revalidate=86400';

    if (pathname.startsWith('/supplier/')) {
      cacheControl = 'public, max-age=3600, s-maxage=604800, stale-while-revalidate=86400';
    } else if (pathname.includes('/country/') || pathname.endsWith('/countries')) {
      cacheControl = 'public, max-age=3600, s-maxage=604800, stale-while-revalidate=86400';
    } else if (pathname.startsWith('/category/')) {
      cacheControl = 'public, max-age=3600, s-maxage=604800, stale-while-revalidate=86400';
    } else if (pathname.includes('/directory')) {
      cacheControl = 'public, max-age=600, s-maxage=86400, stale-while-revalidate=86400';
    } else if (pathname.startsWith('/api/suppliers.json')) {
      cacheControl = 'public, max-age=1800, s-maxage=86400, stale-while-revalidate=86400';
    }

    const existingCC = response.headers.get('Cache-Control') || '';
    const finalCacheControl = (existingCC.startsWith('public') && !existingCC.includes('max-age=0'))
      ? existingCC
      : cacheControl;

    const newHeaders = new Headers(response.headers);
    newHeaders.set('Cache-Control', finalCacheControl);
    newHeaders.set('CDN-Cache-Control', finalCacheControl);
    newHeaders.set('Cloudflare-CDN-Cache-Control', finalCacheControl);
    newHeaders.set('X-Cache-Status', 'MISS');
    applySecurityHeaders(newHeaders, { isApi: isApiPath, allowedOrigin: isApiPath ? allowedOrigin : null });

    const modifiedResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });

    if (cache && method === 'GET') {
      const toCache = modifiedResponse.clone();
      const putPromise = cache.put(cacheKey, toCache).catch((err: any) => {
        console.warn('[Cache API Put Warn]:', err?.message || err);
      });
      dispatchWaitUntil(context, putPromise);
    }

    return modifiedResponse;
  } else if (response.status === 404) {
    const short404Cache = 'public, max-age=300, s-maxage=600';
    const modified404 = withHeaders(response, (h) => {
      h.set('Cache-Control', short404Cache);
      applySecurityHeaders(h, { isApi: isApiPath, allowedOrigin: isApiPath ? allowedOrigin : null });
    });

    if (cache && method === 'GET') {
      const put404 = cache.put(cacheKey, modified404.clone()).catch(() => {});
      dispatchWaitUntil(context, put404);
    }

    return modified404;
  }

  return withHeaders(response, (h) => {
    applySecurityHeaders(h, { isApi: isApiPath, allowedOrigin: isApiPath ? allowedOrigin : null });
  });
});
