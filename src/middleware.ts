import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Canonical 301 Permanent Redirect: www.sinotradelink.com -> sinotradelink.com
  if (url.hostname === 'www.sinotradelink.com') {
    url.hostname = 'sinotradelink.com';
    return Response.redirect(url.toString(), 301);
  }

  return next();
});
