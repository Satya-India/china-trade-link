export interface MarketDistrict {
  id: string;
  name: string;
  chineseName: string;
  city: string;
  marketName: string;
  boothCount: string;
  description: string;
  floors: {
    floor: number;
    categories: string[];
  }[];
  heroImage: string;
  accentColor: string;
}

export const WHOLESALE_MARKETS: MarketDistrict[] = [
  {
    id: "district-1",
    name: "Futian District 1",
    chineseName: "国际商贸城一区",
    city: "Yiwu",
    marketName: "Yiwu International Trade City",
    boothCount: "9,000+ Booths",
    description: "The global epicenter for toys, artificial flowers, jewelry accessories, and festival crafts. 4 sprawling floors.",
    floors: [
      { floor: 1, categories: ["Plush Toys", "Inflatable Toys", "Electric & RC Toys", "Artificial Flowers"] },
      { floor: 2, categories: ["Hair Ornaments", "Fashion Jewelry", "Fine Jewelry Accessories"] },
      { floor: 3, categories: ["Festival Crafts", "Porcelain & Crystal", "Photo Frames", "Jewelry Parts"] },
      { floor: 4, categories: ["Manufacturer Direct Sales", "Ceramics", "Home Craft Decor"] }
    ],
    heroImage: "/images/district-1.jpg",
    accentColor: "from-blue-600 to-indigo-700"
  },
  {
    id: "district-2",
    name: "Futian District 2",
    chineseName: "国际商贸城二区",
    city: "Yiwu",
    marketName: "Yiwu International Trade City",
    boothCount: "10,000+ Booths",
    description: "The primary hub for hardware tools, kitchenware, locks, small home appliances, and telecommunications equipment.",
    floors: [
      { floor: 1, categories: ["Suitcases & Bags", "Luggage", "Raincoats & Ponchos"] },
      { floor: 2, categories: ["Hardware Tools & Locks", "Electrical Products"] },
      { floor: 3, categories: ["Kitchenware & Cookware", "Small Home Appliances", "Sanitary Ware"] },
      { floor: 4, categories: ["Hong Kong & Korean Pavilion", "High-End Hardware Centers"] },
      { floor: 5, categories: ["Foreign Trade Export Agencies", "Consolidation Centers"] }
    ],
    heroImage: "/images/district-2.jpg",
    accentColor: "from-amber-600 to-orange-700"
  },
  {
    id: "district-3",
    name: "Futian District 3",
    chineseName: "国际商贸城三区",
    city: "Yiwu",
    marketName: "Yiwu International Trade City",
    boothCount: "7,000+ Booths",
    description: "World capital for writing instruments, office supplies, school stationery, eyewear, and sports equipment.",
    floors: [
      { floor: 1, categories: ["Pen & Ink Supplies", "Paper Products", "Eyeglasses & Optical"] },
      { floor: 2, categories: ["Stationery Supplies", "Office Equipment", "Sports Goods"] },
      { floor: 3, categories: ["Cosmetics & Beauty Tools", "Buttons & Zipper Accessories"] },
      { floor: 4, categories: ["Factory Direct Outlets", "Sports Equipment Manufacturers"] },
      { floor: 5, categories: ["Picture Framing & Wall Art"] }
    ],
    heroImage: "/images/district-3.jpg",
    accentColor: "from-emerald-600 to-teal-700"
  },
  {
    id: "district-4",
    name: "Futian District 4",
    chineseName: "国际商贸城四区",
    city: "Yiwu",
    marketName: "Yiwu International Trade City",
    boothCount: "16,000+ Booths",
    description: "The largest market building in the world: daily necessities, footwear, socks, hosiery, belts, scarves, and underwear.",
    floors: [
      { floor: 1, categories: ["Socks & Hosiery", "Leggings"] },
      { floor: 2, categories: ["Daily Necessities", "Gloves", "Hats & Caps"] },
      { floor: 3, categories: ["Shoes & Footwear", "Ribbons & Sewing Lace", "Ties"] },
      { floor: 4, categories: ["Underwear & Brassieres", "Belts & Suspenders", "Scarves & Shawls"] },
      { floor: 5, categories: ["Tourism & Leisure Goods", "Direct Factory Showrooms"] }
    ],
    heroImage: "/images/district-4.jpg",
    accentColor: "from-rose-600 to-pink-700"
  },
  {
    id: "district-5",
    name: "Futian District 5",
    chineseName: "国际商贸城五区",
    city: "Yiwu",
    marketName: "Yiwu International Trade City",
    boothCount: "7,000+ Booths",
    description: "Global center for home textiles, bedsheets, blankets, hotel supplies, curtains, and automobile parts & accessories.",
    floors: [
      { floor: 1, categories: ["Imported Commodities Mall", "African Products Hub"] },
      { floor: 2, categories: ["Bedding Supplies", "Blankets & Quilts", "Pet Products"] },
      { floor: 3, categories: ["Curtain Cloth & Fabrics", "Knitting Raw Materials", "Hotel Supplies"] },
      { floor: 4, categories: ["Automobile Accessories", "Motorcycle Parts", "Small Commodities"] },
      { floor: 5, categories: ["Online Merchant Hubs", "Service Facilities"] }
    ],
    heroImage: "/images/district-5.jpg",
    accentColor: "from-purple-600 to-violet-700"
  },
  {
    id: "huangyuan",
    name: "Huangyuan Garment Market",
    chineseName: "篁园服装市场",
    city: "Yiwu",
    marketName: "Yiwu Huangyuan Market",
    boothCount: "5,000+ Booths",
    description: "8-story dedicated apparel trade hub: wholesale jeans, custom suits, men's & women's fashion, and children's apparel.",
    floors: [
      { floor: 1, categories: ["Denim Jeans", "Trousers", "Custom Garments"] },
      { floor: 2, categories: ["Men's Apparel", "Formal Wear", "Jackets"] },
      { floor: 3, categories: ["Women's Wear", "Dresses", "Skirts"] },
      { floor: 4, categories: ["Pajamas & Sleepwear", "Sweaters", "Sportswear"] },
      { floor: 5, categories: ["Children's Clothing & Kids Apparel"] }
    ],
    heroImage: "/images/huangyuan.jpg",
    accentColor: "from-cyan-600 to-blue-700"
  }
];

export const CATEGORY_PACKS = [
  {
    id: "toys-crafts",
    title: "Yiwu Toys & Plush Directory Pack",
    district: "District 1",
    supplierCount: "1,500+ Verified Stalls",
    originalPrice: 49,
    price: 29,
    description: "Direct contact numbers, WeChat IDs, and exact booth coordinates for plush toys, RC electronics, educational toys, and holiday festival crafts.",
    features: [
      "100% Unmasked Direct Mobile Numbers",
      "Exact Stall Coordinates (Floor, Gate, Booth No)",
      "Direct Manufacturing Plants Tagged",
      "Instant CSV & Excel Spreadsheet Download",
      "Dynamic Watermarked Single-User License"
    ],
    popular: true
  },
  {
    id: "hardware-kitchen",
    title: "Hardware, Tools & Kitchenware Pack",
    district: "District 2",
    supplierCount: "1,200+ Verified Stalls",
    originalPrice: 59,
    price: 39,
    description: "Comprehensive direct supplier list for power tools, hand tools, locks, stainless steel cookware, cutlery, and kitchen appliances.",
    features: [
      "Real Factory Owners & Stall Managers",
      "Product sample previews & price points",
      "High Credit Score Filtered Suppliers",
      "Direct WhatsApp / WeChat format included",
      "Instant CSV & Excel Download"
    ],
    popular: false
  },
  {
    id: "stationery-office",
    title: "Stationery, Office & Sports Pack",
    district: "District 3",
    supplierCount: "1,100+ Verified Stalls",
    originalPrice: 49,
    price: 29,
    description: "Gel pens, notebooks, office desk organizers, artist supplies, eyewear, and fitness accessories direct from Yiwu District 3.",
    features: [
      "Direct Export Factory Contacts",
      "Minimum 5+ Years Market Veteran Filter",
      "Booth Address & Street Navigation",
      "Immediate Digital Delivery"
    ],
    popular: false
  },
  {
    id: "daily-footwear",
    title: "Daily Necessities, Footwear & Socks Pack",
    district: "District 4",
    supplierCount: "2,200+ Verified Stalls",
    originalPrice: 69,
    price: 49,
    description: "The massive District 4 directory: socks, hosiery, slippers, sandals, belts, towels, gloves, and daily household plastic goods.",
    features: [
      "Largest Dataset in China Wholesale",
      "99.9% Direct Mobile Phone Coverage",
      "OEM / Private Label Factory Flags",
      "Direct WhatsApp Link Format"
    ],
    popular: true
  },
  {
    id: "home-textiles-auto",
    title: "Home Textiles, Bedding & Auto Parts Pack",
    district: "District 5",
    supplierCount: "1,000+ Verified Stalls",
    originalPrice: 49,
    price: 29,
    description: "Bedsheets, hotel linen, curtains, microfiber blankets, and car accessories directly from District 5 manufacturers.",
    features: [
      "Direct Textile Mill Contacts",
      "Exact Street & Gate Location Data",
      "Verified Business Licenses",
      "Instant CSV & Excel Access"
    ],
    popular: false
  },
  {
    id: "garments-apparel",
    title: "Huangyuan Garments & Jeans Pack",
    district: "Huangyuan Market",
    supplierCount: "600+ Verified Stalls",
    originalPrice: 49,
    price: 29,
    description: "Wholesale denim, jackets, women's dresses, children's clothing, and custom tailoring booths in Huangyuan Clothing Market.",
    features: [
      "Direct Stall Keepers & Factory Agents",
      "Floor-by-Floor Apparel Classification",
      "Direct WeChat ID & Phone Number",
      "Instant Digital Delivery"
    ],
    popular: false
  }
];

export const CONCIERGE_SERVICES = [
  {
    id: "booth-audit",
    title: "On-Demand Physical Stall Audit",
    price: 99,
    turnaround: "24–48 Hours",
    description: "Our local on-the-ground agent in Yiwu physically walks to the supplier's booth in Futian Market, takes high-res live photos/videos, verifies they are actively trading, and checks their latest wholesale catalog.",
    deliverables: [
      "10+ High-Resolution Stall & Product Photos",
      "Live Booth Video Walkthrough (4K)",
      "Official Stall Business Card & WeChat Handshake",
      "Stall Owner Verification Report"
    ],
    recommended: false
  },
  {
    id: "sample-pickup",
    title: "Booth Sample Pickup & Consolidation",
    price: 149,
    turnaround: "48 Hours",
    description: "We physically collect product samples from up to 5 different booths across Futian Market, inspect them for defects in our Yiwu office, securely consolidate them into a single parcel, and ship them to your country via DHL/FedEx.",
    deliverables: [
      "Collection from up to 5 Market Stalls",
      "Unboxing & Inspection Photos in Office",
      "Repacking & Weight Optimization",
      "Direct International Express Dispatch"
    ],
    recommended: true
  },
  {
    id: "factory-verification",
    title: "Comprehensive Factory & License Audit",
    price: 299,
    turnaround: "3–5 Days",
    description: "In-depth verification for large volume orders: checking official Chinese government business registration (AIC), export licenses, factory site inspection within Zhejiang/Guangdong, and verifying production capacity.",
    deliverables: [
      "Official AIC Chinese Business Registry Verification",
      "Tax & Legal Status Background Check",
      "On-Site Factory Visit Report with Video Evidence",
      "Fraud & Trade Risk Assessment Scorecard"
    ],
    recommended: false
  }
];
