export interface CategoryHub {
  slug: string;
  title: string;
  shortName: string;
  chineseCategory: string;
  district: string;
  districtLabel: string;
  floor: string;
  gateGuide: string;
  searchQuery: string;
  packId: string;
  typicalMoq: string;
  avgMasterCartonCbm: string;
  description: string;
  qcChecklist: string[];
  seoKeywords: string[];
}

export const CATEGORY_HUBS: CategoryHub[] = [
  {
    slug: 'plush-toys-stuffed-animals',
    title: 'Yiwu Plush Toys & Stuffed Animals Wholesale Factories',
    shortName: 'Plush Toys & Stuffed Animals',
    chineseCategory: '毛绒玩具 (District 1, 1F)',
    district: '1',
    districtLabel: 'Futian District 1',
    floor: '1F (Section B & C)',
    gateGuide: 'Gates 6 – 12',
    searchQuery: 'plush',
    packId: 'toys-crafts',
    typicalMoq: '1–3 Cartons (Ready Stock) / 500–1,000 pcs (Custom OEM)',
    avgMasterCartonCbm: '0.18 – 0.28 CBM (Vacuum-compressed available)',
    description: 'Source directly from verified plush toy manufacturers and wholesale stalls in Yiwu International Trade City District 1, Floor 1. Compare PP cotton density, crystal super-soft fabric GSM, and EN71/ASTM F963 export compliance.',
    qcChecklist: [
      'Verify virgin 3D hollow PP cotton filling vs. clumpy recycled scrap foam',
      'Check crystal super-soft velour GSM weight (260g/m² vs. thin 180g/m²) and seam pull-strength (>70N)',
      'Inspect computer embroidery backing and safety eye lock-washers for child safety compliance'
    ],
    seoKeywords: [
      'Yiwu plush toys wholesale',
      'stuffed animals factory China',
      'Yiwu District 1 Floor 1 plush booths',
      'custom plush toy OEM manufacturer China',
      'claw machine plush wholesale Yiwu'
    ]
  },
  {
    slug: 'electric-rc-educational-toys',
    title: 'Yiwu Electric, RC & Educational Plastic Toys Suppliers',
    shortName: 'Electric, RC & Plastic Toys',
    chineseCategory: '电动/遥控/普通玩具 (District 1, 1F)',
    district: '1',
    districtLabel: 'Futian District 1',
    floor: '1F (Section A & D)',
    gateGuide: 'Gates 1 – 8',
    searchQuery: 'toy',
    packId: 'toys-crafts',
    typicalMoq: '1–5 Master Cartons (36–96 pcs/carton)',
    avgMasterCartonCbm: '0.16 – 0.24 CBM (18–24 kg gross)',
    description: 'Direct access to Yiwu District 1 showrooms representing Shantou Chenghai and Yiwu plastic toy factories: RC cars, drones, STEM building blocks, die-cast vehicles, and educational bath toys.',
    qcChecklist: [
      'Inspect ABS/PP injection molding parting lines for sharp flashing or brittle recycled regrind',
      'Verify battery compartment screw locks, PCB soldering, and 2.4GHz RC frequency pairing',
      'Confirm CPC, ASTM F963, and EN71 lab test certificates before US/EU shipment'
    ],
    seoKeywords: [
      'Yiwu plastic toys wholesale',
      'RC car drone factory China',
      'educational STEM toys manufacturer Yiwu',
      'Yiwu District 1 toy stalls WeChat',
      'Chenghai toy factory showroom Yiwu'
    ]
  },
  {
    slug: 'artificial-flowers-plants',
    title: 'Yiwu Artificial Flowers, Silk Plants & Wedding Greenery Stalls',
    shortName: 'Artificial Flowers & Greenery',
    chineseCategory: '仿真花/花类配件 (District 1, 1F)',
    district: '1',
    districtLabel: 'Futian District 1',
    floor: '1F (East Wing)',
    gateGuide: 'Gates 13 – 18',
    searchQuery: 'flower',
    packId: 'toys-crafts',
    typicalMoq: '1–2 Cartons per SKU (100–500 stems)',
    avgMasterCartonCbm: '0.22 – 0.35 CBM (High volumetric weight — best for Sea LCL/FCL)',
    description: 'Over 1,200 specialized booths in Yiwu District 1 supplying real-touch latex roses, silk wedding arches, UV-resistant boxwood hedge panels, and artificial potted trees.',
    qcChecklist: [
      'Test petal dye fastness and glue bond between flower heads and wire-core stems',
      'Verify UV-inhibitor additive percentage on outdoor artificial boxwood panels',
      'Check inner-box compression packing to minimize wasted ocean freight CBM'
    ],
    seoKeywords: [
      'Yiwu artificial flowers wholesale',
      'silk wedding flowers manufacturer China',
      'artificial plant wall panels Yiwu factory',
      'real touch latex flowers wholesale China'
    ]
  },
  {
    slug: 'fashion-jewelry-ornaments',
    title: 'Yiwu Fashion Jewelry, 316L Stainless Steel & Rhinestone Factories',
    shortName: 'Fashion & Stainless Jewelry',
    chineseCategory: '饰品/珠宝首饰 (District 1, 2F)',
    district: '1',
    districtLabel: 'Futian District 1',
    floor: '2F (Central & West)',
    gateGuide: 'Gates 4 – 14',
    searchQuery: 'jewelry',
    packId: 'toys-crafts',
    typicalMoq: '10–20 Dozen per style (Ready Stock) / 300 pcs (Custom PVD Plating)',
    avgMasterCartonCbm: '0.04 – 0.08 CBM (High density — ideal for Express / Air AFUC)',
    description: 'Yiwu supplies over 70% of the world’s fashion jewelry. Connect directly with District 1, Floor 2 manufacturers producing 18K PVD gold-plated 316L stainless steel, brass cubic zirconia, and zinc-alloy jewelry.',
    qcChecklist: [
      'Verify 18K vacuum PVD gold plating thickness (0.03μm–0.05μm) and 48-hour salt-spray tarnish resistance',
      'Confirm lead-free and nickel-free compliance (REACH / California Prop 65)',
      'Inspect stone-setting prong tightness and clasp spring durability'
    ],
    seoKeywords: [
      'Yiwu fashion jewelry wholesale',
      '316L stainless steel jewelry factory Yiwu',
      'PVD gold plated jewelry manufacturer China',
      'Yiwu District 1 Floor 2 jewelry booths'
    ]
  },
  {
    slug: 'hair-accessories-headwear',
    title: 'Yiwu Hair Accessories, Acetate Claws & Headwear Manufacturers',
    shortName: 'Hair Claws & Accessories',
    chineseCategory: '头饰/发饰品 (District 1, 2F)',
    district: '1',
    districtLabel: 'Futian District 1',
    floor: '2F (East Wing)',
    gateGuide: 'Gates 1 – 6',
    searchQuery: 'hair',
    packId: 'toys-crafts',
    typicalMoq: '10–30 Dozen per SKU (Mixed colors allowed)',
    avgMasterCartonCbm: '0.08 – 0.14 CBM',
    description: 'Source cellulose acetate hair claws, satin scrunchies, pearl headbands, and bridal hairpins directly from Yiwu District 1, Floor 2 factory stalls.',
    qcChecklist: [
      'Distinguish genuine cellulose acetate sheet claws from brittle injection-molded acrylic',
      'Test steel torsion spring tension (300+ open/close cycles without loosening)',
      'Verify custom retail header-card printing and barcode placement'
    ],
    seoKeywords: [
      'Yiwu hair accessories wholesale',
      'acetate hair claw clips factory China',
      'custom scrunchies headband manufacturer Yiwu'
    ]
  },
  {
    slug: 'christmas-festival-crafts',
    title: 'Yiwu Christmas Decorations, Festival Crafts & Party Supplies',
    shortName: 'Christmas & Festival Crafts',
    chineseCategory: '节日工艺/圣诞用品 (District 1, 3F)',
    district: '1',
    districtLabel: 'Futian District 1',
    floor: '3F',
    gateGuide: 'Gates 8 – 16',
    searchQuery: 'craft',
    packId: 'toys-crafts',
    typicalMoq: '2–5 Cartons per item (Peak ordering: March – August)',
    avgMasterCartonCbm: '0.18 – 0.30 CBM',
    description: 'Over 80% of global Christmas and holiday decorations originate in Yiwu District 1, Floor 3: PVC/PE Christmas trees, LED string ornaments, resin figurines, Halloween props, and party balloons.',
    qcChecklist: [
      'Verify flame-retardant PVC/PE needle thickness and steel branch hinge weld strength',
      'Check glitter adhesion coating and shatterproof bauble seam finishes',
      'Test LED battery boxes and UL/CE transformer plugs on lighted holiday decor'
    ],
    seoKeywords: [
      'Yiwu Christmas decorations wholesale',
      'festival crafts party supplies factory China',
      'Yiwu District 1 Floor 3 Christmas booths'
    ]
  },
  {
    slug: 'bags-backpacks-luggage',
    title: 'Yiwu Bags, Backpacks, Handbags & ABS/PC Luggage Factories',
    shortName: 'Bags, Backpacks & Luggage',
    chineseCategory: '箱包皮具 (District 2, 1F)',
    district: '2',
    districtLabel: 'Futian District 2',
    floor: '1F',
    gateGuide: 'Gates 20 – 38',
    searchQuery: 'bag',
    packId: 'hardware-kitchen',
    typicalMoq: '50–100 pcs (Ready Stock) / 300–500 pcs (Custom Logo)',
    avgMasterCartonCbm: '0.15 – 0.26 CBM (Nesting 20"/24"/28" luggage sets save 60% CBM)',
    description: 'Browse verified luggage and bag manufacturers in Yiwu District 2, Floor 1: PU leather handbags, Oxford laptop backpacks, primary schoolbags, cosmetic pouches, and 3-piece nesting ABS/PC trolley suitcases.',
    qcChecklist: [
      'Inspect Oxford/PU fabric denier (600D/900D/1680D), interior lining tear resistance, and bar-tack stitching at shoulder strap stress points',
      'Test zipper slider smoothness (100+ rapid pulls) and telescopic aluminum trolley handle wobble (<1.5cm)',
      'Verify nesting packing (20" inside 24" inside 28") to cut sea freight CBM by 60%'
    ],
    seoKeywords: [
      'Yiwu bags wholesale market',
      'backpack schoolbag factory China',
      'ABS PC luggage suitcase manufacturer Yiwu',
      'Yiwu District 2 Floor 1 bag stalls'
    ]
  },
  {
    slug: 'hardware-tools-locks',
    title: 'Yiwu Hardware Tools, Power Tools, Locks & Fasteners Directory',
    shortName: 'Hardware Tools & Locks',
    chineseCategory: '五金工具/锁具 (District 2, 2F)',
    district: '2',
    districtLabel: 'Futian District 2',
    floor: '2F',
    gateGuide: 'Gates 22 – 36',
    searchQuery: 'hardware',
    packId: 'hardware-kitchen',
    typicalMoq: '2–5 Cartons (Dense cargo — high gross weight per CBM)',
    avgMasterCartonCbm: '0.03 – 0.06 CBM (20–28 kg gross — ideal for Sea FCL/LCL)',
    description: 'Connect directly with Yongkang and Yiwu hardware manufacturers in District 2, Floor 2: chrome-vanadium hand tools, brushless cordless power tools, brass/laminated padlocks, smart fingerprint locks, and plumbing fittings.',
    qcChecklist: [
      'Verify steel alloy grade (Cr-V Chrome Vanadium vs. low-carbon iron) and Rockwell hardness (HRC)',
      'Measure tool shaft diameter and lock shackle thickness with digital vernier calipers',
      'Check double-wall export cartons with reinforced strapping to prevent heavy hardware bursting in transit'
    ],
    seoKeywords: [
      'Yiwu hardware tools wholesale',
      'hand tools power tools factory China',
      'padlocks smart locks manufacturer Yiwu District 2'
    ]
  },
  {
    slug: 'kitchenware-cookware-cutlery',
    title: 'Yiwu Kitchenware, 304 Stainless Cookware & Vacuum Flask Stalls',
    shortName: 'Kitchenware & Cookware',
    chineseCategory: '厨卫/不锈钢制品 (District 2, 3F)',
    district: '2',
    districtLabel: 'Futian District 2',
    floor: '3F',
    gateGuide: 'Gates 25 – 39',
    searchQuery: 'kitchen',
    packId: 'hardware-kitchen',
    typicalMoq: '1–3 Cartons (Ready Stock) / 500–1,000 pcs (Laser Logo)',
    avgMasterCartonCbm: '0.09 – 0.16 CBM',
    description: 'Source insulated 304/316 stainless steel tumblers, non-stick aluminum cookware sets, silicone baking utensils, chef knives, and food storage containers from Yiwu District 2, Floor 3.',
    qcChecklist: [
      'Perform chemical drop-test on stainless steel (confirm food-grade SUS304/316 vs. cheaper SUS201)',
      'Test vacuum insulation heat retention (6–12 hour hot water test) and silicone lid seal leak-proofing',
      'Verify FDA / LFGB food-contact safety documentation'
    ],
    seoKeywords: [
      'Yiwu kitchenware wholesale',
      'stainless steel vacuum flask tumbler factory China',
      'cookware kitchen utensils manufacturer Yiwu'
    ]
  },
  {
    slug: 'small-home-appliances',
    title: 'Yiwu Small Home Appliances, Personal Care & Electrical Goods',
    shortName: 'Small Home Appliances',
    chineseCategory: '家用电器/电子电工 (District 2, 3F)',
    district: '2',
    districtLabel: 'Futian District 2',
    floor: '3F (East & North)',
    gateGuide: 'Gates 30 – 42',
    searchQuery: 'appliance',
    packId: 'hardware-kitchen',
    typicalMoq: '2–5 Cartons (Custom voltage/plugs: 300–500 pcs)',
    avgMasterCartonCbm: '0.10 – 0.18 CBM',
    description: 'Direct factory showrooms in Yiwu District 2, Floor 3 supplying portable blenders, electric kettles, hair clippers, garment steamers, air fryers, and universal power strips.',
    qcChecklist: [
      'Verify pure copper motor windings vs. copper-clad aluminum (CCA) and correct voltage (110V US vs. 220V EU/UK)',
      'Inspect plug type (UL Type A/B, EU Type C/F, UK BS1363 fused) and wire gauge thickness',
      'Confirm CE, RoHS, FCC, or UL/ETL safety certifications and UN38.3 MSDS for lithium battery units'
    ],
    seoKeywords: [
      'Yiwu small home appliances wholesale',
      'hair clipper blender kettle factory China',
      'Yiwu District 2 electrical appliances supplier'
    ]
  },
  {
    slug: 'stationery-school-office-supplies',
    title: 'Yiwu Stationery, Gel Pens, Notebooks & Office Supplies Factories',
    shortName: 'Stationery & Office Supplies',
    chineseCategory: '文化办公/笔墨纸张 (District 3, 1F–2F)',
    district: '3',
    districtLabel: 'Futian District 3',
    floor: '1F & 2F',
    gateGuide: 'Gates 45 – 58',
    searchQuery: 'stationery',
    packId: 'stationery-office',
    typicalMoq: '1–3 Cartons (Pens: 1,440–5,000 pcs)',
    avgMasterCartonCbm: '0.04 – 0.09 CBM',
    description: 'Yiwu District 3 is the global capital for school and office stationery: gel pens, highlighters, PU hardcover journals, acrylic desk organizers, backpacks, and art supplies.',
    qcChecklist: [
      'Test pen nib ink flow consistency (500m continuous writing test without skipping or leaking)',
      'Verify notebook paper GSM thickness (80gsm/100gsm/120gsm bleed-proof) and binding glue durability',
      'Inspect retail display box (PDQ) printing and barcode scannability'
    ],
    seoKeywords: [
      'Yiwu stationery wholesale market',
      'gel pens notebooks factory China',
      'school office supplies manufacturer Yiwu District 3'
    ]
  },
  {
    slug: 'sports-fitness-outdoor-gear',
    title: 'Yiwu Sports Equipment, Fitness Gear & Outdoor Camping Suppliers',
    shortName: 'Sports, Fitness & Outdoor',
    chineseCategory: '体育用品/户外休闲 (District 3, 2F & 4F)',
    district: '3',
    districtLabel: 'Futian District 3',
    floor: '2F & 4F',
    gateGuide: 'Gates 52 – 65',
    searchQuery: 'sport',
    packId: 'stationery-office',
    typicalMoq: '1–3 Cartons (Custom logo: 100–300 pcs)',
    avgMasterCartonCbm: '0.08 – 0.18 CBM',
    description: 'Source TPE/PU yoga mats, resistance bands, neoprene dumbbells, soccer balls, badminton rackets, and folding camping chairs from Yiwu District 3 manufacturers.',
    qcChecklist: [
      'Measure yoga mat thickness (6mm/8mm), density, and tear strength; check latex resistance band snap-test tolerance',
      'Verify football/basketball bladder air retention (72-hour inflation test)',
      'Inspect folding camping chair steel tube wall thickness (0.8mm–1.2mm) and static load capacity'
    ],
    seoKeywords: [
      'Yiwu sports equipment wholesale',
      'fitness yoga mat resistance bands factory China',
      'outdoor camping gear manufacturer Yiwu'
    ]
  },
  {
    slug: 'cosmetics-beauty-nail-tools',
    title: 'Yiwu Cosmetics, Makeup Brushes, Nail Art & Beauty Tools Directory',
    shortName: 'Cosmetics & Beauty Tools',
    chineseCategory: '化妆品/美容美发 (District 3, 3F)',
    district: '3',
    districtLabel: 'Futian District 3',
    floor: '3F',
    gateGuide: 'Gates 60 – 72',
    searchQuery: 'cosmetic',
    packId: 'stationery-office',
    typicalMoq: '2–5 Cartons (Private label packaging: 500–1,000 pcs)',
    avgMasterCartonCbm: '0.05 – 0.10 CBM',
    description: 'Over 1,500 booths on Floor 3 of Yiwu District 3 dedicated to synthetic/goat-hair makeup brushes, press-on nails, UV gel lamps, false eyelashes, facial rollers, and cosmetic packaging bottles.',
    qcChecklist: [
      'Perform bristle pull-test on makeup brushes (zero shedding under firm tug) and aluminum ferrule crimp inspection',
      'Verify MSDS, FDA cosmetic registration, or EU CPNP ingredient sheets for liquid/gel products',
      'Check vacuum pump & dropper bottle leak resistance under negative pressure'
    ],
    seoKeywords: [
      'Yiwu cosmetics beauty wholesale',
      'makeup brushes press on nails factory China',
      'Yiwu District 3 Floor 3 beauty booths'
    ]
  },
  {
    slug: 'eyewear-sunglasses-optical',
    title: 'Yiwu Eyewear, Polarized Sunglasses & Optical Frames Manufacturers',
    shortName: 'Sunglasses & Optical Frames',
    chineseCategory: '眼镜 (District 3, 1F)',
    district: '3',
    districtLabel: 'Futian District 3',
    floor: '1F (North Zone)',
    gateGuide: 'Gates 48 – 54',
    searchQuery: 'glasses',
    packId: 'stationery-office',
    typicalMoq: '120–300 pcs per model (10–25 dozen)',
    avgMasterCartonCbm: '0.06 – 0.09 CBM (300 pcs/carton)',
    description: 'Direct Wenzhou, Taizhou, and Yiwu eyewear factories in District 3, Floor 1: TAC polarized sunglasses, TR90 anti-blue-light computer glasses, acetate optical frames, and reading glasses.',
    qcChecklist: [
      'Verify UV400 protection and TAC polarization filter alignment using a digital UV/polarizer tester',
      'Inspect spring hinge durability and temple arm symmetry on flat surface test',
      'Confirm FDA Drop-Ball impact test compliance for US eyewear imports'
    ],
    seoKeywords: [
      'Yiwu sunglasses eyewear wholesale',
      'polarized sunglasses optical frames factory China',
      'anti blue light glasses manufacturer Yiwu'
    ]
  },
  {
    slug: 'socks-hosiery-leggings',
    title: 'Yiwu Socks, Hosiery & Seamless Leggings Direct Mills',
    shortName: 'Socks, Hosiery & Leggings',
    chineseCategory: '袜类/打底裤 (District 4, 1F)',
    district: '4',
    districtLabel: 'Futian District 4',
    floor: '1F',
    gateGuide: 'Gates 75 – 88',
    searchQuery: 'sock',
    packId: 'daily-footwear',
    typicalMoq: '1–2 Bales/Cartons (Ready Stock) / 1,200–2,000 pairs (Custom Jacquard Logo)',
    avgMasterCartonCbm: '0.14 – 0.22 CBM',
    description: 'Yiwu and neighboring Datang produce over 35% of the world’s socks. Connect directly with District 4, Floor 1 knitting mills for combed cotton athletic socks, bamboo dress socks, baby non-slip socks, and fleece leggings.',
    qcChecklist: [
      'Verify actual combed cotton vs. polyester/spandex blend percentage and single-pair gram weight',
      'Check needle count (144N / 168N / 200N) and Rosso vs. hand-linked seamless toe closure',
      'Inspect custom jacquard knit logo clarity and rider header-card stitching'
    ],
    seoKeywords: [
      'Yiwu socks wholesale market',
      'custom logo socks factory China',
      'Yiwu District 4 Floor 1 hosiery mills'
    ]
  },
  {
    slug: 'daily-household-necessities',
    title: 'Yiwu Daily Necessities, Home Storage & Cleaning Goods Directory',
    shortName: 'Daily Necessities & Storage',
    chineseCategory: '日用百货/居家日用 (District 4, 2F)',
    district: '4',
    districtLabel: 'Futian District 4',
    floor: '2F',
    gateGuide: 'Gates 76 – 90',
    searchQuery: 'daily',
    packId: 'daily-footwear',
    typicalMoq: '1–5 Master Cartons per SKU',
    avgMasterCartonCbm: '0.12 – 0.25 CBM',
    description: 'The world’s largest selection of supermarket & dollar-store daily necessities in Yiwu District 4, Floor 2: foldable storage bins, microfiber cleaning cloths, spin mops, bath brushes, hangers, and adhesive hooks.',
    qcChecklist: [
      'Measure plastic wall thickness and load-bearing strength on foldable storage crates and hangers',
      'Verify microfiber GSM weight (300gsm–400gsm) and water absorption ratio',
      'Check stackable/knock-down packaging design to minimize container CBM'
    ],
    seoKeywords: [
      'Yiwu daily necessities wholesale',
      'dollar store household items factory China',
      'home storage cleaning products Yiwu District 4'
    ]
  },
  {
    slug: 'footwear-shoes-slippers',
    title: 'Yiwu Footwear, EVA Slippers, Sandals & Sneakers Manufacturers',
    shortName: 'Footwear, Shoes & Slippers',
    chineseCategory: '鞋类 (District 4, 3F)',
    district: '4',
    districtLabel: 'Futian District 4',
    floor: '3F',
    gateGuide: 'Gates 78 – 92',
    searchQuery: 'shoe',
    packId: 'daily-footwear',
    typicalMoq: '1–3 Cartons per color/size run (30–60 pairs/carton)',
    avgMasterCartonCbm: '0.16 – 0.24 CBM',
    description: 'Source high-density EVA pillow slippers, hotel disposable slippers, vulcanized canvas sneakers, women’s sandals, and kids’ LED shoes directly from Yiwu District 4, Floor 3.',
    qcChecklist: [
      'Test EVA foam Shore C durometer softness/rebound and outsole anti-slip tread depth',
      'Inspect sole-to-upper cement glue bond for delamination or glue overflow marks',
      'Verify accurate US/EU/UK size-run assortment ratios per master carton'
    ],
    seoKeywords: [
      'Yiwu shoes footwear wholesale',
      'EVA slippers sandals factory China',
      'Yiwu District 4 Floor 3 shoe stalls'
    ]
  },
  {
    slug: 'hats-caps-gloves-scarves',
    title: 'Yiwu Hats, Baseball Caps, Winter Gloves & Silk Scarves Stalls',
    shortName: 'Hats, Caps, Gloves & Scarves',
    chineseCategory: '帽类/手套/围巾 (District 4, 2F & 4F)',
    district: '4',
    districtLabel: 'Futian District 4',
    floor: '2F & 4F',
    gateGuide: 'Gates 80 – 94',
    searchQuery: 'hat',
    packId: 'daily-footwear',
    typicalMoq: '5–10 Dozen (Ready Stock) / 300 pcs (3D Embroidery Logo)',
    avgMasterCartonCbm: '0.12 – 0.18 CBM',
    description: 'Connect with Yiwu District 4 manufacturers producing 6-panel cotton twill baseball caps, trucker hats, acrylic winter beanies, touchscreen cycling gloves, and cashmere-feel/silk scarves.',
    qcChecklist: [
      'Check crown buckram stiffness, sweatband stitching, and 3D puff embroidery stitch count',
      'Verify scarf dimensions (e.g. 180×70cm) and actual gram weight per piece',
      'Ensure structured caps are packed with inner cardboard neck rings so crowns do not crush in transit'
    ],
    seoKeywords: [
      'Yiwu hats baseball caps wholesale',
      'custom embroidered cap factory China',
      'scarves winter gloves manufacturer Yiwu District 4'
    ]
  },
  {
    slug: 'underwear-belts-accessories',
    title: 'Yiwu Seamless Underwear, Leather Belts & Garment Accessories',
    shortName: 'Underwear, Belts & Ties',
    chineseCategory: '内衣/皮带/领带 (District 4, 4F)',
    district: '4',
    districtLabel: 'Futian District 4',
    floor: '4F',
    gateGuide: 'Gates 77 – 89',
    searchQuery: 'belt',
    packId: 'daily-footwear',
    typicalMoq: '10–20 Dozen per style',
    avgMasterCartonCbm: '0.08 – 0.14 CBM',
    description: 'Yiwu employs world-leading Santoni seamless knitting machines. Source laser-cut seamless underwear, sports bras, shapewear, genuine/split leather ratchet belts, and woven jacquard neckties from District 4, Floor 4.',
    qcChecklist: [
      'Verify nylon/spandex Lycra recovery stretch and gusset cotton lining hygiene standards',
      'Distinguish top-grain cowhide leather belts from split-leather or bonded PU straps',
      'Inspect zinc-alloy automatic ratchet belt buckles for scratch-free electroplating'
    ],
    seoKeywords: [
      'Yiwu seamless underwear factory',
      'leather belts buckles wholesale China',
      'Yiwu District 4 Floor 4 underwear stalls'
    ]
  },
  {
    slug: 'bedding-blankets-home-textiles',
    title: 'Yiwu Bedding Sets, Flannel Blankets & Hotel Linen Mills',
    shortName: 'Bedding, Blankets & Linen',
    chineseCategory: '床上用品/毛毯 (District 5, 2F)',
    district: '5',
    districtLabel: 'Futian District 5',
    floor: '2F',
    gateGuide: 'Gates 96 – 106',
    searchQuery: 'bedding',
    packId: 'home-textiles-auto',
    typicalMoq: '1–3 Bales/Cartons (30–60 sets)',
    avgMasterCartonCbm: '0.20 – 0.32 CBM (Hydraulic bale compression cuts CBM by 50%)',
    description: 'Direct textile mills in Yiwu District 5, Floor 2 producing Raschel & coral fleece blankets, hotel white percale/sateen bedsheet sets, waterproof mattress protectors, and microfiber comforters.',
    qcChecklist: [
      'Weigh finished blanket/sheet sets on a digital scale to verify exact GSM (e.g., 280gsm vs. 220gsm flannel)',
      'Check colorfastness to washing (Grade 4+) and anti-pilling brush finish',
      'Request hydraulic vacuum-bale packing to double the number of units loaded per 40\'HQ container'
    ],
    seoKeywords: [
      'Yiwu bedding blankets wholesale',
      'flannel fleece blanket factory China',
      'hotel bedsheets linen manufacturer Yiwu District 5'
    ]
  },
  {
    slug: 'curtains-upholstery-fabrics',
    title: 'Yiwu Blackout Curtains, Jacquard Fabrics & Tablecloths Directory',
    shortName: 'Curtains & Upholstery Fabrics',
    chineseCategory: '窗帘布艺/纺织原料 (District 5, 3F)',
    district: '5',
    districtLabel: 'Futian District 5',
    floor: '3F',
    gateGuide: 'Gates 98 – 108',
    searchQuery: 'curtain',
    packId: 'home-textiles-auto',
    typicalMoq: '1–3 Rolls (Fabrics) / 50–100 panels (Finished Curtains)',
    avgMasterCartonCbm: '0.14 – 0.22 CBM',
    description: 'Source 3-pass blackout curtains, sheer voile drapes, chenille sofa covers, PVC/lace tablecloths, and upholstery fabric rolls directly from Yiwu District 5, Floor 3 weaving mills.',
    qcChecklist: [
      'Test light-blocking percentage (85% physical triple-weave vs. 100% coated blackout)',
      'Inspect stainless steel vs. plastic grommet eyelets and bottom hem lead-weight stitching',
      'Verify roll yardage accuracy and width consistency (150cm vs. 280cm wide-width)'
    ],
    seoKeywords: [
      'Yiwu curtains fabric wholesale',
      'blackout curtains sofa covers factory China',
      'Yiwu District 5 Floor 3 textile booths'
    ]
  },
  {
    slug: 'auto-parts-car-accessories',
    title: 'Yiwu Auto Parts, LED Headlights, Car Accessories & Motorcycle Gear',
    shortName: 'Auto Parts & Car Accessories',
    chineseCategory: '汽车用品/摩配 (District 5, 4F)',
    district: '5',
    districtLabel: 'Futian District 5',
    floor: '4F',
    gateGuide: 'Gates 100 – 112',
    searchQuery: 'auto',
    packId: 'home-textiles-auto',
    typicalMoq: '1–5 Cartons per SKU',
    avgMasterCartonCbm: '0.06 – 0.16 CBM',
    description: 'Over 1,500 booths on Floor 4 of Yiwu District 5 specializing in automotive aftermarket accessories: LED headlight bulbs, TPE floor mats, universal seat covers, car phone mounts, wiper blades, and motorcycle helmets/parts.',
    qcChecklist: [
      'Test LED bulb true lumen output, CANbus error-free decoder stability, and cooling fan noise',
      'Verify odorless virgin TPE/leather material on car seat covers and floor mats',
      'Check DOT / ECE R22.06 certification on motorcycle helmets and E-mark on automotive lighting'
    ],
    seoKeywords: [
      'Yiwu auto parts car accessories wholesale',
      'LED car headlights seat covers factory China',
      'motorcycle parts accessories Yiwu District 5'
    ]
  },
  {
    slug: 'pet-supplies-accessories',
    title: 'Yiwu Pet Supplies, Dog Leashes, Cat Trees & Grooming Manufacturers',
    shortName: 'Pet Supplies & Accessories',
    chineseCategory: '宠物用品 (District 5, 2F)',
    district: '5',
    districtLabel: 'Futian District 5',
    floor: '2F (Zone E)',
    gateGuide: 'Gates 95 – 101',
    searchQuery: 'pet',
    packId: 'home-textiles-auto',
    typicalMoq: '2–5 Cartons (Ready Stock) / 300 pcs (Custom Pattern)',
    avgMasterCartonCbm: '0.12 – 0.24 CBM',
    description: 'Source washable plush pet beds, reflective nylon dog harnesses, retractable leashes, sisal cat scratching posts, interactive chew toys, and stainless pet bowls in Yiwu District 5.',
    qcChecklist: [
      'Test zinc-alloy D-ring and swivel snap-hook tensile break strength on dog leashes and harnesses',
      'Verify food-grade non-toxic TPR rubber on pet chew toys and slow-feeder bowls',
      'Check vacuum-flat packing on plush pet beds to cut shipping volume by 65%'
    ],
    seoKeywords: [
      'Yiwu pet supplies wholesale',
      'dog leash harness pet bed factory China',
      'cat toys pet accessories manufacturer Yiwu'
    ]
  },
  {
    slug: 'wholesale-apparel-denim-garments',
    title: 'Yiwu Huangyuan Garment Market: Wholesale Denim, Jackets & Apparel',
    shortName: 'Apparel, Denim & Garments',
    chineseCategory: '服装服饰/牛仔 (Huangyuan Market 1F–5F)',
    district: '6',
    districtLabel: 'Huangyuan Garment Market',
    floor: '1F – 5F',
    gateGuide: 'Main Atrium Gates 1 – 6 (180 Jiangbin Middle Rd)',
    searchQuery: 'clothing',
    packId: 'garments-apparel',
    typicalMoq: '1–3 Size-Run Bundles (Ready Stock) / 300 pcs per style (Cut & Sew OEM)',
    avgMasterCartonCbm: '0.14 – 0.22 CBM',
    description: 'Explore Yiwu’s 8-story Huangyuan Garment Market: enzyme-washed denim jeans (1F), men’s jackets & T-shirts (2F), women’s fashion dresses (3F), pajamas & sportswear (4F), and children’s clothing sets (5F).',
    qcChecklist: [
      'Measure garment chest, waist, and length tolerances (+/- 1.5cm) against US/EU size charts (avoid Asian size-down errors)',
      'Verify fabric GSM weight, shrinkage rate (<3%), and overlock seam stitch density',
      'Check custom woven neck labels, care wash tags, and individual polybag barcode stickers'
    ],
    seoKeywords: [
      'Yiwu Huangyuan garment market wholesale',
      'wholesale denim jeans clothing factory China',
      'kids clothing sportswear manufacturer Yiwu'
    ]
  }
];

export function getCategoryBySlug(slug: string): CategoryHub | undefined {
  return CATEGORY_HUBS.find(c => c.slug === slug);
}
