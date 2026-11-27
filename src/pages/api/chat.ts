/**
 * Drop-in Astro Server Proxy for Sino Trade Link: src/pages/api/chat.ts
 * Signs X-Project-Context v2 server-side enforcing projectId: "sino-trade-link".
 * Direct DB-writing inquiry submission remains strictly disabled here until separately approved.
 */
import type { APIRoute } from 'astro';
import { env as cfEnv } from 'cloudflare:workers';

export const prerender = false;

async function signContextV2(secret: string, rawBody: string): Promise<string> {
  const enc = new TextEncoder();
  const digestBuf = await crypto.subtle.digest('SHA-256', enc.encode(rawBody));
  const bodyHash = Array.from(new Uint8Array(digestBuf), (b) => b.toString(16).padStart(2, '0')).join('');
  const ts = Math.floor(Date.now() / 1000);
  const nonce = crypto.randomUUID().replace(/-/g, '').slice(0, 16);
  const canonical = `k1.sino-trade-link.${ts}.${nonce}.POST:/api/chat:${bodyHash}`;
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sigBuf = await crypto.subtle.sign('HMAC', key, enc.encode(canonical));
  const mac = Array.from(new Uint8Array(sigBuf), (b) => b.toString(16).padStart(2, '0')).join('');
  return `v2.k1.sino-trade-link.${ts}.${nonce}.${mac}`;
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

  // Strip any client-supplied projectId and strictly bind sino-trade-link server-side
  const sanitizedPayload = JSON.stringify({ ...parsed, projectId: 'sino-trade-link' });
  const signedCtx = await signContextV2(secret, sanitizedPayload);

  const masterUrl = `${String(env.MASTER_CHATBOT_ORIGIN || 'https://chatbot.sinotradelink.com')}/api/chat`;
  const forwardedIp = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || '';
  const upstreamRes = await fetch(masterUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Project-Context': signedCtx,
      ...(forwardedIp ? { 'X-Forwarded-For': forwardedIp } : {}),
    },
    body: sanitizedPayload,
  });

  const respText = await upstreamRes.text();
  return new Response(respText, {
    status: upstreamRes.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
};
