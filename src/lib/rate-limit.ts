import { getD1Database } from './data';

const rateTableReady = new WeakSet<object>();

async function sha256Short(input: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}

export function getPublicClientIp(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip')?.trim() ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'local'
  );
}

export async function enforcePublicRateLimit(
  request: Request,
  locals: any,
  opts: { scope: string; windowSeconds: number; maxRequests: number }
): Promise<{ allowed: boolean; retryAfter: number }> {
  const ip = getPublicClientIp(request);
  const nowSec = Math.floor(Date.now() / 1000);
  const windowBucket = Math.floor(nowSec / opts.windowSeconds);
  const retryAfter = Math.max(1, (windowBucket + 1) * opts.windowSeconds - nowSec);
  const key = `${opts.scope}:${await sha256Short(ip)}`;

  const db = await getD1Database();
  if (db) {
    try {
      if (!rateTableReady.has(db)) {
        await db.batch([
          db.prepare(`CREATE TABLE IF NOT EXISTS public_rate_limits (
            key TEXT NOT NULL,
            window INTEGER NOT NULL,
            count INTEGER NOT NULL DEFAULT 1,
            PRIMARY KEY (key, window)
          )`),
          db.prepare(`CREATE INDEX IF NOT EXISTS idx_public_rate_limits_window ON public_rate_limits(window)`)
        ]);
        rateTableReady.add(db);
      }

      const row = await db
        .prepare(
          `INSERT INTO public_rate_limits(key, window, count)
           VALUES(?, ?, 1)
           ON CONFLICT(key, window) DO UPDATE SET count = count + 1
           RETURNING count`
        )
        .bind(key, windowBucket)
        .first<{ count: number }>();

      const count = row?.count ?? 1;
      if (count > opts.maxRequests) {
        console.warn(JSON.stringify({ event: 'security_rate_limited', scope: opts.scope, count, limit: opts.maxRequests }));
        return { allowed: false, retryAfter };
      }
      return { allowed: true, retryAfter: 0 };
    } catch (err) {
      console.warn('[RateLimit D1 Warn]:', err);
    }
  }

  // Fallback to Cloudflare KV SESSION binding if D1 is unavailable
  const kv = locals?.runtime?.env?.SESSION;
  if (kv && typeof kv.get === 'function' && typeof kv.put === 'function') {
    try {
      const kvKey = `rl:${key}:${windowBucket}`;
      const current = Number((await kv.get(kvKey)) || '0');
      const next = current + 1;
      await kv.put(kvKey, String(next), { expirationTtl: Math.max(60, opts.windowSeconds) });
      if (next > opts.maxRequests) {
        console.warn(JSON.stringify({ event: 'security_rate_limited', scope: opts.scope, count: next, limit: opts.maxRequests }));
        return { allowed: false, retryAfter };
      }
    } catch (err) {
      console.warn('[RateLimit KV Warn]:', err);
    }
  }

  return { allowed: true, retryAfter: 0 };
}

export async function readBoundedJson(request: Request, maxBytes = 16384): Promise<{ ok: true; data: Record<string, unknown> } | { ok: false; status: number; error: string }> {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return { ok: false, status: 415, error: 'Content-Type must be application/json.' };
  }
  const reader = request.body?.getReader();
  if (!reader) return { ok: false, status: 400, error: 'Empty request body.' };

  const decoder = new TextDecoder();
  let total = 0;
  const chunks: string[] = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > maxBytes) {
        await reader.cancel().catch(() => undefined);
        return { ok: false, status: 413, error: 'Request payload is too large.' };
      }
      chunks.push(decoder.decode(value, { stream: true }));
    }
    chunks.push(decoder.decode());
  } catch {
    await reader.cancel().catch(() => undefined);
    return { ok: false, status: 400, error: 'Unable to read request body.' };
  }

  try {
    const parsed = JSON.parse(chunks.join(''));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return { ok: false, status: 400, error: 'Invalid JSON request body.' };
    }
    return { ok: true, data: parsed as Record<string, unknown> };
  } catch {
    return { ok: false, status: 400, error: 'Invalid JSON request body.' };
  }
}

export function cleanSingleLine(val: unknown, maxLen: number): string {
  if (typeof val !== 'string') return '';
  return val.replace(/[\r\n\0]+/g, ' ').trim().slice(0, maxLen);
}

export function cleanMultiline(val: unknown, maxLen: number): string {
  if (typeof val !== 'string') return '';
  return val.replace(/\0+/g, '').trim().slice(0, maxLen);
}

export function validateHttpUrl(val: string, maxLen = 500): string | null {
  const trimmed = val.trim().slice(0, maxLen);
  if (!trimmed) return '';
  try {
    const u = new URL(trimmed);
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return null;
    return u.toString();
  } catch {
    return null;
  }
}
