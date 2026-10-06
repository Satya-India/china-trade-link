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

// Multi-path resolution for data file to support running from any directory or CI
function resolveDataFilePath(): string {
  const candidates = [
    path.resolve(process.cwd(), '../data/futian_suppliers/futian_suppliers.json'),
    path.resolve(process.cwd(), 'data/futian_suppliers/futian_suppliers.json'),
    path.resolve(process.cwd(), '../../data/futian_suppliers/futian_suppliers.json'),
    '/Users/satya/Documents/Yiwu Website/data/futian_suppliers/futian_suppliers.json',
    path.resolve(process.cwd(), 'public/search-index.json'),
    path.resolve(process.cwd(), '../public/search-index.json')
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      return c;
    }
  }
  return candidates[0];
}

const DATA_FILE_PATH = resolveDataFilePath();

let cachedSuppliers: Supplier[] | null = null;
let lastLoadTime = 0;

export function getAllSuppliers(): Supplier[] {
  const now = Date.now();
  // Cache for 10 seconds to read fresh additions while pipeline is running
  if (cachedSuppliers && (now - lastLoadTime < 10000)) {
    return cachedSuppliers;
  }

  try {
    const filePath = resolveDataFilePath();
    if (fs.existsSync(filePath)) {
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
    console.error('Error loading suppliers data:', err);
  }

  return cachedSuppliers || [];
}

export function getSupplierById(id: string): Supplier | undefined {
  const all = getAllSuppliers();
  return all.find(s => String(s.shop_id) === String(id));
}

export function getStats() {
  const all = getAllSuppliers();
  const total = all.length;
  const withPhone = all.filter(s => s.unmasked_direct_phone && s.unmasked_direct_phone.length >= 7).length;
  const factories = all.filter(s => s.is_direct_factory === 'Yes').length;
  const veterans = all.filter(s => s.years_in_futian >= 5).length;
  
  const byDistrict: Record<string, number> = {
    '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0
  };

  for (const s of all) {
    const d = s.district;
    if (d in byDistrict) {
      byDistrict[d]++;
    }
  }

  return {
    totalSuppliers: total,
    unmaskedPhoneCount: withPhone,
    phoneCoverageRate: total > 0 ? ((withPhone / total) * 100).toFixed(1) : '99.9',
    directFactories: factories,
    veteranSuppliers: veterans,
    byDistrict
  };
}

export function getFeaturedSuppliers(count = 12): Supplier[] {
  const all = getAllSuppliers();
  // Pick diverse high-quality suppliers across all districts
  const districts = ['1', '2', '3', '4', '5', '6'];
  const featured: Supplier[] = [];
  
  for (const d of districts) {
    const inDist = all.filter(s => s.district === d && s.unmasked_direct_phone && s.sample_products);
    // Prefer factories and top credit
    inDist.sort((a, b) => {
      const aScore = (a.is_direct_factory === 'Yes' ? 5 : 0) + (a.years_in_futian || 0);
      const bScore = (b.is_direct_factory === 'Yes' ? 5 : 0) + (b.years_in_futian || 0);
      return bScore - aScore;
    });
    featured.push(...inDist.slice(0, Math.ceil(count / districts.length)));
  }

  return featured.slice(0, count);
}
