/**
 * Drop-in Astro Server Proxy for Sino Trade Link: src/pages/api/chat.ts
 * Signs X-Project-Context v2 server-side + binds tamper-resistant HttpOnly session cookie (_mcb_sid)
 * so refresh, parallel tabs, or client JSON edits cannot bypass the 5-message limit.
 */
import type { APIRoute } from 'astro';
import { env as cfEnv } from 'cloudflare:workers';

export const prerender = false;

async function hmacHex(secret: string, msg: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(msg));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('');
}

async function signContextV2(secret: string, pathname: string, rawBody: string): Promise<string> {
  const enc = new TextEncoder();
  const digestBuf = await crypto.subtle.digest('SHA-256', enc.encode(rawBody));
  const bodyHash = Array.from(new Uint8Array(digestBuf), (b) => b.toString(16).padStart(2, '0')).join('');
  const ts = Math.floor(Date.now() / 1000);
  const nonce = crypto.randomUUID().replace(/-/g, '').slice(0, 16);
  const canonical = `k1.sino-trade-link.${ts}.${nonce}.POST:${pathname}:${bodyHash}`;
  const mac = await hmacHex(secret, canonical);
  return `v2.k1.sino-trade-link.${ts}.${nonce}.${mac}`;
}

async function resolveSignedSessionCookie(secret: string, cookieHeader: string): Promise<{ sid: string; setCookie?: string }> {
  const m = cookieHeader.match(/(?:^|;\s*)_mcb_sid=([^;]+)/);
  const nowSec = Math.floor(Date.now() / 1000);
  if (m?.[1]) {
    try {
      const [sid, expStr, mac] = decodeURIComponent(m[1]).split('.');
      const exp = Number(expStr);
      if (sid && exp > nowSec && mac && (await hmacHex(secret, `${sid}.${exp}`)) === mac) {
        return { sid };
      }
    } catch {}
  }
  const sid = `stl-${crypto.randomUUID()}`;
  const exp = nowSec + 43200;
  const mac = await hmacHex(secret, `${sid}.${exp}`);
  const cookieVal = encodeURIComponent(`${sid}.${exp}.${mac}`);
  return {
    sid,
    setCookie: `_mcb_sid=${cookieVal}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=43200`,
  };
}

export const POST: APIRoute = async ({ request }) => {
  const env = (cfEnv || {}) as Record<string, any>;
  let kvEmergencyDisabled = false;
  if (env.CHATBOT_ENABLED === 'true' && env.SESSION?.get) {
    try {
      kvEmergencyDisabled = (await env.SESSION.get('chatbot_emergency_disabled')) === '1';
    } catch {}
  }
  if (env.CHATBOT_ENABLED !== 'true' || kvEmergencyDisabled) {
    return new Response(JSON.stringify({ error: 'Sino Trade Link assistant is not enabled on this site yet' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  const secret = String(env.PROJECT_CONTEXT_SECRET || '');
  if (!secret) {
    return new Response(JSON.stringify({ error: 'Chatbot context signing not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  const rawBody = await request.text();
  if (rawBody.length > 8192) {
    return new Response(JSON.stringify({ error: 'Payload too large' }), { status: 413 });
  }

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const sess = await resolveSignedSessionCookie(secret, request.headers.get('Cookie') || '');
  const isHandoverClick = parsed?.action === 'handover-click';
  const upstreamPath = isHandoverClick ? '/api/chat/handover-click' : '/api/chat';
  const forwardedIp = request.headers.get('CF-Connecting-IP') || '';
  const sanitizedPayload = JSON.stringify(
    isHandoverClick
      ? { projectId: 'sino-trade-link', serverSessionId: sess.sid, locale: parsed.locale, channel: parsed.channel }
      : { locale: parsed.locale, message: parsed.message, requestId: parsed.requestId, clientIp: forwardedIp, projectId: 'sino-trade-link', serverSessionId: sess.sid }
  );
  const signedCtx = await signContextV2(secret, upstreamPath, sanitizedPayload);

  const masterUrl = `${String(env.MASTER_CHATBOT_ORIGIN || 'https://chatbot.sinotradelink.com')}${upstreamPath}`;
  const clientUa = request.headers.get('User-Agent') || '';
  const upstreamRes = await fetch(masterUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Project-Context': signedCtx,
      
      ...(clientUa ? { 'X-Client-User-Agent': clientUa.slice(0, 120) } : {}),
    },
    body: sanitizedPayload,
    signal: AbortSignal.timeout(19_000),
  });

  const respText = await upstreamRes.text();
  return new Response(respText, {
    status: upstreamRes.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
      ...(sess.setCookie ? { 'Set-Cookie': sess.setCookie } : {}),
    },
  });
};
