export type LocaleCode = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'ar' | 'ru' | 'it';

export interface LocaleConfig {
  code: LocaleCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  hreflang: string;
  regionLabel: string;
}

export const SUPPORTED_LOCALES: LocaleConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr', hreflang: 'en', regionLabel: 'USA, Canada, UK & Global' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr', hreflang: 'es', regionLabel: 'México, Sudamérica y España' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', dir: 'ltr', hreflang: 'pt', regionLabel: 'Brasil e Portugal' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr', hreflang: 'fr', regionLabel: 'France, Canada (QC) & Afrique' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr', hreflang: 'de', regionLabel: 'Deutschland, Österreich & Schweiz' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', dir: 'rtl', hreflang: 'ar', regionLabel: 'الإمارات، السعودية والشرق الأوسط' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇰🇿', dir: 'ltr', hreflang: 'ru', regionLabel: 'Казахстан, СНГ и Восточная Европа' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', dir: 'ltr', hreflang: 'it', regionLabel: 'Italia & Svizzera' }
];

export const NON_DEFAULT_LOCALES: LocaleCode[] = ['es', 'pt', 'fr', 'de', 'ar', 'ru', 'it'];

export function isValidLocale(code: string | undefined): code is LocaleCode {
  return !!code && SUPPORTED_LOCALES.some(l => l.code === code);
}

export function getLocaleConfig(code?: string): LocaleConfig {
  return SUPPORTED_LOCALES.find(l => l.code === code) || SUPPORTED_LOCALES[0];
}

/**
 * Comprehensive Chinese-to-English B2B Wholesale Category Dictionary
 * Covers all 66 top-level segments and 310+ high-frequency category segments across 27,706 Yiwu stalls.
 */
export const CHINESE_CATEGORY_MAP: Record<string, string> = {
  // Top 1 - 60
  '饰品': 'Jewelry & Ornaments',
  '日用百货': 'Daily Necessities & General Merchandise',
  '办公、文化': 'Office & Cultural Supplies',
  '纺织、皮革': 'Textiles & Leather',
  '服装配饰': 'Apparel Accessories',
  '女装': "Women's Apparel",
  '发饰&头饰': 'Hair & Head Ornaments',
  '玩具': 'Toys & Games',
  '内衣': 'Underwear & Intimates',
  '纺织辅料': 'Textile Trims & Findings',
  '运动户外': 'Sports & Outdoor',
  '工艺品、礼品': 'Crafts & Gifts',
  '箱包皮具': 'Bags & Leather Goods',
  '家纺': 'Home Textiles & Bedding',
  '包装': 'Packaging & Printing',
  '男装': "Men's Apparel",
  '灯饰照明': 'Lighting & LED',
  '童装': "Children's Wear",
  '家装建材': 'Building Materials & Hardware',
  '五金、工具': 'Hardware & Tools',
  '美容护肤/彩妆': 'Beauty, Skincare & Cosmetics',
  '围巾/丝巾/防晒衣': 'Scarves, Silk & Sunwear',
  '发夹': 'Hair Clips',
  '鞋': 'Footwear & Shoes',
  '围巾': 'Scarves & Shawls',
  '帽子/头巾': 'Hats, Caps & Headwear',
  '饰品配件': 'Jewelry Findings & Parts',
  '童T恤': "Kids' T-Shirts",
  '工艺品': 'Handicrafts & Artwork',
  '耳饰': 'Earrings',
  '家用电器': 'Home Appliances',
  '连衣裙': 'Dresses',
  '餐具': 'Tableware & Dining',
  '家饰': 'Home Decor',
  '杯具': 'Drinkware & Mugs',
  '袜子': 'Socks & Hosiery',
  'Stationery, Office, Sports & Glasses': 'Stationery, Office, Sports & Eyewear',
  '其他分类': 'General Wholesale Merchandise',
  '女式T恤': "Women's T-Shirts",
  '手饰': 'Bracelets & Hand Jewelry',
  '书写工具': 'Pens & Writing Instruments',
  '双肩背包': 'Backpacks',
  '耳环': 'Hoop & Drop Earrings',
  '成人帽': 'Adult Hats & Caps',
  '数码、电脑': 'Digital & Computer Accessories',
  '皮革': 'Leather Materials',
  '男式T恤': "Men's T-Shirts",
  '男士T恤': "Men's T-Shirts",
  '机械及行业设备': 'Machinery & Industrial Equipment',
  '电工电气': 'Electrical Equipment & Supplies',
  '项饰': 'Necklaces & Pendants',
  '进口商品': 'Imported Consumer Goods',
  '美妆工具': 'Beauty & Makeup Tools',
  '文胸': 'Bras & Lingerie',
  '益智、科教玩具': 'Educational & STEM Toys',
  '针织面料': 'Knitted Fabrics',
  '学习文具': 'School & Student Stationery',
  '内裤': 'Briefs & Underwear',
  '项链': 'Necklaces & Chains',
  '腰带&腰链&腰封': 'Belts, Waist Chains & Corsets',

  // 61 - 120
  '眼镜及配件': 'Eyewear, Sunglasses & Accessories',
  '公仔、玩偶、娃娃': 'Dolls, Plush & Action Figures',
  '塑料包装袋': 'Plastic Packaging Bags',
  '个护/家清': 'Personal Care & Household Cleaning',
  '家务清洁用具': 'Household Cleaning Tools',
  '气氛、布置用品': 'Party & Event Decorations',
  '女士包袋': "Women's Handbags & Purses",
  '宠物及园艺': 'Pet Supplies & Gardening',
  '男士衬衫': "Men's Shirts",
  '女式衬衫': "Women's Blouses & Shirts",
  '仿真园艺': 'Artificial Plants & Floral',
  '童卫衣': "Kids' Hoodies & Sweatshirts",
  '手套/袖套': 'Gloves & Arm Sleeves',
  '女式休闲裤': "Women's Casual Pants",
  '腰带': 'Belts',
  '安全、防护': 'Safety & Personal Protective Equipment (PPE)',
  '汽车用品': 'Auto Accessories & Car Care',
  '休闲裤': 'Casual Pants & Trousers',
  '儿童包': "Kids' Bags & School Backpacks",
  '套件类': 'Bedding Sets',
  '织带': 'Webbing, Ribbons & Tapes',
  '毛绒公仔、玩偶、娃娃': 'Plush Toys & Stuffed Dolls',
  '汽摩及配件': 'Auto & Motorcycle Parts',
  '其他皮革': 'Specialty & Synthetic Leather',
  '母婴用品': 'Mother & Baby Products',
  '纸品本册': 'Notebooks & Paper Products',
  '挡风、遮阳、防雨工具': 'Umbrellas, Rainwear & Sunshades',
  '发圈': 'Hair Ties & Scrunchies',
  '居家布艺': 'Home Soft Furnishings & Fabrics',
  '手链': 'Bracelets & Bangles',
  '美甲产品': 'Nail Art & Manicure Supplies',
  '女式打底裤': "Women's Leggings",
  '成人手套': 'Adult Gloves',
  '女式毛衣': "Women's Sweaters & Knitwear",
  '其他针织面料': 'Specialty Knitted Fabrics',
  '居家日用': 'Household Daily Essentials',
  '女鞋': "Women's Shoes",
  '打底裤': 'Leggings & Tights',
  '其他时尚女包': "Fashion Women's Handbags",
  '美术、书法、绘图用品': 'Art, Calligraphy & Drawing Supplies',
  '手机配件': 'Mobile Phone Cases & Accessories',
  '收纳防尘': 'Storage Organizers & Dust Covers',
  '女式牛仔裤': "Women's Jeans & Denim",
  '创意礼品': 'Novelty & Promotional Gifts',
  '太阳镜': 'Sunglasses',
  '发梳头饰': 'Hair Combs & Tiaras',
  '四件套': '4-Piece Bedding Sets',
  '表': 'Watches & Timepieces',
  '厨房工具': 'Kitchen Tools & Gadgets',
  '钮扣': 'Garment Buttons',
  '仿真工艺品': 'Artificial & Replica Crafts',
  '山地、野营用品': 'Camping, Hiking & Outdoor Gear',
  '橡塑': 'Rubber & Plastic Materials',
  '拉链': 'Zippers & Sliders',
  '运动、休闲棉袜': 'Sports & Casual Cotton Socks',
  '毛衣': 'Sweaters & Pullovers',
  '发箍': 'Headbands & Hair Hoops',
  '圣诞用品': 'Christmas Decorations & Supplies',
  '化纤面料': 'Chemical & Synthetic Fiber Fabrics',
  '节庆用品': 'Festive & Holiday Supplies',

  // 121 - 180
  '笔记本、记事本': 'Notebooks, Journals & Planners',
  '水暖五金': 'Plumbing & Sanitary Hardware',
  '室外照明灯具': 'Outdoor & Street Lighting',
  '饰品挂饰': 'Hanging Ornaments & Charms',
  '纸类包装容器': 'Paper Boxes & Packaging Containers',
  '装订、胶粘、桌面用品': 'Binding, Tape & Desk Organizers',
  '电动/遥控玩具': 'Electric & RC Remote Control Toys',
  '保温杯': 'Insulated Vacuum Flasks & Thermoses',
  '烫图、烫钻': 'Rhinestone & Heat-Transfer Motifs',
  '装饰画、挂画': 'Wall Art & Decorative Paintings',
  '花边': 'Lace Trims & Embroidery',
  '工艺摆件': 'Decorative Figurines & Tabletop Ornaments',
  '仿真花饰': 'Artificial Flowers & Floral Arrangements',
  'diy饰品': 'DIY Jewelry & Beading Craft Kits',
  '灯具灯饰': 'Lamps & Lighting Fixtures',
  '男鞋': "Men's Shoes",
  '仿真花瓣': 'Artificial Flower Heads & Petals',
  '家居鞋': 'Indoor Slippers & House Shoes',
  '地毯地垫': 'Carpets, Rugs & Floor Mats',
  '新奇特玩具': 'Novelty & Gag Toys',
  '运动、休闲、传统玩具': 'Sports, Leisure & Classic Toys',
  '太阳能灯': 'Solar LED Lamps & Garden Lights',
  '涤纶面料': 'Polyester Fabrics',
  '专门用途灯具': 'Specialty & Commercial Lighting',
  '气球': 'Party Balloons & Inflatables',
  '化妆、妈咪、晚宴包袋': 'Cosmetic, Evening & Diaper Bags',
  '男式休闲裤': "Men's Casual Pants",
  '童鞋、婴儿鞋': "Kids' & Baby Shoes",
  '保暖内衣': 'Thermal Underwear Sets',
  '中性笔': 'Gel Pens & Rollerball Pens',
  '其他塑料薄膜袋': 'Poly Mailers & Film Packaging Bags',
  '锁具': 'Locks & Padlocks',
  '书包': 'School Bags & Backpacks',
  '蕾丝、雪纺衫': 'Lace & Chiffon Blouses',
  '个护电器': 'Personal Care & Grooming Appliances',
  '一次性用品': 'Disposable Household & Catering Supplies',
  '塑料花': 'Plastic Artificial Flowers',
  '游泳用品': 'Swimwear, Goggles & Pool Gear',
  '毛绒/布艺公仔玩具': 'Plush & Fabric Stuffed Toys',
  '其他饰品配件': 'Assorted Jewelry Findings',
  '钱包': 'Wallets, Cardholders & Clutches',
  '树脂工艺品': 'Resin Figurines & Crafts',
  '健身器材用品': 'Fitness & Gym Equipment',
  '调整型文胸': 'Shapewear & Push-Up Bras',
  '锅、煲': 'Cookware, Pots & Pans',
  '窗帘门帘及配件': 'Curtains, Drapes & Hardware',
  '童裙': "Girls' Dresses & Skirts",
  '毯类': 'Blankets & Throws',
  '耳钉&耳针': 'Stud Earrings',
  '雨伞': 'Umbrellas',
  '铅笔': 'Pencils & Colored Pencils',
  '模型玩具': 'Diecast & Model Toys',
  '女士三角裤': "Women's Panties & Briefs",
  '来料加工': 'Custom OEM/ODM Processing',
  '钥匙扣': 'Keychains & Key Rings',
  '厨房电器': 'Kitchen Appliances',
  '男式牛仔裤': "Men's Jeans",
  '男士牛仔裤': "Men's Jeans",
  '纸袋': 'Paper Gift & Shopping Bags',
  '汽车内饰用品': 'Car Interior Accessories',

  // 181 - 240
  '毛巾、面巾': 'Bath & Face Towels',
  '玻璃杯': 'Glassware & Drinking Glasses',
  '人造革': 'PU & Synthetic Faux Leather',
  '中老年女装': "Mature Women's Apparel",
  '影音电器': 'Audio & Video Electronics',
  '卫浴洗漱用具': 'Bathroom & Washroom Accessories',
  '布类包装': 'Fabric Pouches & Textile Packaging',
  '散珠&串珠': 'Loose Beads & Beading Supplies',
  '运动鞋': 'Sneakers & Athletic Shoes',
  '其他发饰': 'Assorted Hair Accessories',
  '圣诞装饰品': 'Christmas Tree Ornaments & Decor',
  '钟': 'Wall & Desk Clocks',
  '电池': 'Batteries & Power Cells',
  '办公收纳': 'Desk & Office File Organizers',
  '化妆包': 'Cosmetic & Toiletry Bags',
  '足球用品': 'Soccer & Football Gear',
  '民用无人机': 'Consumer Drones & Quadcopters',
  '圆珠笔、中油笔': 'Ballpoint Pens',
  '狗狗及用品': 'Dog Supplies & Pet Accessories',
  '其他挂饰挂件成品': 'Decorative Charms & Pendants',
  '其它女士内裤': "Women's Intimate Briefs",
  '化工': 'Chemical & Industrial Raw Materials',
  '现代装饰画': 'Modern Canvas & Framed Wall Art',
  '塑料自封袋': 'Ziplock & Resealable Poly Bags',
  '靠垫/抱枕/抱枕被': 'Throw Pillows & Cushions',
  '石英表': 'Quartz Wristwatches',
  '勺、调羹': 'Spoons, Ladles & Cutlery',
  '通用五金配件': 'General Hardware Fittings',
  '手电筒': 'Flashlights & Torches',
  'LED灯串': 'LED String & Fairy Lights',
  '整理用具': 'Home Storage & Sorting Bins',
  '骑行用品': 'Cycling & Bike Accessories',
  '睡衣、家居服、睡袍、浴袍': 'Pajamas, Loungewear & Bathrobes',
  '照明电筒': 'LED Torches & Work Lights',
  '毛巾': 'Towels & Microfiber Cloths',
  '陶瓷工艺品': 'Ceramic & Porcelain Crafts',
  '台灯夜灯': 'Desk Lamps & LED Night Lights',
  '戒指': 'Rings & Finger Jewelry',
  '足球': 'Soccer Balls & Training Gear',
  '手串': 'Beaded Bracelets & Wrist Mala',
  '钥匙配饰': 'Keychain Charms & Findings',
  '钥匙扣/配饰': 'Keychains & Bag Charms',
  '儿童帽': "Kids' Caps & Sun Hats",
  '衣物晾晒、洗护': 'Clothes Hangers, Drying Racks & Laundry Care',
  '童车/童床/背带/座椅': 'Baby Strollers, Cribs & Car Seats',
  '大码女装': "Plus-Size Women's Apparel",
  '仪器仪表': 'Measuring Instruments & Meters',
  '定制箱包皮具': 'Custom OEM Bags & Leather Goods',
  '智能设备': 'Smart Wearables & IoT Devices',
  '男式运动单鞋': "Men's Casual & Sports Shoes",
  '地垫': 'Doormats & Bath Mats',
  '发绳': 'Elastic Hair Bands & Ropes',
  '儿童饰品': "Kids' Jewelry & Hair Accessories",
  '手部防护': 'Safety Work Gloves & Hand Protection',
  '美发梳': 'Hair Brushes & Salon Combs',
  '烘焙用具': 'Baking Molds, Utensils & Bakeware',
  '行政用品': 'Executive Office & Conference Supplies',
  'LED独立光源': 'LED Bulbs & Light Sources',
  '水晶工艺品': 'Crystal Crafts & Glass Trophies',
  '保暖套装': 'Thermal Underwear Suits',

  // 241 - 315 + Remaining Top-Level Categories
  '印花、扎染布': 'Printed & Tie-Dye Fabrics',
  '日用包装': 'Retail & Daily Packaging Supplies',
  '家务围裙、袖套': 'Kitchen Aprons & Oversleeves',
  '蓝牙音箱': 'Bluetooth Speakers & Portable Audio',
  '运动休闲鞋': 'Casual Sneakers & Walking Shoes',
  '仿真植物': 'Artificial Greenery & Faux Plants',
  '进口玩具': 'Imported Toys & Games',
  '童套装': "Kids' Clothing Sets",
  '服饰配件': 'Garment & Fashion Accessories',
  '箱包配件': 'Luggage & Bag Hardware Fittings',
  '蓝牙耳机': 'TWS Earbuds & Bluetooth Headphones',
  '水龙头': 'Faucets & Taps',
  '生活电器': 'Household Living Appliances',
  '化妆刷、刷包': 'Makeup Brushes & Brush Sets',
  '陶瓷杯': 'Ceramic Mugs & Coffee Cups',
  '纱线': 'Yarn & Sewing Threads',
  '棋牌、休闲运动': 'Board Games, Playing Cards & Indoor Games',
  '两季电器': 'Seasonal Heaters & Cooling Fans',
  '收纳盒': 'Storage Boxes & Organizer Cases',
  '展示用品': 'Retail Display Stands & Mannequins',
  '线类': 'Sewing Threads & Cords',
  '手电筒、手握式电筒': 'Handheld Flashlights & Torches',
  '其他毛毯、绒毯': 'Fleece & Coral Velvet Blankets',
  'LED球泡灯': 'LED Bulb Lamps',
  '厨房整理': 'Kitchen Storage Racks & Organizers',
  '连裤袜、打底袜、踩脚袜': 'Pantyhose, Tights & Stockings',
  '木质工艺品': 'Wooden Crafts & Ornaments',
  '通用手套': 'General Purpose Gloves',
  '童运动鞋': "Kids' Sneakers & Sports Shoes",
  '餐桌布艺/台布/桌布': 'Tablecloths, Runners & Placemats',
  '女式休闲单鞋': "Women's Flats & Loafers",
  '电动工具': 'Power Tools & Electric Drills',
  '创意贴纸': 'Decorative & Stationery Stickers',
  '儿童发饰&头饰': "Kids' Hair Clips & Headbands",
  '衣饰': 'Brooches, Collar Pins & Corsages',
  '儿童袜': "Kids' & Baby Socks",
  '美妆日化包装': 'Cosmetic Bottles, Jars & Packaging',
  '室内LED灯串': 'Indoor LED String Lights',
  '船袜、隐形袜': 'No-Show & Ankle Boat Socks',
  '物流包装': 'Shipping Cartons, Tape & Mailers',
  '灯笼': 'Festive Lanterns',
  '笔袋': 'Pencil Cases & Pouches',
  '枕芯类': 'Pillow Inserts & Memory Foam Pillows',
  '童裤': "Kids' Pants & Trousers",
  '中国结': 'Chinese Knots & Cultural Tassels',
  '家用地毯': 'Area Rugs & Living Room Carpets',
  '保鲜盒、饭盒': 'Food Storage Containers & Lunch Boxes',
  '春节用品': 'Lunar New Year & Festival Decor',
  '女士家居服': "Women's Loungewear & Sleepwear",
  '男式沙滩裤': "Men's Boardshorts & Swim Trunks",
  '公仔挂件': 'Plush Keychains & Bag Pendants',
  '通用塑料': 'General Plastic Products',
  '遥控车': 'RC Cars & Trucks',
  '无钢圈文胸': 'Wireless Comfort Bras',
  '盘': 'Plates, Trays & Serving Platters',
  '商务袜': "Men's Dress & Business Socks",
  '家具五金、配件': 'Furniture Hardware, Hinges & Handles',
  '休闲、户外家具': 'Patio, Camping & Outdoor Furniture',
  '少女文胸': 'Teen & Training Bras',
  '皮带扣': 'Belt Buckles',
  '除臭芳香用品': 'Air Fresheners, Diffusers & Aromatherapy',
  '帐篷、天幕、帐篷配件': 'Camping Tents, Tarps & Canopies',
  '装饰框架': 'Photo Frames & Picture Borders',
  '时尚休闲套装': 'Fashion Tracksuits & Two-Piece Sets',
  '服装饰品': 'Fashion Apparel Ornaments',
  '其他益智玩具': 'Puzzles & Brain Teaser Toys',
  '其他袜子': 'Specialty Hosiery & Socks',
  '蜡烛': 'Candles & Candle Holders',
  '胸针': 'Brooches & Lapel Pins',
  '进口饰品': 'Imported Fashion Jewelry',

  // Remaining Top-Level & Common Sub-Segments
  '冶金矿产': 'Metallurgy, Metals & Minerals',
  '电子元器件': 'Electronic Components & Semiconductors',
  '印刷': 'Commercial Printing & Labels',
  '传媒、广电': 'Media & Broadcasting Equipment',
  '办公学习用品': 'Office & School Stationery',
  '加工': 'Custom Manufacturing & Processing',
  '大医药健康': 'Healthcare & Wellness Products',
  '建材': 'Construction & Building Materials',
  '化妆品配件': 'Cosmetic Containers & Applicators',
  '能源': 'Solar & Renewable Energy Products',
  '农业': 'Agricultural Tools & Supplies',
  '食品酒水': 'Food & Beverage Products',
  '医药、保养': 'Medical Supplies & Personal Care',
  '通信产品': 'Telecom & Networking Equipment',
  '笔墨纸制品': 'Pens, Ink & Paper Stationery',
  '生产企业-文化体育': 'Manufacturer: Stationery & Sports',
  '餐饮生鲜': 'Catering & Hospitality Supplies',
  '化妆品': 'Cosmetics & Makeup',
  '文化体育用品': 'Cultural & Sporting Goods',
  '钢铁': 'Steel & Metal Products',
  '运营服务': 'Trade & Logistics Services',
  '生产企业-化妆品/美容美发': 'Manufacturer: Beauty & Haircare',
  '生产企业-服装辅料': 'Manufacturer: Garment Trims & Accessories',
  '美容美发用品': 'Beauty & Salon Supplies',
  '辅料配件': 'Garment Trims & Hardware Findings',
  '镜梳': 'Mirrors & Hair Combs',
  '户外用品': 'Outdoor & Camping Gear',
  '服装辅料': 'Garment Trims & Tailoring Supplies'
};

/**
 * Common Chinese token fallback replacements when a very granular 3rd-level segment
 * is not in CHINESE_CATEGORY_MAP.
 */
const CHINESE_TOKEN_FALLBACKS: Array<[string, string]> = [
  ['男式', "Men's "],
  ['男士', "Men's "],
  ['女式', "Women's "],
  ['女士', "Women's "],
  ['儿童', "Kids' "],
  ['童', "Kids' "],
  ['婴儿', 'Baby '],
  ['其他', 'Assorted '],
  ['其它', 'Assorted '],
  ['定制', 'Custom '],
  ['进口', 'Imported '],
  ['仿真', 'Artificial '],
  ['电动', 'Electric '],
  ['智能', 'Smart '],
  ['户外', 'Outdoor '],
  ['厨房', 'Kitchen '],
  ['卫浴', 'Bathroom '],
  ['汽车', 'Auto '],
  ['宠物', 'Pet '],
  ['圣诞', 'Christmas '],
  ['塑料', 'Plastic '],
  ['金属', 'Metal '],
  ['不锈钢', 'Stainless Steel '],
  ['木质', 'Wooden '],
  ['陶瓷', 'Ceramic '],
  ['水晶', 'Crystal '],
  ['玻璃', 'Glass '],
  ['硅胶', 'Silicone '],
  ['真皮', 'Genuine Leather '],
  ['毛绒', 'Plush '],
  ['针织', 'Knitted '],
  ['配件', 'Accessories'],
  ['用品', 'Supplies'],
  ['工具', 'Tools'],
  ['玩具', 'Toys'],
  ['饰品', 'Jewelry'],
  ['包装', 'Packaging'],
  ['收纳', 'Organizers'],
  ['灯', 'Lighting'],
  ['包', 'Bags'],
  ['鞋', 'Shoes'],
  ['袜', 'Socks'],
  ['帽', 'Hats'],
  ['杯', 'Cups & Drinkware'],
  ['笔', 'Pens']
];

/**
 * Translations of top-level and major English category terms into the 7 non-English locales.
 */
export const LOCALIZED_CATEGORY_TERMS: Record<Exclude<LocaleCode, 'en'>, Record<string, string>> = {
  es: {
    'Jewelry & Ornaments': 'Joyería y Bisutería',
    'Daily Necessities & General Merchandise': 'Artículos de Uso Diario y Bazar',
    'Office & Cultural Supplies': 'Papelería y Material de Oficina',
    'Textiles & Leather': 'Textiles y Cuero',
    'Apparel Accessories': 'Accesorios de Moda',
    "Women's Apparel": 'Ropa de Mujer',
    'Hair & Head Ornaments': 'Accesorios para el Cabello',
    'Toys & Games': 'Juguetes y Juegos',
    'Underwear & Intimates': 'Ropa Interior y Lencería',
    'Textile Trims & Findings': 'Mercería y Insumos Textiles',
    'Sports & Outdoor': 'Deportes y Aire Libre',
    'Crafts & Gifts': 'Artesanías y Regalos',
    'Bags & Leather Goods': 'Bolsos, Mochilas y Marroquinería',
    'Home Textiles & Bedding': 'Textiles del Hogar y Ropa de Cama',
    'Packaging & Printing': 'Embalaje, Bolsas e Impresión',
    "Men's Apparel": 'Ropa de Hombre',
    'Lighting & LED': 'Iluminación y Luces LED',
    "Children's Wear": 'Ropa Infantil',
    'Building Materials & Hardware': 'Materiales de Construcción y Ferretería',
    'Hardware & Tools': 'Ferretería y Herramientas',
    'Beauty, Skincare & Cosmetics': 'Belleza, Cosméticos y Cuidado Personal',
    'Footwear & Shoes': 'Calzado y Zapatos',
    'Home Appliances': 'Electrodomésticos',
    'Tableware & Dining': 'Vajilla y Artículos de Mesa',
    'Home Decor': 'Decoración del Hogar',
    'Drinkware & Mugs': 'Termos, Tazas y Cristalería',
    'Socks & Hosiery': 'Calcetines y Medias',
    'Digital & Computer Accessories': 'Accesorios Digitales y de Computación',
    'Machinery & Industrial Equipment': 'Maquinaria y Equipos Industriales',
    'Electrical Equipment & Supplies': 'Material Eléctrico y Electrónica',
    'Auto Accessories & Car Care': 'Accesorios para Autos',
    'Auto & Motorcycle Parts': 'Repuestos de Autos y Motos',
    'Pet Supplies & Gardening': 'Mascotas y Jardinería',
    'Mother & Baby Products': 'Artículos para Bebés y Maternidad',
    'General Wholesale Merchandise': 'Mercancía Mayorista General'
  },
  pt: {
    'Jewelry & Ornaments': 'Joias, Bijuterias e Adornos',
    'Daily Necessities & General Merchandise': 'Utilidades Domésticas e Variedades',
    'Office & Cultural Supplies': 'Papelaria e Material de Escritório',
    'Textiles & Leather': 'Têxteis e Couro',
    'Apparel Accessories': 'Acessórios de Moda',
    "Women's Apparel": 'Moda Feminina',
    'Hair & Head Ornaments': 'Acessórios de Cabelo',
    'Toys & Games': 'Brinquedos e Jogos',
    'Underwear & Intimates': 'Moda Íntima e Lingerie',
    'Textile Trims & Findings': 'Aviamentos Têxteis',
    'Sports & Outdoor': 'Esportes e Lazer ao Ar Livre',
    'Crafts & Gifts': 'Artesanato e Presentes',
    'Bags & Leather Goods': 'Bolsas, Mochilas e Artigos de Couro',
    'Home Textiles & Bedding': 'Cama, Mesa e Banho',
    'Packaging & Printing': 'Embalagens e Impressão',
    "Men's Apparel": 'Moda Masculina',
    'Lighting & LED': 'Iluminação e LED',
    "Children's Wear": 'Moda Infantil',
    'Building Materials & Hardware': 'Materiais de Construção e Ferragens',
    'Hardware & Tools': 'Ferragens e Ferramentas',
    'Beauty, Skincare & Cosmetics': 'Beleza, Maquiagem e Cosméticos',
    'Footwear & Shoes': 'Calçados e Sapatos',
    'Home Appliances': 'Eletrodomésticos e Eletroportáteis',
    'Tableware & Dining': 'Louças e Utensílios de Mesa',
    'Home Decor': 'Decoração para Casa',
    'Drinkware & Mugs': 'Copos, Garrafas Térmicas e Canecas',
    'Socks & Hosiery': 'Meias',
    'Digital & Computer Accessories': 'Acessórios Digitais e de Informática',
    'Machinery & Industrial Equipment': 'Máquinas e Equipamentos Industriais',
    'Electrical Equipment & Supplies': 'Equipamentos e Materiais Elétricos',
    'Auto Accessories & Car Care': 'Acessórios Automotivos',
    'Auto & Motorcycle Parts': 'Autopeças e Motopeças',
    'Pet Supplies & Gardening': 'Pet Shop e Jardinagem',
    'Mother & Baby Products': 'Artigos para Bebês e Maternidade',
    'General Wholesale Merchandise': 'Mercadorias Atacadistas em Geral'
  },
  fr: {
    'Jewelry & Ornaments': 'Bijoux Fantaisie et Ornements',
    'Daily Necessities & General Merchandise': 'Articles du Quotidien et Bazar',
    'Office & Cultural Supplies': 'Papeterie et Fournitures de Bureau',
    'Textiles & Leather': 'Textiles et Cuir',
    'Apparel Accessories': 'Accessoires de Mode',
    "Women's Apparel": 'Prêt-à-Porter Femme',
    'Hair & Head Ornaments': 'Accessoires pour Cheveux',
    'Toys & Games': 'Jouets et Jeux',
    'Underwear & Intimates': 'Sous-Vêtements et Lingerie',
    'Textile Trims & Findings': 'Mercerie et Fournitures Textiles',
    'Sports & Outdoor': 'Sports et Plein Air',
    'Crafts & Gifts': 'Artisanat et Articles Cadeaux',
    'Bags & Leather Goods': 'Sacs, Bagages et Maroquinerie',
    'Home Textiles & Bedding': 'Linge de Maison et Literie',
    'Packaging & Printing': 'Emballage et Impression',
    "Men's Apparel": 'Prêt-à-Porter Homme',
    'Lighting & LED': 'Éclairage et Luminaires LED',
    "Children's Wear": 'Vêtements Enfant',
    'Building Materials & Hardware': 'Matériaux de Construction et Quincaillerie',
    'Hardware & Tools': 'Outillage et Quincaillerie',
    'Beauty, Skincare & Cosmetics': 'Beauté, Soins et Cosmétiques',
    'Footwear & Shoes': 'Chaussures',
    'Home Appliances': 'Électroménager',
    'Tableware & Dining': 'Arts de la Table et Vaisselle',
    'Home Decor': 'Décoration Intérieure',
    'Drinkware & Mugs': 'Mugs, Gourdes et Verrerie',
    'Socks & Hosiery': 'Chaussettes et Bonneterie',
    'Digital & Computer Accessories': 'Accessoires Numériques et Informatiques',
    'Machinery & Industrial Equipment': 'Machines et Équipements Industriels',
    'Electrical Equipment & Supplies': 'Matériel Électrique',
    'Auto Accessories & Car Care': 'Accessoires Auto',
    'Auto & Motorcycle Parts': 'Pièces Auto et Moto',
    'Pet Supplies & Gardening': 'Animalerie et Jardinage',
    'Mother & Baby Products': 'Puériculture et Bébé',
    'General Wholesale Merchandise': 'Marchandises de Gros Générales'
  },
  de: {
    'Jewelry & Ornaments': 'Modeschmuck & Accessoires',
    'Daily Necessities & General Merchandise': 'Haushaltswaren & Alltagsbedarf',
    'Office & Cultural Supplies': 'Schreibwaren & Bürobedarf',
    'Textiles & Leather': 'Textilien & Lederwaren',
    'Apparel Accessories': 'Modeaccessoires',
    "Women's Apparel": 'Damenbekleidung',
    'Hair & Head Ornaments': 'Haarschmuck & Kopfbedeckung',
    'Toys & Games': 'Spielwaren & Spiele',
    'Underwear & Intimates': 'Unterwäsche & Dessous',
    'Textile Trims & Findings': 'Kurzwaren & Textilzubehör',
    'Sports & Outdoor': 'Sport & Outdoor',
    'Crafts & Gifts': 'Kunsthandwerk & Geschenkartikel',
    'Bags & Leather Goods': 'Taschen, Rucksäcke & Lederwaren',
    'Home Textiles & Bedding': 'Heimtextilien & Bettwäsche',
    'Packaging & Printing': 'Verpackungen & Druck',
    "Men's Apparel": 'Herrenbekleidung',
    'Lighting & LED': 'Beleuchtung & LED-Technik',
    "Children's Wear": 'Kinderbekleidung',
    'Building Materials & Hardware': 'Baustoffe & Beschläge',
    'Hardware & Tools': 'Eisenwaren & Werkzeuge',
    'Beauty, Skincare & Cosmetics': 'Kosmetik & Körperpflege',
    'Footwear & Shoes': 'Schuhe & Fußbekleidung',
    'Home Appliances': 'Haushaltsgeräte',
    'Tableware & Dining': 'Geschirr & Besteck',
    'Home Decor': 'Wohndekoration',
    'Drinkware & Mugs': 'Trinkgefäße, Isolierflaschen & Tassen',
    'Socks & Hosiery': 'Socken & Strumpfwaren',
    'Digital & Computer Accessories': 'Computer- & Handyzubehör',
    'Machinery & Industrial Equipment': 'Maschinen & Industrieausrüstung',
    'Electrical Equipment & Supplies': 'Elektrotechnik & Zubehör',
    'Auto Accessories & Car Care': 'Autozubehör',
    'Auto & Motorcycle Parts': 'Auto- & Motorradteile',
    'Pet Supplies & Gardening': 'Heimtierbedarf & Garten',
    'Mother & Baby Products': 'Baby- & Mutterschaftsartikel',
    'General Wholesale Merchandise': 'Allgemeine Großhandelswaren'
  },
  ar: {
    'Jewelry & Ornaments': 'المجوهرات والإكسسوارات والزينة',
    'Daily Necessities & General Merchandise': 'المستلزمات اليومية والسلع العامة',
    'Office & Cultural Supplies': 'القرطاسية والأدوات المكتبية',
    'Textiles & Leather': 'المنسوجات والجلود',
    'Apparel Accessories': 'إكسسوارات الملابس والموضة',
    "Women's Apparel": 'الملابس النسائية',
    'Hair & Head Ornaments': 'إكسسوارات ومشابك الشعر',
    'Toys & Games': 'الألعاب والدمى',
    'Underwear & Intimates': 'الملابس الداخلية واللانجري',
    'Textile Trims & Findings': 'مستلزمات الخياطة والكلف',
    'Sports & Outdoor': 'الرياضة والرحلات الخارجية',
    'Crafts & Gifts': 'الحرف اليدوية والهدايا',
    'Bags & Leather Goods': 'الحقائب والمنتجات الجلدية',
    'Home Textiles & Bedding': 'المفروشات المنزلية وأطقم السرير',
    'Packaging & Printing': 'مواد التعبئة والتغليف والطباعة',
    "Men's Apparel": 'الملابس الرجالية',
    'Lighting & LED': 'الإضاءة ومصابيح LED',
    "Children's Wear": 'ملابس الأطفال',
    'Building Materials & Hardware': 'مواد البناء والتشطيبات',
    'Hardware & Tools': 'العدد والأدوات والخردوات',
    'Beauty, Skincare & Cosmetics': 'مستحضرات التجميل والعناية بالبشرة',
    'Footwear & Shoes': 'الأحذية والنعال',
    'Home Appliances': 'الأجهزة الكهربائية المنزلية',
    'Tableware & Dining': 'أدوات المائدة والمطبخ',
    'Home Decor': 'الديكور المنزلي والتحف',
    'Drinkware & Mugs': 'الأكواب والحافظات الحرارية',
    'Socks & Hosiery': 'الجوارب',
    'Digital & Computer Accessories': 'إكسسوارات الجوال والكمبيوتر',
    'Machinery & Industrial Equipment': 'الآلات والمعدات الصناعية',
    'Electrical Equipment & Supplies': 'المعدات والتمديدات الكهربائية',
    'Auto Accessories & Car Care': 'إكسسوارات وزينة السيارات',
    'Auto & Motorcycle Parts': 'قطع غيار السيارات والدراجات',
    'Pet Supplies & Gardening': 'مستلزمات الحيوانات الأليفة والحدائق',
    'Mother & Baby Products': 'مستلزمات الأم والطفل',
    'General Wholesale Merchandise': 'بضائع الجملة العامة'
  },
  ru: {
    'Jewelry & Ornaments': 'Бижутерия и украшения',
    'Daily Necessities & General Merchandise': 'Товары повседневного спроса и хозтовары',
    'Office & Cultural Supplies': 'Канцтовары и офисные принадлежности',
    'Textiles & Leather': 'Текстиль и кожа',
    'Apparel Accessories': 'Модные аксессуары',
    "Women's Apparel": 'Женская одежда',
    'Hair & Head Ornaments': 'Аксессуары для волос',
    'Toys & Games': 'Игрушки и игры',
    'Underwear & Intimates': 'Нижнее белье',
    'Textile Trims & Findings': 'Швейная фурнитура',
    'Sports & Outdoor': 'Спорт и активный отдых',
    'Crafts & Gifts': 'Сувениры, подарки и декор',
    'Bags & Leather Goods': 'Сумки, рюкзаки и кожгалантерея',
    'Home Textiles & Bedding': 'Домашний текстиль и постельное белье',
    'Packaging & Printing': 'Упаковка и полиграфия',
    "Men's Apparel": 'Мужская одежда',
    'Lighting & LED': 'Освещение и LED-светильники',
    "Children's Wear": 'Детская одежда',
    'Building Materials & Hardware': 'Стройматериалы и крепеж',
    'Hardware & Tools': 'Инструменты и скобяные изделия',
    'Beauty, Skincare & Cosmetics': 'Косметика и уход за кожей',
    'Footwear & Shoes': 'Обувь',
    'Home Appliances': 'Бытовая техника',
    'Tableware & Dining': 'Посуда и столовые приборы',
    'Home Decor': 'Декор для дома',
    'Drinkware & Mugs': 'Термосы, кружки и стаканы',
    'Socks & Hosiery': 'Носки и чулочно-носочные изделия',
    'Digital & Computer Accessories': 'Цифровые и мобильные аксессуары',
    'Machinery & Industrial Equipment': 'Промышленное оборудование и станки',
    'Electrical Equipment & Supplies': 'Электротовары и электрика',
    'Auto Accessories & Car Care': 'Автоаксессуары',
    'Auto & Motorcycle Parts': 'Авто- и мотозапчасти',
    'Pet Supplies & Gardening': 'Зоотовары и садоводство',
    'Mother & Baby Products': 'Товары для мам и малышей',
    'General Wholesale Merchandise': 'Оптовые товары общего назначения'
  },
  it: {
    'Jewelry & Ornaments': 'Bigiotteria, Gioielli e Ornamenti',
    'Daily Necessities & General Merchandise': 'Casalinghi e Articoli di Uso Quotidiano',
    'Office & Cultural Supplies': 'Cartoleria e Forniture per Ufficio',
    'Textiles & Leather': 'Tessuti e Pellami',
    'Apparel Accessories': 'Accessori Moda',
    "Women's Apparel": 'Abbigliamento Donna',
    'Hair & Head Ornaments': 'Accessori per Capelli',
    'Toys & Games': 'Giocattoli e Giochi',
    'Underwear & Intimates': 'Intimo e Lingerie',
    'Textile Trims & Findings': 'Merceria e Accessori Tessili',
    'Sports & Outdoor': 'Sport e Tempo Libero',
    'Crafts & Gifts': 'Artigianato e Articoli da Regalo',
    'Bags & Leather Goods': 'Borse, Zaini e Pelletteria',
    'Home Textiles & Bedding': 'Biancheria per la Casa e Letto',
    'Packaging & Printing': 'Imballaggi, Scatole e Stampa',
    "Men's Apparel": 'Abbigliamento Uomo',
    'Lighting & LED': 'Illuminazione e Luci LED',
    "Children's Wear": 'Abbigliamento Bambini',
    'Building Materials & Hardware': 'Materiali Edili e Ferramenta',
    'Hardware & Tools': 'Utensili e Ferramenta',
    'Beauty, Skincare & Cosmetics': 'Bellezza, Cosmetici e Cura della Persona',
    'Footwear & Shoes': 'Calzature e Scarpe',
    'Home Appliances': 'Elettrodomestici',
    'Tableware & Dining': 'Stoviglie e Articoli per la Tavola',
    'Home Decor': 'Decorazioni per la Casa',
    'Drinkware & Mugs': 'Borracce Termiche, Tazze e Bicchieri',
    'Socks & Hosiery': 'Calze e Calzini',
    'Digital & Computer Accessories': 'Accessori Digitali e Informatici',
    'Machinery & Industrial Equipment': 'Macchinari e Attrezzature Industriali',
    'Electrical Equipment & Supplies': 'Materiale Elettrico',
    'Auto Accessories & Car Care': 'Accessori Auto',
    'Auto & Motorcycle Parts': 'Ricambi Auto e Moto',
    'Pet Supplies & Gardening': 'Articoli per Animali e Giardinaggio',
    'Mother & Baby Products': 'Articoli per Neonati e Infanzia',
    'General Wholesale Merchandise': 'Merci Ingrosso Generali'
  }
};

const HAS_CHINESE_REGEX = /[\u4e00-\u9fff]/;

function translateSingleChineseSegmentToEnglish(seg: string): string | null {
  const clean = seg.trim();
  if (!clean) return null;
  if (CHINESE_CATEGORY_MAP[clean]) {
    return CHINESE_CATEGORY_MAP[clean];
  }
  if (!HAS_CHINESE_REGEX.test(clean)) {
    return clean;
  }
  // Check if any known key in CHINESE_CATEGORY_MAP is a substring of clean
  for (const [zhKey, enVal] of Object.entries(CHINESE_CATEGORY_MAP)) {
    if (zhKey.length >= 2 && clean.includes(zhKey)) {
      return enVal;
    }
  }
  // Token-based fallback
  const matchedTokens: string[] = [];
  for (const [zhToken, enToken] of CHINESE_TOKEN_FALLBACKS) {
    if (clean.includes(zhToken)) {
      matchedTokens.push(enToken.trim());
    }
  }
  if (matchedTokens.length > 0) {
    return Array.from(new Set(matchedTokens)).slice(0, 2).join(' ');
  }
  return null;
}

/**
 * Translates a raw Chinese category hierarchy (e.g. `饰品 > 发饰&头饰 > 发夹`)
 * or pre-enriched category string into a clean, human-readable hierarchy in any of the 8 supported locales.
 * Never outputs raw untranslated Chinese alone unless `includeChineseOriginal` is true.
 */
export function translateChineseCategory(
  rawCategory: string | undefined | null,
  locale: LocaleCode = 'en',
  includeChineseOriginal = false
): string {
  if (!rawCategory || !rawCategory.trim()) return '';

  let input = rawCategory.trim();
  let extractedRawChinese = '';

  // If the string was already enriched as `English Hierarchy (中文 > 中文)`, extract the raw Chinese part
  const trailingParensMatch = input.match(/^(.*?)\s*\(([^()]*[\u4e00-\u9fff][^()]*)\)\s*$/);
  if (trailingParensMatch) {
    extractedRawChinese = trailingParensMatch[2].trim();
    input = extractedRawChinese;
  } else if (HAS_CHINESE_REGEX.test(input)) {
    extractedRawChinese = input;
  }

  // If input has no Chinese characters at all, localize top-level segments if needed
  if (!HAS_CHINESE_REGEX.test(input)) {
    if (locale === 'en') {
      return includeChineseOriginal && extractedRawChinese ? `${input} (${extractedRawChinese})` : input;
    }
    const dict = LOCALIZED_CATEGORY_TERMS[locale];
    const parts = input.split('>').map(p => p.trim()).filter(Boolean);
    const localizedParts = parts.map(p => dict?.[p] || p);
    const joined = localizedParts.join(' › ');
    return includeChineseOriginal && extractedRawChinese ? `${joined} (${extractedRawChinese})` : joined;
  }

  const rawSegments = input.split('>').map(s => s.trim()).filter(Boolean);
  const englishSegments: string[] = [];

  for (const seg of rawSegments) {
    const translated = translateSingleChineseSegmentToEnglish(seg);
    if (translated && !englishSegments.includes(translated)) {
      englishSegments.push(translated);
    }
  }

  if (englishSegments.length === 0) {
    englishSegments.push('General Wholesale Merchandise');
  }

  let finalSegments = englishSegments;
  if (locale !== 'en') {
    const dict = LOCALIZED_CATEGORY_TERMS[locale];
    finalSegments = englishSegments.map(enSeg => dict?.[enSeg] || enSeg);
  }

  const separator = includeChineseOriginal ? ' > ' : ' › ';
  const result = finalSegments.join(separator);

  if (includeChineseOriginal && extractedRawChinese) {
    return `${result} (${extractedRawChinese})`;
  }
  return result;
}

/**
 * Reverse-maps an English or localized search query (e.g. "underwear", "bra", "tableware", "earrings", "packaging", "lighting")
 * to matching Chinese category terms so D1 SQL `LIKE` queries can match stalls whose `chinese_official_category` is in Chinese.
 */
export function getMatchingChineseCategoryTerms(query: string): string[] {
  const q = (query || '').trim().toLowerCase();
  if (q.length < 2) return [];

  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wordBoundaryRegex = new RegExp(`\\b${escaped}s?\\b`, 'i');

  const exactWordMatches: string[] = [];
  const substringMatches: string[] = [];

  for (const [zh, en] of Object.entries(CHINESE_CATEGORY_MAP)) {
    const enLower = en.toLowerCase();
    if (wordBoundaryRegex.test(enLower)) {
      exactWordMatches.push(zh);
    } else if (q.length >= 4 && (enLower.includes(q) || q.includes(enLower))) {
      substringMatches.push(zh);
    }
  }

  const matchedChinese = exactWordMatches.length > 0 ? exactWordMatches : substringMatches;

  // Also check localized category dictionaries so searching in Spanish/Portuguese/French/etc. works
  if (matchedChinese.length === 0) {
    const matchedEnglishSet = new Set<string>();
    for (const locDict of Object.values(LOCALIZED_CATEGORY_TERMS)) {
      for (const [enTerm, locTerm] of Object.entries(locDict)) {
        if (locTerm.toLowerCase().includes(q)) {
          matchedEnglishSet.add(enTerm);
        }
      }
    }
    if (matchedEnglishSet.size > 0) {
      for (const [zh, en] of Object.entries(CHINESE_CATEGORY_MAP)) {
        if (matchedEnglishSet.has(en)) {
          matchedChinese.push(zh);
        }
      }
    }
  }

  return matchedChinese.slice(0, 8);
}

export interface UIDictionary {
  nav: {
    directory: string;
    countries: string;
    marketMap: string;
    sourcingGuide: string;
    browseStalls: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    searchBtn: string;
    trustLocation: string;
    trustTeam: string;
    trustData: string;
    trustGuarantee: string;
    statStalls: string;
    statPhones: string;
    statKickbacks: string;
  };
  faq: {
    badge: string;
    title: string;
    q1: string;
    a1: string;
    q5: string;
    a5: string;
  };
  countriesSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewAllCta: string;
    portsLabel: string;
    seaTransitLabel: string;
    airTransitLabel: string;
    complianceLabel: string;
    openHubCta: string;
  };
  supplier: {
    directFactoryBadge: string;
    marketWholesalerBadge: string;
    districtLabel: string;
    floorLabel: string;
    gateLabel: string;
    boothLabel: string;
    yearsVerified: string;
    creditScore: string;
    mainProducts: string;
    officialCategory: string;
    unlockBtn: string;
    whatsappBtn: string;
  };
  seo: {
    homeTitle: string;
    homeDesc: string;
    homeKeywords: string;
    directoryTitle: string;
    directoryDesc: string;
    countriesTitle: string;
    countriesDesc: string;
  };
}

export const UI_DICT: Record<LocaleCode, UIDictionary> = {
  en: {
    nav: {
      directory: 'Stall Directory',
      countries: '100 Countries',
      marketMap: 'Market Map',
      sourcingGuide: 'Sourcing Playbook',
      browseStalls: 'Browse 27,706 Listed Suppliers'
    },
    hero: {
      badge: '🇨🇳 China-Wide Factory Sourcing · Yiwu, Shenzhen, Guangzhou & More · Zero Middleman Markups',
      title: 'Source Directly from Factories & Markets Anywhere in China.',
      subtitle: 'We procure across Yiwu, Shenzhen, Guangzhou, Ningbo, and all major Chinese industrial hubs — not just Yiwu market. Browse 27,706 listed suppliers free and let our team quote & handle every supplier directly for you.',
      searchPlaceholder: 'Search by product, category, or stall name (e.g. Toys, Kitchenware, Booth 62159)...',
      searchBtn: 'Search Directory',
      trustLocation: 'China-Wide Hubs: Yiwu, Shenzhen, Guangzhou, Ningbo',
      trustTeam: 'Direct Sourcing Desk on WhatsApp (24h Quote)',
      trustData: 'China factory and stall directory',
      trustGuarantee: 'Managed Factory Outreach — We Contact Suppliers For You',
      statStalls: 'Listed Suppliers',
      statPhones: 'China-Wide Factory Access',
      statKickbacks: 'Trading Markups'
    },
    faq: {
      badge: 'Transparency First',
      title: 'The Questions Serious Buyers Ask Before Trusting Us With Their Orders',
      q1: '"Do you source only from Yiwu market, and why do I contact Sino Trade Link instead of supplier numbers?"',
      a1: 'We procure anywhere across China — Shenzhen (electronics), Guangzhou/Foshan (apparel, beauty, furniture), Ningbo/Yongkang (hardware & homeware), Shantou (toys), and Yiwu markets. Supplier phone numbers are kept private with our bilingual desk so we protect your buyer identity, negotiate local RMB factory rates, verify licenses, and prevent online trader markups.',
      q5: '"What if my country has import restrictions on certain Chinese goods?"',
      a5: 'Our ground team can verify CE, FCC, EN71/ASTM toy safety, and RoHS certificates at the stall level during an on-site audit before shipment. We also proactively flag DG (Dangerous Goods) categories — lighters, batteries, liquids, aerosols — that need specialized freight lanes before you commit.',
    },
    countriesSection: {
      badge: '🌍 100 Global Import Corridors • 2,400 Category Trade Lanes',
      title: 'Global Yiwu-to-Port Sourcing Corridors (100 Countries)',
      subtitle: 'Explore country-specific Yiwu wholesale hubs with Ningbo ocean transit times, destination ports, local customs compliance (CE, SABER, BIS, SONCAP, INMETRO) and supplier visits.',
      viewAllCta: 'Explore All 100 Country Import Corridors →',
      portsLabel: 'Ports:',
      seaTransitLabel: 'Sea Transit:',
      airTransitLabel: 'Air Express:',
      complianceLabel: 'Compliance:',
      openHubCta: 'Open Country Sourcing Hub →'
    },
    supplier: {
      directFactoryBadge: 'Direct Factory',
      marketWholesalerBadge: 'Listed Stall',
      districtLabel: 'District',
      floorLabel: 'Floor',
      gateLabel: 'Gate',
      boothLabel: 'Booth',
      yearsVerified: 'Yrs in Futian',
      creditScore: 'Market Score',
      mainProducts: 'Wholesale Catalog Keywords:',
      officialCategory: 'Official Market Category:',
      unlockBtn: 'Request Factory Quote',
      whatsappBtn: 'WhatsApp Ground Desk'
    },
    seo: {
      homeTitle: "Sino Trade Link | China-Wide Direct Factory Sourcing",
      homeDesc: 'Source directly from factories anywhere in China (Yiwu, Shenzhen, Guangzhou, Ningbo). Browse 27,706 listed suppliers free and request managed factory quotes.',
      homeKeywords: "China factory sourcing, Yiwu supplier directory, supplier visits, Shenzhen Guangzhou Ningbo",
      directoryTitle: 'China Wholesale Market Directory | 27,706 Listed Stalls & Factory Quote Requests',
      directoryDesc: 'Search 27,706 listed suppliers free. Request managed factory quotes, samples, and China-wide consolidation directly with our team.',
      countriesTitle: '100 Country Import Corridors from Yiwu, China | Sea Freight & Customs Compliance',
      countriesDesc: 'Country-by-country wholesale sourcing hubs from Yiwu & Ningbo Port to 100 countries with transit times, duties, and required import certifications.'
    }
  },
  es: {
    nav: {
      directory: 'Directorio de Puestos',
      countries: '100 Países',
      marketMap: 'Mapa del Mercado',
      sourcingGuide: 'Guía de Importación',
      browseStalls: 'Ver 27.706 Puestos'
    },
    hero: {
      badge: '🇨🇳 Compras en Toda China · Yiwu, Shenzhen, Guangzhou y Más · Cero Sobrecostos',
      title: 'Compre Directo en Fábricas y Mercados de Toda China.',
      subtitle: 'Abastecemos desde cualquier ciudad industrial de China (Yiwu, Shenzhen, Guangzhou, Ningbo y más allá), no solo en el mercado de Yiwu. Explore 27.706 proveedores del directorio gratis y solicite cotización gestionada con nuestro equipo.',
      searchPlaceholder: 'Buscar por producto, categoría o número de puesto (ej. Juguetes, Cocina, Puesto 62159)...',
      searchBtn: 'Buscar Puestos',
      trustLocation: 'Polos en Toda China: Yiwu, Shenzhen, Guangzhou, Ningbo',
      trustTeam: 'Mesa de Cotizaciones en WhatsApp (Respuesta Rápida)',
      trustData: 'Directorio de fábricas y puestos en China',
      trustGuarantee: 'Negociación Directa Gestionada — Contactamos por Usted',
      statStalls: 'Proveedores en el directorio',
      statPhones: 'Cobertura en Toda China',
      statKickbacks: 'Sobreprecio de Agentes'
    },
    faq: {
      badge: 'Transparencia Total',
      title: 'Las Preguntas que Todo Importador Serio Hace Antes de Iniciar Pedidos',
      q1: '«¿Compran solo en el mercado de Yiwu o en toda China, y por qué contacto a Sino Trade Link?»',
      a1: 'Abastecemos en toda China — Shenzhen (electrónica), Guangzhou/Foshan (textil, muebles, belleza), Ningbo/Yongkang (ferretería y menaje), Shantou (juguetes) además de Yiwu. Mantenemos la comunicación con los proveedores centralizada en nuestro equipo bilingüe para proteger sus precios locales en RMB, auditar licencias y evitar sobrecostos.',
      q5: '«¿Qué ocurre con las normas aduaneras y certificaciones de mi país (NOM, CE, INMETRO)?»',
      a5: 'Nuestro equipo en Yiwu verifica certificados CE, FCC, EN71/ASTM y RoHS directamente en el puesto antes de embarcar e identifica mercancías peligrosas (baterías, líquidos) para usar líneas de flete seguras.',
    },
    countriesSection: {
      badge: '🌍 100 Corredores Globales de Importación • 2.400 Rutas Comerciales',
      title: 'Corredores Marítimos y Aéreos desde Yiwu hacia 100 Países',
      subtitle: 'Consulte tiempos de tránsito marítimo desde el Puerto de Ningbo, puertos de destino, requisitos aduaneros locales, auditorías de puestos y consolidación de contenedores.',
      viewAllCta: 'Ver los 100 Países y Corredores de Importación →',
      portsLabel: 'Puertos:',
      seaTransitLabel: 'Flete Marítimo:',
      airTransitLabel: 'Vía Aérea:',
      complianceLabel: 'Aduanas:',
      openHubCta: 'Ver Guía de Importación del País →'
    },
    supplier: {
      directFactoryBadge: 'Fábrica Directa',
      marketWholesalerBadge: 'Puesto en el Directorio',
      districtLabel: 'Distrito',
      floorLabel: 'Piso',
      gateLabel: 'Puerta',
      boothLabel: 'Puesto',
      yearsVerified: 'Años en Futian',
      creditScore: 'Puntaje Comercial',
      mainProducts: 'Catálogo Mayorista:',
      officialCategory: 'Categoría Oficial del Mercado:',
      unlockBtn: 'Solicitar Cotización',
      whatsappBtn: 'Consultar por WhatsApp'
    },
    seo: {
      homeTitle: "Sino Trade Link | Compras Directas de Fábrica en Toda China",
      homeDesc: 'Compre directo de fábricas en toda China (Yiwu, Shenzhen, Guangzhou, Ningbo). Explore 27.706 proveedores del directorio gratis para solicitar cotización directa.',
      homeKeywords: "compras fábricas China, directorio proveedores Yiwu, visitas a proveedores",
      directoryTitle: 'Directorio del Mercado Mayorista en China | 27.706 Puestos del Directorio y Cotizaciones Directas',
      directoryDesc: 'Busque entre 27.706 proveedores del directorio en Yiwu y solicite cotizaciones directas de fábrica en toda China a través de nuestro equipo.',
      countriesTitle: 'Importar desde Yiwu, China hacia 100 Países | Flete Marítimo y Aduanas',
      countriesDesc: 'Guías de importación desde Yiwu y el Puerto de Ningbo hacia 100 países con tiempos de tránsito marítimo, aranceles y certificaciones requeridas.'
    }
  },
  pt: {
    nav: {
      directory: 'Diretório de Lojas',
      countries: '100 Países',
      marketMap: 'Mapa do Mercado',
      sourcingGuide: 'Guia de Importação',
      browseStalls: 'Ver 27.706 Lojas'
    },
    hero: {
      badge: '🇨🇳 Compras em Toda a China · Yiwu, Shenzhen, Guangzhou e Mais · Zero Ágio de Intermediários',
      title: 'Compre Direto de Fábricas e Mercados em Qualquer Lugar da China.',
      subtitle: 'Compramos em toda a China — Yiwu, Shenzhen, Guangzhou, Ningbo e polos industriais — não apenas no mercado de Yiwu. Pesquise 27.706 fornecedores do diretório grátis e fale conosco para cotar direto na fábrica.',
      searchPlaceholder: 'Busque por produto, categoria ou número do box (ex: Brinquedos, Cozinha, Box 62159)...',
      searchBtn: 'Buscar Fornecedores',
      trustLocation: 'Polos em Toda a China: Yiwu, Shenzhen, Guangzhou, Ningbo',
      trustTeam: 'Atendimento Direto no WhatsApp (Cotação Rápida)',
      trustData: 'Diretório de fábricas e boxes chineses',
      trustGuarantee: 'Negociação Gerenciada — Falamos com as Fábricas por Você',
      statStalls: 'Fornecedores no diretório',
      statPhones: 'Alcance em Toda a China',
      statKickbacks: 'Comissões Ocultas'
    },
    faq: {
      badge: 'Transparência em Primeiro Lugar',
      title: 'As Perguntas que Importadores Experientes Fazem Antes de Fechar Pedido',
      q1: '“Vocês compram apenas em Yiwu ou em toda a China, e por que devo falar com a Sino Trade Link?”',
      a1: 'Atuamos em todos os polos chineses — Shenzhen (eletrônicos), Guangzhou/Foshan (vestuário, móveis, beleza), Ningbo/Yongkang (ferramentas e utilidades), Shantou (brinquedos) e Yiwu. Centralizamos o contato com fábricas via WhatsApp para proteger seu custo real em RMB, checar licenças e evitar ágios de intermediários.',
      q5: '“Como funcionam as certificações exigidas na alfândega (INMETRO, ANATEL, CE)?”',
      a5: 'Nossa equipe em Yiwu verifica certificados CE, RoHS, FCC e requisitos INMETRO diretamente no box antes do envio e identifica cargas especiais (baterias, líquidos) para rotas aéreas adequadas.',
    },
    countriesSection: {
      badge: '🌍 100 Corredores Globais de Importação • 2.400 Rotas Comerciais',
      title: 'Corredores de Importação de Yiwu para 100 Países',
      subtitle: 'Confira tempos de trânsito marítimo a partir do Porto de Ningbo, portos de destino, exigências alfandegárias locais (INMETRO, CE, Receita Federal), auditorias em Yiwu e consolidação de contêineres.',
      viewAllCta: 'Explorar Todos os 100 Países e Corredores →',
      portsLabel: 'Portos:',
      seaTransitLabel: 'Marítimo:',
      airTransitLabel: 'Aéreo:',
      complianceLabel: 'Conformidade:',
      openHubCta: 'Abrir Guia de Importação do País →'
    },
    supplier: {
      directFactoryBadge: 'Fábrica Direta',
      marketWholesalerBadge: 'Box no Diretório',
      districtLabel: 'Distrito',
      floorLabel: 'Andar',
      gateLabel: 'Portão',
      boothLabel: 'Box',
      yearsVerified: 'Anos em Futian',
      creditScore: 'Nota de Crédito',
      mainProducts: 'Catálogo Atacadista:',
      officialCategory: 'Categoria Oficial do Mercado:',
      unlockBtn: 'Solicitar Cotação de Fábrica',
      whatsappBtn: 'Chamar Equipe no WhatsApp'
    },
    seo: {
      homeTitle: "Sino Trade Link | Compras Diretas de Fábricas em Toda a China",
      homeDesc: 'Compre direto de fábricas em qualquer lugar da China (Yiwu, Shenzhen, Guangzhou, Ningbo). Explore 27.706 fornecedores do diretório grátis e solicite sua cotação conosco.',
      homeKeywords: "compras fábricas China, diretório fornecedores Yiwu, visitas a fornecedores",
      directoryTitle: 'Diretório do Mercado Atacadista na China | 27.706 Boxes do Diretório e Cotações Diretas',
      directoryDesc: 'Pesquise 27.706 fornecedores do diretório em Yiwu gratuitamente e peça cotações diretas de fábrica em toda a China com nossa equipe.',
      countriesTitle: 'Corredores de Importação de Yiwu, China para 100 Países | Frete Marítimo e Alfândega',
      countriesDesc: 'Guias completos de importação de Yiwu e Porto de Ningbo para 100 países com prazos marítimos, impostos e certificações obrigatórias.'
    }
  },
  fr: {
    nav: {
      directory: 'Annuaire des Stands',
      countries: '100 Pays',
      marketMap: 'Plan du Marché',
      sourcingGuide: 'Guide Sourcing',
      browseStalls: 'Voir 27 706 Stands'
    },
    hero: {
      badge: '🇨🇳 Sourcing Partout en Chine · Yiwu, Shenzhen, Guangzhou & Plus · Zéro Marge Cachée',
      title: 'Sourcez Directement auprès d’Usines & Marchés Partout en Chine.',
      subtitle: 'Nous achetons dans toute la Chine (Yiwu, Shenzhen, Guangzhou, Ningbo et pôles industriels) — pas uniquement à Yiwu. Parcourez 27 706 fournisseurs répertoriés et demandez un devis direct auprès de notre équipe.',
      searchPlaceholder: 'Rechercher par produit, catégorie ou numéro de stand (ex. Jouets, Cuisine, Stand 62159)...',
      searchBtn: 'Rechercher',
      trustLocation: 'Pôles Chinois : Yiwu, Shenzhen, Guangzhou, Ningbo',
      trustTeam: 'Bureau Sourcing sur WhatsApp (Réponse Rapide)',
      trustData: 'Annuaire des usines et stands en Chine',
      trustGuarantee: 'Négociation Gérée — Nous Contactons les Usines pour Vous',
      statStalls: 'Fournisseurs répertoriés',
      statPhones: 'Accès Usines Toute la Chine',
      statKickbacks: 'Marges Cachées'
    },
    faq: {
      badge: 'Transparence Absolue',
      title: 'Les Questions que Posent les Importateurs Sérieux Avant de Commander',
      q1: '« Achetez-vous uniquement à Yiwu ou partout en Chine, et pourquoi contacter Sino Trade Link ? »',
      a1: 'Nous sourçons partout en Chine — Shenzhen (électronique), Guangzhou/Foshan (textile, mobilier, beauté), Ningbo/Yongkang (quincaillerie), Shantou (jouets) et Yiwu. Les coordonnées directes restent gérées par notre bureau bilingue pour négocier en RMB à la source, vérifier les licences et vous éviter toute marge intermédiaire.',
      q5: '« Qu’en est-il des normes douanières (CE, RoHS, REACH, SONCAP) ? »',
      a5: 'Notre équipe à Yiwu vérifie les certificats CE, RoHS, EN71/ASTM directement au stand avant expédition et signale les marchandises réglementées (batteries, liquides) afin d’utiliser les lignes fret adaptées.',
    },
    countriesSection: {
      badge: '🌍 100 Corridors d’Importation • 2 400 Lignes Commerciales',
      title: 'Corridors Logistiques de Yiwu vers 100 Pays',
      subtitle: 'Consultez les délais de transit maritime depuis le port de Ningbo, les ports d’arrivée, les normes douanières locales (CE, SONCAP, COC), les audits sur place et le groupage conteneur.',
      viewAllCta: 'Explorer les 100 Corridors d’Importation →',
      portsLabel: 'Ports :',
      seaTransitLabel: 'Transit Maritime :',
      airTransitLabel: 'Fret Aérien :',
      complianceLabel: 'Conformité :',
      openHubCta: 'Ouvrir le Guide d’Importation du Pays →'
    },
    supplier: {
      directFactoryBadge: 'Usine Directe',
      marketWholesalerBadge: 'Stand Répertorié',
      districtLabel: 'District',
      floorLabel: 'Étage',
      gateLabel: 'Porte',
      boothLabel: 'Stand',
      yearsVerified: 'Ans à Futian',
      creditScore: 'Score Marché',
      mainProducts: 'Catalogue Grossiste :',
      officialCategory: 'Catégorie Officielle du Marché :',
      unlockBtn: 'Demander Devis Usine',
      whatsappBtn: 'Bureau Chine WhatsApp'
    },
    seo: {
      homeTitle: "Sino Trade Link | Sourcing Usines Partout en Chine",
      homeDesc: 'Sourcez directement auprès des usines partout en Chine (Yiwu, Shenzhen, Guangzhou, Ningbo). Consultez 27 706 fournisseurs répertoriés pour recevoir un devis géré par notre équipe.',
      homeKeywords: "sourcing usines Chine, annuaire fournisseurs Yiwu, visites fournisseurs",
      directoryTitle: 'Annuaire du Marché de Gros en Chine | 27 706 Stands Répertoriés & Devis Usine',
      directoryDesc: 'Parcourez 27 706 fournisseurs répertoriés gratuitement et demandez des devis directs d’usine partout en Chine via notre équipe bilingue.',
      countriesTitle: '100 Corridors d’Importation depuis Yiwu, Chine | Fret Maritime & Douanes',
      countriesDesc: 'Guides d’importation par pays depuis Yiwu et le port de Ningbo vers 100 destinations avec délais maritimes, droits de douane et certifications.'
    }
  },
  de: {
    nav: {
      directory: 'Standverzeichnis',
      countries: '100 Länder',
      marketMap: 'Marktkarte',
      sourcingGuide: 'Einkaufsleitfaden',
      browseStalls: '27.706 Stände ansehen'
    },
    hero: {
      badge: '🇨🇳 Chinaweite Fabrikbeschaffung · Yiwu, Shenzhen, Guangzhou & Mehr · Ohne Zwischenhändler',
      title: 'Direkteinkauf bei Fabriken & Märkten in Ganz China.',
      subtitle: 'Wir beschaffen landesweit in Yiwu, Shenzhen, Guangzhou, Ningbo und allen chinesischen Industrieregionen — nicht nur auf dem Markt in Yiwu. Durchsuchen Sie 27.706 gelistete Anbieter und fordern Sie Ihr Fabrikangebot direkt über unser Team an.',
      searchPlaceholder: 'Suche nach Produkt, Kategorie oder Standnummer (z. B. Spielwaren, Küche, Stand 62159)...',
      searchBtn: 'Verzeichnis durchsuchen',
      trustLocation: 'Chinaweite Hubs: Yiwu, Shenzhen, Guangzhou, Ningbo',
      trustTeam: 'Direktes Einkaufsteam über WhatsApp',
      trustData: 'Verzeichnis chinesischer Fabriken und Großhandelsstände',
      trustGuarantee: 'Betreuter Einkauf — Wir Kontaktieren Lieferanten Für Sie',
      statStalls: 'Gelistete Anbieter',
      statPhones: 'Chinaweiter Fabrikzugang',
      statKickbacks: 'Händleraufschläge'
    },
    faq: {
      badge: 'Transparenz an Erster Stelle',
      title: 'Die Fragen, die Seriöse Einkäufer Stellen, Bevor Sie Bestellen',
      q1: '„Beschaffen Sie nur vom Yiwu-Markt oder in ganz China – und warum läuft der Kontakt über Sie?“',
      a1: 'Wir beschaffen landesweit in ganz China: Shenzhen (Elektronik), Guangzhou/Foshan (Mode, Möbel), Ningbo/Yongkang (Werkzeuge & Haushaltswaren), Shantou (Spielwaren) und Yiwu. Lieferantendaten bleiben intern bei unserem zweisprachigen Team, damit wir lokale RMB-Fabrikpreise verhandeln, Lizenzen prüfen und Händleraufschläge verhindern.',
      q5: '„Wie werden EU-/deutsche Einfuhrbestimmungen (CE, RoHS, REACH, LUCID) geprüft?“',
      a5: 'Unser Team in Yiwu prüft CE-, RoHS-, REACH- und EN71-Zertifikate direkt am Stand vor dem Versand und weist frühzeitig auf Gefahrgut (Akkus, Flüssigkeiten) sowie geeignete Versandwege hin.',
    },
    countriesSection: {
      badge: '🌍 100 Globale Importkorridore • 2.400 Handelsrouten',
      title: 'Globale Yiwu-zu-Hafen-Beschaffungskorridore (100 Länder)',
      subtitle: 'Entdecken Sie länderspezifische Yiwu-Großhandels-Hubs mit Seefrachtlaufzeiten ab Ningbo, Zielhäfen, Zollvorschriften (CE, REACH, SABER), Standaudits auf Abruf und Containerkonsolidierung.',
      viewAllCta: 'Alle 100 Länder-Importkorridore entdecken →',
      portsLabel: 'Zielhäfen:',
      seaTransitLabel: 'Seefracht:',
      airTransitLabel: 'Luftfracht:',
      complianceLabel: 'Zoll & Normen:',
      openHubCta: 'Länder-Importleitfaden öffnen →'
    },
    supplier: {
      directFactoryBadge: 'Direktfabrik',
      marketWholesalerBadge: 'Gelisteter Stand',
      districtLabel: 'Distrikt',
      floorLabel: 'Etage',
      gateLabel: 'Tor',
      boothLabel: 'Stand',
      yearsVerified: 'Jahre in Futian',
      creditScore: 'Bonitätswert',
      mainProducts: 'Großhandelssortiment:',
      officialCategory: 'Offizielle Marktkategorie:',
      unlockBtn: 'Fabrikpreis anfragen',
      whatsappBtn: 'WhatsApp China-Büro'
    },
    seo: {
      homeTitle: "Sino Trade Link | Chinaweite Direkte Fabrikbeschaffung",
      homeDesc: 'Direkteinkauf bei Fabriken überall in China (Yiwu, Shenzhen, Guangzhou, Ningbo). 27.706 gelistete Anbieter gratis durchsuchen und Direktangebote anfragen.',
      homeKeywords: "Fabrikbeschaffung China, Lieferantenverzeichnis Yiwu, Lieferantenbesuche",
      directoryTitle: 'China Großhandelsverzeichnis | 27.706 gelistete Anbieter & Direkte Fabrikanfragen',
      directoryDesc: 'Durchsuchen Sie 27.706 gelistete Anbieter kostenlos und fordern Sie direkte Fabrikpreise in ganz China über unser Team an.',
      countriesTitle: '100 Länder-Importkorridore ab Yiwu, China | Seefracht & Zollbestimmungen',
      countriesDesc: 'Länderspezifische Großhandelsleitfäden von Yiwu & Hafen Ningbo in 100 Länder inklusive Seefrachtlaufzeiten, Zöllen und Einfuhrzertifikaten.'
    }
  },
  ar: {
    nav: {
      directory: 'دليل المحلات',
      countries: '100 دولة',
      marketMap: 'خريطة السوق',
      sourcingGuide: 'دليل الاستيراد',
      browseStalls: 'تصفح 27,706 محل'
    },
    hero: {
      badge: '🇨🇳 استيراد من جميع أنحاء الصين · إيوو وشينزن وقوانغتشو وغيرها · بدون هوامش وسطاء',
      title: 'اشترِ مباشرة من المصانع والأسواق في أي مكان بالصين.',
      subtitle: 'نوفر لك البضائع من شينزن وقوانغتشو ونينغبو وإيوو وكافة المناطق الصناعية في الصين — وليس من سوق إيوو فقط. تصفح 27,706 مورد مدرج في الدليل مجاناً ودع فريقنا يتفاوض ويجهز عرض السعر لك مباشرة.',
      searchPlaceholder: 'ابحث حسب المنتج أو الفئة أو رقم المحل (مثال: ألعاب، أدوات منزلية، محل 62159)...',
      searchBtn: 'ابحث في الدليل',
      trustLocation: 'مراكزنا بالصين: إيوو، شينزن، قوانغتشو، نينغبو',
      trustTeam: 'فريق المشتريات المباشر عبر واتساب',
      trustData: 'دليل المصانع والمحلات في الصين',
      trustGuarantee: 'تواصل وتفاوض مُدار — نتواصل مع الموردين نيابةً عنك',
      statStalls: 'مورد مدرج في الدليل',
      statPhones: 'وصول لمصانع عموم الصين',
      statKickbacks: 'عمولات خفية'
    },
    faq: {
      badge: 'الشفافية أولاً',
      title: 'الأسئلة التي يطرحها التجار والمستوردون قبل بدء الطلبات',
      q1: '«هل تشترون من سوق إيوو فقط أم من عموم الصين، ولماذا أتواصل مع Sino Trade Link مباشرة؟»',
      a1: 'نحن نشتري من المصانع في جميع أنحاء الصين: شينزن (الإلكترونيات)، قوانغتشو وفوشان (الملابس والأثاث)، نينغبو (الأدوات والمعدات)، شانتو (الألعاب)، وإيوو. تظل أرقام المصانع خاصة لدى فريقنا لنتفاوض لك باليوان الصيني من المصدر ونتحقق من الجودة والتراخيص.',
      q5: '«ماذا عن شهادات المطابقة الجمركية مثل سابر (SABER) و CE والمواصفات الخليجية؟»',
      a5: 'يتحقق فريقنا الميداني في إيوو من شهادات SABER و CE و RoHS مباشرة في المحل قبل الشحن، كما ننبهك مسبقاً لأي سلع مقيدة أو خطرة (بطاريات، سوائل) لاختيار خط الشحن المناسب.',
    },
    countriesSection: {
      badge: '🌍 100 مسار استيراد عالمي • 2,400 خط تجاري حسب الفئة',
      title: 'مسارات الشحن والاستيراد من إيوو إلى 100 دولة حول العالم',
      subtitle: 'تعرّف على مدة الشحن البحري من ميناء نينغبو، والموانئ المعتمدة، ومتطلبات التخليص الجمركي (SABER, CE, ACID)، وخدمة فحص المحلات عند الطلب.',
      viewAllCta: 'استكشف جميع مسارات الاستيراد لـ 100 دولة ←',
      portsLabel: 'الموانئ:',
      seaTransitLabel: 'الشحن البحري:',
      airTransitLabel: 'الشحن الجوي:',
      complianceLabel: 'المطابقة والجمارك:',
      openHubCta: 'افتح دليل الاستيراد للدولة ←'
    },
    supplier: {
      directFactoryBadge: 'مصنع مباشر',
      marketWholesalerBadge: 'محل مدرج في الدليل',
      districtLabel: 'المنطقة',
      floorLabel: 'الطابق',
      gateLabel: 'البوابة',
      boothLabel: 'رقم المحل',
      yearsVerified: 'سنوات في فوتيان',
      creditScore: 'تقييم الثقة',
      mainProducts: 'المنتجات الرئيسية بالجملة:',
      officialCategory: 'الفئة الرسمية في السوق:',
      unlockBtn: 'اطلب تسعيرة المصنع',
      whatsappBtn: 'تواصل مع مكتب الصين واتساب'
    },
    seo: {
      homeTitle: "Sino Trade Link | الشراء المباشر من مصانع عموم الصين",
      homeDesc: 'استورد مباشرة من المصانع في أي مكان بالصين (إيوو، شينزن، قوانغتشو، نينغبو). تصفح 27,706 مورد مدرج في الدليل مجاناً واطلب تسعيرة المصنع عبر فريقنا.',
      homeKeywords: "الاستيراد من مصانع الصين، دليل موردي إيوو، زيارة الموردين",
      directoryTitle: 'دليل سوق الجملة في الصين | 27,706 مورد مدرج في الدليل وعروض أسعار المصانع المباشرة',
      directoryDesc: 'ابحث في 27,706 مورد مدرج في الدليل مجاناً واطلب تسعيرات مباشرة من المصانع في عموم الصين عبر فريقنا.',
      countriesTitle: 'مسارات الاستيراد والشحن من إيوو، الصين إلى 100 دولة | الشحن البحري والجمارك',
      countriesDesc: 'أدلة شاملة للاستيراد من سوق إيوو وميناء نينغبو إلى 100 دولة تشمل مدة الشحن البحري والرسوم الجمركية وشهادات المطابقة المطلوبة.'
    }
  },
  ru: {
    nav: {
      directory: 'Каталог павильонов',
      countries: '100 стран',
      marketMap: 'Карта рынка',
      sourcingGuide: 'Гид по закупкам',
      browseStalls: 'Все 27 706 павильонов'
    },
    hero: {
      badge: '🇨🇳 Закупки по всему Китаю · Иу, Шэньчжэнь, Гуанчжоу и др. · Без скрытых наценок',
      title: 'Закупайте напрямую у фабрик и рынков в любой точке Китая.',
      subtitle: 'Мы выкупаем товар по всему Китаю (Иу, Шэньчжэнь, Гуанчжоу, Нинбо, Фошань), а не только на рынке Иу. Выберите павильон из 27 706 записей в каталоге — наш отдел рассчитает прямую фабричную цену.',
      searchPlaceholder: 'Поиск по товару, категории или номеру бутика (например: Игрушки, Посуда, павильон 62159)...',
      searchBtn: 'Найти поставщиков',
      trustLocation: 'Хабы в Китае: Иу, Шэньчжэнь, Гуанчжоу, Нинбо',
      trustTeam: 'Отдел закупок в WhatsApp (ответ за 2–6 ч)',
      trustData: 'Каталог фабрик и павильонов Китая',
      trustGuarantee: 'Полное сопровождение — сами ведем переговоры с фабриками',
      statStalls: 'Поставщиков в каталоге',
      statPhones: 'Закупки по всему Китаю',
      statKickbacks: 'Скрытых наценок'
    },
    faq: {
      badge: 'Честность и прозрачность',
      title: 'Ответы на главные вопросы оптовых закупщиков и продавцов',
      q1: '«Вы закупаете только в Иу или по всему Китаю, и почему контакт идет через вас?»',
      a1: 'Мы работаем по всему Китаю: Шэньчжэнь (электроника), Гуанчжоу и Фошань (одежда, мебель), Нинбо (металлоизделия), Шаньтоу (игрушки) и Иу. Прямые номера поставщиков остаются у нашей двуязычной команды, чтобы вы получали реальную цену фабрики в юанях без наценок посредников.',
      q5: '«Как проверить сертификаты (ЕАЭС, CE, RoHS) и ограничения на ввоз?»',
      a5: 'Наши инженеры в Иу проверяют сертификаты и лицензии прямо в павильоне перед отправкой, а также заранее предупреждают об опасных грузах (аккумуляторы, жидкости) для подбора карго или авиамаршрута.',
    },
    countriesSection: {
      badge: '🌍 100 логистических коридоров • 2 400 товарных направлений',
      title: 'Логистические маршруты из Иу в 100 стран мира',
      subtitle: 'Сроки морской, ж/д и автодоставки из Иу и порта Нинбо, таможенные требования (ЕАЭС, CE, SABER), выездной аудит павильонов и консолидация грузов.',
      viewAllCta: 'Смотреть все 100 стран и маршрутов доставки →',
      portsLabel: 'Порты / Хабы:',
      seaTransitLabel: 'Море / ЖД:',
      airTransitLabel: 'Авиа:',
      complianceLabel: 'Сертификация:',
      openHubCta: 'Открыть логистический хаб страны →'
    },
    supplier: {
      directFactoryBadge: 'Прямая фабрика',
      marketWholesalerBadge: 'Павильон в каталоге',
      districtLabel: 'Корпус',
      floorLabel: 'Этаж',
      gateLabel: 'Ворота',
      boothLabel: 'Павильон',
      yearsVerified: 'лет на рынке Футянь',
      creditScore: 'Рейтинг надежности',
      mainProducts: 'Оптовый ассортимент:',
      officialCategory: 'Официальная категория рынка:',
      unlockBtn: 'Запросить цену фабрики',
      whatsappBtn: 'WhatsApp офис в Китае'
    },
    seo: {
      homeTitle: "Sino Trade Link | Прямые закупки по всему Китаю",
      homeDesc: 'Закупайте напрямую с фабрик в любой точке Китая (Иу, Шэньчжэнь, Гуанчжоу, Нинбо). Смотрите 27 706 записей в каталоге павильонов бесплатно и запрашивайте прямой расчет у нас.',
      homeKeywords: "закупки с фабрик Китая, каталог поставщиков Иу, посещение поставщиков",
      directoryTitle: 'Каталог оптового рынка Китая | 27 706 павильонов в каталоге и запросы цен',
      directoryDesc: 'Бесплатный поиск среди 27 706 павильонов в каталоге в Иу и прямой расчет фабричных цен по всему Китаю через нашу команду.',
      countriesTitle: 'Доставка и импорт из Иу, Китай в 100 стран | Сроки, порты и таможня',
      countriesDesc: 'Логистические справочники по доставке оптовых грузов из Иу и порта Нинбо в 100 стран мира: сроки, пошлины и сертификация.'
    }
  },
  it: {
    nav: {
      directory: 'Catalogo Stand',
      countries: '100 Paesi',
      marketMap: 'Mappa del Mercato',
      sourcingGuide: 'Guida Importazione',
      browseStalls: 'Esplora 27.706 Stand'
    },
    hero: {
      badge: '🇨🇳 Acquisti in Tutta la Cina · Yiwu, Shenzhen, Guangzhou e Oltre · Zero Ricarichi',
      title: 'Acquista Direttamente da Fabbriche e Mercati in Tutta la Cina.',
      subtitle: 'Operiamo in tutta la Cina (Yiwu, Shenzhen, Guangzhou, Ningbo e poli industriali), non solo a Yiwu. Consulta 27.706 fornitori in elenco gratis e richiedi un preventivo diretto tramite il nostro team.',
      searchPlaceholder: 'Cerca per prodotto, categoria o numero di stand (es. Giocattoli, Casalinghi, Stand 62159)...',
      searchBtn: 'Cerca nel Catalogo',
      trustLocation: 'Poli in Tutta la Cina: Yiwu, Shenzhen, Guangzhou, Ningbo',
      trustTeam: 'Team Acquisti Diretti su WhatsApp',
      trustData: 'Elenco di fabbriche e stand cinesi',
      trustGuarantee: 'Trattativa Gestita — Contattiamo le Fabbriche per Te',
      statStalls: 'Fornitori in elenco',
      statPhones: 'Accesso Fabbriche in Tutta la Cina',
      statKickbacks: 'Ricarichi di Agenzia'
    },
    faq: {
      badge: 'Massima Trasparenza',
      title: 'Le Domande che gli Importatori Professionisti Fanno Prima di Ordinare',
      q1: '«Acquistate solo al mercato di Yiwu o in tutta la Cina, e perché il contatto passa da voi?»',
      a1: 'Acquistiamo ovunque in Cina: Shenzhen (elettronica), Guangzhou/Foshan (moda, arredamento), Ningbo/Yongkang (ferramenta e casalinghi), Shantou (giocattoli) e Yiwu. I contatti dei fornitori restano riservati al nostro team bilingue per negoziare in RMB alla fonte, verificare le licenze ed evitare ricarichi.',
      q5: '«Come vengono gestite le certificazioni doganali UE (CE, RoHS, REACH, EN71)?»',
      a5: 'Il nostro team a Yiwu verifica i certificati CE, RoHS, REACH ed EN71 direttamente allo stand prima della spedizione e segnala merci regolamentate (batterie, liquidi) per selezionare la rotta più sicura.',
    },
    countriesSection: {
      badge: '🌍 100 Corridoi Globali di Importazione • 2.400 Rotte Merceologiche',
      title: 'Corridoi Logistici da Yiwu verso 100 Paesi',
      subtitle: 'Scopri i tempi di transito marittimo dal porto di Ningbo, i porti di destinazione, le normative doganali (CE, REACH, SABER), gli audit su richiesta e il consolidamento container.',
      viewAllCta: 'Esplora Tutti i 100 Corridoi di Importazione →',
      portsLabel: 'Porti:',
      seaTransitLabel: 'Via Mare:',
      airTransitLabel: 'Via Aerea:',
      complianceLabel: 'Conformità:',
      openHubCta: 'Apri la Guida Importazione del Paese →'
    },
    supplier: {
      directFactoryBadge: 'Fabbrica Diretta',
      marketWholesalerBadge: 'Stand in Elenco',
      districtLabel: 'Distretto',
      floorLabel: 'Piano',
      gateLabel: 'Ingresso',
      boothLabel: 'Stand',
      yearsVerified: 'Anni a Futian',
      creditScore: 'Rating Mercato',
      mainProducts: 'Catalogo Ingrosso:',
      officialCategory: 'Categoria Ufficiale del Mercato:',
      unlockBtn: 'Richiedi Prezzo Fabbrica',
      whatsappBtn: 'Ufficio Cina WhatsApp'
    },
    seo: {
      homeTitle: "Sino Trade Link | Acquisti Diretti dalle Fabbriche in Tutta la Cina",
      homeDesc: 'Acquista direttamente dalle fabbriche ovunque in Cina (Yiwu, Shenzhen, Guangzhou, Ningbo). Esplora 27.706 fornitori in elenco gratis e richiedi un preventivo al nostro team.',
      homeKeywords: "acquisti fabbriche Cina, elenco fornitori Yiwu, visite fornitori",
      directoryTitle: 'Catalogo Mercato all’Ingrosso in Cina | 27.706 Stand in Elenco & Preventivi Fabbrica',
      directoryDesc: 'Cerca tra 27.706 fornitori in elenco gratuitamente e richiedi preventivi diretti di fabbrica in tutta la Cina attraverso il nostro team.',
      countriesTitle: '100 Corridoi di Importazione da Yiwu, Cina | Trasporto Marittimo e Dogana',
      countriesDesc: 'Guide all’importazione paese per paese da Yiwu e dal porto di Ningbo verso 100 destinazioni con tempi di transito, dazi e certificazioni richieste.'
    }
  }
};

export function t(locale?: string): UIDictionary {
  return UI_DICT[getLocaleConfig(locale).code];
}
