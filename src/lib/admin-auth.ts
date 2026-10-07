export async function getAdminSecret(): Promise<string> {
  try {
    // @ts-ignore
    const cf = await import('cloudflare:workers');
    if (cf?.env?.ADMIN_SECRET) {
      return String(cf.env.ADMIN_SECRET).trim();
    }
  } catch {
    // Fallback for non-workerd environments
  }
  if (typeof process !== 'undefined' && process?.env?.ADMIN_SECRET) {
    return String(process.env.ADMIN_SECRET).trim();
  }
  return 'Sino@2008!';
}

export async function verifyAdminAuth(request: Request, url?: URL): Promise<boolean> {
  const adminSecret = await getAdminSecret();

  // 1. Check Authorization header: Bearer <key>
  const authHeader = request.headers.get('Authorization');
  if (authHeader) {
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (token === adminSecret) return true;
  }

  // 2. Check Cookie: admin_key=<key>
  const cookieHeader = request.headers.get('Cookie');
  if (cookieHeader) {
    const match = cookieHeader.match(/(?:^|;\s*)admin_key=([^;]+)/);
    if (match && decodeURIComponent(match[1]).trim() === adminSecret) {
      return true;
    }
  }

  // 3. Check Query parameter: ?key=<key>
  const reqUrl = url || new URL(request.url);
  const keyParam = reqUrl.searchParams.get('key');
  if (keyParam && keyParam.trim() === adminSecret) {
    return true;
  }

  return false;
}
