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

export interface NicheMarket {
  id: string;
  name: string;
  chineseName: string;
  address: string;
  chineseAddress: string;
  scale: string;
  focus: string;
  floors: { level: string; items: string }[];
}

export const NICHE_MARKETS: NicheMarket[] = [
  {
    id: "production-materials",
    name: "International Production Materials Market",
    chineseName: "国际生产资料市场",
    address: "No. 1566, Xuefeng West Road, Yiwu",
    chineseAddress: "义乌市雪峰西路1566号",
    scale: "520,000 m² • Industrial Hub",
    focus: "Heavy machinery, injection molding equipment, commercial LED lighting, printing presses, packaging machines, and raw leather/fabric materials.",
    floors: [
      { level: "1F", items: "Printing & Packaging Machinery, Food Processing Equipment, Industrial Fasteners" },
      { level: "2F", items: "Commercial & Decorative Lighting, Chandeliers, Outdoor Solar & Street Lamps" },
      { level: "3F", items: "Raw Leather, PU Synthetic Leather, Sofa Fabrics, Textile Hardware" },
      { level: "4F", items: "Injection Molding Machines, CNC Routers, Power Generators & Motors" }
    ]
  },
  {
    id: "furniture-market",
    name: "Yiwu Furniture Market",
    chineseName: "义乌家具市场",
    address: "No. 1779, Xicheng Road, Yiwu",
    chineseAddress: "义乌市西城路1779号",
    scale: "160,000 m² • Government-Approved Hub",
    focus: "Zhejiang's largest single-complex wholesale and project procurement hub for residential, hotel, office, and classical solid-wood furniture.",
    floors: [
      { level: "B1", items: "Standard Home Furniture, Office Desks, Ergonomic Chairs & Workstations" },
      { level: "1F", items: "Upholstered Sofas, Rattan, Metal & Tempered Glass Furniture" },
      { level: "2F", items: "Modern Panel Furniture, Children's Bedroom Sets & Mattresses" },
      { level: "3F", items: "European Classical, Mahogany & Traditional Solid Wood Furniture" },
      { level: "4F", items: "Custom Space-Management & Boutique Hospitality Furniture" },
      { level: "5F", items: "Bathroom Vanities, Cabinets, Wallpaper, Solar Systems & Interior Decor" }
    ]
  },
  {
    id: "material-market",
    name: "Yiwu Building & Material Market",
    chineseName: "义乌物资市场",
    address: "No. 199, Xicheng Road, Yiwu",
    chineseAddress: "义乌市西城路199号",
    scale: "350+ Specialized Booths",
    focus: "Wholesale distribution center for construction decoration materials, architectural aluminum profiles, natural stone, and ceramics.",
    floors: [
      { level: "Zone A", items: "Architectural Aluminum Profiles, Stainless Steel Sheets & Metal Piping" },
      { level: "Zone B", items: "Marble, Granite, Quartz Slabs & Architectural Stone" },
      { level: "Zone C", items: "Porcelain Floor Tiles, Mosaic Ceramics & Sanitary Fittings" },
      { level: "Zone D", items: "Commercial Lighting Hardware, Cables & Electrical Switchgear" }
    ]
  },
  {
    id: "timber-market",
    name: "Zhezhong Timber Market",
    chineseName: "浙中木材市场",
    address: "No. 266, Xicheng Road, Yiwu",
    chineseAddress: "义乌市西城路266号",
    scale: "500+ Timber & Millwork Stalls",
    focus: "Central Zhejiang's primary timber distribution hub for construction contractors, furniture factories, and interior renovation buyers.",
    floors: [
      { level: "Main", items: "Plywood, MDF, Cladding Panels, Solid Wood Strips & Raw Logs" },
      { level: "Annex", items: "Decorative Wood Moldings, Veneers, Adhesives & Carpentry Hardware" }
    ]
  }
];

export interface SpecializedStreet {
  num: number;
  name: string;
  chineseName: string;
  address: string;
  chineseAddress: string;
  tag: "Stock Lots (80% Off)" | "Raw Materials & Findings" | "Apparel & Accessories" | "Packaging & Gifts" | "Specialty Wholesale";
  products: string;
  insiderTip: string;
}

export const SPECIALIZED_STREETS: SpecializedStreet[] = [
  {
    num: 1,
    name: "Meihu Stock-Lot Street",
    chineseName: "梅湖库存专业街",
    address: "Intersection of Meihu Stock 2nd St & Binwang Rd",
    chineseAddress: "义乌梅湖库存二街与宾王路交叉口",
    tag: "Stock Lots (80% Off)",
    products: "Overproduction & cancelled export orders: garments, fashion jewelry, toys, footwear, luggage, bags, and stationery.",
    insiderTip: "Stock lots sell at up to 70%–80% below standard factory cost. Inspect cartons in person (or contact us for a stall visit) since stock lots are sold 'as-is' in cash RMB."
  },
  {
    num: 2,
    name: "Wuai Inventory & Stock Street",
    chineseName: "五爱库存专业街",
    address: "Zone C, Wuai Village (adjacent to Meihu)",
    chineseAddress: "义乌五爱村C区58幢1单元1号",
    tag: "Stock Lots (80% Off)",
    products: "Surplus factory runs across daily hardware, seasonal decor, hosiery, hats, and fast-moving consumer goods.",
    insiderTip: "Located right next to Meihu. Ideal for off-price retail chains, pound/dollar stores, and African/Middle Eastern container buyers."
  },
  {
    num: 3,
    name: "Changchun Ornament Street (Zones 1–7)",
    chineseName: "长春饰品专业街",
    address: "Changchun Zone 1, opposite West Gate of Futian District 1",
    chineseAddress: "义乌长春一区（商贸城一区西大门对面）",
    tag: "Raw Materials & Findings",
    products: "Natural semi-precious stones, crystals, freshwater pearls, glass beads, shells, ceramics, wood beads, 925 silver & copper/alloy jewelry findings.",
    insiderTip: "If you assemble custom jewelry or buy DIY bead kits, street-level workshops here offer lower MOQs and raw-weight pricing than upper-floor showrooms."
  },
  {
    num: 4,
    name: "Xingzhong Jewelry & Findings Quarter",
    chineseName: "兴中珠宝小区",
    address: "No. 800, Chouzhou North Road, Yiwu",
    chineseAddress: "义乌稠州北路800号",
    tag: "Raw Materials & Findings",
    products: "Acetate hair claw clips, cubic zirconia (rhinestone) jewelry, beading threads, chains, clasps, and zipper sliders.",
    insiderTip: "Directly across from District 1—many Etsy and Amazon boutique jewelry brands source their custom plating and components here."
  },
  {
    num: 5,
    name: "Futian District 3 Scarf & Winterwear Street",
    chineseName: "福田三区专业街",
    address: "No. 1061, Gongren North Road, Yiwu",
    chineseAddress: "义乌工人北路1061号",
    tag: "Apparel & Accessories",
    products: "Knitted scarves, winter beanies, baseball caps, touchscreen gloves, and shawls.",
    insiderTip: "Peak ordering window for European and North American winter season is May through August before factory lines fill up."
  },
  {
    num: 6,
    name: "Huangyuan Bra & Underwear Street",
    chineseName: "篁园内衣专业街",
    address: "Lane 6, Huangyuan Road, Yiwu",
    chineseAddress: "义乌篁园路6弄",
    tag: "Apparel & Accessories",
    products: "Seamless bras, shapewear, lounge pajamas, men's & women's underwear, and thermal base layers.",
    insiderTip: "Situated just steps from Huangyuan Garment Market; many storefronts represent Shantou and Yiwu seamless knitting mills."
  },
  {
    num: 7,
    name: "Huangyuan Eyeglasses Street",
    chineseName: "篁园眼镜专业街",
    address: "No. 190, Jiangbin Middle Road, Yiwu",
    chineseAddress: "义乌江滨中路190号",
    tag: "Apparel & Accessories",
    products: "Polarized sunglasses, TR90 optical frames, blue-light blocking glasses, safety goggles, cases, and microfiber cloths.",
    insiderTip: "Complements District 3 Floor 1 optical booths with rapid pad-printing for private-label temple logos."
  },
  {
    num: 8,
    name: "Zhanqian Furniture Street",
    chineseName: "站前家具专业街",
    address: "No. 247, Chengzhong North Road, Yiwu",
    chineseAddress: "义乌城中北路247号",
    tag: "Specialty Wholesale",
    products: "Traditional Chinese rosewood/elm furniture and compact modern apartment furniture.",
    insiderTip: "Great for restaurant, tea house, and boutique hotel interior procurement."
  },
  {
    num: 9,
    name: "Binwang Cosmetics & Beauty Street",
    chineseName: "宾王化妆品专业街",
    address: "No. 238, Binwang Road, Yiwu",
    chineseAddress: "义乌宾王路238号",
    tag: "Specialty Wholesale",
    products: "Color cosmetics, skincare serums, Arabian/French-style perfumes, nail art UV gels, and makeup brush sets.",
    insiderTip: "Note that liquids, gels, and alcohol-based perfumes require MSDS documentation and specialized shipping lanes."
  },
  {
    num: 10,
    name: "Sunshine Community Cultural & Calendar Street",
    chineseName: "阳光小区专业街",
    address: "No. 408, Zongze North Road, Yiwu",
    chineseAddress: "义乌宗泽北路408号",
    tag: "Packaging & Gifts",
    products: "Custom corporate calendars, Lunar New Year couplets, red envelopes (Hongbao), and promotional paper gifts.",
    insiderTip: "Direct factory storefronts from Wenzhou (Longgang) and Yiwu printing industrial parks."
  },
  {
    num: 11,
    name: "Zhaozhai Specialized Street (Sections 1–5)",
    chineseName: "赵宅专业街",
    address: "Zhaozhai Village Sections 1–5, near Chouzhou North Rd",
    chineseAddress: "义乌赵宅一到五区（稠州北路附近）",
    tag: "Specialty Wholesale",
    products: "Sec 1: Computer & digital peripherals; Sec 2–3: Oil paintings & decorative frames; Sec 4–5: Smoking accessories, hookahs & windproof lighters.",
    insiderTip: "Lighters with butane or batteries are classified as DG (Dangerous Goods)—always declare before booking freight."
  },
  {
    num: 12,
    name: "Chengxin District 1 Wig & Plush Street",
    chineseName: "诚信一区专业街",
    address: "Chengxin Avenue, opposite Gate 67 of Futian Market",
    chineseAddress: "义乌国际商贸城67号门对面诚信大道",
    tag: "Apparel & Accessories",
    products: "Synthetic & human-hair lace wigs, braiding hair extensions, plush toy skins, embroidery lace, and non-woven fabrics.",
    insiderTip: "Major sourcing hub for African and US beauty supply wholesalers."
  },
  {
    num: 13,
    name: "Chouzhou North Gift & Packaging Street",
    chineseName: "稠州北礼品包装街",
    address: "No. 601, Chouzhou North Road, Yiwu",
    chineseAddress: "义乌稠州北路601号",
    tag: "Packaging & Gifts",
    products: "Rigid magnetic gift boxes, velvet jewelry pouches, kraft shopping bags, custom foil-stamped retail boxes, and ribbons.",
    insiderTip: "Yiwu's secret weapon for Amazon/Shopify sellers: customize luxury retail packaging here at 1/3 the MOQ of Alibaba packaging mills."
  },
  {
    num: 14,
    name: "Futian District 2 Christmas & Craft Street",
    chineseName: "福田二区礼品街",
    address: "Near No. 882, Gongren North Road, Yiwu",
    chineseAddress: "义乌工人北路882号附近",
    tag: "Packaging & Gifts",
    products: "Christmas trees, LED string lights, ornaments, Halloween props, and party inflatables.",
    insiderTip: "Yiwu produces ~80% of the world's Christmas decorations. Ground-floor showrooms here handle container-load seasonal programs."
  }
];

