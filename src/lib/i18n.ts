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
      categoryPacks: 'Category Packs',
      countries: '100 Countries',
      marketMap: 'Market Map',
      sourcingGuide: 'Sourcing Playbook',
      concierge: 'Ground Inspection ($99)',
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
      badge: 'Flexible Access Plans',
      title: 'Choose Your Access Level',
      subtitle: 'From a one-time niche pack to full-platform membership with a dedicated Yiwu field rep and open-book order execution.',
      singleLabel: 'Single Niche',
      singlePrice: 'From $29',
      singleDesc: 'One market district. One product category. Instant CSV download with unmasked direct mobile numbers and exact booth coordinates.',
      singleCta: 'Browse Category Packs →',
      proBadge: 'RECOMMENDED',
      proLabel: 'Pro All-Access',
      proPrice: '$149',
      proSave: 'Saves $50 vs. buying all 6 packs separately',
      proDesc: 'Full platform access. All 6 district packs. Weekly new verified stall additions.',
      proCta: 'Get Pro Access ($149/yr) →',
      bizLabel: 'Business',
      bizPrice: '$399',
      bizSave: '4 stall audits alone = $396 value — pays for itself',
      bizDesc: 'Everything in Pro, plus a dedicated Yiwu field rep, quarterly physical stall audits, and open-book order execution at 6% transparent commission.',
      bizCta: 'Start on WhatsApp →',
      openBookNote: '💡 You receive the raw RMB factory receipt + our separate invoice. You see exactly what the factory charges vs. our fee.'
    },
    faq: {
      badge: 'Transparency First',
      title: 'The Questions Serious Buyers Ask Before Trusting Us With Their Money',
      q1: '"How do I know phone numbers are real and not VoIP proxies?"',
      a1: 'Our 27,706 records come from physical stall signboards photographed on-site at Yiwu Futian Market. Every number is cross-referenced with the market\'s official booth registration card. Inactive or VoIP numbers found during use are replaced free under our Dead Contact Guarantee — notify us and we replace within 48 hours.',
      q2: '"What if the supplier stops responding after I pay for the pack?"',
      a2: 'You\'re contacting permanent wholesale market stall owners with 5–15 year market licenses — not freelance individuals. These are registered booths at a government-supervised trade city. If a stall closes or their number changes, notify us and we replace that contact in your downloaded file within 48 hours, free.',
      q3: '"How does Sino Trade Link make money if contacts are free to browse?"',
      a3: 'Transparent answer: Free browsing builds trust. Revenue comes from: (1) Category Pack CSV downloads ($29–$49), (2) Ground concierge services ($99–$299 per job), and (3) Business Tier membership ($399/yr). We do NOT take hidden kickbacks from suppliers — our open-book model means you always see the raw RMB factory invoice separately from our fee.',
      q4: '"Is my order money safe? Who holds it during a transaction?"',
      a4: 'We never hold your order money. For ground services, you pay Sino Trade Link\'s flat service fee upfront (e.g. $149 sample pickup fee) and pay the supplier directly in RMB at the stall. For Business Tier order execution, you release payment directly to the factory — never through us. We act as your negotiation mandate only.',
      q5: '"What if my country has import restrictions on certain Chinese goods?"',
      a5: 'Our ground team can verify CE, FCC, EN71/ASTM toy safety, and RoHS certificates at the stall level during a $99 Stall Audit. We also proactively flag DG (Dangerous Goods) categories — lighters, batteries, liquids, aerosols — that need specialized freight lanes before you commit to an order.',
      calloutText: 'Our business model is built on repeat buyers. A buyer who trusts us completes a $5,000 first order and returns for a $50,000 second. Misleading you once would cost us 10× in lifetime value.',
      calloutCta: 'Talk to Our Yiwu Team on WhatsApp →'
    },
    openBook: {
      badge: 'Open-Book Sourcing',
      title: "Traditional 'Free' Yiwu Agent vs. Sino Trade Link Business Tier",
      subtitle: "Most Yiwu agents claim to work for free. They don't. They earn 10–20% kickbacks from factories — baked invisibly into the unit price you see.",
      tradTitle: "❌ Traditional 'Free' Yiwu Agent",
      trad1: 'Claims to work for free — earns 10–20% hidden kickback from the factory you buy from',
      trad2: 'Shows you a "best price" — already inflated before you see it',
      trad3: "No paper trail — you can't verify actual factory price vs. what you paid",
      trad4: 'Financially incentivized to push affiliated factories over better alternatives',
      trad5: 'Typically disappears after commission is collected',
      stlTitle: '✅ Sino Trade Link Business Tier ($399/yr)',
      stl1: '6% transparent commission — stated in writing before any work begins',
      stl2: 'You receive the raw RMB factory receipt + our invoice as two separate line items',
      stl3: 'Open-Book Mandate: if we negotiate ¥23/unit at the stall, you pay ¥23 + 6% — nothing else',
      stl4: 'No factory affiliations — we contact stalls from your shortlist in our 27,706 database',
      stl5: 'All negotiation communication logged and shared with you on WhatsApp',
      cta: 'Start Open-Book Sourcing on WhatsApp →',
      responseNote: 'Our Yiwu team typically responds within 2 hours during business hours (UTC+8).'
    },
    countriesSection: {
      badge: '🌍 100 Global Import Corridors • 2,400 Category Trade Lanes',
      title: 'Global Yiwu-to-Port Sourcing Corridors (100 Countries)',
      subtitle: 'Explore country-specific Yiwu wholesale hubs with Ningbo ocean transit times, destination ports, local customs compliance (CE, SABER, BIS, SONCAP, INMETRO), $99 stall audits, and 6% open-book container execution.',
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
      auditBtn: 'Book Stall Audit ($99) →',
      whatsappBtn: 'WhatsApp Ground Desk'
    },
    seo: {
      homeTitle: 'Sino Trade Link | 27,706+ Verified China Wholesale Market Suppliers & Direct Contacts',
      homeDesc: 'Access 27,706+ verified offline suppliers from Yiwu Futian Wholesale Market with 99.9% unmasked direct mobile numbers, exact booth coordinates, and $99 on-ground inspection.',
      homeKeywords: 'Yiwu wholesale market directory, Yiwu Futian market stalls, China direct factory contacts, Yiwu booth numbers, Yiwu sourcing agent alternative',
      directoryTitle: 'Yiwu Wholesale Market Directory | 27,706+ Verified Stalls & Direct Factory Contacts',
      directoryDesc: 'Search 27,706+ verified wholesale booths across Districts 1–5 & Huangyuan Market in Yiwu, China. Unlock direct +86 mobile numbers and WeChat IDs.',
      packsTitle: 'Yiwu Niche Category CSV Directory Packs ($29–$49) | Instant Excel Download',
      packsDesc: 'Download targeted Yiwu wholesale market spreadsheets with unmasked Chinese mobile numbers, WeChat IDs, and exact booth coordinates.',
      conciergeTitle: 'Yiwu On-Ground Stall Audit ($99), Sample Consolidation & AQL 2.5 Inspection',
      conciergeDesc: 'Hire our bilingual Yiwu field engineers for $99 physical booth video audits, $149 sample consolidation boxes, and AQL 2.5 pre-shipment inspections.',
      countriesTitle: '100 Country Import Corridors from Yiwu, China | Sea Freight & Customs Compliance',
      countriesDesc: 'Country-by-country wholesale sourcing hubs from Yiwu & Ningbo Port to 100 countries with transit times, duties, and required import certifications.'
    }
  },
  es: {
    nav: {
      directory: 'Directorio de Puestos',
      categoryPacks: 'Paquetes CSV',
      countries: '100 Países',
      marketMap: 'Mapa del Mercado',
      sourcingGuide: 'Guía de Importación',
      concierge: 'Auditoría en Yiwu ($99)',
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
      badge: 'Planes de Acceso Flexibles',
      title: 'Elija su Nivel de Acceso Directo',
      subtitle: 'Desde un paquete CSV por rubro hasta membresía anual con representante bilingüe en Yiwu y compras a libro abierto.',
      singleLabel: 'Pack por Rubro',
      singlePrice: 'Desde $29',
      singleDesc: 'Un distrito del mercado. Una categoría específica. Descarga inmediata en Excel/CSV con teléfonos móviles directos y ubicación exacta del puesto.',
      singleCta: 'Ver Paquetes por Categoría →',
      proBadge: 'RECOMENDADO',
      proLabel: 'Pase Anual Pro',
      proPrice: '$149',
      proSave: 'Ahorra $50 frente a comprar los 6 paquetes por separado',
      proDesc: 'Acceso total a la plataforma. Los 6 paquetes de distritos completos y actualizaciones semanales.',
      proCta: 'Obtener Acceso Pro ($149/año) →',
      bizLabel: 'Plan Business',
      bizPrice: '$399',
      bizSave: 'Incluye 4 auditorías físicas de puestos ($396 de valor) — se paga solo',
      bizDesc: 'Todo lo incluido en Pro, más agente dedicado en Yiwu por WhatsApp, 4 auditorías físicas al año y gestión de compras a libro abierto con 6% de comisión transparente.',
      bizCta: 'Consultar por WhatsApp →',
      openBookNote: '💡 Recibirá el recibo original de fábrica en RMB más nuestra factura por separado. Transparencia total sin sobreprecios ocultos.'
    },
    faq: {
      badge: 'Transparencia Total',
      title: 'Las Preguntas que Todo Importador Serio Hace Antes de Confiar su Capital',
      q1: '«¿Cómo sé que los teléfonos son reales y no números virtuales?»',
      a1: 'Nuestros 27.706 registros provienen de letreros físicos fotografiados en el Mercado Futian de Yiwu y validados con el registro oficial del puesto. Si algún número está inactivo, lo reemplazamos gratis en menos de 48 horas bajo nuestra Garantía de Contacto Activo.',
      q2: '«¿Qué pasa si un proveedor no responde después de descargar el paquete?»',
      a2: 'Usted contacta a titulares de puestos mayoristas permanentes con licencias de 5 a 15 años, no a revendedores temporales. Si un puesto cierra o cambia de número, reemplazamos ese contacto sin costo en 48 horas.',
      q3: '«¿Cómo gana dinero Sino Trade Link si explorar el directorio es gratis?»',
      a3: 'Respuesta clara: nuestros ingresos provienen de (1) Descargas de paquetes CSV ($29–$49), (2) Servicios de inspección en terreno en Yiwu ($99–$299), y (3) Membresía Business ($399/año). Jamás cobramos comisiones ocultas a las fábricas.',
      q4: '«¿Mi dinero está seguro? ¿Quién recibe el pago de mi mercadería?»',
      a4: 'Nunca retenemos el dinero de sus compras. Usted paga únicamente nuestra tarifa fija de servicio (por ejemplo, $99 por auditoría de puesto) y paga la mercadería directamente a la fábrica.',
      q5: '«¿Qué ocurre con las normas aduaneras y certificaciones de mi país (NOM, CE, INMETRO)?»',
      a5: 'Nuestro equipo en Yiwu verifica certificados CE, FCC, EN71/ASTM y RoHS directamente en el puesto durante una Auditoría de $99, e identifica mercancías peligrosas (baterías, líquidos) antes de embarcar.',
      calloutText: 'Nuestro modelo se basa en importadores recurrentes. Publicamos nuestras tarifas, nuestro método a libro abierto y nuestro WhatsApp directo en Yiwu.',
      calloutCta: 'Hablar con Nuestro Equipo en Yiwu por WhatsApp →'
    },
    openBook: {
      badge: 'Compras a Libro Abierto (Open-Book)',
      title: 'Agente Tradicional «Gratis» en Yiwu vs. Sino Trade Link Business',
      subtitle: 'La mayoría de los agentes en Yiwu dicen trabajar gratis o al 1%, pero cobran entre 10% y 20% de comisión oculta de la fábrica, inflando su costo unitario.',
      tradTitle: '❌ Agente Tradicional «Gratis» en Yiwu',
      trad1: 'Dice cobrar 0% o 1%, pero recibe 10–20% de comisión oculta pagada por la fábrica',
      trad2: 'Le presenta un «precio final» que ya viene inflado antes de que usted lo vea',
      trad3: 'Sin comprobantes reales: nunca sabe cuánto cobró realmente el fabricante',
      trad4: 'Incentivado a llevarlo a fábricas cómplices en lugar de las mejores opciones',
      trad5: 'Desaparece cuando surgen problemas de calidad tras cobrar su comisión',
      stlTitle: '✅ Sino Trade Link Business Tier ($399/año)',
      stl1: '6% de comisión transparente establecida por escrito antes de iniciar',
      stl2: 'Recibe el comprobante original del puesto en RMB + nuestra factura por separado',
      stl3: 'Mandato a Libro Abierto: si negociamos ¥23/unidad en el puesto, usted paga ¥23 + 6%',
      stl4: 'Cero alianzas ocultas: auditamos los puestos que usted elija de nuestra base de 27.706 proveedores',
      stl5: 'Toda la negociación documentada y compartida con usted por WhatsApp',
      cta: 'Iniciar Compra a Libro Abierto por WhatsApp →',
      responseNote: 'Nuestro equipo en Yiwu responde habitualmente en menos de 2 horas en horario comercial (UTC+8).'
    },
    countriesSection: {
      badge: '🌍 100 Corredores Globales de Importación • 2.400 Rutas Comerciales',
      title: 'Corredores Marítimos y Aéreos desde Yiwu hacia 100 Países',
      subtitle: 'Consulte tiempos de tránsito marítimo desde el Puerto de Ningbo, puertos de destino, requisitos aduaneros locales, auditorías de puestos por $99 y consolidación de contenedores.',
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
      auditBtn: 'Auditar este Puesto ($99) →',
      whatsappBtn: 'Consultar por WhatsApp'
    },
    seo: {
      homeTitle: 'Sino Trade Link | Directorio de 27.706+ Proveedores y Fábricas en el Mercado de Yiwu, China',
      homeDesc: 'Acceda a 27.706+ proveedores mayoristas verificados del Mercado Futian de Yiwu con teléfonos móviles directos, WeChat, ubicación de puestos e inspección en terreno por $99.',
      homeKeywords: 'mercado mayorista Yiwu, proveedores directos China, directorio mercado Futian Yiwu, importar de Yiwu sin intermediarios, telefonos WeChat fabricas China',
      directoryTitle: 'Directorio del Mercado Mayorista de Yiwu | 27.706+ Puestos y Fábricas Directas',
      directoryDesc: 'Busque entre 27.706+ puestos verificados en los Distritos 1 a 5 y el Mercado Huangyuan de Yiwu. Desbloquee móviles +86 y WeChat directo.',
      packsTitle: 'Paquetes CSV del Directorio Mayorista de Yiwu ($29–$49) | Descarga en Excel',
      packsDesc: 'Descargue bases de datos en Excel/CSV por categoría con números móviles directos, WeChat y coordenadas exactas de puestos en Yiwu.',
      conciergeTitle: 'Auditoría Física de Puestos en Yiwu ($99), Consolidación de Muestras e Inspección AQL 2.5',
      conciergeDesc: 'Contrate a nuestros ingenieros bilingües en Yiwu para videollamadas 4K desde el puesto ($99), consolidación de muestras ($149) e inspección pre-embarque AQL 2.5.',
      countriesTitle: 'Importar desde Yiwu, China hacia 100 Países | Flete Marítimo y Aduanas',
      countriesDesc: 'Guías de importación desde Yiwu y el Puerto de Ningbo hacia 100 países con tiempos de tránsito marítimo, aranceles y certificaciones requeridas.'
    }
  },
  pt: {
    nav: {
      directory: 'Diretório de Lojas',
      categoryPacks: 'Planilhas CSV',
      countries: '100 Países',
      marketMap: 'Mapa do Mercado',
      sourcingGuide: 'Guia de Importação',
      concierge: 'Auditoria em Yiwu ($99)',
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
      badge: 'Planos de Acesso Flexíveis',
      title: 'Escolha Seu Nível de Acesso',
      subtitle: 'De pacotes CSV por nicho até assinatura anual com representante dedicado em Yiwu e execução de pedidos Open-Book.',
      singleLabel: 'Pacote por Nicho',
      singlePrice: 'A partir de $29',
      singleDesc: 'Um distrito do mercado. Uma categoria específica. Download imediato em CSV/Excel com celulares diretos e localização exata do box.',
      singleCta: 'Ver Pacotes por Categoria →',
      proBadge: 'MAIS POPULAR',
      proLabel: 'Passe Anual Pro',
      proPrice: '$149',
      proSave: 'Economize $50 em relação à compra dos 6 pacotes avulsos',
      proDesc: 'Acesso completo à plataforma. Todos os 6 pacotes de distritos e atualizações semanais de novos fornecedores.',
      proCta: 'Assinar Acesso Pro ($149/ano) →',
      bizLabel: 'Plano Business',
      bizPrice: '$399',
      bizSave: 'Inclui 4 auditorias presenciais ($396 em valor) — paga-se sozinho',
      bizDesc: 'Tudo do plano Pro, mais representante bilíngue dedicado em Yiwu via WhatsApp, 4 auditorias físicas por ano e compras Open-Book com comissão transparente de 6%.',
      bizCta: 'Falar no WhatsApp →',
      openBookNote: '💡 Você recebe o recibo original da fábrica em RMB + nossa fatura separada. Transparência total sobre o preço real de fábrica.'
    },
    faq: {
      badge: 'Transparência em Primeiro Lugar',
      title: 'As Perguntas que Importadores Experientes Fazem Antes de Fechar Negócio',
      q1: '“Como sei que os números de telefone são reais e não números virtuais?”',
      a1: 'Nossos 27.706 registros vêm das placas físicas fotografadas presencialmente no Mercado Futian de Yiwu e conferidas com o registro oficial do box. Números inativos são substituídos gratuitamente em até 48 horas.',
      q2: '“E se o fornecedor parar de responder depois que eu baixar a planilha?”',
      a2: 'Você está contatando lojistas permanentes com licenças de 5 a 15 anos no mercado — não vendedores autônomos. Se um box fechar ou mudar de número, substituímos o contato gratuitamente em até 48 horas.',
      q3: '“Como a Sino Trade Link ganha dinheiro se a busca no site é gratuita?”',
      a3: 'Resposta direta: nossa receita vem de (1) Planilhas CSV por categoria ($29–$49), (2) Serviços presenciais de auditoria e inspeção em Yiwu ($99–$299) e (3) Assinatura Business ($399/ano). Não recebemos comissões ocultas das fábricas.',
      q4: '“Meu dinheiro está seguro? Quem recebe o pagamento do pedido?”',
      a4: 'Nunca retemos o valor da sua mercadoria. Você paga apenas a taxa fixa do serviço presencial (ex: $99 pela auditoria do box) e paga o pedido diretamente à fábrica.',
      q5: '“Como funcionam as certificações exigidas na alfândega (INMETRO, ANATEL, CE)?”',
      a5: 'Nossa equipe em Yiwu verifica certificados CE, RoHS, FCC e conformidade para INMETRO diretamente no box durante uma Auditoria de $99, além de sinalizar cargas especiais (baterias, líquidos) antes do embarque.',
      calloutText: 'Nosso modelo de negócios é construído sobre compradores recorrentes. Publicamos nossas taxas, nosso modelo Open-Book e nosso WhatsApp direto em Yiwu.',
      calloutCta: 'Falar com Nossa Equipe em Yiwu no WhatsApp →'
    },
    openBook: {
      badge: 'Importação Open-Book (Livro Aberto)',
      title: 'Agente Tradicional “Grátis” em Yiwu vs. Sino Trade Link Business',
      subtitle: 'A maioria dos agentes em Yiwu diz trabalhar de graça ou cobrar 1%, mas recebe de 10% a 20% de comissão oculta da fábrica — embutida no preço unitário que você paga.',
      tradTitle: '❌ Agente Tradicional “Grátis” em Yiwu',
      trad1: 'Diz não cobrar comissão, mas recebe 10–20% de repasse oculto pago pela fábrica',
      trad2: 'Apresenta um “preço final” que já vem inflacionado antes de chegar até você',
      trad3: 'Sem comprovantes reais — impossível auditar o valor real cobrado pela fábrica',
      trad4: 'Incentivado financeiramente a indicar fábricas parceiras em vez das melhores opções',
      trad5: 'Desaparece após receber a comissão quando surgem problemas de qualidade',
      stlTitle: '✅ Sino Trade Link Business Tier ($399/ano)',
      stl1: 'Comissão transparente de 6% — definida em contrato antes de qualquer trabalho',
      stl2: 'Você recebe o recibo original da fábrica em RMB + nossa fatura em itens separados',
      stl3: 'Mandato Open-Book: se negociarmos ¥23/unidade no box, você paga ¥23 + 6%',
      stl4: 'Sem vínculo oculto com fábricas — auditamos os boxes escolhidos por você entre 27.706 opções',
      stl5: 'Toda a negociação registrada e compartilhada com você no WhatsApp',
      cta: 'Iniciar Importação Open-Book no WhatsApp →',
      responseNote: 'Nossa equipe em Yiwu responde normalmente em até 2 horas no horário comercial (UTC+8).'
    },
    countriesSection: {
      badge: '🌍 100 Corredores Globais de Importação • 2.400 Rotas Comerciais',
      title: 'Corredores de Importação de Yiwu para 100 Países',
      subtitle: 'Confira tempos de trânsito marítimo a partir do Porto de Ningbo, portos de destino, exigências alfandegárias locais (INMETRO, CE, Receita Federal), auditorias de $99 e consolidação de contêineres.',
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
      auditBtn: 'Auditar este Box ($99) →',
      whatsappBtn: 'Chamar Equipe no WhatsApp'
    },
    seo: {
      homeTitle: 'Sino Trade Link | 27.706+ Fornecedores e Fábricas Verificadas no Mercado de Yiwu, China',
      homeDesc: 'Acesse 27.706+ fornecedores atacadistas verificados do Mercado Futian de Yiwu com números de celular diretos, WeChat, endereço exato do box e inspeção local por $99.',
      homeKeywords: 'mercado atacadista Yiwu, fornecedores diretos China, diretório Yiwu Futian, importar da China direto da fábrica, contatos WeChat fornecedores Yiwu',
      directoryTitle: 'Diretório do Mercado Atacadista de Yiwu | 27.706+ Boxes e Fábricas Diretas',
      directoryDesc: 'Pesquise 27.706+ boxes verificados nos Distritos 1 a 5 e Mercado Huangyuan em Yiwu, China. Desbloqueie celulares +86 e WeChat direto.',
      packsTitle: 'Planilhas CSV de Fornecedores de Yiwu por Categoria ($29–$49) | Download Excel',
      packsDesc: 'Baixe listas completas em Excel/CSV por nicho com celulares chineses desbloqueados, WeChat e localização exata dos boxes em Yiwu.',
      conciergeTitle: 'Auditoria Presencial de Box em Yiwu ($99), Consolidação de Amostras e Inspeção AQL 2.5',
      conciergeDesc: 'Contrate nossos engenheiros bilíngues em Yiwu para auditoria em vídeo 4K ($99), caixa consolidada de amostras ($149) e inspeção pré-embarque AQL 2.5.',
      countriesTitle: 'Corredores de Importação de Yiwu, China para 100 Países | Frete Marítimo e Alfândega',
      countriesDesc: 'Guias completos de importação de Yiwu e Porto de Ningbo para 100 países com prazos marítimos, impostos e certificações obrigatórias.'
    }
  },
  fr: {
    nav: {
      directory: 'Annuaire des Stands',
      categoryPacks: 'Packs CSV',
      countries: '100 Pays',
      marketMap: 'Plan du Marché',
      sourcingGuide: 'Guide Sourcing',
      concierge: 'Audit sur Place (99 $)',
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
      badge: 'Formules d’Accès Flexibles',
      title: 'Choisissez Votre Niveau d’Accès',
      subtitle: 'Du pack CSV par secteur jusqu’à l’adhésion annuelle avec agent dédié à Yiwu et exécution des commandes à livre ouvert.',
      singleLabel: 'Pack par Secteur',
      singlePrice: 'Dès 29 $',
      singleDesc: 'Un district du marché. Une catégorie ciblée. Téléchargement CSV/Excel immédiat avec mobiles directs et coordonnées exactes des stands.',
      singleCta: 'Voir les Packs par Catégorie →',
      proBadge: 'RECOMMANDÉ',
      proLabel: 'Pass Annuel Pro',
      proPrice: '149 $',
      proSave: 'Économisez 50 $ par rapport à l’achat des 6 packs séparés',
      proDesc: 'Accès complet à la plateforme. Les 6 packs de districts complets et ajouts hebdomadaires de nouveaux stands.',
      proCta: 'Obtenir l’Accès Pro (149 $/an) →',
      bizLabel: 'Formule Business',
      bizPrice: '399 $',
      bizSave: '4 audits physiques inclus (valeur 396 $) — rentabilisé immédiatement',
      bizDesc: 'Tout le Pass Pro, plus un représentant bilingue dédié à Yiwu sur WhatsApp, 4 audits de stands par an et gestion des commandes à livre ouvert (6 % de commission transparente).',
      bizCta: 'Démarrer sur WhatsApp →',
      openBookNote: '💡 Vous recevez le reçu original de l’usine en RMB + notre facture séparée. Vous voyez exactement le prix réel facturé par le stand.'
    },
    faq: {
      badge: 'Transparence Absolue',
      title: 'Les Questions que Posent les Importateurs Sérieux Avant de S’Engager',
      q1: '« Comment savoir si les numéros de téléphone sont réels et non des numéros virtuels ? »',
      a1: 'Nos 27 706 fiches proviennent des enseignes physiques photographiées sur place au marché Futian de Yiwu et recoupées avec l’enregistrement officiel du stand. Tout numéro inactif est remplacé gratuitement sous 48h.',
      q2: '« Que se passe-t-il si un fournisseur ne répond plus après mon achat ? »',
      a2: 'Vous contactez des titulaires de stands permanents disposant de baux commerciaux de 5 à 15 ans. Si un stand ferme ou change de numéro, nous remplaçons ce contact gratuitement sous 48h.',
      q3: '« Comment Sino Trade Link se rémunère-t-il si la consultation est gratuite ? »',
      a3: 'Notre modèle est 100 % transparent : (1) Téléchargements de packs CSV (29 $–49 $), (2) Audits et inspections sur place à Yiwu (99 $–299 $), et (3) Abonnement Business (399 $/an). Aucune rétrocommission cachée des usines.',
      q4: '« Mon argent est-il en sécurité ? Qui encaisse le règlement de mes marchandises ? »',
      a4: 'Nous ne détenons jamais les fonds de vos commandes. Vous réglez uniquement nos frais fixes de prestation (ex. 99 $ pour un audit de stand) et payez vos marchandises directement à l’usine.',
      q5: '« Qu’en est-il des normes douanières (CE, RoHS, REACH, SONCAP) ? »',
      a5: 'Notre équipe à Yiwu vérifie les certificats CE, RoHS, EN71/ASTM directement sur le stand lors d’un Audit à 99 $ et identifie les marchandises réglementées (batteries, liquides) avant expédition.',
      calloutText: 'Notre modèle repose sur la fidélité des acheteurs B2B. Nous publions ouvertement nos tarifs, notre charte à livre ouvert et notre numéro WhatsApp direct à Yiwu.',
      calloutCta: 'Parler à Notre Équipe à Yiwu sur WhatsApp →'
    },
    openBook: {
      badge: 'Sourcing à Livre Ouvert (Open-Book)',
      title: 'Agent Yiwu Traditionnel « Gratuit » vs. Sino Trade Link Business',
      subtitle: 'La plupart des agents à Yiwu prétendent travailler gratuitement ou à 1 %, mais perçoivent 10 à 20 % de rétrocommissions cachées des usines — incluses dans votre prix unitaire.',
      tradTitle: '❌ Agent Traditionnel « Gratuit » à Yiwu',
      trad1: 'Prétend travailler gratuitement — touche 10 à 20 % de commission occulte de l’usine',
      trad2: 'Vous présente un « meilleur prix » déjà gonflé avant même que vous ne le voyiez',
      trad3: 'Aucune traçabilité — impossible de vérifier le vrai tarif sortie usine',
      trad4: 'Incité financièrement à privilégier des usines affiliées au détriment de la qualité',
      trad5: 'Disparaît souvent une fois sa commission encaissée en cas de litige qualité',
      stlTitle: '✅ Sino Trade Link Business Tier (399 $/an)',
      stl1: 'Commission transparente de 6 % — fixée par écrit avant toute intervention',
      stl2: 'Vous recevez le reçu original du stand en RMB + notre facture séparément',
      stl3: 'Mandat à Livre Ouvert : si nous négocions 23 ¥/unité au stand, vous payez 23 ¥ + 6 %',
      stl4: 'Aucune affiliation usine — nous auditons les stands que vous sélectionnez parmi nos 27 706 profils',
      stl5: 'Toutes les négociations sont documentées et partagées avec vous sur WhatsApp',
      cta: 'Lancer un Sourcing à Livre Ouvert sur WhatsApp →',
      responseNote: 'Notre équipe à Yiwu répond généralement en moins de 2 heures pendant les heures ouvrables (UTC+8).'
    },
    countriesSection: {
      badge: '🌍 100 Corridors d’Importation • 2 400 Lignes Commerciales',
      title: 'Corridors Logistiques de Yiwu vers 100 Pays',
      subtitle: 'Consultez les délais de transit maritime depuis le port de Ningbo, les ports d’arrivée, les normes douanières locales (CE, SONCAP, COC), les audits à 99 $ et le groupage conteneur.',
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
      auditBtn: 'Auditer ce Stand (99 $) →',
      whatsappBtn: 'Bureau Yiwu WhatsApp'
    },
    seo: {
      homeTitle: 'Sino Trade Link | 27 706+ Fournisseurs et Usines Vérifiés du Marché de Gros de Yiwu, Chine',
      homeDesc: 'Accédez à plus de 27 706 fournisseurs vérifiés du marché de gros Yiwu Futian avec numéros mobiles directs, WeChat, coordonnées des stands et audit sur place à 99 $.',
      homeKeywords: 'marché de gros Yiwu, fournisseurs directs Chine, annuaire Yiwu Futian, importer de Yiwu sans intermédiaire, contacts WeChat usines Chine',
      directoryTitle: 'Annuaire du Marché de Gros de Yiwu | 27 706+ Stands Vérifiés & Usines Directes',
      directoryDesc: 'Recherchez parmi 27 706+ stands vérifiés dans les Districts 1 à 5 et le marché Huangyuan à Yiwu. Débloquez les mobiles +86 et identifiants WeChat.',
      packsTitle: 'Packs CSV par Catégorie du Marché de Yiwu (29 $–49 $) | Téléchargement Excel',
      packsDesc: 'Téléchargez les fichiers Excel/CSV ciblés du marché de Yiwu avec mobiles chinois non masqués, WeChat et coordonnées exactes des stands.',
      conciergeTitle: 'Audit Physique de Stand à Yiwu (99 $), Consolidation d’Échantillons & Inspection AQL 2.5',
      conciergeDesc: 'Mandatez nos ingénieurs bilingues à Yiwu pour un audit vidéo 4K en stand (99 $), un colis d’échantillons consolidés (149 $) ou une inspection AQL 2.5.',
      countriesTitle: '100 Corridors d’Importation depuis Yiwu, Chine | Fret Maritime & Douanes',
      countriesDesc: 'Guides d’importation par pays depuis Yiwu et le port de Ningbo vers 100 destinations avec délais maritimes, droits de douane et certifications.'
    }
  },
  de: {
    nav: {
      directory: 'Standverzeichnis',
      categoryPacks: 'CSV-Branchenpakete',
      countries: '100 Länder',
      marketMap: 'Marktkarte',
      sourcingGuide: 'Einkaufsleitfaden',
      concierge: 'Vor-Ort-Audit (99 $)',
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
      badge: 'Flexible Zugangsmodelle',
      title: 'Wählen Sie Ihre Zugangsstufe',
      subtitle: 'Vom einmaligen CSV-Branchenpaket bis zur Jahresmitgliedschaft mit eigenem Yiwu-Außendienstmitarbeiter und Open-Book-Auftragsabwicklung.',
      singleLabel: 'Einzelnes Branchenpaket',
      singlePrice: 'Ab 29 $',
      singleDesc: 'Ein Marktdistrikt. Eine Produktkategorie. Sofortiger CSV/Excel-Download mit unmaskierten Mobilnummern und exakten Standkoordinaten.',
      singleCta: 'Branchenpakete ansehen →',
      proBadge: 'EMPFOHLEN',
      proLabel: 'Pro-Jahrespass',
      proPrice: '149 $',
      proSave: 'Spart 50 $ gegenüber dem Einzelkauf aller 6 Pakete',
      proDesc: 'Vollständiger Plattformzugang. Alle 6 Distrikt-Pakete inklusive wöchentlicher Neuaufnahmen verifizierter Stände.',
      proCta: 'Pro-Zugang sichern (149 $/Jahr) →',
      bizLabel: 'Business-Tarif',
      bizPrice: '399 $',
      bizSave: 'Allein 4 enthaltene Stand-Audits entsprechen 396 $ Gegenwert',
      bizDesc: 'Alles aus Pro, plus persönlicher zweisprachiger Ansprechpartner in Yiwu per WhatsApp, 4 Vor-Ort-Audits pro Jahr und Open-Book-Bestellabwicklung zu 6 % transparenter Provision.',
      bizCta: 'Auf WhatsApp starten →',
      openBookNote: '💡 Sie erhalten die Original-RMB-Fabrikquittung sowie unsere separate Rechnung. Volle Kostentransparenz ohne versteckte Aufschläge.'
    },
    faq: {
      badge: 'Transparenz an Erster Stelle',
      title: 'Die Fragen, die Seriöse Einkäufer Stellen, Bevor Sie Uns Ihr Vertrauen Schenken',
      q1: '„Woher weiß ich, dass die Telefonnummern echt sind und keine VoIP-Proxys?“',
      a1: 'Unsere 27.706 Einträge stammen von physischen Ladenschildern, die vor Ort im Yiwu Futian Markt fotografiert und mit der offiziellen Standregistrierung abgeglichen wurden. Inaktive Nummern ersetzen wir innerhalb von 48 Stunden kostenlos.',
      q2: '„Was passiert, wenn ein Lieferant nach dem Kauf des Pakets nicht mehr antwortet?“',
      a2: 'Sie kontaktieren dauerhafte Marktstandinhaber mit 5- bis 15-jährigen Marktlizenzen. Sollte ein Stand schließen oder die Nummer wechseln, ersetzen wir den Kontakt innerhalb von 48 Stunden kostenfrei.',
      q3: '„Wie verdient Sino Trade Link Geld, wenn das Durchsuchen kostenlos ist?“',
      a3: 'Transparente Antwort: Unsere Einnahmen stammen aus (1) CSV-Branchenpaketen (29 $–49 $), (2) Vor-Ort-Inspektionen in Yiwu (99 $–299 $) und (3) der Business-Mitgliedschaft (399 $/Jahr). Wir nehmen keinerlei versteckte Rückvergütungen von Fabriken an.',
      q4: '„Ist mein Bestellkapital sicher? Wer verwaltet das Geld während einer Transaktion?“',
      a4: 'Wir halten niemals Ihr Warengeld. Für Vor-Ort-Services zahlen Sie lediglich unsere feste Servicegebühr (z. B. 99 $ für ein Stand-Audit) und bezahlen die Ware direkt an die Fabrik.',
      q5: '„Wie werden EU-/deutsche Einfuhrbestimmungen (CE, RoHS, REACH, LUCID) geprüft?“',
      a5: 'Unser Team in Yiwu prüft CE-, RoHS-, REACH- und EN71-Zertifikate direkt am Stand während eines 99-$-Audits und weist frühzeitig auf Gefahrgut (Akkus, Flüssigkeiten) hin.',
      calloutText: 'Unser Geschäftsmodell basiert auf langfristigen B2B-Stammkunden. Deshalb legen wir unsere Gebühren, unser Open-Book-Prinzip und unseren direkten WhatsApp-Kontakt in Yiwu offen.',
      calloutCta: 'Mit Unserem Yiwu-Team auf WhatsApp sprechen →'
    },
    openBook: {
      badge: 'Open-Book-Beschaffung',
      title: 'Traditioneller „Kostenloser“ Yiwu-Agent vs. Sino Trade Link Business',
      subtitle: 'Die meisten Yiwu-Agenten behaupten, kostenlos zu arbeiten. Tatsächlich kassieren sie 10–20 % versteckte Provisionen von den Fabriken – unsichtbar eingepreist in Ihren Stückpreis.',
      tradTitle: '❌ Traditioneller „Kostenloser“ Yiwu-Agent',
      trad1: 'Behauptet kostenlos zu arbeiten – kassiert 10–20 % versteckte Kickbacks von der Fabrik',
      trad2: 'Präsentiert Ihnen einen „Bestpreis“, der bereits vorab künstlich erhöht wurde',
      trad3: 'KeineOriginalbelege – Sie erfahren nie den echten Fabrikpreis',
      trad4: 'Finanzieller Anreiz, Partnerfabriken statt der qualitativ besten Anbieter zu empfehlen',
      trad5: 'Bei Qualitätsproblemen nach Provisionszahlung oft nicht mehr greifbar',
      stlTitle: '✅ Sino Trade Link Business-Tarif (399 $/Jahr)',
      stl1: '6 % transparente Provision – vor Arbeitsbeginn schriftlich fixiert',
      stl2: 'Sie erhalten die Original-RMB-Quittung des Stands + unsere Rechnung getrennt',
      stl3: 'Open-Book-Mandat: Verhandeln wir 23 ¥/Stück am Stand, zahlen Sie exakt 23 ¥ + 6 %',
      stl4: 'Keine Fabrikbindungen – wir kontaktieren genau die Stände Ihrer Wahl aus 27.706 Profilen',
      stl5: 'Gesamte Verhandlungskommunikation wird dokumentiert und per WhatsApp geteilt',
      cta: 'Open-Book-Einkauf per WhatsApp starten →',
      responseNote: 'Unser Team in Yiwu antwortet während der Geschäftszeiten (UTC+8) in der Regel innerhalb von 2 Stunden.'
    },
    countriesSection: {
      badge: '🌍 100 Globale Importkorridore • 2.400 Handelsrouten',
      title: 'Globale Yiwu-zu-Hafen-Beschaffungskorridore (100 Länder)',
      subtitle: 'Entdecken Sie länderspezifische Yiwu-Großhandels-Hubs mit Seefrachtlaufzeiten ab Ningbo, Zielhäfen, Zollvorschriften (CE, REACH, SABER), 99-$-Standaudits und Containerkonsolidierung.',
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
      auditBtn: 'Stand-Audit buchen (99 $) →',
      whatsappBtn: 'WhatsApp Vor-Ort-Büro'
    },
    seo: {
      homeTitle: 'Sino Trade Link | 27.706+ Verifizierte Großhändler & Direktfabriken im Yiwu-Markt, China',
      homeDesc: 'Direkter Zugriff auf über 27.706 verifizierte Großhändler im Yiwu Futian Markt mit unmaskierten chinesischen Mobilnummern, WeChat, Standkoordinaten und 99-$-Vor-Ort-Inspektion.',
      homeKeywords: 'Yiwu Großhandelsmarkt Verzeichnis, Yiwu Futian Marktstände, China Direktfabrik Kontakte, Yiwu Einkaufsagent Alternative',
      directoryTitle: 'Yiwu Großhandelsmarkt-Verzeichnis | 27.706+ Verifizierte Stände & Direktfabriken',
      directoryDesc: 'Durchsuchen Sie über 27.706 verifizierte Großhandelsstände in den Distrikten 1–5 und im Huangyuan-Markt in Yiwu. Schalten Sie +86-Mobilnummern und WeChat frei.',
      packsTitle: 'Yiwu Branchen-CSV-Pakete (29 $–49 $) | Sofortiger Excel-Download',
      packsDesc: 'Laden Sie branchenspezifische Yiwu-Großhandelslisten mit unmaskierten Mobilnummern, WeChat-IDs und exakten Standkoordinaten herunter.',
      conciergeTitle: 'Yiwu Vor-Ort-Standaudit (99 $), Musterkonsolidierung & AQL 2.5 Inspektion',
      conciergeDesc: 'Beauftragen Sie unsere zweisprachigen Ingenieure in Yiwu für 4K-Video-Audits (99 $), Musterkonsolidierung (149 $) und AQL-2.5-Versandkontrollen.',
      countriesTitle: '100 Länder-Importkorridore ab Yiwu, China | Seefracht & Zollbestimmungen',
      countriesDesc: 'Länderspezifische Großhandelsleitfäden von Yiwu & Hafen Ningbo in 100 Länder inklusive Seefrachtlaufzeiten, Zöllen und Einfuhrzertifikaten.'
    }
  },
  ar: {
    nav: {
      directory: 'دليل المحلات',
      categoryPacks: 'حزم البيانات CSV',
      countries: '100 دولة',
      marketMap: 'خريطة السوق',
      sourcingGuide: 'دليل الاستيراد',
      concierge: 'فحص ميداني (99$)',
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
      badge: 'خطط اشتراك مرنة',
      title: 'اختر مستوى الوصول المناسب لك',
      subtitle: 'من شراء قائمة قطاع واحد بصيغة Excel/CSV إلى العضوية السنوية الشاملة مع مندوب خاص في إيوو وتنفيذ الطلبات بنظام الكتاب المفتوح.',
      singleLabel: 'حزمة قطاع واحد',
      singlePrice: 'تبدأ من 29$',
      singleDesc: 'منطقة سوق واحدة وفئة منتجات محددة. تحميل فوري لملف CSV يتضمن أرقام الجوال المباشرة وإحداثيات المحلات.',
      singleCta: 'تصفح حزم الفئات ←',
      proBadge: 'الأكثر طلباً',
      proLabel: 'العضوية السنوية الشاملة Pro',
      proPrice: '149$',
      proSave: 'وفر 50$ مقارنة بشراء الحزم الست بشكل منفصل',
      proDesc: 'وصول كامل للمنصة. جميع حزم المناطق الست (27,706+ محل) مع تحديثات أسبوعية للمحلات الجديدة.',
      proCta: 'اشترك في باقة Pro (149$/سنوياً) ←',
      bizLabel: 'باقة الأعمال Business',
      bizPrice: '399$',
      bizSave: 'تشمل 4 زيارات فحص ميداني للمحلات (بقيمة 396$) — تسترد قيمتها فوراً',
      bizDesc: 'كل مزايا Pro بالإضافة إلى مندوب مخصص في إيوو عبر واتساب، و4 زيارات تدقيق ميداني سنوياً، وتنفيذ الطلبات بعمولة واضحة 6% فقط.',
      bizCta: 'ابدأ عبر واتساب ←',
      openBookNote: '💡 تستلم فاتورة المصنع الأصلية باليوان الصيني (RMB) + فاتورتنا بشكل منفصل تماماً. شفافية مطلقة دون أي زيادة مخفية.'
    },
    faq: {
      badge: 'الشفافية أولاً',
      title: 'الأسئلة التي يطرحها التجار والمستوردون قبل التعامل معنا',
      q1: '«كيف أتأكد أن أرقام الهواتف حقيقية وليست أرقاماً افتراضية؟»',
      a1: 'جميع سجلاتنا البالغ عددها 27,706 تم توثيقها ميدانياً من لوحات المحلات في سوق إيوو فوتيان ومطابقتها مع بطاقة التسجيل الرسمية للمحل. أي رقم غير نشط يتم استبداله مجاناً خلال 48 ساعة.',
      q2: '«ماذا لو لم يرد المورد بعد شرائي لحزمة البيانات؟»',
      a2: 'أنت تتواصل مع أصحاب محلات جملة دائمين بعقود ترخيص تمتد من 5 إلى 15 سنة. إذا أغلق محل أو غيّر رقمه، نقوم بتعويضك ببيانات محدثة مجاناً خلال 48 ساعة.',
      q3: '«كيف تربح Sino Trade Link إذا كان تصفح الدليل مجانياً؟»',
      a3: 'بكل وضوح: إيراداتنا تأتي من (1) تحميل قوائم CSV (29$–49$)، (2) خدمات الفحص الميداني وتجميع العينات في إيوو (99$–299$)، و(3) عضوية الأعمال (399$/سنوياً). لا نأخذ أي عمولات خفية من المصانع.',
      q4: '«هل أموال طلباتي آمنة؟ ومن يستلم قيمة البضاعة؟»',
      a4: 'نحن لا نحتفظ بأموال بضاعتك أبداً. أنت تدفع فقط رسوم خدمتنا الميدانية الثابتة (مثل 99$ لزيارة وفحص المحل) وتدفع قيمة البضاعة مباشرة للمصنع.',
      q5: '«ماذا عن شهادات المطابقة الجمركية مثل سابر (SABER) و CE والمواصفات الخليجية؟»',
      a5: 'يقوم فريقنا الميداني في إيوو بالتحقق من شهادات SABER و CE و RoHS وتقارير الفحص مباشرة داخل المحل خلال زيارة التدقيق (99$)، مع تنبيهك مسبقاً لأي بضائع خطرة (بطاريات، سوائل) قبل الشحن.',
      calloutText: 'نموذج عملنا يعتمد على المستورد الدائم. لذلك ننشر أسعارنا ونظام الكتاب المفتوح ورقم مكتبنا في إيوو عبر واتساب بكل شفافية.',
      calloutCta: 'تحدث مع فريقنا في إيوو عبر واتساب ←'
    },
    openBook: {
      badge: 'الاستيراد بنظام الكتاب المفتوح (Open-Book)',
      title: 'مقارنة بين وسيط إيوو التقليدي «المجاني» وعضوية الأعمال في Sino Trade Link',
      subtitle: 'يدّعي معظم الوسطاء في إيوو أنهم يعملون مجاناً أو بعمولة 1%، لكنهم يتقاضون 10% إلى 20% عمولة خفية من المصنع تُضاف سراً إلى سعر القطعة الذي تدفعه.',
      tradTitle: '❌ وسيط إيوو التقليدي «المجاني»',
      trad1: 'يدّعي العمل مجاناً — لكنه يأخذ 10–20% عمولة خفية من المصنع الذي تشتري منه',
      trad2: 'يعرض عليك «أفضل سعر» بعد أن تم رفعه مسبقاً قبل أن تراه',
      trad3: 'لا توجد فواتير أصلية — لا يمكنك معرفة السعر الحقيقي للمصنع',
      trad4: 'يوجهك نحو مصانع متفقة معه بدلاً من المصانع الأفضل جودة وسعراً',
      trad5: 'يتنصل من المسؤولية بعد استلام عمولته عند ظهور مشاكل في الجودة',
      stlTitle: '✅ عضوية الأعمال في Sino Trade Link (399$/سنوياً)',
      stl1: 'عمولة شفافة 6% فقط — محددة كتابياً قبل بدء أي عمل',
      stl2: 'تستلم إيصال المحل الأصلي باليوان (RMB) + فاتورتنا في بندين منفصلين',
      stl3: 'نظام الكتاب المفتوح: إذا تفاوضنا على سعر 23 يوان للقطعة، تدفع 23 يوان + 6% فقط',
      stl4: 'استقلالية تامة — نتواصل مع المحلات التي تختارها أنت من قاعدة بياناتنا الضخمة',
      stl5: 'جميع محادثات التفاوض موثقة ومشاركة معك مباشرة عبر واتساب',
      cta: 'ابدأ الاستيراد بنظام الكتاب المفتوح عبر واتساب ←',
      responseNote: 'يرد فريقنا في إيوو عادةً خلال ساعتين في أوقات العمل الرسمية (توقيت الصين UTC+8).'
    },
    countriesSection: {
      badge: '🌍 100 مسار استيراد عالمي • 2,400 خط تجاري حسب الفئة',
      title: 'مسارات الشحن والاستيراد من إيوو إلى 100 دولة حول العالم',
      subtitle: 'تعرّف على مدة الشحن البحري من ميناء نينغبو، والموانئ المعتمدة، ومتطلبات التخليص الجمركي (SABER, CE, ACID)، وخدمة فحص المحلات بـ 99$.',
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
      auditBtn: 'احجز فحص ميداني للمحل (99$) ←',
      whatsappBtn: 'تواصل مع مكتب إيوو واتساب'
    },
    seo: {
      homeTitle: 'Sino Trade Link | دليل أكثر من 27,706 مورد ومصنع موثق في سوق إيوو بالجملة، الصين',
      homeDesc: 'تواصل مباشرة مع أكثر من 27,706 محل ومصنع في سوق إيوو فوتيان بالصين مع أرقام جوال مباشرة وحسابات WeChat وإحداثيات المحلات وفحص ميداني بـ 99$.',
      homeKeywords: 'سوق إيوو بالجملة, دليل محلات سوق فوتيان إيوو, أرقام مصانع الصين مباشرة, الاستيراد من إيوو بدون وسيط, ارقام ويتشات موردين الصين',
      directoryTitle: 'دليل سوق إيوو للجملة | 27,706+ محل ومصنع مباشر في الصين',
      directoryDesc: 'ابحث في أكثر من 27,706 محل جملة موثق في المناطق 1 إلى 5 وسوق هوانغ يوان في إيوو. اكشف أرقام الجوال +86 وحسابات WeChat المباشرة.',
      packsTitle: 'قوائم موردين سوق إيوو بصيغة Excel/CSV (29$–49$) | تحميل فوري',
      packsDesc: 'حمّل قواعد بيانات محلات سوق إيوو المصنفة حسب الفئة مع أرقام الهواتف الصينية المباشرة و WeChat وعناوين المحلات.',
      conciergeTitle: 'فحص ميداني للمحلات في إيوو (99$)، تجميع العينات وفحص الجودة AQL 2.5',
      conciergeDesc: 'أرسل مهندسينا في إيوو لتصوير المحل والمنتجات بدقة 4K (99$)، أو تجميع العينات من عدة محلات في طرد واحد (149$)، أو فحص ما قبل الشحن.',
      countriesTitle: 'مسارات الاستيراد والشحن من إيوو، الصين إلى 100 دولة | الشحن البحري والجمارك',
      countriesDesc: 'أدلة شاملة للاستيراد من سوق إيوو وميناء نينغبو إلى 100 دولة تشمل مدة الشحن البحري والرسوم الجمركية وشهادات المطابقة المطلوبة.'
    }
  },
  ru: {
    nav: {
      directory: 'Каталог павильонов',
      categoryPacks: 'Базы CSV',
      countries: '100 стран',
      marketMap: 'Карта рынка',
      sourcingGuide: 'Гид по закупкам',
      concierge: 'Проверка на месте ($99)',
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
      badge: 'Гибкие тарифы доступа',
      title: 'Выберите свой уровень доступа',
      subtitle: 'От разовой выгрузки CSV-базы по категории до годового тарифа с личным представителем в Иу и закупками по открытой смете (Open-Book).',
      singleLabel: 'Одна категория',
      singlePrice: 'От $29',
      singleDesc: 'Один корпус рынка. Одна товарная ниша. Мгновенное скачивание CSV/Excel с открытыми мобильными номерами и точными координатами павильонов.',
      singleCta: 'Выбрать базу по категории →',
      proBadge: 'РЕКОМЕНДУЕМ',
      proLabel: 'Годовой доступ Pro',
      proPrice: '$149',
      proSave: 'Экономия $50 по сравнению с покупкой 6 баз по отдельности',
      proDesc: 'Полный доступ ко всем 6 корпусам рынка (27 706+ павильонов) и еженедельные обновления базы.',
      proCta: 'Получить Pro-доступ ($149/год) →',
      bizLabel: 'Тариф Business',
      bizPrice: '$399',
      bizSave: 'Включает 4 выездных аудита павильонов (ценность $396) — окупается сразу',
      bizDesc: 'Всё из тарифа Pro, плюс личный русско-/англоязычный координатор в Иу в WhatsApp, 4 проверки павильонов в год и сопровождение сделок с прозрачной комиссией 6%.',
      bizCta: 'Начать в WhatsApp →',
      openBookNote: '💡 Вы получаете оригинальный счет фабрики в юанях (RMB) и наш счет отдельно. Полная прозрачность без скрытых откатов.'
    },
    faq: {
      badge: 'Честность и прозрачность',
      title: 'Ответы на главные вопросы оптовых закупщиков',
      q1: '«Откуда уверенность, что номера телефонов настоящие, а не виртуальные?»',
      a1: 'Все 27 706 контактов собраны лично с вывесок павильонов рынка Иу Футянь и сверены с официальными регистрационными карточками. Неактивные номера бесплатно заменяются в течение 48 часов.',
      q2: '«Что если поставщик перестанет отвечать после покупки базы?»',
      a2: 'Вы связываетесь с постоянными арендаторами оптовых павильонов со стажем 5–15 лет. Если павильон закрылся или сменил номер, мы бесплатно заменим контакт в течение 48 часов.',
      q3: '«На чем зарабатывает Sino Trade Link, если просмотр каталога бесплатный?»',
      a3: 'Открытый ответ: наш доход формируется из (1) продажи CSV-баз ($29–$49), (2) выездных проверок и инспекций в Иу ($99–$299) и (3) подписки Business ($399/год). Мы не берем скрытых откатов у фабрик.',
      q4: '«Безопасна ли оплата товара? Кто принимает деньги за партию?»',
      a4: 'Мы никогда не держим деньги за ваш товар. Вы оплачиваете нам только фиксированную стоимость инспекции (например, $99 за аудит павильона), а за сам товар платите напрямую поставщику.',
      q5: '«Как проверить сертификаты (ЕАЭС, CE, RoHS) и ограничения на ввоз?»',
      a5: 'Наши инженеры в Иу проверяют сертификаты и лицензии прямо в павильоне в рамках аудита за $99, а также заранее предупреждают об опасных грузах (аккумуляторы, жидкости) перед отправкой.',
      calloutText: 'Наш бизнес держится на постоянных клиентах. Поэтому мы открыто публикуем наши тарифы, принцип Open-Book и прямой WhatsApp команды в Иу.',
      calloutCta: 'Написать команде в Иу в WhatsApp →'
    },
    openBook: {
      badge: 'Закупки по открытой книге (Open-Book)',
      title: 'Обычный «бесплатный» агент в Иу vs. Sino Trade Link Business',
      subtitle: 'Большинство агентов в Иу обещают работать бесплатно или за 1–2%, но на деле получают 10–20% скрытого отката от фабрики, который заложен в вашу закупочную цену.',
      tradTitle: '❌ Обычный «бесплатный» агент в Иу',
      trad1: 'Обещает работать бесплатно — берет 10–20% скрытой комиссии у фабрики',
      trad2: 'Показывает вам «лучшую цену», которая уже искусственно завышена',
      trad3: 'Никаких первичных чеков — вы не знаете реальную отпускную цену павильона',
      trad4: 'Финансово заинтересован вести вас к «своим» фабрикам вместо лучших по качеству',
      trad5: 'Исчезает после получения комиссии при обнаружении брака',
      stlTitle: '✅ Sino Trade Link Business Tier ($399/год)',
      stl1: 'Фиксированная комиссия 6% — прописана в договоре до начала работы',
      stl2: 'Вы получаете оригинальную накладную павильона в юанях (RMB) + наш счет отдельно',
      stl3: 'Принцип Open-Book: если мы сторговали ¥23/шт в павильоне, вы платите ровно ¥23 + 6%',
      stl4: 'Никаких аффилированных фабрик — проверяем павильоны по вашему списку из 27 706 поставщиков',
      stl5: 'Все переговоры фиксируются и передаются вам в WhatsApp',
      cta: 'Начать закупки Open-Book в WhatsApp →',
      responseNote: 'Команда в Иу обычно отвечает в течение 2 часов в рабочее время (UTC+8).'
    },
    countriesSection: {
      badge: '🌍 100 логистических коридоров • 2 400 товарных направлений',
      title: 'Логистические маршруты из Иу в 100 стран мира',
      subtitle: 'Сроки морской, ж/д и автодоставки из Иу и порта Нинбо, таможенные требования (ЕАЭС, CE, SABER), аудит павильонов за $99 и консолидация грузов.',
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
      auditBtn: 'Заказать аудит павильона ($99) →',
      whatsappBtn: 'WhatsApp офис в Иу'
    },
    seo: {
      homeTitle: 'Sino Trade Link | 27 706+ проверенных поставщиков и фабрик оптового рынка Иу, Китай',
      homeDesc: 'Прямой доступ к 27 706+ оптовым павильонам рынка Иу Футянь с открытыми китайскими номерами телефонов, WeChat, точными адресами бутиков и выездной проверкой за $99.',
      homeKeywords: 'оптовый рынок Иу каталог, поставщики Иу Футянь напрямую, прямые контакты фабрик Китая, номера WeChat поставщиков Иу',
      directoryTitle: 'Каталог оптового рынка Иу | 27 706+ проверенных павильонов и фабрик',
      directoryDesc: 'Поиск среди 27 706+ проверенных павильонов в корпусах 1–5 и на рынке Хуанъюань в Иу, Китай. Прямые номера +86 и WeChat.',
      packsTitle: 'Базы поставщиков рынка Иу в Excel/CSV ($29–$49) | Мгновенное скачивание',
      packsDesc: 'Скачайте готовые таблицы Excel/CSV поставщиков рынка Иу с прямыми мобильными номерами, WeChat и координатами павильонов.',
      conciergeTitle: 'Выездной аудит павильона в Иу ($99), консолидация образцов и инспекция AQL 2.5',
      conciergeDesc: 'Закажите видеопроверку павильона в 4K ($99), сбор образцов из разных бутиков в одну коробку ($149) или предотгрузочную инспекцию AQL 2.5.',
      countriesTitle: 'Доставка и импорт из Иу, Китай в 100 стран | Сроки, порты и таможня',
      countriesDesc: 'Логистические справочники по доставке оптовых грузов из Иу и порта Нинбо в 100 стран мира: сроки, пошлины и сертификация.'
    }
  },
  it: {
    nav: {
      directory: 'Catalogo Stand',
      categoryPacks: 'Pacchetti CSV',
      countries: '100 Paesi',
      marketMap: 'Mappa del Mercato',
      sourcingGuide: 'Guida Importazione',
      concierge: 'Ispezione in Loco ($99)',
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
      badge: 'Piani di Accesso Flessibili',
      title: 'Scegli il Tuo Livello di Accesso',
      subtitle: 'Dal singolo pacchetto CSV di categoria fino all’abbonamento annuale con referente dedicato a Yiwu e gestione ordini Open-Book.',
      singleLabel: 'Singola Categoria',
      singlePrice: 'Da $29',
      singleDesc: 'Un distretto del mercato. Una categoria merceologica. Download immediato in CSV/Excel con cellulari diretti e coordinate esatte degli stand.',
      singleCta: 'Esplora i Pacchetti CSV →',
      proBadge: 'CONSIGLIATO',
      proLabel: 'Pass Annuale Pro',
      proPrice: '$149',
      proSave: 'Risparmi $50 rispetto all’acquisto dei 6 pacchetti singoli',
      proDesc: 'Accesso completo alla piattaforma. Tutti i 6 pacchetti distrettuali e aggiornamenti settimanali con nuovi stand verificati.',
      proCta: 'Attiva Accesso Pro ($149/anno) →',
      bizLabel: 'Piano Business',
      bizPrice: '$399',
      bizSave: 'Include 4 audit fisici degli stand (valore $396) — si ripaga da solo',
      bizDesc: 'Tutto il piano Pro, più referente bilingue dedicato a Yiwu su WhatsApp, 4 ispezioni fisiche all’anno e gestione ordini Open-Book con commissione trasparente del 6%.',
      bizCta: 'Inizia su WhatsApp →',
      openBookNote: '💡 Ricevi la ricevuta originale della fabbrica in RMB + la nostra fattura separata. Vedi esattamente il prezzo reale applicato dallo stand.'
    },
    faq: {
      badge: 'Massima Trasparenza',
      title: 'Le Domande che gli Importatori Professionisti Fanno Prima di Affidarsi a Noi',
      q1: '«Come faccio a sapere che i numeri di telefono sono reali e non numeri virtuali?»',
      a1: 'I nostri 27.706 profili provengono dalle insegne fisiche fotografate sul posto al mercato Futian di Yiwu e verificate con la registrazione ufficiale dello stand. Eventuali numeri inattivi vengono sostituiti gratuitamente entro 48 ore.',
      q2: '«Cosa succede se un fornitore non risponde dopo che ho acquistato il pacchetto?»',
      a2: 'Contatti titolari di stand permanenti con licenze commerciali di 5–15 anni. Se uno stand chiude o cambia numero, sostituiamo gratuitamente il contatto entro 48 ore.',
      q3: '«Come guadagna Sino Trade Link se la consultazione del catalogo è gratuita?»',
      a3: 'Risposta trasparente: i ricavi provengono da (1) Download pacchetti CSV ($29–$49), (2) Servizi di ispezione in loco a Yiwu ($99–$299) e (3) Abbonamento Business ($399/anno). Non accettiamo mai provvigioni occulte dalle fabbriche.',
      q4: '«Il capitale del mio ordine è al sicuro? Chi incassa il pagamento della merce?»',
      a4: 'Non tratteniamo mai i fondi dei tuoi ordini. Paghi a Sino Trade Link solo la tariffa fissa del servizio in loco (es. $99 per l’audit dello stand) e saldi la merce direttamente alla fabbrica.',
      q5: '«Come vengono gestite le certificazioni doganali UE (CE, RoHS, REACH, EN71)?»',
      a5: 'Il nostro team a Yiwu verifica i certificati CE, RoHS, REACH ed EN71 direttamente presso lo stand durante un Audit da $99 e segnala in anticipo eventuali merci pericolose (batterie, liquidi).',
      calloutText: 'Il nostro modello si fonda sui clienti ricorrenti. Per questo pubblichiamo chiaramente le nostre tariffe, il protocollo Open-Book e il contatto WhatsApp diretto del nostro ufficio a Yiwu.',
      calloutCta: 'Parla con il Nostro Team a Yiwu su WhatsApp →'
    },
    openBook: {
      badge: 'Sourcing a Libro Aperto (Open-Book)',
      title: 'Agente Tradizionale «Gratuito» a Yiwu vs. Sino Trade Link Business',
      subtitle: 'La maggior parte degli agenti a Yiwu dichiara di lavorare gratis o all’1%, ma incassa il 10–20% di provvigione occulta dalle fabbriche — nascosta nel prezzo unitario che paghi.',
      tradTitle: '❌ Agente Tradizionale «Gratuito» a Yiwu',
      trad1: 'Dichiara di lavorare gratis — incassa il 10–20% di commissione nascosta dalla fabbrica',
      trad2: 'Ti mostra un «prezzo migliore» già gonfiato prima ancora che tu lo veda',
      trad3: 'Nessuna ricevuta originale — impossibile verificare il vero prezzo di fabbrica',
      trad4: 'Incentivato a spingere fabbriche affiliate anziché i fornitori migliori',
      trad5: 'Spesso sparisce dopo aver incassato la provvigione in caso di difetti qualitativi',
      stlTitle: '✅ Sino Trade Link Business Tier ($399/anno)',
      stl1: 'Commissione trasparente del 6% — concordata per iscritto prima di iniziare',
      stl2: 'Ricevi la ricevuta originale dello stand in RMB + la nostra fattura separatamente',
      stl3: 'Mandato Open-Book: se negoziamo ¥23/pezzo allo stand, paghi esattamente ¥23 + 6%',
      stl4: 'Nessuna affiliazione occulta — contattiamo gli stand scelti da te tra 27.706 profili',
      stl5: 'Tutte le trattative sono registrate e condivise con te su WhatsApp',
      cta: 'Avvia Sourcing Open-Book su WhatsApp →',
      responseNote: 'Il nostro team a Yiwu risponde solitamente entro 2 ore durante l’orario lavorativo (UTC+8).'
    },
    countriesSection: {
      badge: '🌍 100 Corridoi Globali di Importazione • 2.400 Rotte Merceologiche',
      title: 'Corridoi Logistici da Yiwu verso 100 Paesi',
      subtitle: 'Scopri i tempi di transito marittimo dal porto di Ningbo, i porti di destinazione, le normative doganali (CE, REACH, SABER), gli audit da $99 e il consolidamento container.',
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
      auditBtn: 'Prenota Audit Stand ($99) →',
      whatsappBtn: 'Ufficio Yiwu WhatsApp'
    },
    seo: {
      homeTitle: 'Sino Trade Link | 27.706+ Fornitori e Fabbriche Verificate nel Mercato all’Ingrosso di Yiwu, Cina',
      homeDesc: 'Accedi a oltre 27.706 fornitori verificati del mercato all’ingrosso Yiwu Futian con numeri di cellulare cinesi diretti, WeChat, coordinate stand e ispezione in loco a $99.',
      homeKeywords: 'mercato ingrosso Yiwu, fornitori diretti Cina, catalogo Yiwu Futian, importare da Yiwu senza intermediari, contatti WeChat fabbriche Cina',
      directoryTitle: 'Catalogo Mercato all’Ingrosso di Yiwu | 27.706+ Stand Verificati e Fabbriche Dirette',
      directoryDesc: 'Cerca tra 27.706+ stand verificati nei Distretti 1–5 e nel mercato Huangyuan a Yiwu, Cina. Sblocca cellulari +86 e ID WeChat diretti.',
      packsTitle: 'Pacchetti CSV Fornitori di Yiwu per Categoria ($29–$49) | Download Excel Immediato',
      packsDesc: 'Scarica i database Excel/CSV per categoria del mercato di Yiwu con cellulari cinesi in chiaro, WeChat e coordinate esatte degli stand.',
      conciergeTitle: 'Audit Fisico Stand a Yiwu ($99), Consolidamento Campioni e Ispezione AQL 2.5',
      conciergeDesc: 'Incarica i nostri ingegneri bilingue a Yiwu per video-audit 4K allo stand ($99), spedizione unica di campioni ($149) e ispezioni pre-spedizione AQL 2.5.',
      countriesTitle: '100 Corridoi di Importazione da Yiwu, Cina | Trasporto Marittimo e Dogana',
      countriesDesc: 'Guide all’importazione paese per paese da Yiwu e dal porto di Ningbo verso 100 destinazioni con tempi di transito, dazi e certificazioni richieste.'
    }
  }
};

export function t(locale?: string): UIDictionary {
  return UI_DICT[getLocaleConfig(locale).code];
}
