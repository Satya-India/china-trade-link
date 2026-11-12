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
    categoryPacks: string;
    countries: string;
    marketMap: string;
    sourcingGuide: string;
    concierge: string;
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
    statFactories: string;
    statKickbacks: string;
  };
  priceTable: {
    badge: string;
    title: string;
    subtitle: string;
    colProduct: string;
    colDistrict: string;
    colAmazon: string;
    colYiwu: string;
    colMoq: string;
    colSaving: string;
    footnote: string;
    cta: string;
  };
  membership: {
    badge: string;
    title: string;
    subtitle: string;
    singleLabel: string;
    singlePrice: string;
    singleDesc: string;
    singleCta: string;
    proBadge: string;
    proLabel: string;
    proPrice: string;
    proSave: string;
    proDesc: string;
    proCta: string;
    bizLabel: string;
    bizPrice: string;
    bizSave: string;
    bizDesc: string;
    bizCta: string;
    openBookNote: string;
  };
  faq: {
    badge: string;
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    calloutText: string;
    calloutCta: string;
  };
  openBook: {
    badge: string;
    title: string;
    subtitle: string;
    tradTitle: string;
    trad1: string;
    trad2: string;
    trad3: string;
    trad4: string;
    trad5: string;
    stlTitle: string;
    stl1: string;
    stl2: string;
    stl3: string;
    stl4: string;
    stl5: string;
    cta: string;
    responseNote: string;
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
    auditBtn: string;
    whatsappBtn: string;
  };
  seo: {
    homeTitle: string;
    homeDesc: string;
    homeKeywords: string;
    directoryTitle: string;
    directoryDesc: string;
    packsTitle: string;
    packsDesc: string;
    conciergeTitle: string;
    conciergeDesc: string;
    countriesTitle: string;
    countriesDesc: string;
  };
}

export const UI_DICT: Record<LocaleCode, UIDictionary> = {
  en: {
    nav: {
      directory: 'Stall Directory',
      categoryPacks: 'Alibaba Dropshipping',
      countries: '100 Countries',
      marketMap: 'Market Map',
      sourcingGuide: 'Sourcing Playbook',
      concierge: 'Ground QC & Agents',
      browseStalls: 'Browse 27,706 Stalls'
    },
    hero: {
      badge: '🇨🇳 27,706 Verified Stalls · 99.9% Direct Mobiles · No Agents · No Kickbacks',
      title: 'Source Directly from Physical Factory Stalls in China.',
      subtitle: 'Bypass trading agents and 30% trading markups. Access 27,706+ verified stalls across Yiwu Futian & Huangyuan Wholesale Markets with real, unmasked Chinese mobile numbers.',
      searchPlaceholder: 'Search by product, category, or stall name (e.g. Toys, Kitchenware, Booth 62159)...',
      searchBtn: 'Search Directory',
      trustLocation: 'Yiwu Futian Market, Zhejiang, China',
      trustTeam: 'On-Ground Team: +86 134 8272 5985',
      trustData: 'B2B commercial stall signboard data',
      trustGuarantee: 'Dead Contact Replacement Guarantee',
      statStalls: 'Verified Stalls Ingested',
      statPhones: 'Unmasked Direct Mobiles',
      statFactories: 'Licensed Factories',
      statKickbacks: 'Trading Markups'
    },
    priceTable: {
      badge: 'Real Price Intelligence',
      title: 'Same Product. Fraction of the Price.',
      subtitle: 'Real prices from Amazon vs. what verified Yiwu Futian stalls actually charge — before any middleman margin.',
      colProduct: 'Product',
      colDistrict: 'District & Floor',
      colAmazon: 'Amazon Price',
      colYiwu: 'Yiwu Booth',
      colMoq: 'MOQ',
      colSaving: 'Saving',
      footnote: '* Ex-works prices from stall. Add shipping (~$1.50–$3.50/kg via sea freight) for landed cost. Prices vary by order volume.',
      cta: 'Browse 27,706+ Verified Stalls →'
    },
    membership: {
      badge: 'Zero Upfront Subscriptions · Pay Per Order',
      title: 'Browse Free. Quote Direct. Ship From 1 Unit.',
      subtitle: 'No paid CSV packs or annual memberships. Browse 27,706+ Yiwu stalls free or paste any Alibaba.com product link to source direct from the factory.',
      singleLabel: '1-Piece Dropshipping',
      singlePrice: 'From 1 Unit',
      singleDesc: 'Paste any Alibaba.com product link. Our Yiwu desk locates the direct factory line, checks stock, and fulfills blind-labeled parcels worldwide in 5–9 days.',
      singleCta: 'Paste Alibaba Link (Free) →',
      proBadge: 'MOST POPULAR',
      proLabel: 'Alibaba Link → Factory Direct',
      proPrice: '$0 Upfront',
      proSave: 'Save 10–35% vs. public Alibaba trader quotes',
      proDesc: 'Send an Alibaba link or product photo on WhatsApp. We negotiate real RMB factory cost, combine items from multiple booths, and remove third-party brand tags.',
      proCta: 'Get Free Factory Quote →',
      bizLabel: 'Open-Book Wholesale',
      bizPrice: '6% Flat Fee',
      bizSave: 'Original RMB factory receipts shared before payment',
      bizDesc: 'Dedicated bilingual Yiwu field rep, 4K stall verification video, custom OEM packaging, AQL 2.5 pre-shipment inspection, and sea or air consolidation from Ningbo.',
      bizCta: 'Start on WhatsApp →',
      openBookNote: '💡 You receive the raw RMB factory receipt + our separate invoice. You pay $0 until you approve your sample or landed quote.'
    },
    faq: {
      badge: 'Transparency First',
      title: 'The Questions Serious Buyers Ask Before Trusting Us With Their Orders',
      q1: '"How do I know phone numbers are real and not VoIP proxies?"',
      a1: 'Our 27,706 records come from physical stall signboards photographed on-site at Yiwu Futian Market. Every number is cross-referenced with the market\'s official booth registration card. Inactive or VoIP numbers found during use are replaced free under our Dead Contact Guarantee — notify us and we replace within 48 hours.',
      q2: '"Can I paste an Alibaba.com link even if I only need 1 piece or low MOQ?"',
      a2: 'Yes. Paste any Alibaba.com product URL into our Dropshipping Quote Box (or send a screenshot on WhatsApp). Even if the listing shows a high MOQ, our on-ground Yiwu team negotiates with the physical factory stall for 1-piece private dropshipping or a low-MOQ test batch.',
      q3: '"How does Sino Trade Link make money if directory access and quotes are free?"',
      a3: 'Transparent answer: We removed all upfront pack paywalls and platform subscriptions ($0 to browse, $0 to request a quote). We only earn transparent fulfillment fees when you place an order through us (dropshipping dispatch, multi-booth consolidation, on-site inspection, or 6% open-book wholesale execution).',
      q4: '"Is my order money safe? Who handles quality before dispatch?"',
      a4: 'You pay $0 before approving your exact landed cost quote, photos, and shipping rate. Our Yiwu warehouse physically receives every unit from the factory, inspects quality and packaging, removes unwanted supplier flyers, and sends proof photos before international dispatch.',
      q5: '"What if my country has import restrictions on certain Chinese goods?"',
      a5: 'Our ground team can verify CE, FCC, EN71/ASTM toy safety, and RoHS certificates at the stall level during an on-site audit or before dropship dispatch. We also proactively flag DG (Dangerous Goods) categories — lighters, batteries, liquids, aerosols — that need specialized freight lanes before you commit.',
      calloutText: 'Our business model is built on repeat buyers and scaling dropshippers. Talk to us directly on WhatsApp — we share real factory quotes and warehouse photos before you spend a dollar.',
      calloutCta: 'Talk to Our Yiwu Team on WhatsApp →'
    },
    openBook: {
      badge: 'Open-Book Sourcing',
      title: "Traditional 'Free' Yiwu Agent vs. Sino Trade Link Direct Execution",
      subtitle: "Most Yiwu agents claim to work for free. They don't. They earn 10–20% kickbacks from factories — baked invisibly into the unit price you see.",
      tradTitle: "❌ Traditional 'Free' Yiwu Agent",
      trad1: 'Claims to work for free — earns 10–20% hidden kickback from the factory you buy from',
      trad2: 'Shows you a "best price" — already inflated before you see it',
      trad3: "No paper trail — you can't verify actual factory price vs. what you paid",
      trad4: 'Financially incentivized to push affiliated factories over better alternatives',
      trad5: 'Typically disappears after commission is collected',
      stlTitle: '✅ Sino Trade Link Direct Execution (Zero Subscription)',
      stl1: 'No annual subscription or membership lock-in — $0 until you confirm an order',
      stl2: 'You receive the raw RMB factory receipt + our fee as two separate transparent line items',
      stl3: 'Open-Book Mandate: if we negotiate ¥23/unit at the stall, you pay ¥23 + our agreed fee — nothing else',
      stl4: 'Direct factory sourcing from Alibaba links or our 27,706 verified stall database',
      stl5: 'Real warehouse QC photos & all supplier negotiations logged on WhatsApp',
      cta: 'Start Open-Book Sourcing on WhatsApp →',
      responseNote: 'Our Yiwu team typically responds within 2 hours during business hours (UTC+8).'
    },
    countriesSection: {
      badge: '🌍 100 Global Import Corridors • 2,400 Category Trade Lanes',
      title: 'Global Yiwu-to-Port Sourcing Corridors (100 Countries)',
      subtitle: 'Explore country-specific Yiwu wholesale hubs with Ningbo ocean transit times, destination ports, local customs compliance (CE, SABER, BIS, SONCAP, INMETRO), on-demand stall audits, and 6% open-book execution.',
      viewAllCta: 'Explore All 100 Country Import Corridors →',
      portsLabel: 'Ports:',
      seaTransitLabel: 'Sea Transit:',
      airTransitLabel: 'Air Express:',
      complianceLabel: 'Compliance:',
      openHubCta: 'Open Country Sourcing Hub →'
    },
    supplier: {
      directFactoryBadge: 'Direct Factory',
      marketWholesalerBadge: 'Verified Stall',
      districtLabel: 'District',
      floorLabel: 'Floor',
      gateLabel: 'Gate',
      boothLabel: 'Booth',
      yearsVerified: 'Yrs in Futian',
      creditScore: 'Market Score',
      mainProducts: 'Wholesale Catalog Keywords:',
      officialCategory: 'Official Market Category:',
      unlockBtn: 'Reveal Phone & WeChat',
      auditBtn: 'Request On-Site Audit →',
      whatsappBtn: 'WhatsApp Ground Desk'
    },
    seo: {
      homeTitle: 'Sino Trade Link | Alibaba.com Dropshipping Agent & 27,706+ Verified China Market Suppliers',
      homeDesc: 'Browse 27,706+ verified Yiwu Futian Market suppliers free or paste any Alibaba.com product link for direct factory pricing, 1-piece dropshipping, and blind parcel fulfillment.',
      homeKeywords: 'Alibaba dropshipping agent China, Yiwu wholesale market directory, China direct factory contacts, 1 piece China dropshipping, private label fulfillment Yiwu',
      directoryTitle: 'Yiwu Wholesale Market Directory | 27,706+ Verified Stalls & Direct Factory Contacts',
      directoryDesc: 'Search 27,706+ verified wholesale booths across Districts 1–5 & Huangyuan Market in Yiwu, China free. Unlock direct +86 mobile numbers and WeChat IDs.',
      packsTitle: 'Alibaba.com Dropshipping & Direct China Factory Agent (No Subscription) | Sino Trade Link',
      packsDesc: 'Paste any Alibaba.com product link to source direct from Chinese factories with 1-piece fulfillment, blind white-label shipping, custom inserts, and free WhatsApp quotes.',
      conciergeTitle: 'Yiwu On-Ground Stall Audit, Sample Consolidation & AQL 2.5 Inspection',
      conciergeDesc: 'Hire our bilingual Yiwu field engineers for physical booth 4K video audits, consolidated sample boxes, and AQL 2.5 pre-shipment inspections — discuss direct on WhatsApp.',
      countriesTitle: '100 Country Import Corridors from Yiwu, China | Sea Freight & Customs Compliance',
      countriesDesc: 'Country-by-country wholesale sourcing hubs from Yiwu & Ningbo Port to 100 countries with transit times, duties, and required import certifications.'
    }
  },
  es: {
    nav: {
      directory: 'Directorio de Puestos',
      categoryPacks: 'Dropshipping Alibaba',
      countries: '100 Países',
      marketMap: 'Mapa del Mercado',
      sourcingGuide: 'Guía de Importación',
      concierge: 'Inspección en Yiwu',
      browseStalls: 'Ver 27.706 Puestos'
    },
    hero: {
      badge: '🇨🇳 27.706 Puestos Verificados · 99,9% Móviles Directos · Sin Intermediarios · Sin Comisiones Ocultas',
      title: 'Compre Directo de Fábricas y Puestos Físicos en Yiwu, China.',
      subtitle: 'Elimine intermediarios y sobreprecios del 30%. Acceda a más de 27.706 puestos verificados en el Mercado Mayorista de Yiwu Futian y Huangyuan con números móviles chinos reales y WeChat directo.',
      searchPlaceholder: 'Buscar por producto, categoría o número de puesto (ej. Juguetes, Cocina, Puesto 62159)...',
      searchBtn: 'Buscar Puestos',
      trustLocation: 'Mercado Futian de Yiwu, Zhejiang, China',
      trustTeam: 'Equipo en Yiwu: +86 134 8272 5985',
      trustData: 'Datos reales de letreros comerciales B2B',
      trustGuarantee: 'Garantía de Reemplazo de Contactos Inactivos',
      statStalls: 'Puestos Verificados',
      statPhones: 'Móviles Directos Reales',
      statFactories: 'Fábricas Directas',
      statKickbacks: 'Sobreprecio de Agentes'
    },
    priceTable: {
      badge: 'Inteligencia de Precios Reales',
      title: 'El Mismo Producto. A una Fracción del Costo.',
      subtitle: 'Precios reales en Amazon frente al precio EXW directo en los puestos de Yiwu Futian — sin el margen de los intermediarios.',
      colProduct: 'Producto',
      colDistrict: 'Distrito y Piso',
      colAmazon: 'Precio Amazon',
      colYiwu: 'Puesto en Yiwu',
      colMoq: 'MOQ (Mínimo)',
      colSaving: 'Ahorro',
      footnote: '* Precios EXW en el puesto. Añada flete marítimo (~$1,50–$3,50/kg) para calcular el costo puesto en destino. Precios según volumen.',
      cta: 'Explorar 27.706+ Puestos Verificados →'
    },
    membership: {
      badge: 'Cero Suscripciones · Pague Solo por Pedido',
      title: 'Explore Gratis. Cotice Directo. Envíe Desde 1 Unidad.',
      subtitle: 'Sin paquetes CSV de pago ni membresías anuales. Explore 27.706+ puestos en Yiwu gratis o pegue cualquier enlace de Alibaba.com para cotizar directo de fábrica.',
      singleLabel: 'Dropshipping 1 Unidad',
      singlePrice: 'Desde 1 Pieza',
      singleDesc: 'Pegue cualquier producto de Alibaba.com. Nuestro equipo en Yiwu localiza la fábrica directa, verifica calidad y envía paquetes sin marca ajena en 5–9 días.',
      singleCta: 'Pegar Enlace Alibaba (Gratis) →',
      proBadge: 'MÁS SOLICITADO',
      proLabel: 'Enlace Alibaba → Fábrica Directa',
      proPrice: '$0 Inicial',
      proSave: 'Ahorra 10–35% frente a cotizaciones minoristas en Alibaba',
      proDesc: 'Envíe un link de Alibaba o captura por WhatsApp. Negociamos en RMB en origen, consolidamos varios artículos y colocamos su propio empaque.',
      proCta: 'Cotizar Gratis en WhatsApp →',
      bizLabel: 'Mayoreo Open-Book',
      bizPrice: '6% Comisión Fija',
      bizSave: 'Recibo original de fábrica en RMB compartido antes de pagar',
      bizDesc: 'Agente bilingüe en Yiwu, video 4K en tienda, marca blanca OEM, inspección AQL 2.5 pre-embarque y flete aéreo o marítimo desde Ningbo.',
      bizCta: 'Consultar por WhatsApp →',
      openBookNote: '💡 Recibirá el recibo original de fábrica en RMB más nuestra factura por separado. Paga $0 hasta aprobar la cotización final.'
    },
    faq: {
      badge: 'Transparencia Total',
      title: 'Las Preguntas que Todo Importador Serio Hace Antes de Iniciar Pedidos',
      q1: '«¿Cómo sé que los teléfonos son reales y no números virtuales?»',
      a1: 'Nuestros 27.706 registros provienen de letreros físicos fotografiados en el Mercado Futian de Yiwu y validados con el registro oficial del puesto. Si algún número está inactivo, lo reemplazamos gratis en menos de 48 horas bajo nuestra Garantía de Contacto Activo.',
      q2: '«¿Puedo enviar un enlace de Alibaba.com aunque solo necesite 1 unidad o poca cantidad?»',
      a2: 'Sí. Pegue cualquier enlace de Alibaba.com en nuestro formulario rápido o envíe una captura por WhatsApp. Aunque la publicación pida alto MOQ, negociamos directamente con el puesto o fábrica para dropshipping desde 1 pieza o lotes de prueba.',
      q3: '«¿Cómo gana dinero Sino Trade Link si explorar y cotizar es gratis?»',
      a3: 'Sin suscripciones ni packs de pago ($0 para buscar y cotizar). Solo cobramos tarifas transparentes cuando usted aprueba una orden con nosotros: gestión logística de dropshipping, consolidación de paquetes, inspecciones en Yiwu o 6% en compras mayores.',
      q4: '«¿Mi dinero está seguro? ¿Quién verifica la calidad antes del envío?»',
      a4: 'No paga nada hasta aprobar el precio puesto en destino y fotos reales. Nuestro almacén en Yiwu recibe cada producto de fábrica, revisa defectos, retira facturas chinas y envía fotos antes de despachar.',
      q5: '«¿Qué ocurre con las normas aduaneras y certificaciones de mi país (NOM, CE, INMETRO)?»',
      a5: 'Nuestro equipo en Yiwu verifica certificados CE, FCC, EN71/ASTM y RoHS directamente en el puesto antes de embarcar e identifica mercancías peligrosas (baterías, líquidos) para usar líneas de flete seguras.',
      calloutText: 'Nuestro modelo se basa en importadores recurrentes y tiendas de dropshipping que escalan con nosotros. Escríbanos por WhatsApp sin compromiso.',
      calloutCta: 'Hablar con Nuestro Equipo en Yiwu por WhatsApp →'
    },
    openBook: {
      badge: 'Compras a Libro Abierto (Open-Book)',
      title: 'Agente Tradicional «Gratis» en Yiwu vs. Sino Trade Link Ejecución Directa',
      subtitle: 'La mayoría de los agentes en Yiwu dicen trabajar gratis o al 1%, pero cobran entre 10% y 20% de comisión oculta de la fábrica, inflando su costo unitario.',
      tradTitle: '❌ Agente Tradicional «Gratis» en Yiwu',
      trad1: 'Dice cobrar 0% o 1%, pero recibe 10–20% de comisión oculta pagada por la fábrica',
      trad2: 'Le presenta un «precio final» que ya viene inflado antes de que usted lo vea',
      trad3: 'Sin comprobantes reales: nunca sabe cuánto cobró realmente el fabricante',
      trad4: 'Incentivado a llevarlo a fábricas cómplices en lugar de las mejores opciones',
      trad5: 'Desaparece cuando surgen problemas de calidad tras cobrar su comisión',
      stlTitle: '✅ Sino Trade Link Ejecución Directa (Cero Suscripciones)',
      stl1: 'Sin cuotas mensuales ni paquetes previos: $0 hasta aprobar su cotización',
      stl2: 'Recibe el comprobante original del puesto en RMB + nuestra tarifa por separado',
      stl3: 'Mandato a Libro Abierto: si negociamos ¥23/unidad en fábrica, paga ¥23 + tarifa acordada',
      stl4: 'Cero alianzas ocultas: cotizamos desde sus enlaces de Alibaba o 27.706 puestos verificados',
      stl5: 'Fotos reales de almacén y negociación documentada directamente por WhatsApp',
      cta: 'Iniciar Compra a Libro Abierto por WhatsApp →',
      responseNote: 'Nuestro equipo en Yiwu responde habitualmente en menos de 2 horas en horario comercial (UTC+8).'
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
      marketWholesalerBadge: 'Puesto Verificado',
      districtLabel: 'Distrito',
      floorLabel: 'Piso',
      gateLabel: 'Puerta',
      boothLabel: 'Puesto',
      yearsVerified: 'Años en Futian',
      creditScore: 'Puntaje Comercial',
      mainProducts: 'Catálogo Mayorista:',
      officialCategory: 'Categoría Oficial del Mercado:',
      unlockBtn: 'Ver Teléfono y WeChat',
      auditBtn: 'Solicitar Auditoría en Puesto →',
      whatsappBtn: 'Consultar por WhatsApp'
    },
    seo: {
      homeTitle: 'Sino Trade Link | Agente Dropshipping Alibaba y 27.706+ Proveedores en Yiwu, China',
      homeDesc: 'Explore 27.706+ puestos del Mercado Futian de Yiwu gratis o pegue cualquier enlace de Alibaba.com para cotizar directo de fábrica con dropshipping desde 1 unidad.',
      homeKeywords: 'agente dropshipping Alibaba China, mercado mayorista Yiwu, proveedores directos China, dropshipping 1 unidad China, marca blanca Yiwu',
      directoryTitle: 'Directorio del Mercado Mayorista de Yiwu | 27.706+ Puestos y Fábricas Directas',
      directoryDesc: 'Busque entre 27.706+ puestos verificados en los Distritos 1 a 5 y el Mercado Huangyuan de Yiwu. Desbloquee móviles +86 y WeChat directo.',
      packsTitle: 'Dropshipping Alibaba.com y Agente Directo de Fábrica en China | Sino Trade Link',
      packsDesc: 'Pegue su enlace de Alibaba.com para comprar directo a fábrica en China con envíos desde 1 unidad, empaque privado y cotización gratuita por WhatsApp.',
      conciergeTitle: 'Auditoría Física de Puestos en Yiwu, Consolidación de Muestras e Inspección AQL 2.5',
      conciergeDesc: 'Contrate a nuestros ingenieros bilingües en Yiwu para videollamadas 4K desde el puesto, consolidación de muestras e inspección pre-embarque AQL 2.5.',
      countriesTitle: 'Importar desde Yiwu, China hacia 100 Países | Flete Marítimo y Aduanas',
      countriesDesc: 'Guías de importación desde Yiwu y el Puerto de Ningbo hacia 100 países con tiempos de tránsito marítimo, aranceles y certificaciones requeridas.'
    }
  },
  pt: {
    nav: {
      directory: 'Diretório de Lojas',
      categoryPacks: 'Dropshipping Alibaba',
      countries: '100 Países',
      marketMap: 'Mapa do Mercado',
      sourcingGuide: 'Guia de Importação',
      concierge: 'Auditoria em Yiwu',
      browseStalls: 'Ver 27.706 Lojas'
    },
    hero: {
      badge: '🇨🇳 27.706 Boxes Verificados · 99,9% Celulares Diretos · Sem Intermediários · Zero Comissões Ocultas',
      title: 'Compre Direto de Fábricas e Boxes Físicos em Yiwu, China.',
      subtitle: 'Elimine atravessadores e ágios de 30%. Acesse mais de 27.706 fornecedores verificados nos mercados atacadistas Yiwu Futian e Huangyuan com números de celular chineses reais e WeChat direto.',
      searchPlaceholder: 'Busque por produto, categoria ou número do box (ex: Brinquedos, Cozinha, Box 62159)...',
      searchBtn: 'Buscar Fornecedores',
      trustLocation: 'Mercado Futian de Yiwu, Zhejiang, China',
      trustTeam: 'Equipe Local em Yiwu: +86 134 8272 5985',
      trustData: 'Dados reais das placas comerciais B2B',
      trustGuarantee: 'Garantia de Substituição de Contatos Inativos',
      statStalls: 'Boxes Verificados',
      statPhones: 'Celulares Diretos Reais',
      statFactories: 'Fábricas Licenciadas',
      statKickbacks: 'Comissões Ocultas'
    },
    priceTable: {
      badge: 'Comparativo Real de Preços',
      title: 'O Mesmo Produto. Uma Fração do Preço.',
      subtitle: 'Preços praticados no varejo online vs. o preço real EXW nos boxes do Mercado de Yiwu — antes da margem dos intermediários.',
      colProduct: 'Produto',
      colDistrict: 'Distrito e Andar',
      colAmazon: 'Preço Varejo',
      colYiwu: 'Box em Yiwu',
      colMoq: 'MOQ (Mínimo)',
      colSaving: 'Economia',
      footnote: '* Preços EXW direto no box. Adicione o frete marítimo (~$1,50–$3,50/kg) para o custo desembaraçado. Valores variam conforme o volume.',
      cta: 'Explorar 27.706+ Fornecedores Verificados →'
    },
    membership: {
      badge: 'Zero Assinaturas · Pague Apenas por Pedido',
      title: 'Explore Grátis. Cote Direto. Envie a Partir de 1 Unidade.',
      subtitle: 'Sem pacotes CSV pagos ou mensalidades. Pesquise 27.706+ boxes em Yiwu grátis ou cole qualquer link da Alibaba.com para cotação direta de fábrica.',
      singleLabel: 'Dropshipping 1 Unidade',
      singlePrice: 'A partir de 1 Peça',
      singleDesc: 'Cole qualquer link de produto da Alibaba.com. Nossa equipe em Yiwu encontra a fábrica direta, checa qualidade e despacha embalagens sem marca em 5–9 dias.',
      singleCta: 'Colar Link Alibaba (Grátis) →',
      proBadge: 'MAIS PROCURADO',
      proLabel: 'Link Alibaba → Fábrica Direta',
      proPrice: '$0 Inicial',
      proSave: 'Economize 10–35% frente às cotações públicas no Alibaba',
      proDesc: 'Envie um link do Alibaba ou foto pelo WhatsApp. Negociamos em RMB na fonte, consolidamos vários itens e aplicamos sua própria marca ou etiqueta.',
      proCta: 'Cotar Grátis no WhatsApp →',
      bizLabel: 'Atacado Open-Book',
      bizPrice: '6% Taxa Fixa',
      bizSave: 'Recibo original da fábrica em RMB compartilhado antes do pagamento',
      bizDesc: 'Agente bilíngue dedicado em Yiwu, vídeo 4K no box, embalagem OEM personalizada, inspeção AQL 2.5 e frete aéreo ou marítimo desde Ningbo.',
      bizCta: 'Falar no WhatsApp →',
      openBookNote: '💡 Você recebe o recibo original da fábrica em RMB + nossa fatura separada. Você paga $0 até aprovar a cotação final.'
    },
    faq: {
      badge: 'Transparência em Primeiro Lugar',
      title: 'As Perguntas que Importadores Experientes Fazem Antes de Fechar Pedido',
      q1: '“Como sei que os números de telefone são reais e não números virtuais?”',
      a1: 'Nossos 27.706 registros vêm das placas físicas fotografadas presencialmente no Mercado Futian de Yiwu e conferidas com o registro oficial do box. Números inativos são substituídos gratuitamente em até 48 horas.',
      q2: '“Posso enviar um link da Alibaba.com mesmo precisando de 1 unidade ou lote baixo?”',
      a2: 'Sim. Cole qualquer URL de produto da Alibaba.com na nossa caixa de cotação ou envie print no WhatsApp. Mesmo se o anúncio indicar MOQ alto, negociamos diretamente com a fábrica para dropshipping unitário ou lote teste.',
      q3: '“Como a Sino Trade Link ganha dinheiro se a busca e a cotação são gratuitas?”',
      a3: 'Zero mensalidades ou pacotes pagos ($0 para buscar e cotar). Só cobramos taxas claras quando você aprova um pedido: logística de dropshipping, consolidação de pacotes, inspeção sob demanda ou 6% no atacado Open-Book.',
      q4: '“Meu dinheiro está seguro? Quem confere a qualidade antes do despacho?”',
      a4: 'Você não paga nada antes de aprovar preço final, frete e fotos. Nosso armazém em Yiwu recebe a mercadoria da fábrica, verifica defeitos, remove panfletos chineses e envia fotos reais antes de postar.',
      q5: '“Como funcionam as certificações exigidas na alfândega (INMETRO, ANATEL, CE)?”',
      a5: 'Nossa equipe em Yiwu verifica certificados CE, RoHS, FCC e requisitos INMETRO diretamente no box antes do envio e identifica cargas especiais (baterias, líquidos) para rotas aéreas adequadas.',
      calloutText: 'Nosso modelo é baseado em lojistas e importadores recorrentes. Converse com nossa equipe em Yiwu no WhatsApp sem compromisso.',
      calloutCta: 'Falar com Nossa Equipe em Yiwu no WhatsApp →'
    },
    openBook: {
      badge: 'Importação Open-Book (Livro Aberto)',
      title: 'Agente Tradicional “Grátis” em Yiwu vs. Sino Trade Link Execução Direta',
      subtitle: 'A maioria dos agentes em Yiwu diz trabalhar de graça ou cobrar 1%, mas recebe de 10% a 20% de comissão oculta da fábrica — embutida no preço unitário que você paga.',
      tradTitle: '❌ Agente Tradicional “Grátis” em Yiwu',
      trad1: 'Diz não cobrar comissão, mas recebe 10–20% de repasse oculto pago pela fábrica',
      trad2: 'Apresenta um “preço final” que já vem inflacionado antes de chegar até você',
      trad3: 'Sem comprovantes reais — impossível auditar o valor real cobrado pela fábrica',
      trad4: 'Incentivado financeiramente a indicar fábricas parceiras em vez das melhores opções',
      trad5: 'Desaparece após receber a comissão quando surgem problemas de qualidade',
      stlTitle: '✅ Sino Trade Link Execução Direta (Zero Assinatura)',
      stl1: 'Sem anuidade nem compra de pacotes — $0 até você confirmar um pedido',
      stl2: 'Você recebe o recibo original da fábrica em RMB + nossa taxa em itens separados',
      stl3: 'Mandato Open-Book: se negociarmos ¥23/unidade no box, você paga ¥23 + taxa combinada',
      stl4: 'Sem vínculo oculto — cotamos a partir de seus links do Alibaba ou 27.706 boxes verificados',
      stl5: 'Fotos de conferência em armazém e negociação compartilhadas no WhatsApp',
      cta: 'Iniciar Importação Open-Book no WhatsApp →',
      responseNote: 'Nossa equipe em Yiwu responde normalmente em até 2 horas no horário comercial (UTC+8).'
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
      marketWholesalerBadge: 'Box Verificado',
      districtLabel: 'Distrito',
      floorLabel: 'Andar',
      gateLabel: 'Portão',
      boothLabel: 'Box',
      yearsVerified: 'Anos em Futian',
      creditScore: 'Nota de Crédito',
      mainProducts: 'Catálogo Atacadista:',
      officialCategory: 'Categoria Oficial do Mercado:',
      unlockBtn: 'Revelar Telefone e WeChat',
      auditBtn: 'Solicitar Auditoria do Box →',
      whatsappBtn: 'Chamar Equipe no WhatsApp'
    },
    seo: {
      homeTitle: 'Sino Trade Link | Agente Dropshipping Alibaba e 27.706+ Fornecedores em Yiwu, China',
      homeDesc: 'Explore 27.706+ fornecedores verificados de Yiwu Futian grátis ou cole qualquer link da Alibaba.com para cotação direta de fábrica com dropshipping a partir de 1 peça.',
      homeKeywords: 'agente dropshipping Alibaba China, mercado atacadista Yiwu, fornecedores diretos China, dropshipping 1 unidade China, marca própria Yiwu',
      directoryTitle: 'Diretório do Mercado Atacadista de Yiwu | 27.706+ Boxes e Fábricas Diretas',
      directoryDesc: 'Pesquise 27.706+ boxes verificados nos Distritos 1 a 5 e Mercado Huangyuan em Yiwu, China. Desbloqueie celulares +86 e WeChat direto.',
      packsTitle: 'Dropshipping Alibaba.com e Agente Direto de Fábrica na China | Sino Trade Link',
      packsDesc: 'Cole seu link da Alibaba.com para comprar direto da fábrica na China com envio de 1 unidade, embalagem privada e cotação grátis no WhatsApp.',
      conciergeTitle: 'Auditoria Presencial de Box em Yiwu, Consolidação de Amostras e Inspeção AQL 2.5',
      conciergeDesc: 'Contrate nossos engenheiros bilíngues em Yiwu para auditoria em vídeo 4K, caixa consolidada de amostras e inspeção pré-embarque AQL 2.5.',
      countriesTitle: 'Corredores de Importação de Yiwu, China para 100 Países | Frete Marítimo e Alfândega',
      countriesDesc: 'Guias completos de importação de Yiwu e Porto de Ningbo para 100 países com prazos marítimos, impostos e certificações obrigatórias.'
    }
  },
  fr: {
    nav: {
      directory: 'Annuaire des Stands',
      categoryPacks: 'Dropshipping Alibaba',
      countries: '100 Pays',
      marketMap: 'Plan du Marché',
      sourcingGuide: 'Guide Sourcing',
      concierge: 'Contrôle sur Place',
      browseStalls: 'Voir 27 706 Stands'
    },
    hero: {
      badge: '🇨🇳 27 706 Stands Vérifiés · 99,9 % Mobiles Directs · Sans Intermédiaires · Zéro Commission Cachée',
      title: 'Achetez en Direct auprès des Stands d’Usines à Yiwu, Chine.',
      subtitle: 'Évitez les sociétés de négoce et leurs marges de 30 %. Accédez à plus de 27 706 stands vérifiés des marchés de gros Yiwu Futian et Huangyuan avec numéros mobiles chinois directs et WeChat.',
      searchPlaceholder: 'Rechercher par produit, catégorie ou numéro de stand (ex. Jouets, Cuisine, Stand 62159)...',
      searchBtn: 'Rechercher',
      trustLocation: 'Marché Futian de Yiwu, Zhejiang, Chine',
      trustTeam: 'Équipe sur place : +86 134 8272 5985',
      trustData: 'Données issues des enseignes officielles B2B',
      trustGuarantee: 'Garantie de Remplacement des Contacts Inactifs',
      statStalls: 'Stands Vérifiés',
      statPhones: 'Mobiles Directs Non Masqués',
      statFactories: 'Usines Certifiées',
      statKickbacks: 'Marges Cachées'
    },
    priceTable: {
      badge: 'Comparaison Réelle des Prix',
      title: 'Le Même Produit. Une Fraction du Prix.',
      subtitle: 'Prix constatés sur Amazon comparés aux tarifs EXW réels pratiqués sur les stands de Yiwu Futian — avant toute marge d’intermédiaire.',
      colProduct: 'Produit',
      colDistrict: 'District et Étage',
      colAmazon: 'Prix Amazon',
      colYiwu: 'Stand Yiwu',
      colMoq: 'MOQ',
      colSaving: 'Économie',
      footnote: '* Prix départ usine/stand (EXW). Ajoutez le fret maritime (~1,50 $–3,50 $/kg) pour le coût rendu. Tarifs dégressifs selon volume.',
      cta: 'Parcourir les 27 706+ Stands Vérifiés →'
    },
    membership: {
      badge: 'Zéro Abonnement · Paiement à la Commande',
      title: 'Explorez Gratuitement. Citez en Direct. Expédiez Dès 1 Pièce.',
      subtitle: 'Aucun pack CSV payant ni abonnement annuel. Consultez 27 706+ stands Yiwu gratuitement ou collez un lien Alibaba.com pour sourcer à l’usine.',
      singleLabel: 'Dropshipping 1 Pièce',
      singlePrice: 'Dès 1 Unité',
      singleDesc: 'Collez un lien produit Alibaba.com. Notre équipe à Yiwu identifie la ligne d’usine directe, contrôle le stock et expédie en marque blanche sous 5–9 jours.',
      singleCta: 'Coller un Lien Alibaba (Gratuit) →',
      proBadge: 'LE PLUS DEMANDÉ',
      proLabel: 'Lien Alibaba → Usine Directe',
      proPrice: '0 $ d’Avance',
      proSave: 'Économisez 10–35 % face aux devis publics sur Alibaba',
      proDesc: 'Envoyez un lien Alibaba ou une capture sur WhatsApp. Nous négocions en RMB sur place, groupons vos articles et retirons toute facture fournisseur.',
      proCta: 'Devis Usine Gratuit WhatsApp →',
      bizLabel: 'Gros Open-Book',
      bizPrice: '6 % Forfaitaire',
      bizSave: 'Reçu d’usine original en RMB partagé avant paiement',
      bizDesc: 'Agent bilingue dédié à Yiwu, vidéo 4K au stand, packaging OEM sur mesure, contrôle AQL 2.5 et groupage maritime ou aérien depuis Ningbo.',
      bizCta: 'Démarrer sur WhatsApp →',
      openBookNote: '💡 Vous recevez le reçu original en RMB + notre facture séparée. 0 $ d’avance avant validation de votre devis livré.'
    },
    faq: {
      badge: 'Transparence Absolue',
      title: 'Les Questions que Posent les Importateurs Sérieux Avant de Commander',
      q1: '« Comment savoir si les numéros de téléphone sont réels et non des numéros virtuels ? »',
      a1: 'Nos 27 706 fiches proviennent des enseignes physiques photographiées sur place au marché Futian de Yiwu et recoupées avec l’enregistrement officiel du stand. Tout numéro inactif est remplacé gratuitement sous 48h.',
      q2: '« Puis-je coller un lien Alibaba.com même pour 1 pièce ou une petite quantité ? »',
      a2: 'Oui. Collez n’importe quelle URL Alibaba.com dans notre outil ou envoyez une capture sur WhatsApp. Même si l’annonce impose un MOQ élevé, notre équipe négocie sur place pour du dropshipping à l’unité ou un lot test.',
      q3: '« Comment Sino Trade Link se rémunère-t-il si le catalogue et les devis sont gratuits ? »',
      a3: 'Aucun abonnement ni pack payant (0 $ pour consulter et demander un devis). Nous facturons uniquement des frais transparents sur les commandes validées : exécution dropshipping, groupage colis, audit sur site ou 6 % Open-Book.',
      q4: '« Mon capital est-il protégé ? Qui contrôle la qualité avant expédition ? »',
      a4: 'Vous ne réglez rien avant d’approuver le prix livré et les photos. Notre entrepôt de Yiwu réceptionne chaque article, vérifie l’état, retire les documents chinois et vous envoie des photos avant expédition.',
      q5: '« Qu’en est-il des normes douanières (CE, RoHS, REACH, SONCAP) ? »',
      a5: 'Notre équipe à Yiwu vérifie les certificats CE, RoHS, EN71/ASTM directement au stand avant expédition et signale les marchandises réglementées (batteries, liquides) afin d’utiliser les lignes fret adaptées.',
      calloutText: 'Notre modèle repose sur des e-commerçants et importateurs fidèles. Écrivez-nous directement sur WhatsApp avant d’engager le moindre dollar.',
      calloutCta: 'Parler à Notre Équipe à Yiwu sur WhatsApp →'
    },
    openBook: {
      badge: 'Sourcing à Livre Ouvert (Open-Book)',
      title: 'Agent Yiwu Traditionnel « Gratuit » vs. Sino Trade Link Exécution Directe',
      subtitle: 'La plupart des agents à Yiwu prétendent travailler gratuitement ou à 1 %, mais perçoivent 10 à 20 % de rétrocommissions cachées des usines — incluses dans votre prix unitaire.',
      tradTitle: '❌ Agent Traditionnel « Gratuit » à Yiwu',
      trad1: 'Prétend travailler gratuitement — touche 10 à 20 % de commission occulte de l’usine',
      trad2: 'Vous présente un « meilleur prix » déjà gonflé avant même que vous ne le voyiez',
      trad3: 'Aucune traçabilité — impossible de vérifier le vrai tarif sortie usine',
      trad4: 'Incité financièrement à privilégier des usines affiliées au détriment de la qualité',
      trad5: 'Disparaît souvent une fois sa commission encaissée en cas de litige qualité',
      stlTitle: '✅ Sino Trade Link Exécution Directe (Zéro Abonnement)',
      stl1: 'Aucun abonnement annuel ni frais d’entrée — 0 $ avant confirmation de commande',
      stl2: 'Vous recevez le reçu original du stand en RMB + nos frais séparément',
      stl3: 'Mandat à Livre Ouvert : si nous négocions 23 ¥/unité au stand, vous payez 23 ¥ + frais convenus',
      stl4: 'Aucune affiliation usine — nous sourçons via vos liens Alibaba ou nos 27 706 stands vérifiés',
      stl5: 'Photos réelles en entrepôt et négociations partagées en direct sur WhatsApp',
      cta: 'Lancer un Sourcing à Livre Ouvert sur WhatsApp →',
      responseNote: 'Notre équipe à Yiwu répond généralement en moins de 2 heures pendant les heures ouvrables (UTC+8).'
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
      marketWholesalerBadge: 'Stand Vérifié',
      districtLabel: 'District',
      floorLabel: 'Étage',
      gateLabel: 'Porte',
      boothLabel: 'Stand',
      yearsVerified: 'Ans à Futian',
      creditScore: 'Score Marché',
      mainProducts: 'Catalogue Grossiste :',
      officialCategory: 'Catégorie Officielle du Marché :',
      unlockBtn: 'Révéler Mobile & WeChat',
      auditBtn: 'Demander un Audit sur Place →',
      whatsappBtn: 'Bureau Yiwu WhatsApp'
    },
    seo: {
      homeTitle: 'Sino Trade Link | Agent Dropshipping Alibaba & 27 706+ Fournisseurs à Yiwu, Chine',
      homeDesc: 'Consultez 27 706+ stands du marché de gros Yiwu Futian gratuitement ou collez tout lien Alibaba.com pour des tarifs directs d’usine et du dropshipping dès 1 pièce.',
      homeKeywords: 'agent dropshipping Alibaba Chine, marché de gros Yiwu, fournisseurs directs Chine, dropshipping 1 pièce Chine, marque blanche Yiwu',
      directoryTitle: 'Annuaire du Marché de Gros de Yiwu | 27 706+ Stands Vérifiés & Usines Directes',
      directoryDesc: 'Recherchez parmi 27 706+ stands vérifiés dans les Districts 1 à 5 et le marché Huangyuan à Yiwu. Débloquez les mobiles +86 et identifiants WeChat.',
      packsTitle: 'Dropshipping Alibaba.com & Agent Direct Usine en Chine | Sino Trade Link',
      packsDesc: 'Collez votre lien Alibaba.com pour sourcer directement en usine avec expédition dès 1 pièce, emballage neutre et devis gratuit sur WhatsApp.',
      conciergeTitle: 'Audit Physique de Stand à Yiwu, Consolidation d’Échantillons & Inspection AQL 2.5',
      conciergeDesc: 'Mandatez nos ingénieurs bilingues à Yiwu pour un audit vidéo 4K en stand, un colis d’échantillons consolidés ou une inspection AQL 2.5.',
      countriesTitle: '100 Corridors d’Importation depuis Yiwu, Chine | Fret Maritime & Douanes',
      countriesDesc: 'Guides d’importation par pays depuis Yiwu et le port de Ningbo vers 100 destinations avec délais maritimes, droits de douane et certifications.'
    }
  },
  de: {
    nav: {
      directory: 'Standverzeichnis',
      categoryPacks: 'Alibaba-Dropshipping',
      countries: '100 Länder',
      marketMap: 'Marktkarte',
      sourcingGuide: 'Einkaufsleitfaden',
      concierge: 'Vor-Ort-Prüfung',
      browseStalls: '27.706 Stände ansehen'
    },
    hero: {
      badge: '🇨🇳 27.706 Verifizierte Stände · 99,9 % Direkte Mobilnummern · Keine Zwischenhändler · Keine Versteckten Provisionen',
      title: 'Direkteinkauf bei Physischen Fabrikständen in Yiwu, China.',
      subtitle: 'Umgehen Sie Handelsagenten und 30 % Aufschläge. Greifen Sie auf über 27.706 verifizierte Stände im Großhandelsmarkt Yiwu Futian & Huangyuan mit echten chinesischen Mobilnummern und WeChat zu.',
      searchPlaceholder: 'Suche nach Produkt, Kategorie oder Standnummer (z. B. Spielwaren, Küche, Stand 62159)...',
      searchBtn: 'Verzeichnis durchsuchen',
      trustLocation: 'Yiwu Futian Markt, Zhejiang, China',
      trustTeam: 'Vor-Ort-Team: +86 134 8272 5985',
      trustData: 'Verifizierte B2B-Firmenschilddaten vor Ort',
      trustGuarantee: 'Kostenlose Ersatzgarantie bei inaktiven Kontakten',
      statStalls: 'Verifizierte Marktstände',
      statPhones: 'Unmaskierte Mobilnummern',
      statFactories: 'Lizenzierte Fabriken',
      statKickbacks: 'Händleraufschläge'
    },
    priceTable: {
      badge: 'Echte Preisintelligenz',
      title: 'Dasselbe Produkt. Ein Bruchteil des Preises.',
      subtitle: 'Reale Amazon-Verkaufspreise im Vergleich zu den tatsächlichen EXW-Preisen an verifizierten Ständen in Yiwu Futian – ohne Zwischenhändlermarge.',
      colProduct: 'Produkt',
      colDistrict: 'Distrikt & Etage',
      colAmazon: 'Amazon-Preis',
      colYiwu: 'Yiwu-Standpreis',
      colMoq: 'MOQ',
      colSaving: 'Ersparnis',
      footnote: '* EXW-Preise ab Stand. Zuzüglich Seefracht (~1,50 $–3,50 $/kg) für den Landed Cost. Preise variieren je nach Bestellmenge.',
      cta: 'Alle 27.706+ Verifizierten Stände durchsuchen →'
    },
    membership: {
      badge: 'Keine Abos · Zahlung pro Bestellung',
      title: 'Kostenlos Stöbern. Direkt Kalkulieren. Ab 1 Stück.',
      subtitle: 'Keine bezahlten CSV-Pakete oder Jahresabos. Durchsuchen Sie 27.706+ Yiwu-Stände gratis oder fügen Sie einen Alibaba.com-Produktlink für Direktpreise ab Werk ein.',
      singleLabel: '1-Stück-Dropshipping',
      singlePrice: 'Ab 1 Einheit',
      singleDesc: 'Fügen Sie einen beliebigen Alibaba.com-Link ein. Unser Yiwu-Team findet die direkte Fabriklinie, prüft den Bestand und versendet neutral verpackt in 5–9 Tagen.',
      singleCta: 'Alibaba-Link einfügen (Gratis) →',
      proBadge: 'AM BELIEBTESTEN',
      proLabel: 'Alibaba-Link → Direktabruf ab Werk',
      proPrice: '0 $ Vorauszahlung',
      proSave: '10–35 % günstiger als öffentliche Alibaba-Händlerangebote',
      proDesc: 'Senden Sie einen Alibaba-Link oder Screenshot per WhatsApp. Wir verhandeln echte RMB-Preise vor Ort, bündeln Artikel und entfernen Händlerbeilagen.',
      proCta: 'Gratis-Fabrikangebot anfordern →',
      bizLabel: 'Open-Book-Großhandel',
      bizPrice: '6 % Festprovision',
      bizSave: 'Original-RMB-Fabrikquittung vor Zahlung geteilt',
      bizDesc: 'Zweisprachiger Yiwu-Betreuer, 4K-Standvideo, individuelles OEM-Packaging, AQL-2.5-Versandkontrolle sowie See- oder Luftfracht ab Ningbo.',
      bizCta: 'Auf WhatsApp starten →',
      openBookNote: '💡 Sie erhalten die Original-RMB-Fabrikquittung + unsere separate Rechnung. 0 $ Kosten bis zur Freigabe Ihres Angebots.'
    },
    faq: {
      badge: 'Transparenz an Erster Stelle',
      title: 'Die Fragen, die Seriöse Einkäufer Stellen, Bevor Sie Bestellen',
      q1: '„Woher weiß ich, dass die Telefonnummern echt sind und keine VoIP-Proxys?“',
      a1: 'Unsere 27.706 Einträge stammen von physischen Ladenschildern, die vor Ort im Yiwu Futian Markt fotografiert und mit der offiziellen Standregistrierung abgeglichen wurden. Inaktive Nummern ersetzen wir innerhalb von 48 Stunden kostenlos.',
      q2: '„Kann ich einen Alibaba.com-Link senden, auch wenn ich nur 1 Stück oder Kleinmengen brauche?“',
      a2: 'Ja. Fügen Sie jede Alibaba.com-Produkt-URL in unser Angebotsfeld ein oder senden Sie einen Screenshot per WhatsApp. Selbst bei hoher Mindestbestellmenge verhandeln wir vor Ort 1-Stück-Dropshipping oder kleine Testlose.',
      q3: '„Wie verdient Sino Trade Link Geld, wenn Verzeichnis und Angebote kostenlos sind?“',
      a3: 'Keine Jahresgebühren oder bezahlte Downloads (0 $ fürs Stöbern und Anfragen). Wir berechnen ausschließlich transparente Servicegebühren bei Auftragsbestätigung: Dropshipping-Abwicklung, Konsolidierung, Vor-Ort-Prüfungen oder 6 % Open-Book.',
      q4: '„Ist mein Bestellkapital sicher? Wer prüft die Qualität vor dem Versand?“',
      a4: 'Sie zahlen nichts im Voraus, bevor Sie Preis, Frachtrate und reale Fotos freigegeben haben. Unser Lager in Yiwu nimmt jede Lieferung entgegen, prüft Qualität, entfernt Lieferantenbeilagen und sendet Fotos vor Versand.',
      q5: '„Wie werden EU-/deutsche Einfuhrbestimmungen (CE, RoHS, REACH, LUCID) geprüft?“',
      a5: 'Unser Team in Yiwu prüft CE-, RoHS-, REACH- und EN71-Zertifikate direkt am Stand vor dem Versand und weist frühzeitig auf Gefahrgut (Akkus, Flüssigkeiten) sowie geeignete Versandwege hin.',
      calloutText: 'Unser Geschäftsmodell basiert auf wiederkehrenden Importeuren und wachsenden Online-Shops. Schreiben Sie uns unverbindlich direkt auf WhatsApp.',
      calloutCta: 'Mit Unserem Yiwu-Team auf WhatsApp sprechen →'
    },
    openBook: {
      badge: 'Open-Book-Beschaffung',
      title: 'Traditioneller „Kostenloser“ Yiwu-Agent vs. Sino Trade Link Direktausführung',
      subtitle: 'Die meisten Yiwu-Agenten behaupten, kostenlos zu arbeiten. Tatsächlich kassieren sie 10–20 % versteckte Provisionen von den Fabriken – unsichtbar eingepreist in Ihren Stückpreis.',
      tradTitle: '❌ Traditioneller „Kostenloser“ Yiwu-Agent',
      trad1: 'Behauptet kostenlos zu arbeiten – kassiert 10–20 % versteckte Kickbacks von der Fabrik',
      trad2: 'Präsentiert Ihnen einen „Bestpreis“, der bereits vorab künstlich erhöht wurde',
      trad3: 'Keine Originalbelege – Sie erfahren nie den echten Fabrikpreis',
      trad4: 'Finanzieller Anreiz, Partnerfabriken statt der qualitativ besten Anbieter zu empfehlen',
      trad5: 'Bei Qualitätsproblemen nach Provisionszahlung oft nicht mehr greifbar',
      stlTitle: '✅ Sino Trade Link Direktausführung (Ohne Abo)',
      stl1: 'Keine Jahresmitgliedschaft oder Vorab-Pakete – 0 $ bis zur Bestätigung Ihrer Bestellung',
      stl2: 'Sie erhalten die Original-RMB-Quittung des Stands + unsere Gebühr getrennt',
      stl3: 'Open-Book-Mandat: Verhandeln wir 23 ¥/Stück am Stand, zahlen Sie exakt 23 ¥ + vereinbarte Gebühr',
      stl4: 'Keine Fabrikbindungen – Beschaffung über Ihre Alibaba-Links oder unsere 27.706 verifizierten Stände',
      stl5: 'Echte Lager-QC-Fotos und alle Verhandlungen transparent per WhatsApp geteilt',
      cta: 'Open-Book-Einkauf per WhatsApp starten →',
      responseNote: 'Unser Team in Yiwu antwortet während der Geschäftszeiten (UTC+8) in der Regel innerhalb von 2 Stunden.'
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
      marketWholesalerBadge: 'Verifizierter Stand',
      districtLabel: 'Distrikt',
      floorLabel: 'Etage',
      gateLabel: 'Tor',
      boothLabel: 'Stand',
      yearsVerified: 'Jahre in Futian',
      creditScore: 'Bonitätswert',
      mainProducts: 'Großhandelssortiment:',
      officialCategory: 'Offizielle Marktkategorie:',
      unlockBtn: 'Telefon & WeChat anzeigen',
      auditBtn: 'Vor-Ort-Prüfung anfragen →',
      whatsappBtn: 'WhatsApp Vor-Ort-Büro'
    },
    seo: {
      homeTitle: 'Sino Trade Link | Alibaba-Dropshipping-Agent & 27.706+ Verifizierte Yiwu-Lieferanten',
      homeDesc: 'Durchsuchen Sie über 27.706 Stände im Yiwu Futian Markt gratis oder fügen Sie jeden Alibaba.com-Link für Direktpreise ab Werk und 1-Stück-Dropshipping ein.',
      homeKeywords: 'Alibaba Dropshipping Agent China, Yiwu Großhandelsmarkt Verzeichnis, China Direktfabrik Kontakte, 1 Stück Dropshipping China, Private Label Yiwu',
      directoryTitle: 'Yiwu Großhandelsmarkt-Verzeichnis | 27.706+ Verifizierte Stände & Direktfabriken',
      directoryDesc: 'Durchsuchen Sie über 27.706 verifizierte Großhandelsstände in den Distrikten 1–5 und im Huangyuan-Markt in Yiwu kostenlos. +86-Mobilnummern und WeChat freischalten.',
      packsTitle: 'Alibaba.com-Dropshipping & Direkter Fabrikagent in China | Sino Trade Link',
      packsDesc: 'Fügen Sie Ihren Alibaba.com-Link ein für Einkauf direkt ab Fabrik mit 1-Stück-Versand, neutralem Packaging und kostenlosem WhatsApp-Angebot.',
      conciergeTitle: 'Yiwu Vor-Ort-Standaudit, Musterkonsolidierung & AQL 2.5 Inspektion',
      conciergeDesc: 'Beauftragen Sie unsere zweisprachigen Ingenieure in Yiwu für 4K-Video-Audits, Musterkonsolidierung und AQL-2.5-Versandkontrollen.',
      countriesTitle: '100 Länder-Importkorridore ab Yiwu, China | Seefracht & Zollbestimmungen',
      countriesDesc: 'Länderspezifische Großhandelsleitfäden von Yiwu & Hafen Ningbo in 100 Länder inklusive Seefrachtlaufzeiten, Zöllen und Einfuhrzertifikaten.'
    }
  },
  ar: {
    nav: {
      directory: 'دليل المحلات',
      categoryPacks: 'دروب شيبينغ علي بابا',
      countries: '100 دولة',
      marketMap: 'خريطة السوق',
      sourcingGuide: 'دليل الاستيراد',
      concierge: 'فحص ميداني بإيوو',
      browseStalls: 'تصفح 27,706 محل'
    },
    hero: {
      badge: '🇨🇳 27,706 محل موثق · 99.9% أرقام جوال مباشرة · بدون وسطاء · بدون عمولات خفية',
      title: 'استورد مباشرة من محلات المصانع الفعلية في سوق إيوو، الصين.',
      subtitle: 'تجاوز الوسطاء ومكاتب الشحن التي تضيف 30% على الأسعار. احصل على وصول مباشر لأكثر من 27,706 محل ومصنع موثق في سوق إيوو فوتيان وهوانغ يوان مع أرقام الجوال الصينية الحقيقية وحسابات WeChat.',
      searchPlaceholder: 'ابحث حسب المنتج أو الفئة أو رقم المحل (مثال: ألعاب، أدوات منزلية، محل 62159)...',
      searchBtn: 'ابحث في الدليل',
      trustLocation: 'سوق إيوو فوتيان الدولي، تشجيانغ، الصين',
      trustTeam: 'فريقنا في إيوو: +86 134 8272 5985',
      trustData: 'بيانات موثقة من اللوحات التجارية الرسمية للمحلات',
      trustGuarantee: 'ضمان استبدال أي رقم غير نشط مجاناً',
      statStalls: 'محل تجاري موثق',
      statPhones: 'أرقام جوال مباشرة',
      statFactories: 'مصنع مرخص',
      statKickbacks: 'عمولات خفية'
    },
    priceTable: {
      badge: 'مقارنة الأسعار الحقيقية',
      title: 'نفس المنتج. بجزء بسيط من التكلفة.',
      subtitle: 'مقارنة بين أسعار البيع على أمازون والأسعار الفعلية مباشرة من محلات سوق إيوو فوتيان — قبل إضافة أرباح الوسطاء.',
      colProduct: 'المنتج',
      colDistrict: 'المنطقة والطابق',
      colAmazon: 'سعر أمازون',
      colYiwu: 'سعر محل إيوو',
      colMoq: 'أقل كمية (MOQ)',
      colSaving: 'التوفير',
      footnote: '* الأسعار تسليم المحل (EXW). تضاف تكلفة الشحن البحري (~1.50$–3.50$/كجم) لحساب التكلفة الواصلة. تختلف الأسعار حسب الكمية.',
      cta: 'تصفح أكثر من 27,706 محل موثق ←'
    },
    membership: {
      badge: 'بدون اشتراكات مسبقة · ادفع فقط عند التنفيذ',
      title: 'تصفح مجاناً. اطلب عرض سعر مباشر. اشحن من قطعة واحدة.',
      subtitle: 'بدون باقات مدفوعة أو اشتراكات سنوية. تصفح 27,706+ محل في إيوو مجاناً أو الصق رابط أي منتج من Alibaba.com للحصول على سعر المصنع المباشر.',
      singleLabel: 'دروب شيبينغ من قطعة واحدة',
      singlePrice: 'ابتداءً من قطعة',
      singleDesc: 'الصق رابط أي منتج من Alibaba.com. يتواصل فريقنا في إيوو مع المصنع مباشرة، يفحص الجودة، ويشحن لعملائك بتغليف محايد خلال 5–9 أيام.',
      singleCta: 'أرسل رابط علي بابا (مجاناً) ←',
      proBadge: 'الأكثر طلباً',
      proLabel: 'رابط علي بابا ← مصنع مباشر',
      proPrice: '0$ اشتراك مسبق',
      proSave: 'وفر 10–35% مقارنة بعروض التجار العلنية على علي بابا',
      proDesc: 'أرسل رابط علي بابا أو صورة المنتج عبر واتساب. نتفاوض باليوان الصيني من المصدر، نجمع منتجاتك، ونزيل فواتير الموردين.',
      proCta: 'احصل على تسعيرة مصنع مجانية ←',
      bizLabel: 'شراء جملة بنظام الكتاب المفتوح',
      bizPrice: 'عمولة 6% ثابتة',
      bizSave: 'مشاركة إيصال المصنع الأصلي باليوان قبل الدفع',
      bizDesc: 'مندوب ثنائي اللغة في إيوو، فيديو 4K من المحل، تغليف OEM مخصص، فحص جودة AQL 2.5 وشحن بحري أو جوي من ميناء نينغبو.',
      bizCta: 'ابدأ عبر واتساب ←',
      openBookNote: '💡 تستلم فاتورة المصنع الأصلية باليوان الصيني (RMB) + فاتورتنا منفصلة. لا تدفع أي مبلغ قبل اعتماد العرض النهائي.'
    },
    faq: {
      badge: 'الشفافية أولاً',
      title: 'الأسئلة التي يطرحها التجار والمستوردون قبل بدء الطلبات',
      q1: '«كيف أتأكد أن أرقام الهواتف حقيقية وليست أرقاماً افتراضية؟»',
      a1: 'جميع سجلاتنا البالغ عددها 27,706 تم توثيقها ميدانياً من لوحات المحلات في سوق إيوو فوتيان ومطابقتها مع بطاقة التسجيل الرسمية للمحل. أي رقم غير نشط يتم استبداله مجاناً خلال 48 ساعة.',
      q2: '«هل يمكنني إرسال رابط Alibaba.com حتى لو كنت أحتاج قطعة واحدة أو كمية تجربة صغيرة؟»',
      a2: 'نعم. الصق أي رابط منتج من Alibaba.com في نموذج التسعير السريع أو أرسل لقطة شاشة عبر واتساب. حتى لو كان الحد الأدنى في الإعلان مرتفعاً، نتفاوض مباشرة مع المصنع لتجهيز شحن دروب شيبينغ بقطعة واحدة أو دفعة تجريبية.',
      q3: '«كيف تربح Sino Trade Link إذا كان تصفح الدليل وطلب الأسعار مجانياً؟»',
      a3: 'أزلنا جميع الاشتراكات المسبقة وباقات CSV المدفوعة (0$ للتصفح والتسعير). نحقق أرباحنا بشفافية فقط عندما تؤكد طلباً فعلياً: تجهيز وشحن دروب شيبينغ، تجميع الطرود، خدمات الفحص الميداني، أو عمولة 6% لطلبات الجملة بنظام الكتاب المفتوح.',
      q4: '«هل أموالي آمنة؟ ومن يفحص الجودة قبل الشحن؟»',
      a4: 'لا تدفع أي مبلغ قبل موافقتك على السعر النهائي وتكلفة الشحن وصور البضاعة. يستلم مستودعنا في إيوو كل قطعة من المصنع، يفحص الجودة، يزيل الملصقات غير المرغوبة، ويرسل صوراً حقيقية قبل الشحن الدولي.',
      q5: '«ماذا عن شهادات المطابقة الجمركية مثل سابر (SABER) و CE والمواصفات الخليجية؟»',
      a5: 'يتحقق فريقنا الميداني في إيوو من شهادات SABER و CE و RoHS مباشرة في المحل قبل الشحن، كما ننبهك مسبقاً لأي سلع مقيدة أو خطرة (بطاريات، سوائل) لاختيار خط الشحن المناسب.',
      calloutText: 'نموذج عملنا يعتمد على التجار الدائمين ومتاجر الدروب شيبينغ الناجحة. تواصل معنا مباشرة عبر واتساب في إيوو دون أي التزام مسبق.',
      calloutCta: 'تحدث مع فريقنا في إيوو عبر واتساب ←'
    },
    openBook: {
      badge: 'الاستيراد بنظام الكتاب المفتوح (Open-Book)',
      title: 'مقارنة بين وسيط إيوو التقليدي «المجاني» وخدمة التنفيذ المباشر من Sino Trade Link',
      subtitle: 'يدّعي معظم الوسطاء في إيوو أنهم يعملون مجاناً أو بعمولة 1%، لكنهم يتقاضون 10% إلى 20% عمولة خفية من المصنع تُضاف سراً إلى سعر القطعة الذي تدفعه.',
      tradTitle: '❌ وسيط إيوو التقليدي «المجاني»',
      trad1: 'يدّعي العمل مجاناً — لكنه يأخذ 10–20% عمولة خفية من المصنع الذي تشتري منه',
      trad2: 'يعرض عليك «أفضل سعر» بعد أن تم رفعه مسبقاً قبل أن تراه',
      trad3: 'لا توجد فواتير أصلية — لا يمكنك معرفة السعر الحقيقي للمصنع',
      trad4: 'يوجهك نحو مصانع متفقة معه بدلاً من المصانع الأفضل جودة وسعراً',
      trad5: 'يتنصل من المسؤولية بعد استلام عمولته عند ظهور مشاكل في الجودة',
      stlTitle: '✅ التنفيذ المباشر من Sino Trade Link (بدون اشتراك)',
      stl1: 'بدون رسوم عضوية سنوية أو باقات مسبقة — 0$ حتى توافق على طلبك',
      stl2: 'تستلم إيصال المحل الأصلي باليوان (RMB) + أتعابنا في بندين منفصلين تماماً',
      stl3: 'نظام الكتاب المفتوح: إذا تفاوضنا على 23 يوان للقطعة، تدفع 23 يوان + الأتعاب المتفق عليها فقط',
      stl4: 'استقلالية تامة — نسعّر عبر روابط علي بابا الخاصة بك أو من قاعدة 27,706 محل موثق',
      stl5: 'صور فحص حقيقية من مستودعنا بإيوو ومشاركة كل المفاوضات عبر واتساب',
      cta: 'ابدأ الاستيراد بنظام الكتاب المفتوح عبر واتساب ←',
      responseNote: 'يرد فريقنا في إيوو عادةً خلال ساعتين في أوقات العمل الرسمية (توقيت الصين UTC+8).'
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
      marketWholesalerBadge: 'محل موثق',
      districtLabel: 'المنطقة',
      floorLabel: 'الطابق',
      gateLabel: 'البوابة',
      boothLabel: 'رقم المحل',
      yearsVerified: 'سنوات في فوتيان',
      creditScore: 'تقييم الثقة',
      mainProducts: 'المنتجات الرئيسية بالجملة:',
      officialCategory: 'الفئة الرسمية في السوق:',
      unlockBtn: 'إظهار رقم الجوال و WeChat',
      auditBtn: 'اطلب فحص ميداني للمحل ←',
      whatsappBtn: 'تواصل مع مكتب إيوو واتساب'
    },
    seo: {
      homeTitle: 'Sino Trade Link | وكيل دروب شيبينغ علي بابا ودليل 27,706+ مورد في سوق إيوو، الصين',
      homeDesc: 'تصفح أكثر من 27,706 محل في سوق إيوو فوتيان مجاناً أو الصق رابط Alibaba.com للحصول على أسعار المصنع المباشرة وخدمة الدروب شيبينغ من قطعة واحدة.',
      homeKeywords: 'وكيل دروب شيبينغ علي بابا, سوق إيوو بالجملة, أرقام مصانع الصين مباشرة, شحن دروب شيبينغ من الصين قطعة واحدة, تغليف علامة تجارية إيوو',
      directoryTitle: 'دليل سوق إيوو للجملة | 27,706+ محل ومصنع مباشر في الصين',
      directoryDesc: 'ابحث في أكثر من 27,706 محل جملة موثق في المناطق 1 إلى 5 وسوق هوانغ يوان في إيوو مجاناً. اكشف أرقام الجوال +86 وحسابات WeChat المباشرة.',
      packsTitle: 'دروب شيبينغ Alibaba.com ووكيل شراء مباشر من مصانع الصين | Sino Trade Link',
      packsDesc: 'الصق رابط المنتج من Alibaba.com للحصول على تسعيرة مصنع مباشرة مع شحن من قطعة واحدة وتغليف محايد وعرض سعر مجاني عبر واتساب.',
      conciergeTitle: 'فحص ميداني للمحلات في إيوو، تجميع العينات وفحص الجودة AQL 2.5',
      conciergeDesc: 'أرسل مهندسينا في إيوو لتصوير المحل والمنتجات بدقة 4K، أو تجميع العينات من عدة محلات في طرد واحد، أو فحص ما قبل الشحن AQL 2.5.',
      countriesTitle: 'مسارات الاستيراد والشحن من إيوو، الصين إلى 100 دولة | الشحن البحري والجمارك',
      countriesDesc: 'أدلة شاملة للاستيراد من سوق إيوو وميناء نينغبو إلى 100 دولة تشمل مدة الشحن البحري والرسوم الجمركية وشهادات المطابقة المطلوبة.'
    }
  },
  ru: {
    nav: {
      directory: 'Каталог павильонов',
      categoryPacks: 'Дропшиппинг Alibaba',
      countries: '100 стран',
      marketMap: 'Карта рынка',
      sourcingGuide: 'Гид по закупкам',
      concierge: 'Проверка на месте',
      browseStalls: 'Все 27 706 павильонов'
    },
    hero: {
      badge: '🇨🇳 27 706 проверенных павильонов · 99,9% прямых номеров · Без посредников · Без скрытых комиссий',
      title: 'Закупайте напрямую у фабричных павильонов на рынке Иу в Китае.',
      subtitle: 'Работайте без торговых посредников и наценок в 30%. Доступ к 27 706+ проверенным павильонам оптовых рынков Футянь и Хуанъюань в Иу с реальными китайскими мобильными номерами и WeChat.',
      searchPlaceholder: 'Поиск по товару, категории или номеру бутика (например: Игрушки, Посуда, павильон 62159)...',
      searchBtn: 'Найти поставщиков',
      trustLocation: 'Рынок Футянь, г. Иу, провинция Чжэцзян, КНР',
      trustTeam: 'Команда в Иу: +86 134 8272 5985',
      trustData: 'Реальные данные с коммерческих вывесок павильонов',
      trustGuarantee: 'Гарантия бесплатной замены неактивных контактов',
      statStalls: 'Проверенных павильонов',
      statPhones: 'Прямых мобильных номеров',
      statFactories: 'Прямых фабрик',
      statKickbacks: 'Скрытых наценок'
    },
    priceTable: {
      badge: 'Реальная аналитика цен',
      title: 'Тот же товар. В разы дешевле.',
      subtitle: 'Сравнение розничных цен на маркетплейсах и реальных оптовых цен EXW в павильонах рынка Иу Футянь — без комиссии посредников.',
      colProduct: 'Товар',
      colDistrict: 'Корпус и этаж',
      colAmazon: 'Цена в рознице',
      colYiwu: 'Павильон в Иу',
      colMoq: 'Мин. партия',
      colSaving: 'Выгода',
      footnote: '* Цены EXW в павильоне. Добавьте доставку (~$1,50–$3,50/кг) для расчета себестоимости на складе. Цена зависит от объема.',
      cta: 'Смотреть 27 706+ проверенных павильонов →'
    },
    membership: {
      badge: 'Без подписок · Оплата только за заказ',
      title: 'Поиск бесплатно. Расчет напрямую. От 1 штуки.',
      subtitle: 'Никаких платных CSV-пакетов или годовых подписок. Ищите среди 27 706+ павильонов Иу бесплатно или вставьте ссылку на товар Alibaba.com для прямого расчета с фабрикой.',
      singleLabel: 'Дропшиппинг от 1 шт.',
      singlePrice: 'От 1 единицы',
      singleDesc: 'Вставьте любую ссылку Alibaba.com. Наш офис в Иу находит прямую фабрику, проверяет наличие и отправляет посылки без брендов поставщика за 5–9 дней.',
      singleCta: 'Вставить ссылку Alibaba (Бесплатно) →',
      proBadge: 'ПОПУЛЯРНОЕ',
      proLabel: 'Ссылка Alibaba → Фабрика напрямую',
      proPrice: '$0 предоплата',
      proSave: 'Экономия 10–35% по сравнению с розничными ценами на Alibaba',
      proDesc: 'Отправьте ссылку Alibaba или скриншот в WhatsApp. Договоримся о цене в юанях на месте, объединим товары и уберем чужую рекламу.',
      proCta: 'Бесплатный расчет в WhatsApp →',
      bizLabel: 'Опт Open-Book',
      bizPrice: '6% фикс. комиссия',
      bizSave: 'Оригинальный чек фабрики в юанях предоставляется до оплаты',
      bizDesc: 'Личный русско-/англоязычный координатор в Иу, видео 4K из павильона, брендированная OEM-упаковка, контроль AQL 2.5 и доставка из Нинбо.',
      bizCta: 'Начать в WhatsApp →',
      openBookNote: '💡 Вы получаете оригинальный счет фабрики в юанях (RMB) и наш счет отдельно. $0 предоплаты до согласования цены.'
    },
    faq: {
      badge: 'Честность и прозрачность',
      title: 'Ответы на главные вопросы оптовых закупщиков и продавцов',
      q1: '«Откуда уверенность, что номера телефонов настоящие, а не виртуальные?»',
      a1: 'Все 27 706 контактов собраны лично с вывесок павильонов рынка Иу Футянь и сверены с официальными регистрационными карточками. Неактивные номера бесплатно заменяются в течение 48 часов.',
      q2: '«Можно ли отправить ссылку Alibaba.com, если мне нужна всего 1 штука или мелкий опт?»',
      a2: 'Да. Вставьте любую ссылку товара с Alibaba.com в нашу форму быстрого расчета или пришлите скриншот в WhatsApp. Даже при высоком MOQ в карточке мы договариваемся с фабрикой на поштучную отправку или тестовую партию.',
      q3: '«На чем зарабатывает Sino Trade Link, если каталог и расчет бесплатны?»',
      a3: 'Никаких подписок и платных выгрузок ($0 за поиск и расчет цены). Мы берем прозрачную комиссию только при оформлении реального заказа: фулфилмент дропшиппинга, консолидация образцов, инспекция или 6% за сопровождение опта.',
      q4: '«Безопасна ли оплата товара? Кто проверяет качество перед отправкой?»',
      a4: 'Вы ничего не платите до утверждения итоговой цены, доставки и реальных фото. Наш склад в Иу принимает товар с фабрики, проверяет брак, убирает лишние листовки и присылает фотоотчет до отправки.',
      q5: '«Как проверить сертификаты (ЕАЭС, CE, RoHS) и ограничения на ввоз?»',
      a5: 'Наши инженеры в Иу проверяют сертификаты и лицензии прямо в павильоне перед отправкой, а также заранее предупреждают об опасных грузах (аккумуляторы, жидкости) для подбора карго или авиамаршрута.',
      calloutText: 'Наш бизнес держится на постоянных клиентах и растущих селлерах. Напишите команде в Иу в WhatsApp без обязательств.',
      calloutCta: 'Написать команде в Иу в WhatsApp →'
    },
    openBook: {
      badge: 'Закупки по открытой книге (Open-Book)',
      title: 'Обычный «бесплатный» агент в Иу vs. Прямое исполнение Sino Trade Link',
      subtitle: 'Большинство агентов в Иу обещают работать бесплатно или за 1–2%, но на деле получают 10–20% скрытого отката от фабрики, который заложен в вашу закупочную цену.',
      tradTitle: '❌ Обычный «бесплатный» агент в Иу',
      trad1: 'Обещает работать бесплатно — берет 10–20% скрытой комиссии у фабрики',
      trad2: 'Показывает вам «лучшую цену», которая уже искусственно завышена',
      trad3: 'Никаких первичных чеков — вы не знаете реальную отпускную цену павильона',
      trad4: 'Финансово заинтересован вести вас к «своим» фабрикам вместо лучших по качеству',
      trad5: 'Исчезает после получения комиссии при обнаружении брака',
      stlTitle: '✅ Sino Trade Link Прямое исполнение (Без подписок)',
      stl1: 'Без годовых тарифов и платных пакетов — $0 до подтверждения заказа',
      stl2: 'Вы получаете оригинальную накладную павильона в юанях (RMB) + нашу комиссию отдельно',
      stl3: 'Принцип Open-Book: если мы сторговали ¥23/шт на месте, вы платите ¥23 + согласованную ставку',
      stl4: 'Никаких аффилированных фабрик — ищем по вашим ссылкам Alibaba или по 27 706 павильонам базы',
      stl5: 'Реальные фотоотчеты со склада и все переговоры передаются в WhatsApp',
      cta: 'Начать закупки Open-Book в WhatsApp →',
      responseNote: 'Команда в Иу обычно отвечает в течение 2 часов в рабочее время (UTC+8).'
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
      marketWholesalerBadge: 'Проверенный павильон',
      districtLabel: 'Корпус',
      floorLabel: 'Этаж',
      gateLabel: 'Ворота',
      boothLabel: 'Павильон',
      yearsVerified: 'лет на рынке Футянь',
      creditScore: 'Рейтинг надежности',
      mainProducts: 'Оптовый ассортимент:',
      officialCategory: 'Официальная категория рынка:',
      unlockBtn: 'Показать телефон и WeChat',
      auditBtn: 'Запросить проверку павильона →',
      whatsappBtn: 'WhatsApp офис в Иу'
    },
    seo: {
      homeTitle: 'Sino Trade Link | Агент дропшиппинга Alibaba и 27 706+ проверенных поставщиков Иу, Китай',
      homeDesc: 'Бесплатный поиск по 27 706+ павильонам рынка Иу Футянь или вставьте ссылку Alibaba.com для прямых фабричных цен и дропшиппинга от 1 шт.',
      homeKeywords: 'агент дропшиппинга Alibaba Китай, оптовый рынок Иу каталог, прямые контакты фабрик Китая, дропшиппинг от 1 штуки Китай',
      directoryTitle: 'Каталог оптового рынка Иу | 27 706+ проверенных павильонов и фабрик',
      directoryDesc: 'Бесплатный поиск среди 27 706+ проверенных павильонов в корпусах 1–5 и на рынке Хуанъюань в Иу, Китай. Прямые номера +86 и WeChat.',
      packsTitle: 'Дропшиппинг с Alibaba.com и прямой агент фабрик в Китае | Sino Trade Link',
      packsDesc: 'Вставьте ссылку Alibaba.com для закупки напрямую с фабрики в Китае, поштучной отправки без чужих брендов и бесплатного расчета в WhatsApp.',
      conciergeTitle: 'Выездной аудит павильона в Иу, консолидация образцов и инспекция AQL 2.5',
      conciergeDesc: 'Закажите видеопроверку павильона в 4K, сбор образцов из разных бутиков в одну коробку или предотгрузочную инспекцию AQL 2.5.',
      countriesTitle: 'Доставка и импорт из Иу, Китай в 100 стран | Сроки, порты и таможня',
      countriesDesc: 'Логистические справочники по доставке оптовых грузов из Иу и порта Нинбо в 100 стран мира: сроки, пошлины и сертификация.'
    }
  },
  it: {
    nav: {
      directory: 'Catalogo Stand',
      categoryPacks: 'Dropshipping Alibaba',
      countries: '100 Paesi',
      marketMap: 'Mappa del Mercato',
      sourcingGuide: 'Guida Importazione',
      concierge: 'Controllo in Loco',
      browseStalls: 'Esplora 27.706 Stand'
    },
    hero: {
      badge: '🇨🇳 27.706 Stand Verificati · 99,9% Cellulari Diretti · Zero Intermediari · Zero Commissioni Nascoste',
      title: 'Acquista Direttamente dagli Stand di Fabbrica a Yiwu, Cina.',
      subtitle: 'Evita gli intermediari commerciali e i ricarichi del 30%. Accedi a oltre 27.706 stand verificati nei mercati all’ingrosso di Yiwu Futian e Huangyuan con numeri di cellulare cinesi reali e WeChat diretto.',
      searchPlaceholder: 'Cerca per prodotto, categoria o numero di stand (es. Giocattoli, Casalinghi, Stand 62159)...',
      searchBtn: 'Cerca nel Catalogo',
      trustLocation: 'Mercato Futian di Yiwu, Zhejiang, Cina',
      trustTeam: 'Team in loco a Yiwu: +86 134 8272 5985',
      trustData: 'Dati B2B rilevati dalle insegne ufficiali degli stand',
      trustGuarantee: 'Garanzia di Sostituzione Contatti Inattivi',
      statStalls: 'Stand Verificati',
      statPhones: 'Cellulari Diretti in Chiaro',
      statFactories: 'Fabbriche Certificate',
      statKickbacks: 'Ricarichi di Agenzia'
    },
    priceTable: {
      badge: 'Confronto Prezzi Reale',
      title: 'Lo Stesso Prodotto. A una Frazione del Prezzo.',
      subtitle: 'Prezzi reali su Amazon confrontati con i listini EXW effettivi degli stand di Yiwu Futian — prima di qualsiasi margine degli intermediari.',
      colProduct: 'Prodotto',
      colDistrict: 'Distretto e Piano',
      colAmazon: 'Prezzo Amazon',
      colYiwu: 'Stand Yiwu',
      colMoq: 'MOQ',
      colSaving: 'Risparmio',
      footnote: '* Prezzi franco fabbrica/stand (EXW). Aggiungere il trasporto marittimo (~$1,50–$3,50/kg) per il costo sbarcato. I prezzi variano in base ai volumi.',
      cta: 'Esplora 27.706+ Stand Verificati →'
    },
    membership: {
      badge: 'Zero Abbonamenti · Pagamento solo su Ordine',
      title: 'Esplora Gratis. Quota Diretto. Spedisci da 1 Pezzo.',
      subtitle: 'Nessun pacchetto CSV a pagamento o abbonamento annuale. Esplora 27.706+ stand a Yiwu gratis o incolla un link Alibaba.com per prezzi diretti di fabbrica.',
      singleLabel: 'Dropshipping 1 Pezzo',
      singlePrice: 'Da 1 Unità',
      singleDesc: 'Incolla qualsiasi link Alibaba.com. Il nostro ufficio a Yiwu individua la fabbrica diretta, verifica lo stock e spedisce pacchi neutri in 5–9 giorni.',
      singleCta: 'Incolla Link Alibaba (Gratis) →',
      proBadge: 'PIÙ RICHIESTO',
      proLabel: 'Link Alibaba → Fabbrica Diretta',
      proPrice: '0 $ Anticipo',
      proSave: 'Risparmia il 10–35% rispetto alle quotazioni pubbliche Alibaba',
      proDesc: 'Invia un link Alibaba o uno screenshot su WhatsApp. Negoziamo in RMB alla fonte, raggruppiamo più articoli e rimuoviamo materiali pubblicitari altrui.',
      proCta: 'Preventivo Fabbrica Gratis →',
      bizLabel: 'Ingrosso Open-Book',
      bizPrice: '6% Commissione Fissa',
      bizSave: 'Ricevuta originale della fabbrica in RMB condivisa prima del saldo',
      bizDesc: 'Referente bilingue a Yiwu, video 4K dallo stand, packaging OEM personalizzato, controllo qualità AQL 2.5 e trasporto aereo o marittimo da Ningbo.',
      bizCta: 'Inizia su WhatsApp →',
      openBookNote: '💡 Ricevi la ricevuta originale della fabbrica in RMB + la nostra fattura separata. 0 $ finché non approvi il preventivo.'
    },
    faq: {
      badge: 'Massima Trasparenza',
      title: 'Le Domande che gli Importatori Professionisti Fanno Prima di Ordinare',
      q1: '«Come faccio a sapere che i numeri di telefono sono reali e non numeri virtuali?»',
      a1: 'I nostri 27.706 profili provengono dalle insegne fisiche fotografate sul posto al mercato Futian di Yiwu e verificate con la registrazione ufficiale dello stand. Eventuali numeri inattivi vengono sostituiti gratuitamente entro 48 ore.',
      q2: '«Posso incollare un link Alibaba.com anche se mi serve solo 1 pezzo o piccoli lotti?»',
      a2: 'Sì. Incolla qualsiasi URL di Alibaba.com nel modulo rapido o invia uno screenshot su WhatsApp. Anche se l’annuncio indica un MOQ elevato, negoziamo direttamente con la fabbrica per dropshipping unitario o lotti test.',
      q3: '«Come guadagna Sino Trade Link se la consultazione e i preventivi sono gratuiti?»',
      a3: 'Zero abbonamenti o download a pagamento (0 $ per esplorare e chiedere preventivi). Applichiamo commissioni chiare solo sugli ordini approvati: evasione dropshipping, consolidamento campioni, audit o 6% Open-Book.',
      q4: '«Il mio capitale è al sicuro? Chi verifica la qualità prima della spedizione?»',
      a4: 'Non paghi nulla prima di approvare il preventivo finale, le spese di spedizione e le foto reali. Il nostro magazzino a Yiwu riceve la merce dalla fabbrica, controlla difetti e packaging e invia foto prima della partenza.',
      q5: '«Come vengono gestite le certificazioni doganali UE (CE, RoHS, REACH, EN71)?»',
      a5: 'Il nostro team a Yiwu verifica i certificati CE, RoHS, REACH ed EN71 direttamente allo stand prima della spedizione e segnala merci regolamentate (batterie, liquidi) per selezionare la rotta più sicura.',
      calloutText: 'Il nostro modello si basa su e-commerce e importatori fidelizzati. Scrivici su WhatsApp al nostro team di Yiwu senza alcun impegno.',
      calloutCta: 'Parla con il Nostro Team a Yiwu su WhatsApp →'
    },
    openBook: {
      badge: 'Sourcing a Libro Aperto (Open-Book)',
      title: 'Agente Tradizionale «Gratuito» a Yiwu vs. Sino Trade Link Esecuzione Diretta',
      subtitle: 'La maggior parte degli agenti a Yiwu dichiara di lavorare gratis o all’1%, ma incassa il 10–20% di provvigione occulta dalle fabbriche — nascosta nel prezzo unitario che paghi.',
      tradTitle: '❌ Agente Tradizionale «Gratuito» a Yiwu',
      trad1: 'Dichiara di lavorare gratis — incassa il 10–20% di commissione nascosta dalla fabbrica',
      trad2: 'Ti mostra un «prezzo migliore» già gonfiato prima ancora che tu lo veda',
      trad3: 'Nessuna ricevuta originale — impossibile verificare il vero prezzo di fabbrica',
      trad4: 'Incentivato a spingere fabbriche affiliate anziché i fornitori migliori',
      trad5: 'Spesso sparisce dopo aver incassato la provvigione in caso di difetti qualitativi',
      stlTitle: '✅ Sino Trade Link Esecuzione Diretta (Zero Abbonamento)',
      stl1: 'Nessun abbonamento annuale o pacchetto prepagato — 0 $ fino alla conferma d’ordine',
      stl2: 'Ricevi la ricevuta originale dello stand in RMB + la nostra tariffa separatamente',
      stl3: 'Mandato Open-Book: se negoziamo ¥23/pezzo allo stand, paghi ¥23 + tariffa concordata',
      stl4: 'Nessuna affiliazione occulta — quotiamo dai tuoi link Alibaba o dai 27.706 stand verificati',
      stl5: 'Foto reali dal magazzino di Yiwu e trattative documentate in tempo reale su WhatsApp',
      cta: 'Avvia Sourcing Open-Book su WhatsApp →',
      responseNote: 'Il nostro team a Yiwu risponde solitamente entro 2 ore durante l’orario lavorativo (UTC+8).'
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
      marketWholesalerBadge: 'Stand Verificato',
      districtLabel: 'Distretto',
      floorLabel: 'Piano',
      gateLabel: 'Ingresso',
      boothLabel: 'Stand',
      yearsVerified: 'Anni a Futian',
      creditScore: 'Rating Mercato',
      mainProducts: 'Catalogo Ingrosso:',
      officialCategory: 'Categoria Ufficiale del Mercato:',
      unlockBtn: 'Mostra Telefono e WeChat',
      auditBtn: 'Richiedi Controllo Stand →',
      whatsappBtn: 'Ufficio Yiwu WhatsApp'
    },
    seo: {
      homeTitle: 'Sino Trade Link | Agente Dropshipping Alibaba & 27.706+ Fornitori a Yiwu, Cina',
      homeDesc: 'Esplora 27.706+ fornitori di Yiwu Futian gratis o incolla qualsiasi link Alibaba.com per quotazioni dirette di fabbrica e dropshipping da 1 pezzo.',
      homeKeywords: 'agente dropshipping Alibaba Cina, mercato ingrosso Yiwu, fornitori diretti Cina, dropshipping 1 pezzo Cina, private label Yiwu',
      directoryTitle: 'Catalogo Mercato all’Ingrosso di Yiwu | 27.706+ Stand Verificati e Fabbriche Dirette',
      directoryDesc: 'Cerca tra 27.706+ stand verificati nei Distretti 1–5 e nel mercato Huangyuan a Yiwu gratuitamente. Sblocca cellulari +86 e ID WeChat diretti.',
      packsTitle: 'Dropshipping Alibaba.com & Agente Diretto Fabbrica in Cina | Sino Trade Link',
      packsDesc: 'Incolla il tuo link Alibaba.com per acquistare direttamente dalla fabbrica in Cina con spedizione da 1 pezzo, packaging neutro e preventivo WhatsApp gratis.',
      conciergeTitle: 'Audit Fisico Stand a Yiwu, Consolidamento Campioni e Ispezione AQL 2.5',
      conciergeDesc: 'Incarica i nostri ingegneri bilingue a Yiwu per video-audit 4K allo stand, spedizione unica di campioni e ispezioni pre-spedizione AQL 2.5.',
      countriesTitle: '100 Corridoi di Importazione da Yiwu, Cina | Trasporto Marittimo e Dogana',
      countriesDesc: 'Guide all’importazione paese per paese da Yiwu e dal porto di Ningbo verso 100 destinazioni con tempi di transito, dazi e certificazioni richieste.'
    }
  }
};

export function t(locale?: string): UIDictionary {
  return UI_DICT[getLocaleConfig(locale).code];
}
