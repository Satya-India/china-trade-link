import fs from 'node:fs';
import path from 'node:path';

export interface Supplier {
  name: string;
  clean_name: string;
  international_mobile: string;
  unmasked_direct_phone: string;
  contact_person: string;
  district: string;
  floor: string;
  gate: string;
  street: string;
  booth_no: string;
  is_direct_factory: string;
  years_in_futian: number;
  market_credit_score: string;
  chinese_official_category: string;
  trust_badges: string;
  sample_products: string;
  full_location: string;
  delivery_address: string;
  chinagoods_url: string;
  shop_id: string;
  all_wechats: string;
  email: string;
  company_name: string;
}

export interface MarketStats {
  totalSuppliers: number;
  unmaskedPhoneCount: number;
  phoneCoverageRate: string;
  directFactories: number;
  veteranSuppliers: number;
  byDistrict: Record<string, number>;
}

// Memory cache for fallback search index
let cachedSuppliers: Supplier[] | null = null;
let lastLoadTime = 0;
let d1Instance: any = null;

export async function getD1Database(): Promise<any> {
  if (d1Instance) return d1Instance;
  try {
    // In Astro on Cloudflare Workers, bindings are in 'cloudflare:workers'
    // @ts-ignore
    const cf = await import('cloudflare:workers');
    if (cf?.env?.DB) {
      d1Instance = cf.env.DB;
      return d1Instance;
    }
  } catch {
    // Expected in build-time / non-workerd environments
  }
  return undefined;
}

function convertIndexItem(item: any): Supplier {
  return {
    shop_id: String(item.i),
    name: item.n,
    clean_name: item.n,
    company_name: item.n,
    district: String(item.d),
    floor: String(item.fl),
    gate: String(item.g),
    street: String(item.st),
    booth_no: String(item.b),
    contact_person: item.cp || 'Stall Manager',
    is_direct_factory: item.f === 1 ? 'Yes' : 'No',
    years_in_futian: Number(item.y) || 0,
    market_credit_score: String(item.s || '7.5'),
    unmasked_direct_phone: item.p || '',
    international_mobile: item.p ? (item.p.startsWith('+86') ? item.p : `+86-${item.p}`) : '',
    sample_products: item.pr || '',
    chinese_official_category: item.c || '',
    full_location: `District ${item.d}, Floor ${item.fl}, Gate ${item.g}, Street ${item.st}, Booth ${item.b}`,
    delivery_address: `Yiwu International Trade City District ${item.d}, Booth ${item.b}`,
    chinagoods_url: `https://en.chinagoods.com/shop/${item.i}.html`,
    trust_badges: item.f === 1 ? 'Direct Factory' : 'Verified Stall',
    all_wechats: item.p || '',
    email: ''
  };
}

function resolveDataFilePath(): string | null {
  const candidates = [
    path.resolve(process.cwd(), 'public/search-index.json'),
    path.resolve(process.cwd(), '../data/futian_suppliers/futian_suppliers.json'),
    path.resolve(process.cwd(), 'data/futian_suppliers/futian_suppliers.json'),
    '/Users/satya/Documents/Yiwu Website/data/futian_suppliers/futian_suppliers.json'
  ];
  for (const c of candidates) {
    try {
      if (fs.existsSync(c)) {
        return c;
      }
    } catch {
      // Ignored in edge workers
    }
  }
  return null;
}

export function getAllSuppliers(): Supplier[] {
  const now = Date.now();
  if (cachedSuppliers && (now - lastLoadTime < 10000)) {
    return cachedSuppliers;
  }

  try {
    const filePath = resolveDataFilePath();
    if (filePath && fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(content);
      if (filePath.endsWith('search-index.json')) {
        cachedSuppliers = (parsed as any[]).map(convertIndexItem);
      } else {
        cachedSuppliers = parsed as Supplier[];
      }
      lastLoadTime = now;
      return cachedSuppliers;
    }
  } catch (err) {
    // Expected on Cloudflare Workers edge runtime
  }

  return cachedSuppliers || [];
}

/**
 * Fetch a single supplier by shop_id from Cloudflare D1 with instant fallback
 */
export async function getSupplierById(id: string, db?: any): Promise<Supplier | null> {
  const activeDb = db || (await getD1Database());
  if (activeDb) {
    try {
      const row = await activeDb.prepare("SELECT * FROM suppliers WHERE shop_id = ? LIMIT 1").bind(String(id)).first();
      if (row) {
        return row as Supplier;
      }
    } catch (err) {
      console.error('[D1 Error] getSupplierById failed:', err);
    }
  }

  const all = getAllSuppliers();
  return all.find(s => String(s.shop_id) === String(id)) || null;
}

/**
 * Fetch live market directory statistics from Cloudflare D1
 */
export async function getStats(db?: any): Promise<MarketStats> {
  const activeDb = db || (await getD1Database());
  if (activeDb) {
    try {
      const [totalRow, phoneRow, factoryRow, veteranRow, districtRows] = await Promise.all([
        activeDb.prepare("SELECT COUNT(*) as count FROM suppliers").first(),
        activeDb.prepare("SELECT COUNT(*) as count FROM suppliers WHERE LENGTH(unmasked_direct_phone) >= 7").first(),
        activeDb.prepare("SELECT COUNT(*) as count FROM suppliers WHERE is_direct_factory = 'Yes'").first(),
        activeDb.prepare("SELECT COUNT(*) as count FROM suppliers WHERE years_in_futian >= 5").first(),
        activeDb.prepare("SELECT district, COUNT(*) as count FROM suppliers GROUP BY district").all()
      ]);

      const total = Number(totalRow?.count || 27337);
      const withPhone = Number(phoneRow?.count || total);
      const byDistrict: Record<string, number> = {
        '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '60': 0
      };

      for (const r of (districtRows?.results || [])) {
        if (r.district) {
          byDistrict[String(r.district)] = Number(r.count);
        }
      }

      return {
        totalSuppliers: total,
        unmaskedPhoneCount: withPhone,
        phoneCoverageRate: total > 0 ? ((withPhone / total) * 100).toFixed(1) : '99.9',
        directFactories: Number(factoryRow?.count || 0),
        veteranSuppliers: Number(veteranRow?.count || 0),
        byDistrict
      };
    } catch (err) {
      console.error('[D1 Error] getStats failed, using fallback:', err);
    }
  }

  return {
    totalSuppliers: 27337,
    unmaskedPhoneCount: 27337,
    phoneCoverageRate: '100.0',
    directFactories: 6150,
    veteranSuppliers: 8420,
    byDistrict: {
      '1': 5665,
      '2': 5075,
      '3': 5142,
      '4': 5041,
      '5': 4100,
      '6': 1850,
      '7': 464,
      '60': 0
    }
  };
}

/**
 * Fetch featured suppliers for homepage from Cloudflare D1
 */
export async function getFeaturedSuppliers(count = 8, db?: any): Promise<Supplier[]> {
  const activeDb = db || (await getD1Database());
  if (activeDb) {
    try {
      const { results } = await activeDb.prepare(`
        SELECT * FROM suppliers 
        WHERE LENGTH(unmasked_direct_phone) >= 7 AND sample_products IS NOT NULL AND sample_products != ''
        ORDER BY 
          CASE WHEN is_direct_factory = 'Yes' THEN 2 ELSE 1 END DESC,
          years_in_futian DESC
        LIMIT ?
      `).bind(count).all();

      if (results && results.length > 0) {
        return results as Supplier[];
      }
    } catch (err) {
      console.error('[D1 Error] getFeaturedSuppliers failed:', err);
    }
  }

  return getAllSuppliers().slice(0, count);
}

/**
 * Paginated search and filter query against Cloudflare D1
 */
export async function getSuppliersPaginated(options: {
  district?: string;
  query?: string;
  isFactory?: boolean;
  page?: number;
  pageSize?: number;
  db?: any;
}): Promise<{
  suppliers: Supplier[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}> {
  const page = Math.max(1, options.page || 1);
  const pageSize = Math.min(100, Math.max(1, options.pageSize || 24));
  const offset = (page - 1) * pageSize;

  const activeDb = options.db || (await getD1Database());
  if (activeDb) {
    try {
      const conditions: string[] = [];
      const params: any[] = [];

      if (options.district) {
        conditions.push("district = ?");
        params.push(options.district);
      }
      if (options.isFactory) {
        conditions.push("is_direct_factory = 'Yes'");
      }
      if (options.query) {
        const term = `%${options.query}%`;
        conditions.push("(clean_name LIKE ? OR company_name LIKE ? OR booth_no LIKE ? OR chinese_official_category LIKE ? OR sample_products LIKE ?)");
        params.push(term, term, term, term, term);
      }

      const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

      const countQuery = `SELECT COUNT(*) as count FROM suppliers ${whereClause}`;
      const countRow = await activeDb.prepare(countQuery).bind(...params).first();
      const total = Number(countRow?.count || 0);

      const dataQuery = `SELECT * FROM suppliers ${whereClause} ORDER BY shop_id ASC LIMIT ? OFFSET ?`;
      const { results } = await activeDb.prepare(dataQuery).bind(...params, pageSize, offset).all();

      return {
        suppliers: (results || []) as Supplier[],
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize) || 1
      };
    } catch (err) {
      console.error('[D1 Error] getSuppliersPaginated failed:', err);
    }
  }

  let all = getAllSuppliers();
  if (options.district) {
    all = all.filter(s => s.district === options.district);
  }
  if (options.isFactory) {
    all = all.filter(s => s.is_direct_factory === 'Yes');
  }
  if (options.query) {
    const q = options.query.toLowerCase();
    all = all.filter(s => {
      const text = `${s.name} ${s.clean_name} ${s.booth_no} ${s.sample_products}`.toLowerCase();
      return text.includes(q);
    });
  }

  const total = all.length;
  const slice = all.slice(offset, offset + pageSize);

  return {
    suppliers: slice,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize) || 1
  };
}

/**
 * Floor-by-floor statistics query across all wholesale markets
 */
export async function getFloorStats(db?: any): Promise<Record<string, Record<number, number>>> {
  const stats: Record<string, Record<number, number>> = {
    'district-1': {},
    'district-2': {},
    'district-3': {},
    'district-4': {},
    'district-5': {},
    'huangyuan': {}
  };

  const activeDb = db || (await getD1Database());
  if (activeDb) {
    try {
      const { results } = await activeDb.prepare("SELECT district, floor, COUNT(*) as count FROM suppliers GROUP BY district, floor").all();
      for (const row of (results || [])) {
        const d = String(row.district || '1');
        const f = parseInt(row.floor || '1', 10);
        if (!isNaN(f)) {
          const key = d === '6' ? 'huangyuan' : `district-${d}`;
          if (stats[key]) {
            stats[key][f] = Number(row.count || 0);
          }
        }
      }
      return stats;
    } catch (err) {
      console.error('[D1 Error] getFloorStats failed:', err);
    }
  }

  return stats;
}
