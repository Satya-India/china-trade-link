import { CATEGORY_HUBS, type CategoryHub } from './categories';

export interface CountryRegion {
  id: string;
  name: string;
  flag: string;
  description: string;
}

export const COUNTRY_REGIONS: CountryRegion[] = [
  {
    id: 'north-america',
    name: 'North America',
    flag: '🌎',
    description: 'United States, Canada & Mexico trans-Pacific container and DDP corridors'
  },
  {
    id: 'latin-america',
    name: 'Latin America & Caribbean',
    flag: '🌎',
    description: 'South America, Central America & Caribbean wholesale import lanes'
  },
  {
    id: 'europe',
    name: 'Europe (EU, UK & Non-EU)',
    flag: '🇪🇺',
    description: 'Deep-sea container & Yiwu-Europe railway corridors across 26 European markets'
  },
  {
    id: 'middle-east',
    name: 'Middle East & GCC',
    flag: '🕌',
    description: 'GCC re-export hubs, Red Sea & Levant commercial trade corridors'
  },
  {
    id: 'africa',
    name: 'Africa (North, West, East & South)',
    flag: '🌍',
    description: 'High-volume mixed-container consolidation lanes for 21 African nations'
  },
  {
    id: 'south-central-asia',
    name: 'South & Central Asia',
    flag: '🌏',
    description: 'Indian Subcontinent maritime routes & Central Asian rail/trucking corridors'
  },
  {
    id: 'east-southeast-asia',
    name: 'East & Southeast Asia',
    flag: '🌏',
    description: 'Fast short-sea RCEP & ASEAN lanes with 5–12 day transit from Ningbo'
  },
  {
    id: 'oceania',
    name: 'Oceania & Pacific',
    flag: '🌏',
    description: 'Direct Ningbo-to-Australia & New Zealand ChAFTA/NZFTA container corridors'
  }
];

export interface CountryCorridor {
  slug: string;
  name: string;
  code: string;
  flag: string;
  currency: string;
  region: string;
  ports: string;
  seaTransitDays: string;
  airTransitDays: string;
  customsCompliance: string;
  buyerFocus: string;
  marketSummary: string;
  corridorAdvantage: string;
}

export const COUNTRIES: CountryCorridor[] = [
  // ── 1. NORTH AMERICA (3) ──
  {
    slug: 'usa',
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
    currency: 'USD',
    region: 'north-america',
    ports: 'Los Angeles, Long Beach, Savannah, NY/NJ, Houston',
    seaTransitDays: '14–18 Days (West Coast) / 26–32 Days (East Coast)',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'ISF 10+2, CBP Entry, CPSC/CPC, FCC, FDA & Country of Origin ("Made in China") labeling',
    buyerFocus: 'Amazon FBA aggregators, retail chains, dollar-store distributors, and wholesale importers',
    marketSummary: 'Source directly from verified Yiwu factory stalls for US retail distribution, e-commerce private label, and multi-SKU container programs.',
    corridorAdvantage: 'Direct Matson/ZIM fast-boat sailings from Ningbo to LA/Long Beach in 14 days, FBA carton labeling at our Yiwu warehouse, and full ISF 10+2 customs documentation.'
  },
  {
    slug: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    currency: 'CAD',
    region: 'north-america',
    ports: 'Vancouver, Prince Rupert, Montreal, Toronto (Rail ICD)',
    seaTransitDays: '14–18 Days (West Coast) / 22–26 Days (Inland Rail)',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CBSA CARM Portal, Bilingual English/French packaging, CCPSA & CSA/cUL electrical compliance',
    buyerFocus: 'national retail chains, discount variety stores, e-commerce brands, and regional wholesalers',
    marketSummary: 'Consolidate high-margin consumer goods, seasonal decor, hardware, and housewares from Yiwu Futian Market for Canadian distribution.',
    corridorAdvantage: 'Priority trans-Pacific sailings from Ningbo to Vancouver and Prince Rupert with seamless CN/CPKC rail on-carriage to Toronto and Montreal.'
  },
  {
    slug: 'mexico',
    name: 'Mexico',
    code: 'MX',
    flag: '🇲🇽',
    currency: 'MXN',
    region: 'north-america',
    ports: 'Manzanillo, Lázaro Cárdenas, Veracruz',
    seaTransitDays: '16–22 Days (Pacific Ports)',
    airTransitDays: '4–6 Days Express / 8–12 Days Air DDP',
    customsCompliance: 'Padrón de Importadores, NOM (Normas Oficiales Mexicanas) Spanish commercial labeling & COFEPRIS',
    buyerFocus: 'commercial importers, Mercados mayoristas, department stores, and marketplace sellers',
    marketSummary: 'Import high-demand hardware, fashion accessories, toys, kitchenware, and seasonal merchandise directly from Yiwu factory booths to Mexico.',
    corridorAdvantage: 'Pre-shipment NOM Spanish sticker labeling in our Yiwu consolidation warehouse and direct ocean sailings from Ningbo to Manzanillo and Lázaro Cárdenas.'
  },

  // ── 2. LATIN AMERICA & CARIBBEAN (19) ──
  {
    slug: 'brazil',
    name: 'Brazil',
    code: 'BR',
    flag: '🇧🇷',
    currency: 'BRL',
    region: 'latin-america',
    ports: 'Santos, Paranaguá, Itajaí, Navegantes, Rio de Janeiro',
    seaTransitDays: '32–38 Days',
    airTransitDays: '5–7 Days Express / 10–14 Days Air Cargo',
    customsCompliance: 'RADAR / SISCOMEX registration, INMETRO certification, ANVISA & strict NCM HS code accuracy',
    buyerFocus: '25 de Março / Brás wholesalers, supermarket chains, retail distributors, and e-commerce importers',
    marketSummary: 'Build profitable container programs from Yiwu for Brazilian wholesale hubs, variety retail chains, and national marketplace sellers.',
    corridorAdvantage: 'Strict NCM classification verification, exact net/gross weight packing lists for SISCOMEX green-channel clearance, and direct sailings to Santos and Paranaguá.'
  },
  {
    slug: 'argentina',
    name: 'Argentina',
    code: 'AR',
    flag: '🇦🇷',
    currency: 'ARS',
    region: 'latin-america',
    ports: 'Buenos Aires, Zárate, Rosario',
    seaTransitDays: '34–40 Days',
    airTransitDays: '5–8 Days Express / 10–14 Days Air Cargo',
    customsCompliance: 'SEDI Import Statistical System, IRAM electrical/toy safety & AFIP commercial invoice precision',
    buyerFocus: 'Once commercial wholesalers, industrial hardware distributors, and retail chains',
    marketSummary: 'Source factory-direct hardware, home textiles, stationery, and daily necessities from Yiwu for Argentine wholesale distribution.',
    corridorAdvantage: 'Detailed proforma and commercial invoice structuring for SEDI bank settlements plus multi-booth container consolidation to Buenos Aires.'
  },
  {
    slug: 'chile',
    name: 'Chile',
    code: 'CL',
    flag: '🇨🇱',
    currency: 'CLP',
    region: 'latin-america',
    ports: 'San Antonio, Valparaíso, Iquique (ZOFRI)',
    seaTransitDays: '28–34 Days',
    airTransitDays: '5–7 Days Express / 9–12 Days Air Cargo',
    customsCompliance: 'China-Chile FTA Form F (0% tariff on most Yiwu goods), SEC electrical mark & Spanish rotulado',
    buyerFocus: 'Meiggs & ZOFRI importers, department stores, hardware chains, and retail distributors',
    marketSummary: 'Maximize margins under the China-Chile Free Trade Agreement by sourcing direct from 27,706 verified Yiwu stalls.',
    corridorAdvantage: 'Official China-Chile FTA Certificate of Origin (Form F) issuance for zero-duty entry plus direct Pacific container routing to San Antonio and Iquique.'
  },
  {
    slug: 'colombia',
    name: 'Colombia',
    code: 'CO',
    flag: '🇨🇴',
    currency: 'COP',
    region: 'latin-america',
    ports: 'Buenaventura, Cartagena, Barranquilla',
    seaTransitDays: '24–30 Days (Buenaventura)',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'DIAN SYGA declarations, INVIMA (cosmetics/food contact), RETIE/RETILAP & SIC Spanish labeling',
    buyerFocus: 'San Victorino & Hueco wholesale importers, chain stores, and national distributors',
    marketSummary: 'Import fashion jewelry, footwear, toys, kitchenware, and hardware directly from Yiwu factory showrooms into Colombia.',
    corridorAdvantage: 'Itemized DIAN-compliant packing lists with serial/model verification during our $149 pre-shipment inspection and fast Pacific routing to Buenaventura.'
  },
  {
    slug: 'peru',
    name: 'Peru',
    code: 'PE',
    flag: '🇵🇪',
    currency: 'PEN',
    region: 'latin-america',
    ports: 'Callao, Chancay Megaport, Paita',
    seaTransitDays: '22–28 Days (Chancay / Callao Direct)',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'China-Peru FTA Certificate of Origin (Form R), SUNAT DAM declaration & DIGESA toy/cosmetic permits',
    buyerFocus: 'Mesa Redonda & Gamarra importers, supermarket chains, and hardware distributors',
    marketSummary: 'Leverage the new Chancay-Callao direct maritime express corridor and China-Peru FTA to import Yiwu wholesale merchandise at factory gate prices.',
    corridorAdvantage: 'Official China-Peru FTA duty-relief documentation and ultra-fast direct vessel routing from Ningbo to Chancay and Callao.'
  },
  {
    slug: 'ecuador',
    name: 'Ecuador',
    code: 'EC',
    flag: '🇪🇨',
    currency: 'USD',
    region: 'latin-america',
    ports: 'Guayaquil (Posorja), Manta',
    seaTransitDays: '25–30 Days',
    airTransitDays: '5–7 Days Express / 9–12 Days Air Cargo',
    customsCompliance: 'China-Ecuador FTA Certificate of Origin, ECUAPASS, INEN technical regulations & ARCSA',
    buyerFocus: 'Bahía de Guayaquil wholesalers, USD-denominated retail chains, and hardware importers',
    marketSummary: 'Take advantage of USD settlement and the China-Ecuador FTA to consolidate high-turnover Yiwu categories into Guayaquil.',
    corridorAdvantage: 'China-Ecuador FTA preferential tariff paperwork, INEN labeling checks in Yiwu, and direct sailings to Guayaquil.'
  },
  {
    slug: 'venezuela',
    name: 'Venezuela',
    code: 'VE',
    flag: '🇻🇪',
    currency: 'VES',
    region: 'latin-america',
    ports: 'Puerto Cabello, La Guaira, Maracaibo',
    seaTransitDays: '30–36 Days',
    airTransitDays: '6–9 Days Express / 10–15 Days Air Cargo',
    customsCompliance: 'SENIAT SIDUNEA, SENCAMER quality registry & sanitized Spanish commercial invoices',
    buyerFocus: 'general merchandise importers, auto parts distributors, hardware wholesalers, and supermarket groups',
    marketSummary: 'Source affordable daily necessities, auto parts, hardware tools, and home appliances from Yiwu for Venezuelan distribution.',
    corridorAdvantage: 'Consolidated LCL and 40\'HQ door-to-port container execution from Ningbo to Puerto Cabello and La Guaira with complete SENIAT documentation.'
  },
  {
    slug: 'bolivia',
    name: 'Bolivia',
    code: 'BO',
    flag: '🇧🇴',
    currency: 'BOB',
    region: 'latin-america',
    ports: 'Arica & Iquique (Chile Transit) → La Paz, Santa Cruz, Cochabamba',
    seaTransitDays: '30–36 Days (Port + Andean Transit)',
    airTransitDays: '5–8 Days Express / 10–14 Days Air Cargo',
    customsCompliance: 'Aduana Nacional SUMA portal, IBMETRO & transit manifest via Arica/Iquique',
    buyerFocus: 'Eloy Salmón & La Ramada importers, hardware traders, and household goods distributors',
    marketSummary: 'Import high-demand electronics accessories, textiles, hardware, and toys from Yiwu via Arica/Iquique transit corridors into Bolivia.',
    corridorAdvantage: 'Reinforced export carton strapping for high-altitude overland transit from Chilean ports directly to Santa Cruz and La Paz.'
  },
  {
    slug: 'paraguay',
    name: 'Paraguay',
    code: 'PY',
    flag: '🇵🇾',
    currency: 'PYG',
    region: 'latin-america',
    ports: 'Asunción, Villeta, Ciudad del Este (via Paranaguá / Buenos Aires River Barge)',
    seaTransitDays: '36–44 Days (Ocean + Paraná River Barge)',
    airTransitDays: '5–8 Days Express / 10–14 Days Air Cargo',
    customsCompliance: 'DNA SOFIA customs system, INTN technical compliance & Mercosur River Transit manifests',
    buyerFocus: 'Ciudad del Este re-export trading houses, Asunción retail chains, and general wholesalers',
    marketSummary: 'Supply Ciudad del Este and Asunción commercial hubs with direct-from-Yiwu consumer electronics accessories, bags, sunglasses, and toys.',
    corridorAdvantage: 'Through-Bill-of-Lading multimodal routing from Ningbo via Paranaguá/Montevideo barge directly to Asunción and Villeta terminals.'
  },
  {
    slug: 'uruguay',
    name: 'Uruguay',
    code: 'UY',
    flag: '🇺🇾',
    currency: 'UYU',
    region: 'latin-america',
    ports: 'Port of Montevideo (Free Port Hub)',
    seaTransitDays: '32–38 Days',
    airTransitDays: '5–7 Days Express / 9–13 Days Air Cargo',
    customsCompliance: 'DNA LUCIA customs platform, LATU toy/food-contact certification & URSEA energy labeling',
    buyerFocus: 'Montevideo Free Zone distributors, retail chains, bazaar wholesalers, and importers',
    marketSummary: 'Source quality-verified home goods, seasonal decorations, pet supplies, and hardware from Yiwu to Port of Montevideo.',
    corridorAdvantage: 'LATU food-contact and toy compliance verification prior to shipment plus direct South Atlantic container sailings to Montevideo.'
  },
  {
    slug: 'panama',
    name: 'Panama',
    code: 'PA',
    flag: '🇵🇦',
    currency: 'USD',
    region: 'latin-america',
    ports: 'Colón Free Zone (Manzanillo / Cristóbal), Balboa, Rodman',
    seaTransitDays: '20–25 Days (Direct Panama Canal Call)',
    airTransitDays: '4–6 Days Express / 8–11 Days Air Cargo',
    customsCompliance: 'Zona Libre de Colón (ZLC) DMX electronic movement declaration & ANA SIGA customs',
    buyerFocus: 'Colón Free Zone re-exporters, regional showroom wholesalers, and department store chains',
    marketSummary: 'Power your Colón Free Zone (ZLC) regional re-export business with direct factory pricing from 27,706 Yiwu wholesale booths.',
    corridorAdvantage: 'Direct main-line vessel calls from Ningbo to Balboa and Colón in 20–25 days with customized multi-language carton markings for regional re-export.'
  },
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    code: 'CR',
    flag: '🇨🇷',
    currency: 'CRC',
    region: 'latin-america',
    ports: 'Puerto Caldera (Pacific), Puerto Moín / Limón (Caribbean)',
    seaTransitDays: '22–28 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'China-Costa Rica FTA Certificate of Origin (Form L), TICA Customs & Ministerio de Salud registration',
    buyerFocus: 'San José retail chains, supermarket groups, hardware importers, and hospitality suppliers',
    marketSummary: 'Import duty-advantaged general merchandise, hotel textiles, and kitchenware from Yiwu under the China-Costa Rica FTA.',
    corridorAdvantage: 'China-Costa Rica FTA Form L tariff exemption paperwork and direct Pacific container shipping from Ningbo to Puerto Caldera.'
  },
  {
    slug: 'guatemala',
    name: 'Guatemala',
    code: 'GT',
    flag: '🇬🇹',
    currency: 'GTQ',
    region: 'latin-america',
    ports: 'Puerto Quetzal (Pacific), Santo Tomás de Castilla',
    seaTransitDays: '22–27 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'SAT DUCA-D customs declaration, Spanish retail labeling & sanitary permits',
    buyerFocus: 'Zona 1 & Zona 4 Guatemala City wholesalers, Central American distributors, and retail chains',
    marketSummary: 'Consolidate high-volume footwear, bags, toys, hardware, and daily necessities from Yiwu for Guatemalan and Central American distribution.',
    corridorAdvantage: 'High-density mixed-SKU container loading in Yiwu with fast 22-day Pacific transit from Ningbo to Puerto Quetzal.'
  },
  {
    slug: 'dominican-republic',
    name: 'Dominican Republic',
    code: 'DO',
    flag: '🇩🇴',
    currency: 'DOP',
    region: 'latin-america',
    ports: 'Caucedo, Río Haina, Santo Domingo',
    seaTransitDays: '26–32 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'DGA SIGA Single Window, DIGEMAPS & INDOCAL quality standards',
    buyerFocus: 'Avenida Duarte & Villa Consuelo importers, ferreterías, and resort supply distributors',
    marketSummary: 'Source hardware, hotel linens, fashion accessories, and party supplies directly from Yiwu stalls for the Dominican Republic.',
    corridorAdvantage: 'Complete DGA commercial documentation and weekly container departures from Ningbo to DP World Caucedo and Río Haina.'
  },
  {
    slug: 'honduras',
    name: 'Honduras',
    code: 'HN',
    flag: '🇭🇳',
    currency: 'HNL',
    region: 'latin-america',
    ports: 'Puerto Cortés, San Lorenzo',
    seaTransitDays: '24–30 Days',
    airTransitDays: '5–7 Days Express / 9–13 Days Air Cargo',
    customsCompliance: 'Aduanas SARAH / DUCA declaration & ARSA sanitary registration',
    buyerFocus: 'San Pedro Sula & Tegucigalpa wholesale distributors, hardware stores, and variety retailers',
    marketSummary: 'Import affordable household plastics, tools, textiles, and stationery from Yiwu directly to San Lorenzo and Puerto Cortés.',
    corridorAdvantage: 'Multi-booth LCL and FCL consolidation in Yiwu with itemized DUCA-ready packing lists for smooth Honduran customs clearance.'
  },
  {
    slug: 'el-salvador',
    name: 'El Salvador',
    code: 'SV',
    flag: '🇸🇻',
    currency: 'USD',
    region: 'latin-america',
    ports: 'Acajutla, La Unión',
    seaTransitDays: '22–28 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'DGA SIDUNEA World, DUCA declaration & USD commercial invoicing',
    buyerFocus: 'San Salvador commercial importers, dollar-store chains, and regional wholesalers',
    marketSummary: 'Use El Salvador’s USD economy to source $1–$5 price-point daily necessities, toys, and fashion accessories direct from Yiwu.',
    corridorAdvantage: 'Direct Pacific container routing from Ningbo to Port of Acajutla with pre-verified carton counts and USD commercial invoices.'
  },
  {
    slug: 'nicaragua',
    name: 'Nicaragua',
    code: 'NI',
    flag: '🇳🇮',
    currency: 'NIO',
    region: 'latin-america',
    ports: 'Corinto (Pacific)',
    seaTransitDays: '23–29 Days',
    airTransitDays: '5–7 Days Express / 9–13 Days Air Cargo',
    customsCompliance: 'China-Nicaragua FTA Certificate of Origin, DGA SIDUNEA & MINSA permits',
    buyerFocus: 'Mercado Oriental wholesale merchants, hardware importers, and general distributors',
    marketSummary: 'Capitalize on the China-Nicaragua Free Trade Agreement to import Yiwu hardware, textiles, footwear, and daily goods duty-free.',
    corridorAdvantage: 'Official China-Nicaragua FTA Certificate of Origin preparation and direct Pacific shipping from Ningbo to Port of Corinto.'
  },
  {
    slug: 'jamaica',
    name: 'Jamaica',
    code: 'JM',
    flag: '🇯🇲',
    currency: 'JMD',
    region: 'latin-america',
    ports: 'Kingston Container Terminal, Montego Bay',
    seaTransitDays: '25–30 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'JCA ASYCUDA World, BSJ (Bureau of Standards Jamaica) English labeling & CARICOM invoicing',
    buyerFocus: 'Downtown Kingston wholesale haberdasheries, hardware merchants, and hospitality buyers',
    marketSummary: 'Source retail-ready household goods, hair accessories, bags, footwear, and resort supplies from Yiwu to Kingston.',
    corridorAdvantage: 'Direct transshipment hub calls at Kingston Container Terminal and 100% English retail packaging verification in Yiwu.'
  },
  {
    slug: 'trinidad-and-tobago',
    name: 'Trinidad and Tobago',
    code: 'TT',
    flag: '🇹🇹',
    currency: 'TTD',
    region: 'latin-america',
    ports: 'Port of Spain, Point Lisas',
    seaTransitDays: '28–34 Days',
    airTransitDays: '5–7 Days Express / 9–13 Days Air Cargo',
    customsCompliance: 'TTBizLink / ASYCUDA World, TTBS compulsory electrical/toy standards & C82 declaration',
    buyerFocus: 'Caribbean regional distributors, retail chains, hardware importers, and festival suppliers',
    marketSummary: 'Import festival crafts, party supplies, home goods, and hardware from Yiwu to Port of Spain and Point Lisas.',
    corridorAdvantage: 'TTBS voltage/plug compliance checks (115V/60Hz) during our $99 stall audit and consolidated container shipping to Port of Spain.'
  },

  // ── 3. EUROPE (EU, UK & NON-EU) (26) ──
  {
    slug: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    currency: 'GBP',
    region: 'europe',
    ports: 'Felixstowe, Southampton, London Gateway, Liverpool',
    seaTransitDays: '26–32 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air & Rail DDP',
    customsCompliance: 'UKCA / CE Marking, HMRC CDS, EORI, UK Plug BS1363 & UK Toy Safety / REACH regulations',
    buyerFocus: 'Amazon UK sellers, Manchester/Birmingham wholesale cash-and-carries, pound-line chains, and retail brands',
    marketSummary: 'Source high-margin retail merchandise, seasonal gifts, pet supplies, and homeware direct from Yiwu booths for UK distribution.',
    corridorAdvantage: 'BS1363 fused plug & UKCA/CE technical file verification in Yiwu plus direct deep-sea sailings to Felixstowe and Southampton.'
  },
  {
    slug: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    currency: 'EUR',
    region: 'europe',
    ports: 'Hamburg, Bremerhaven, Wilhelmshaven, Duisburg (Yiwu-Europe Rail Hub)',
    seaTransitDays: '26–32 Days (Sea) / 18–22 Days (Yiwu-Duisburg Rail)',
    airTransitDays: '3–5 Days Express / 7–9 Days Air DDP',
    customsCompliance: 'CE, REACH, RoHS, LFGB (Food Contact), LUCID (VerpackG Packaging Act), WEEE & EORI',
    buyerFocus: 'EU marketplace aggregators, supermarket non-food buyers, hardware distributors, and promotional gift agencies',
    marketSummary: 'Combine Yiwu factory-gate pricing with strict German LFGB/CE/REACH quality control via sea to Hamburg or direct Yiwu-Duisburg freight train.',
    corridorAdvantage: 'Direct Yiwu-Madrid/Duisburg block train departures (18–22 days) alongside Ningbo-Hamburg ocean freight and strict AQL 2.5 pre-shipment inspections.'
  },
  {
    slug: 'france',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    currency: 'EUR',
    region: 'europe',
    ports: 'Le Havre (HAROPA), Marseille-Fos, Dunkirk',
    seaTransitDays: '25–31 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, DGCCRF, Triman Recycling Logo (Info-Tri), Loi Toubon French labeling & EORI',
    buyerFocus: 'Aubervilliers wholesale importers, retail chains, boutique distributors, and e-commerce brands',
    marketSummary: 'Import fashion jewelry, hair accessories, home textiles, and bazaar goods from Yiwu directly to Le Havre and Marseille-Fos.',
    corridorAdvantage: 'Triman recycling symbol & French packaging artwork checks during production plus direct ocean and rail consolidation to France.'
  },
  {
    slug: 'spain',
    name: 'Spain',
    code: 'ES',
    flag: '🇪🇸',
    currency: 'EUR',
    region: 'europe',
    ports: 'Valencia, Barcelona, Algeciras, Madrid (Yiwu-Madrid Rail Terminal)',
    seaTransitDays: '23–28 Days (Med Sea) / 21–24 Days (Yiwu-Madrid Rail)',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, EN71, ROHS, AEAT DUA & Spanish consumer labeling',
    buyerFocus: 'Cobo Calleja (Madrid) & Badalona (Barcelona) wholesalers, bazar chains, and retail importers',
    marketSummary: 'Connect directly with Yiwu Futian Market stalls via the world-famous Yiwu–Madrid railway or fast Mediterranean sea freight to Valencia and Barcelona.',
    corridorAdvantage: 'Home of the direct Yiwu-to-Madrid freight railway plus 23-day Mediterranean express container vessels to Valencia and Barcelona.'
  },
  {
    slug: 'italy',
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    currency: 'EUR',
    region: 'europe',
    ports: 'Genoa, La Spezia, Trieste, Gioia Tauro, Naples',
    seaTransitDays: '22–28 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, MOCA (Food Contact), CONAI environmental packaging labeling & ADM customs',
    buyerFocus: 'Prato/Rome/Milan wholesale centers, home decor chains, fashion accessory distributors, and hardware importers',
    marketSummary: 'Source fashion jewelry, bags, artificial flowers, Christmas decor, and household goods from Yiwu to Genoa, La Spezia, and Naples.',
    corridorAdvantage: 'MOCA food-contact & CONAI alphanumeric material coding verification in Yiwu with fast Mediterranean transit to Italian ports.'
  },
  {
    slug: 'netherlands',
    name: 'Netherlands',
    code: 'NL',
    flag: '🇳🇱',
    currency: 'EUR',
    region: 'europe',
    ports: 'Port of Rotterdam (Europe’s #1 Gateway), Amsterdam',
    seaTransitDays: '25–30 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP (Schiphol)',
    customsCompliance: 'Article 23 VAT Deferment, CE, REACH, RoHS, NVWA & EU EORI',
    buyerFocus: 'pan-European 3PL distributors, discount retail chains, promotional product wholesalers, and e-commerce brands',
    marketSummary: 'Use Port of Rotterdam and Article 23 VAT deferment to distribute Yiwu wholesale merchandise across the entire European Union.',
    corridorAdvantage: 'Direct mainline container vessels from Ningbo to Rotterdam with EU-wide customs fiscal representation and LCL/FCL consolidation.'
  },
  {
    slug: 'poland',
    name: 'Poland',
    code: 'PL',
    flag: '🇵🇱',
    currency: 'PLN',
    region: 'europe',
    ports: 'Gdańsk (Baltic Hub), Gdynia, Małaszewicze / Warsaw (Yiwu Rail Gateway)',
    seaTransitDays: '28–33 Days (Sea) / 14–18 Days (Yiwu-Małaszewicze Rail)',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, RoHS, BDO packaging registry, Polish user manuals & EU EORI',
    buyerFocus: 'Wólka Kosowska wholesale importers, Allegro e-commerce sellers, and Central European distributors',
    marketSummary: 'Import directly from Yiwu via the 14–18 day Yiwu-Małaszewicze express rail corridor or Baltic Hub Gdańsk container ships.',
    corridorAdvantage: 'Fastest overland rail entry into the EU via Małaszewicze plus deep-water container calls at Gdańsk Baltic Hub.'
  },
  {
    slug: 'belgium',
    name: 'Belgium',
    code: 'BE',
    flag: '🇧🇪',
    currency: 'EUR',
    region: 'europe',
    ports: 'Port of Antwerp-Bruges, Liège (Bierset Air & Rail Hub)',
    seaTransitDays: '25–30 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP',
    customsCompliance: 'CE, REACH, RoHS, Fost Plus packaging rules, FR/NL/DE labeling & EU EORI',
    buyerFocus: 'Benelux retail chains, promotional merchandise importers, and European distribution centers',
    marketSummary: 'Consolidate multi-booth Yiwu orders into Antwerp-Bruges or Liège for fast Benelux and Western European distribution.',
    corridorAdvantage: 'Direct Ningbo-Antwerp ocean loops and dedicated e-commerce air/rail charter links into Liège.'
  },
  {
    slug: 'sweden',
    name: 'Sweden',
    code: 'SE',
    flag: '🇸🇪',
    currency: 'SEK',
    region: 'europe',
    ports: 'Gothenburg, Stockholm Norvik, Helsingborg',
    seaTransitDays: '28–34 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, Kemikalieinspektionen (KEMI) chemical rules, RoHS & Tullverket EORI',
    buyerFocus: 'Nordic retail chains, home & outdoor lifestyle brands, and Scandinavian wholesalers',
    marketSummary: 'Source Scandinavian-grade outdoor gear, home storage, pet accessories, and seasonal lighting from Yiwu to Port of Gothenburg.',
    corridorAdvantage: 'Strict phthalate/REACH compliance screening during our Yiwu stall audits and seamless sea routing to Gothenburg.'
  },
  {
    slug: 'austria',
    name: 'Austria',
    code: 'AT',
    flag: '🇦🇹',
    currency: 'EUR',
    region: 'europe',
    ports: 'Vienna Freudenau / Enns Container Terminal (via Koper, Trieste or Hamburg)',
    seaTransitDays: '24–30 Days (via Adriatic Port of Koper/Trieste + Rail)',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, LFGB, EAG-VO (WEEE), ARA packaging compliance & German labeling',
    buyerFocus: 'DACH retail chains, alpine sports/outdoor distributors, and Central European trading houses',
    marketSummary: 'Route Yiwu containers via Adriatic ports (Koper/Trieste) with 48-hour block train connection straight into Vienna and Enns.',
    corridorAdvantage: 'Adriatic shortcut via Koper/Trieste cuts 5–7 days off Northern European sea routing into Austria.'
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    code: 'CH',
    flag: '🇨🇭',
    currency: 'CHF',
    region: 'europe',
    ports: 'Port of Switzerland (Basel Rhine Terminal via Rotterdam/Antwerp/Genoa)',
    seaTransitDays: '27–32 Days (Ocean + Rhine Barge/Rail to Basel)',
    airTransitDays: '3–5 Days Express / 6–9 Days Air Cargo (Zurich/Geneva)',
    customsCompliance: 'BAZG Passar customs system, China-Switzerland FTA Certificate of Origin, Type J plug & ORRChem',
    buyerFocus: 'Swiss retail chains, promotional gift agencies, specialty stores, and boutique importers',
    marketSummary: 'Leverage the bilateral China-Switzerland Free Trade Agreement for zero-duty imports of verified Yiwu consumer goods.',
    corridorAdvantage: 'Official China-Switzerland FTA Certificate of Origin issuance for duty-free entry plus multimodal delivery to Basel.'
  },
  {
    slug: 'portugal',
    name: 'Portugal',
    code: 'PT',
    flag: '🇵🇹',
    currency: 'EUR',
    region: 'europe',
    ports: 'Sines, Leixões (Porto), Lisbon',
    seaTransitDays: '24–29 Days',
    airTransitDays: '4–6 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, ASAE safety rules, Sociedade Ponto Verde packaging & Portuguese labeling',
    buyerFocus: 'Varziela (Vila do Conde) & Cabo Ruivo wholesale centers, retail chains, and Lusophone re-exporters',
    marketSummary: 'Supply Portuguese wholesale parks and retail stores directly from Yiwu factory booths via Port of Sines and Leixões.',
    corridorAdvantage: 'Direct Asia-Europe deep-water vessel calls at Sines and Leixões with consolidated LCL/FCL forwarding from Yiwu.'
  },
  {
    slug: 'greece',
    name: 'Greece',
    code: 'GR',
    flag: '🇬🇷',
    currency: 'EUR',
    region: 'europe',
    ports: 'Piraeus (COSCO Mediterranean Megahub), Thessaloniki',
    seaTransitDays: '20–25 Days (Direct Ningbo–Piraeus Express)',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, ICISnet Greek customs, Greek user labeling & EU EORI',
    buyerFocus: 'Athens & Thessaloniki wholesale importers, island tourist/souvenir chains, and Balkan distributors',
    marketSummary: 'Piraeus is one of the fastest European sea gateways from Ningbo (20–25 days)—ideal for Greek retail, tourism, and Balkan distribution.',
    corridorAdvantage: 'Ultra-fast 20-day COSCO mainline sailings from Ningbo to Piraeus with high-mix tourist, beachwear, and home goods consolidation.'
  },
  {
    slug: 'czechia',
    name: 'Czechia',
    code: 'CZ',
    flag: '🇨🇿',
    currency: 'CZK',
    region: 'europe',
    ports: 'Prague / Česká Třebová Rail Hub (via Hamburg, Koper or Yiwu-Prague Train)',
    seaTransitDays: '26–32 Days (Sea+Rail) / 16–20 Days (Yiwu-Prague Direct Rail)',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, ČOI (Czech Trade Inspection) Czech labeling, EKO-KOM & EU EORI',
    buyerFocus: 'SAPA Prague wholesale distributors, Central European e-commerce stores, and promotional product agencies',
    marketSummary: 'Use direct Yiwu-Prague rail container services or Hamburg/Koper intermodal links to supply Czech wholesale and e-commerce channels.',
    corridorAdvantage: 'Direct Yiwu-to-Prague block train service and door-to-warehouse LCL/FCL delivery across Bohemia and Moravia.'
  },
  {
    slug: 'romania',
    name: 'Romania',
    code: 'RO',
    flag: '🇷🇴',
    currency: 'RON',
    region: 'europe',
    ports: 'Constanța (Black Sea Megaport)',
    seaTransitDays: '23–28 Days',
    airTransitDays: '4–6 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, ANPC Romanian consumer labeling, RO e-Transport ITU code & EU EORI',
    buyerFocus: 'Dragonul Roșu (Bucharest) wholesale importers, eMAG marketplace sellers, and Southeastern European distributors',
    marketSummary: 'Source directly from Yiwu for Bucharest wholesale centers and eMAG sellers with direct container shipping to Port of Constanța.',
    corridorAdvantage: 'Direct Black Sea container loops from Ningbo to Constanța plus itemized packing data for RO e-Transport compliance.'
  },
  {
    slug: 'hungary',
    name: 'Hungary',
    code: 'HU',
    flag: '🇭🇺',
    currency: 'HUF',
    region: 'europe',
    ports: 'Budapest BILK / Csepel Terminal (via Koper/Rijeka or Yiwu-Budapest Rail)',
    seaTransitDays: '24–29 Days (via Koper/Rijeka) / 16–20 Days (Yiwu-Budapest Rail)',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP (Budapest Cargo City)',
    customsCompliance: 'CE, REACH, NKFH Hungarian labeling, MOHU EPR packaging & EKÁER transit registration',
    buyerFocus: 'Józsefvárosi / China Mart Budapest wholesalers, Central European retail chains, and e-commerce importers',
    marketSummary: 'Budapest is Central Europe’s premier air, rail, and Adriatic-sea logistics hub for Yiwu wholesale merchandise.',
    corridorAdvantage: 'Fast Adriatic routing via Koper/Rijeka to Budapest BILK terminal alongside dedicated Yiwu-Budapest rail and air cargo.'
  },
  {
    slug: 'denmark',
    name: 'Denmark',
    code: 'DK',
    flag: '🇩🇰',
    currency: 'DKK',
    region: 'europe',
    ports: 'Aarhus, Copenhagen Malmö Port, Fredericia',
    seaTransitDays: '27–33 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, Sikkerhedsstyrelsen electrical/toy safety, Danish/Nordic labeling & EU EORI',
    buyerFocus: 'Danish variety retail chains, home design distributors, and Nordic lifestyle importers',
    marketSummary: 'Import clean-design household storage, party supplies, crafts, and stationery from Yiwu factory showrooms to Aarhus and Copenhagen.',
    corridorAdvantage: 'Pre-shipment quality and REACH compliance verification in Yiwu with direct container calls at Port of Aarhus.'
  },
  {
    slug: 'norway',
    name: 'Norway',
    code: 'NO',
    flag: '🇳🇴',
    currency: 'NOK',
    region: 'europe',
    ports: 'Oslo, Moss, Bergen, Kristiansand',
    seaTransitDays: '28–34 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air Cargo',
    customsCompliance: 'Tolletaten TVINN/Digitoll customs, CE/EEA compliance, DSB electrical rules & Miljødirektoratet',
    buyerFocus: 'Norwegian outdoor/sports retailers, discount variety chains, and commercial importers',
    marketSummary: 'Source cold-weather accessories, outdoor camping gear, hardware tools, and home goods from Yiwu to Port of Oslo.',
    corridorAdvantage: 'Complete EEA/Norwegian Digitoll electronic customs documentation and feeder connections via Rotterdam/Hamburg to Oslo.'
  },
  {
    slug: 'finland',
    name: 'Finland',
    code: 'FI',
    flag: '🇫🇮',
    currency: 'EUR',
    region: 'europe',
    ports: 'Vuosaari (Helsinki), Kotka, Hamina, Rauma',
    seaTransitDays: '29–35 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, Tukes safety regulations, Bilingual Finnish/Swedish labeling & Tulli EORI',
    buyerFocus: 'Finnish department stores, hypermarket non-food buyers, hardware chains, and outdoor distributors',
    marketSummary: 'Consolidate verified Yiwu hardware, sports gear, winter knitwear, and household goods to Helsinki and Kotka.',
    corridorAdvantage: 'Tukes electrical and toy safety verification in Yiwu plus reliable Baltic feeder connections to Helsinki Vuosaari.'
  },
  {
    slug: 'ireland',
    name: 'Ireland',
    code: 'IE',
    flag: '🇮🇪',
    currency: 'EUR',
    region: 'europe',
    ports: 'Dublin Port, Cork (Ringaskiddy), Shannon Foynes',
    seaTransitDays: '27–33 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE Marking, REACH, CCPC safety rules, UK/Irish Type G BS1363 3-pin plug & Revenue AIS EORI',
    buyerFocus: 'Irish euro-store chains, pharmacy/beauty distributors, hardware groups, and giftware wholesalers',
    marketSummary: 'Import EU-compliant merchandise equipped with Irish Type G 3-pin plugs and English packaging directly from Yiwu to Dublin and Cork.',
    corridorAdvantage: 'Solves Ireland’s unique EU-CE + Type G 3-pin plug requirement with on-site Yiwu factory verification and direct Dublin shipping.'
  },
  {
    slug: 'slovakia',
    name: 'Slovakia',
    code: 'SK',
    flag: '🇸🇰',
    currency: 'EUR',
    region: 'europe',
    ports: 'Bratislava / Dunajská Streda Metrans Hub (via Koper, Trieste or Hamburg)',
    seaTransitDays: '24–30 Days (via Koper + Metrans Rail)',
    airTransitDays: '3–5 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, SOI (Slovak Trade Inspection) Slovak manuals & EU EORI',
    buyerFocus: 'Central European retail distributors, automotive aftermarket wholesalers, and e-commerce sellers',
    marketSummary: 'Route Yiwu containers via Koper and the Dunajská Streda rail terminal for rapid delivery across Slovakia.',
    corridorAdvantage: 'Daily Metrans block trains from Port of Koper straight into Dunajská Streda and Bratislava.'
  },
  {
    slug: 'bulgaria',
    name: 'Bulgaria',
    code: 'BG',
    flag: '🇧🇬',
    currency: 'BGN',
    region: 'europe',
    ports: 'Varna, Burgas (Black Sea), Sofia (via Piraeus/Thessaloniki)',
    seaTransitDays: '22–27 Days',
    airTransitDays: '4–6 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, KZP Bulgarian consumer labeling & EU EORI',
    buyerFocus: 'Iliyantsi (Sofia) & Dimitrovgrad wholesale traders, Balkan retail chains, and marketplace sellers',
    marketSummary: 'Supply Bulgarian wholesale bazaars and retail networks via Black Sea ports (Varna/Burgas) or Piraeus overland transit.',
    corridorAdvantage: 'Fast 22-day transit via Piraeus/Thessaloniki trucking or direct Black Sea feeder vessels to Varna and Burgas.'
  },
  {
    slug: 'croatia',
    name: 'Croatia',
    code: 'HR',
    flag: '🇭🇷',
    currency: 'EUR',
    region: 'europe',
    ports: 'Rijeka (Adriatic Gateway), Ploče, Split',
    seaTransitDays: '21–26 Days (Direct Adriatic Route)',
    airTransitDays: '4–6 Days Express / 7–10 Days Air DDP',
    customsCompliance: 'CE, REACH, DIRH State Inspectorate Croatian labeling & EU EORI',
    buyerFocus: 'Adriatic hospitality/tourism suppliers, Zagreb wholesale distributors, and retail chains',
    marketSummary: 'Port of Rijeka offers a 21–26 day deep-sea shortcut from Ningbo for Croatian hospitality, beachwear, souvenir, and retail importers.',
    corridorAdvantage: 'Direct Ningbo–Rijeka ocean service cuts transit time by a full week compared to North Sea ports.'
  },
  {
    slug: 'serbia',
    name: 'Serbia',
    code: 'RS',
    flag: '🇷🇸',
    currency: 'RSD',
    region: 'europe',
    ports: 'Belgrade Intermodal Terminal (via Piraeus, Rijeka or Bar)',
    seaTransitDays: '23–28 Days (via Piraeus / Rijeka + Rail/Truck)',
    airTransitDays: '4–6 Days Express / 7–10 Days Air Cargo',
    customsCompliance: 'China-Serbia FTA Certificate of Origin (Duty-Free access), Serbian AAA (3A) Conformity Mark & Serbian labeling',
    buyerFocus: 'New Belgrade wholesale importers, Balkan retail chains, hardware distributors, and industrial buyers',
    marketSummary: 'Maximize margin under the new China-Serbia Free Trade Agreement by sourcing directly from verified Yiwu manufacturers.',
    corridorAdvantage: 'Official China-Serbia FTA Certificate of Origin for preferential zero-tariff clearance plus fast Piraeus-to-Belgrade rail transit.'
  },
  {
    slug: 'ukraine',
    name: 'Ukraine',
    code: 'UA',
    flag: '🇺🇦',
    currency: 'UAH',
    region: 'europe',
    ports: 'Odesa, Chornomorsk, Pivdennyi (or via Constanța / Gdańsk EU Transit)',
    seaTransitDays: '26–34 Days (via Black Sea or Constanța/Gdańsk Intermodal)',
    airTransitDays: '5–8 Days Express / 9–14 Days Air+Truck via Warsaw/Rzeszów',
    customsCompliance: 'Ukrainian Technical Regulations (UA TR Mark), EUR/China origin certificates & Держпродспоживслужба labeling',
    buyerFocus: '7th Kilometer (Odesa), Barabashovo (Kharkiv) & Kyiv wholesale distributors, hardware chains, and retail networks',
    marketSummary: 'Source resilient power appliances, hardware tools, daily necessities, apparel, and footwear from Yiwu via Black Sea or Constanța/Gdańsk transit.',
    corridorAdvantage: 'Flexible routing via Odesa/Chornomorsk or bonded EU transit through Constanța and Gdańsk directly to Kyiv and Lviv.'
  },
  {
    slug: 'russia',
    name: 'Russia',
    code: 'RU',
    flag: '🇷🇺',
    currency: 'RUB',
    region: 'europe',
    ports: 'Vladivostok, Vostochny, St. Petersburg, Novorossiysk, Moscow (Rail/Truck)',
    seaTransitDays: '7–12 Days (Vladivostok Sea) / 14–20 Days (Yiwu-Moscow Rail/Truck)',
    airTransitDays: '3–6 Days Express / 7–12 Days Air & Fast Auto Cargo',
    customsCompliance: 'EAC Declaration / Certificate of Conformity, Chestny ZNAK (Честный ЗНАК) DataMatrix labeling & Russian GTD',
    buyerFocus: 'Sadovod & Tyoply Stan (Moscow) wholesalers, Wildberries & Ozon marketplace sellers, and federal retail chains',
    marketSummary: 'Power Wildberries, Ozon, and wholesale distribution across Russia with direct Yiwu factory sourcing and Chestny ZNAK pre-labeling.',
    corridorAdvantage: 'Chestny ZNAK DataMatrix barcode application at our Yiwu warehouse plus direct rail, fast auto-trucking, and Vladivostok sea corridors.'
  },

  // ── 4. MIDDLE EAST & GCC (13) ──
  {
    slug: 'uae',
    name: 'United Arab Emirates',
    code: 'AE',
    flag: '🇦🇪',
    currency: 'AED',
    region: 'middle-east',
    ports: 'Jebel Ali (Dubai), Khalifa Port (Abu Dhabi), Sharjah',
    seaTransitDays: '14–18 Days',
    airTransitDays: '3–4 Days Express / 5–8 Days Air DDP',
    customsCompliance: 'MOIAT ECAS / EQM Certificate of Conformity, Dubai Municipality Montaji (cosmetics/food contact) & Arabic/English labeling',
    buyerFocus: 'Deira / Murshid Bazaar & Dragon Mart Dubai traders, GCC retail chains, and MENA/East Africa re-exporters',
    marketSummary: 'Supply Deira wholesale markets, Dragon Mart showrooms, and GCC retail chains directly from 27,706 verified Yiwu stalls.',
    corridorAdvantage: 'Fast 14–18 day direct sailings from Ningbo to Jebel Ali with full MOIAT ECAS conformity and Chamber of Commerce legalized invoices.'
  },
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    code: 'SA',
    flag: '🇸🇦',
    currency: 'SAR',
    region: 'middle-east',
    ports: 'Jeddah Islamic Port, King Abdulaziz Port (Dammam), Riyadh Dry Port',
    seaTransitDays: '16–22 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP',
    customsCompliance: 'SABER Platform (PCoC & SCoC), SASO Technical Regulations, SFDA, FASAH & mandatory "Made in China" engraving/printing',
    buyerFocus: 'Al-Batha (Riyadh) & Al-Balad (Jeddah) wholesale importers, 5-Riyal variety chains, and Vision 2030 commercial contractors',
    marketSummary: 'Import SABER/SASO-compliant hardware, household goods, perfumes/cosmetic packaging, and textiles from Yiwu to Jeddah, Dammam, and Riyadh.',
    corridorAdvantage: 'Pre-shipment SABER PCoC/SCoC inspection coordination (Intertek/SGS/TÜV) and strict non-removable Country of Origin marking verification in Yiwu.'
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    code: 'QA',
    flag: '🇶🇦',
    currency: 'QAR',
    region: 'middle-east',
    ports: 'Hamad Port (Doha)',
    seaTransitDays: '16–20 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP',
    customsCompliance: 'Al Nadeeb Single Window, QS / GSO Gulf Conformity Mark (G-Mark), Certificate of Origin & legalized commercial invoice',
    buyerFocus: 'Doha hypermarkets, hospitality/hotel procurement teams, hardware distributors, and retail groups',
    marketSummary: 'Source hospitality linen, building hardware, home decor, and retail merchandise directly from Yiwu to Hamad Port.',
    corridorAdvantage: 'G-Mark & UK Type G 3-pin plug verification in Yiwu with direct container routing from Ningbo to Hamad Port.'
  },
  {
    slug: 'kuwait',
    name: 'Kuwait',
    code: 'KW',
    flag: '🇰🇼',
    currency: 'KWD',
    region: 'middle-east',
    ports: 'Shuwaikh Port, Shuaiba Port',
    seaTransitDays: '17–22 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP',
    customsCompliance: 'KUCAS / PAI (Public Authority for Industry) TIR Technical Inspection Report, G-Mark & Bayan Customs',
    buyerFocus: 'Mubarakiya & Shuwaikh wholesale importers, co-op society suppliers, and retail chains',
    marketSummary: 'Supply Kuwaiti cooperative societies (Jam’iyat), retail malls, and wholesale markets with direct Yiwu factory sourcing.',
    corridorAdvantage: 'On-site KUCAS/PAI pre-shipment inspection handling in Yiwu and direct Gulf container sailings to Shuwaikh Port.'
  },
  {
    slug: 'oman',
    name: 'Oman',
    code: 'OM',
    flag: '🇴🇲',
    currency: 'OMR',
    region: 'middle-east',
    ports: 'Sohar Port, Salalah, Sultan Qaboos (Muscat)',
    seaTransitDays: '14–19 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP',
    customsCompliance: 'Bayan Customs Single Window, DGSM / GSO G-Mark conformity & Arabic/English labeling',
    buyerFocus: 'Muscat & Sohar commercial importers, hypermarkets, hardware traders, and regional distributors',
    marketSummary: 'Consolidate high-turnover household goods, hardware tools, textiles, and gifts from Yiwu to Sohar and Salalah.',
    corridorAdvantage: 'Direct Indian Ocean/Gulf vessel calls at Salalah and Sohar in 14–19 days with complete Bayan customs packing documentation.'
  },
  {
    slug: 'bahrain',
    name: 'Bahrain',
    code: 'BH',
    flag: '🇧🇭',
    currency: 'BHD',
    region: 'middle-east',
    ports: 'Khalifa Bin Salman Port (KBSP)',
    seaTransitDays: '16–21 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP',
    customsCompliance: 'OFOQ Customs Portal, BTMD (Bahrain Testing & Metrology Directorate) G-Mark & energy efficiency labels',
    buyerFocus: 'Manama Souq & Dragon City Bahrain merchants, department stores, and GCC distributors',
    marketSummary: 'Source directly from Yiwu factory stalls for Dragon City Bahrain showrooms, retail chains, and hardware wholesalers.',
    corridorAdvantage: 'Fast LCL and FCL consolidation from Yiwu to Khalifa Bin Salman Port with full BTMD/GSO compliance checks.'
  },
  {
    slug: 'iraq',
    name: 'Iraq',
    code: 'IQ',
    flag: '🇮🇶',
    currency: 'IQD',
    region: 'middle-east',
    ports: 'Umm Qasr Port (Basra), Erbil / Baghdad (via Mersin or Jebel Ali Transit)',
    seaTransitDays: '18–24 Days (Umm Qasr)',
    airTransitDays: '4–6 Days Express / 7–11 Days Air Cargo',
    customsCompliance: 'COSQC Pre-Import Inspection & Certificate of Conformity (CoC) / ICIGI & Arabic labeling',
    buyerFocus: 'Shorja (Baghdad), Basra & Erbil wholesale traders, hardware importers, and home appliance distributors',
    marketSummary: 'Iraq is one of Yiwu’s top 10 export destinations—source hardware, kitchenware, blankets, toys, and electrical goods directly from Futian Market.',
    corridorAdvantage: 'Full COSQC CoC pre-shipment inspection at our Yiwu warehouse and high-cube 40\'HQ loading straight to Umm Qasr.'
  },
  {
    slug: 'jordan',
    name: 'Jordan',
    code: 'JO',
    flag: '🇯🇴',
    currency: 'JOD',
    region: 'middle-east',
    ports: 'Port of Aqaba',
    seaTransitDays: '18–23 Days',
    airTransitDays: '4–6 Days Express / 7–10 Days Air Cargo',
    customsCompliance: 'JSMO (Jordan Standards and Metrology Organization) Inspection, JFDA & ASYCUDA customs',
    buyerFocus: 'Amman Downtown & Zarqa Free Zone importers, variety stores, and Levant distributors',
    marketSummary: 'Import textiles, footwear, household necessities, and stationery from Yiwu directly into Port of Aqaba and Zarqa Free Zone.',
    corridorAdvantage: 'JSMO technical standard verification during our $99 stall audit and direct Red Sea sailings from Ningbo to Aqaba.'
  },
  {
    slug: 'israel',
    name: 'Israel',
    code: 'IL',
    flag: '🇮🇱',
    currency: 'ILS',
    region: 'middle-east',
    ports: 'Haifa (Bayport), Ashdod',
    seaTransitDays: '20–26 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air Cargo (Tel Aviv TLV)',
    customsCompliance: 'SII (Standards Institution of Israel) / EU-Aligned Import Reform ("What is Good for Europe is Good for Israel") & Hebrew labeling',
    buyerFocus: 'Tel Aviv / South Florentin wholesalers, retail chains, promotional agencies, and e-commerce brands',
    marketSummary: 'Leverage Israel’s EU-aligned import reform to source CE-certified Yiwu consumer goods, kitchenware, toys, and electronics to Haifa and Ashdod.',
    corridorAdvantage: 'CE/SII test report verification and Type H / EU plug inspections in Yiwu prior to container loading.'
  },
  {
    slug: 'turkey',
    name: 'Turkey',
    code: 'TR',
    flag: '🇹🇷',
    currency: 'TRY',
    region: 'middle-east',
    ports: 'Ambarlı (Istanbul), Mersin, İzmir (Alsancak), Gemlik',
    seaTransitDays: '21–26 Days',
    airTransitDays: '3–5 Days Express / 7–10 Days Air Cargo',
    customsCompliance: 'TAREKS (TSE Risk-Based Trade Control System), CE Marking, KKDIK (Turkish REACH) & ATR/Origin certificates',
    buyerFocus: 'Tahtakale / Eminönü & İSTOÇ (Istanbul) wholesale importers, Trendyol sellers, and industrial hardware buyers',
    marketSummary: 'Supply İSTOÇ Trade Center, Eminönü wholesalers, and Trendyol merchants with direct Yiwu factory components, hardware, toys, and accessories.',
    corridorAdvantage: 'Complete CE technical files and test reports required to pass Turkish TAREKS inspection without port demurrage at Ambarlı and Mersin.'
  },
  {
    slug: 'lebanon',
    name: 'Lebanon',
    code: 'LB',
    flag: '🇱🇧',
    currency: 'LBP',
    region: 'middle-east',
    ports: 'Port of Beirut, Port of Tripoli',
    seaTransitDays: '20–26 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'LIBNOR Mandatory Standards, IRI Pre-Shipment Conformity Certificate & NAJM customs',
    buyerFocus: 'Bourj Hammoud & Tripoli wholesale merchants, dollar-store chains, and solar/hardware importers',
    marketSummary: 'Consolidate mixed-SKU containers of household goods, lighting, hardware, and fashion accessories from Yiwu to Beirut and Tripoli.',
    corridorAdvantage: 'High-mix 20–50 booth consolidation in one 40\'HQ container with LIBNOR conformity documentation.'
  },
  {
    slug: 'yemen',
    name: 'Yemen',
    code: 'YE',
    flag: '🇾🇪',
    currency: 'YER',
    region: 'middle-east',
    ports: 'Aden, Hodeidah, Mukalla',
    seaTransitDays: '16–22 Days',
    airTransitDays: '5–8 Days Express / 9–14 Days Air Cargo',
    customsCompliance: 'YSMO (Yemen Standardization, Metrology and Quality Control) & Arabic commercial packing lists',
    buyerFocus: 'general trading houses, textile/garment wholesalers, hardware merchants, and solar/electrical importers',
    marketSummary: 'Source high-durability hardware, blankets, garments, footwear, and daily necessities from Yiwu directly to Aden and Mukalla.',
    corridorAdvantage: 'Heavy-duty export carton strapping, hydraulic bale compression for textiles, and direct Red Sea/Gulf of Aden shipping.'
  },
  {
    slug: 'syria',
    name: 'Syria',
    code: 'SY',
    flag: '🇸🇾',
    currency: 'SYP',
    region: 'middle-east',
    ports: 'Latakia, Tartus',
    seaTransitDays: '21–27 Days',
    airTransitDays: '5–8 Days Express / 9–14 Days Air Cargo',
    customsCompliance: 'SASMO conformity requirements, Syrian Customs import license & legalized Certificate of Origin',
    buyerFocus: 'Damascus (Hariqa) & Aleppo commercial wholesalers, industrial parts traders, and hardware distributors',
    marketSummary: 'Import hardware tools, sewing/textile accessories, kitchenware, and stationery from Yiwu to Latakia and Tartus.',
    corridorAdvantage: 'Bilingual Arabic/English commercial invoicing and multi-supplier consolidation at our Yiwu warehouse.'
  },

  // ── 5. AFRICA (NORTH, WEST, EAST & SOUTH) (21) ──
  {
    slug: 'nigeria',
    name: 'Nigeria',
    code: 'NG',
    flag: '🇳🇬',
    currency: 'NGN',
    region: 'africa',
    ports: 'Apapa (Lagos), Tin Can Island, Lekki Deep Sea Port, Onne (Port Harcourt)',
    seaTransitDays: '28–34 Days',
    airTransitDays: '4–6 Days Express / 7–11 Days Lagos Air Clearing',
    customsCompliance: 'SONCAP (Product Certificate & SONCAP Certificate), Form M, PAAR (CBN) & NAFDAC (cosmetics/food-contact)',
    buyerFocus: 'Balogun, Trade Fair & Idumota (Lagos), Ariaria (Aba) & Onitsha main market importers',
    marketSummary: 'Source directly from Yiwu factory stalls for Lagos, Onitsha, Aba, and Kano wholesale markets with full SONCAP & Form M coordination.',
    corridorAdvantage: 'Complete Form M & SONCAP inspection handling in Yiwu plus direct sailings from Ningbo to Lekki Deep Sea Port, Apapa, and Onne.'
  },
  {
    slug: 'south-africa',
    name: 'South Africa',
    code: 'ZA',
    flag: '🇿🇦',
    currency: 'ZAR',
    region: 'africa',
    ports: 'Durban, Cape Town, Coega (Gqeberha), Johannesburg (City Deep ICD)',
    seaTransitDays: '22–27 Days',
    airTransitDays: '4–6 Days Express / 7–10 Days Air Cargo (OR Tambo JNB)',
    customsCompliance: 'NRCS LOA (Letter of Authority for electricals), SABS standards, SARS SAD500 & SANS 164-1/2 plugs',
    buyerFocus: 'Crown Mines / Dragon City Johannesburg wholesalers, national retail chains, Takealot sellers, and SADC re-exporters',
    marketSummary: 'Consolidate verified Yiwu merchandise for Johannesburg, Durban, and Cape Town retail and wholesale distribution.',
    corridorAdvantage: 'NRCS LOA electrical test report verification in Yiwu and direct 22-day Indian Ocean container loops from Ningbo to Durban.'
  },
  {
    slug: 'egypt',
    name: 'Egypt',
    code: 'EG',
    flag: '🇪🇬',
    currency: 'EGP',
    region: 'africa',
    ports: 'Alexandria, Damietta, Port Said (East/West), Ain Sokhna',
    seaTransitDays: '18–23 Days',
    airTransitDays: '4–6 Days Express / 7–10 Days Air Cargo (Cairo CAI)',
    customsCompliance: 'ACI / Nafeza (ACID 19-digit number mandatory before shipping), GOEIC factory registration & CargoX blockchain upload',
    buyerFocus: 'El-Mosky, El-Nozha & Port Said wholesale importers, hardware distributors, and household goods traders',
    marketSummary: 'Import kitchenware, toys, bags, stationery, and hardware from GOEIC-verified factories and Yiwu booths into Ain Sokhna and Alexandria.',
    corridorAdvantage: 'Full Nafeza ACID verification and CargoX blockchain document upload from Yiwu plus 18-day Red Sea/Suez transit to Ain Sokhna and Port Said.'
  },
  {
    slug: 'kenya',
    name: 'Kenya',
    code: 'KE',
    flag: '🇰🇪',
    currency: 'KES',
    region: 'africa',
    ports: 'Port of Mombasa, Nairobi Inland Container Depot (SGR Rail ICD)',
    seaTransitDays: '18–23 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Eastleigh/JKIA Air DDP',
    customsCompliance: 'KEBS PVoC Certificate of Conformity (CoC via SGS/Intertek/CCIC), KRA iCMS & ISM import standardization mark',
    buyerFocus: 'Kamukunji, Nyamakima, Dubois Road & Eastleigh (Nairobi) wholesalers, supermarkets, and East African traders',
    marketSummary: 'Power Nairobi’s Kamukunji and Eastleigh wholesale corridors with direct Yiwu factory contacts and KEBS PVoC-inspected containers.',
    corridorAdvantage: 'On-site CCIC/SGS KEBS PVoC inspection at our Yiwu warehouse plus fast 18-day sailings from Ningbo to Mombasa with SGR rail to Nairobi ICD.'
  },
  {
    slug: 'ghana',
    name: 'Ghana',
    code: 'GH',
    flag: '🇬🇭',
    currency: 'GHS',
    region: 'africa',
    ports: 'Tema Port, Takoradi',
    seaTransitDays: '28–34 Days',
    airTransitDays: '4–6 Days Express / 7–11 Days Accra Air Cargo',
    customsCompliance: 'GSA (Ghana Standards Authority) EasyPASS CoC, ICUMS (UNI-PASS) customs & FDA Ghana registration',
    buyerFocus: 'Makola, Okaishie (Accra) & Kumasi Kejetia market importers, hardware stores, and West African traders',
    marketSummary: 'Import high-demand hardware, footwear, bags, cosmetics, and household plastics from Yiwu directly to Tema Port.',
    corridorAdvantage: 'GSA EasyPASS conformity certification in Yiwu and high-density mixed container loading for ICUMS clearance at Tema.'
  },
  {
    slug: 'morocco',
    name: 'Morocco',
    code: 'MA',
    flag: '🇲🇦',
    currency: 'MAD',
    region: 'africa',
    ports: 'Tanger Med, Casablanca, Agadir',
    seaTransitDays: '23–28 Days',
    airTransitDays: '4–6 Days Express / 7–10 Days Air Cargo (Casablanca CMN)',
    customsCompliance: 'MICEVN VoC (Certificate of Conformity via Applus/Bureau Veritas/TÜV), CMIM Mark & PortNet BADR',
    buyerFocus: 'Derb Omar & Garage Allal (Casablanca) wholesale importers, retail chains, and hardware distributors',
    marketSummary: 'Supply Casablanca’s Derb Omar and Moroccan retail chains with CMIM-marked appliances, textiles, hardware, and bazaar goods from Yiwu.',
    corridorAdvantage: 'CMIM mark labeling and VoC physical inspection in Yiwu before loading onto direct Ningbo–Tanger Med/Casablanca vessels.'
  },
  {
    slug: 'algeria',
    name: 'Algeria',
    code: 'DZ',
    flag: '🇩🇿',
    currency: 'DZD',
    region: 'africa',
    ports: 'Algiers, Oran, Bejaïa, Skikda, Djendjen',
    seaTransitDays: '24–29 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'Bank Domiciliation (Domiciliation Bancaire), Certificate of Conformity / Quality Control & ALGEX registration',
    buyerFocus: 'El Eulma (Sétif) & El Hamiz (Algiers) wholesale importers, hardware distributors, and industrial traders',
    marketSummary: 'Source directly from Yiwu for El Eulma (Dubai Mall of North Africa) and Algiers wholesale markets with full bank domiciliation paperwork.',
    corridorAdvantage: 'Exact proforma invoice and CCPIT Certificate of Origin preparation for Algerian bank domiciliation plus direct sailings to Algiers, Oran, and Bejaïa.'
  },
  {
    slug: 'tanzania',
    name: 'Tanzania',
    code: 'TZ',
    flag: '🇹🇿',
    currency: 'TZS',
    region: 'africa',
    ports: 'Port of Dar es Salaam, Zanzibar, Tanga',
    seaTransitDays: '19–24 Days',
    airTransitDays: '4–6 Days Express / 6–9 Days Kariakoo Air DDP',
    customsCompliance: 'TBS PVoC Certificate of Conformity (CCIC/SGS), TRA TANCIS & FCC anti-counterfeit compliance',
    buyerFocus: 'Kariakoo Market (Dar es Salaam) wholesale importers, hardware merchants, and DRC/Zambia/Malawi transit traders',
    marketSummary: 'Kariakoo in Dar es Salaam is East & Central Africa’s mega-bazaar—source directly from 27,706 Yiwu booths with TBS PVoC clearance.',
    corridorAdvantage: 'CCIC TBS PVoC inspection at our Yiwu warehouse and fast 19-day sailings from Ningbo to Dar es Salaam.'
  },
  {
    slug: 'ethiopia',
    name: 'Ethiopia',
    code: 'ET',
    flag: '🇪🇹',
    currency: 'ETB',
    region: 'africa',
    ports: 'Djibouti Port → Modjo Dry Port (Addis Ababa Rail/Truck Corridor)',
    seaTransitDays: '18–23 Days (Djibouti + Ethio-Djibouti Railway to Modjo)',
    airTransitDays: '3–5 Days Express / 5–8 Days Ethiopian Airlines Cargo (ADD)',
    customsCompliance: 'Ministry of Trade ECAA Pre-Shipment VoC, Franco-Valuta / LC bank permits & ESLSE Multimodal B/L',
    buyerFocus: 'Merkato (Addis Ababa—Africa’s largest open-air market) importers, footwear/garment traders, and hardware distributors',
    marketSummary: 'Supply Addis Ababa’s Merkato with direct Yiwu factory sourcing via Ethiopian Shipping Lines (ESLSE) multimodal containers to Modjo Dry Port.',
    corridorAdvantage: 'Seamless coordination with ESLSE nominated forwarders in Ningbo and ECAA VoC inspection in Yiwu.'
  },
  {
    slug: 'ivory-coast',
    name: 'Ivory Coast',
    code: 'CI',
    flag: '🇨🇮',
    currency: 'XOF',
    region: 'africa',
    ports: 'Port of Abidjan, San-Pédro',
    seaTransitDays: '28–34 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'GUCE BSC (Bordereau de Suivi de Cargaison) & VOC (Verification of Conformity) certificate',
    buyerFocus: 'Adjamé (Abidjan) wholesale importers, Francophone West African distributors, and supermarket chains',
    marketSummary: 'Consolidate household goods, cosmetics, hardware, and footwear from Yiwu to Port of Abidjan for UEMOA regional commerce.',
    corridorAdvantage: 'Complete BSC cargo tracking note and VOC inspection handling in Yiwu prior to Abidjan vessel departure.'
  },
  {
    slug: 'senegal',
    name: 'Senegal',
    code: 'SN',
    flag: '🇸🇳',
    currency: 'XOF',
    region: 'africa',
    ports: 'Port of Dakar',
    seaTransitDays: '27–33 Days',
    airTransitDays: '4–6 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'COSEC BESC Waiver, ASN Conformity Verification & GAINDE ORBUS Single Window',
    buyerFocus: 'Sandaga, Petersen & Touba wholesale merchants, hardware importers, and Sahel transit traders',
    marketSummary: 'Senegal’s trading diaspora has deep roots in Yiwu—access 27,706 unmasked booth numbers and consolidate containers straight to Dakar.',
    corridorAdvantage: 'BESC electronic waiver and ASN conformity preparation in Yiwu with high-cube container loading to Port of Dakar.'
  },
  {
    slug: 'cameroon',
    name: 'Cameroon',
    code: 'CM',
    flag: '🇨🇲',
    currency: 'XAF',
    region: 'africa',
    ports: 'Port of Douala, Kribi Deep Sea Port',
    seaTransitDays: '29–35 Days',
    airTransitDays: '4–7 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'ANOR PECAE Conformity Certificate (SGS/Intertek), CNCC BESC/ECTN & CAMCIS customs',
    buyerFocus: 'Marché Central & Mboppi (Douala) wholesalers, Yaoundé importers, and CEMAC regional distributors',
    marketSummary: 'Import hardware, kitchenware, textiles, and footwear from Yiwu directly to Kribi Deep Sea Port and Douala.',
    corridorAdvantage: 'ANOR PECAE inspection and BESC waiver issuance in Yiwu with direct West African container routing to Kribi and Douala.'
  },
  {
    slug: 'angola',
    name: 'Angola',
    code: 'AO',
    flag: '🇦🇴',
    currency: 'AOA',
    region: 'africa',
    ports: 'Port of Luanda, Lobito, Namibe',
    seaTransitDays: '27–33 Days',
    airTransitDays: '5–7 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'ARCCLA CNCA (Conselho Nacional de Carregadores) Loading Certificate, AGT ASYCUDA & DU Licenciamento',
    buyerFocus: 'São Paulo & Kikolo (Luanda) wholesale importers, construction hardware buyers, and supermarket groups',
    marketSummary: 'Source affordable daily necessities, hardware tools, auto parts, and footwear from Yiwu for Angolan wholesale distribution.',
    corridorAdvantage: 'Mandatory CNCA loading certificate processing in Ningbo/Yiwu and Portuguese commercial documentation for Luanda customs.'
  },
  {
    slug: 'mozambique',
    name: 'Mozambique',
    code: 'MZ',
    flag: '🇲🇿',
    currency: 'MZN',
    region: 'africa',
    ports: 'Maputo, Beira, Nacala',
    seaTransitDays: '21–26 Days',
    airTransitDays: '4–7 Days Express / 8–12 Days Air Cargo',
    customsCompliance: 'INNOQ CAP (Certificado de Avaliação da Conformidade via Intertek) & Janela Única Eletrónica (JUE)',
    buyerFocus: 'Baixa / Zimpeto (Maputo), Beira & Nampula wholesalers, hardware traders, and hinterland transit importers',
    marketSummary: 'Consolidate multi-booth Yiwu merchandise into Maputo, Beira, and Nacala with full INNOQ conformity certification.',
    corridorAdvantage: 'Pre-shipment INNOQ CAP inspection at our Yiwu warehouse and fast 21-day Indian Ocean transit to Maputo and Beira.'
  },
  {
    slug: 'congo',
    name: 'DR Congo',
    code: 'CD',
    flag: '🇨🇩',
    currency: 'CDF',
    region: 'africa',
    ports: 'Matadi, Boma (Atlantic) / Lubumbashi & Goma (via Dar es Salaam or Mombasa)',
    seaTransitDays: '28–35 Days (Matadi) / 22–28 Days (Dar es Salaam → Lubumbashi Corridor)',
    airTransitDays: '4–7 Days Express / 7–11 Days Kinshasa/Lubumbashi Air Cargo',
    customsCompliance: 'OGEFREM FERI / AD Certificate, OCC BIVAC Pre-Shipment Inspection & GUICE Single Window',
    buyerFocus: 'Grand Marché Zando (Kinshasa) & Lubumbashi wholesale importers, mining hardware suppliers, and general traders',
    marketSummary: 'Supply Kinshasa (via Matadi) and Katanga/Kivu (via Dar es Salaam/Mombasa) directly from 27,706 verified Yiwu stalls.',
    corridorAdvantage: 'Full OGEFREM FERI electronic certificate and OCC inspection handling in Yiwu for both Western (Matadi) and Eastern (Dar es Salaam) DRC corridors.'
  },
  {
    slug: 'uganda',
    name: 'Uganda',
    code: 'UG',
    flag: '🇺🇬',
    currency: 'UGX',
    region: 'africa',
    ports: 'Kampala ICD (via Mombasa or Dar es Salaam Northern/Central Corridor)',
    seaTransitDays: '22–27 Days (Port + Transit to Kampala)',
    airTransitDays: '3–5 Days Express / 6–9 Days Entebbe Air Cargo',
    customsCompliance: 'UNBS PVoC Certificate of Conformity, URA ASYCUDA World & EAC Single Customs Territory (SCT)',
    buyerFocus: 'Kikuubo & Owino (Kampala) wholesale merchants, hardware importers, and South Sudan/DRC transit traders',
    marketSummary: 'Kikuubo in Kampala is Uganda’s beating commercial heart—source directly from Yiwu factories with UNBS PVoC inspection included.',
    corridorAdvantage: 'UNBS PVoC inspection in Yiwu plus Through-Bill-of-Lading container delivery via Mombasa straight to Kampala ICD.'
  },
  {
    slug: 'zambia',
    name: 'Zambia',
    code: 'ZM',
    flag: '🇿🇲',
    currency: 'ZMW',
    region: 'africa',
    ports: 'Lusaka & Ndola Dry Ports (via Dar es Salaam TAZARA / Beira / Walvis Bay)',
    seaTransitDays: '24–30 Days (Port + Overland to Lusaka)',
    airTransitDays: '4–6 Days Express / 7–10 Days Lusaka Air Cargo',
    customsCompliance: 'ZABS (Zambia Bureau of Standards) PVoC, ZRA ASYCUDA World & China-Zambia zero-tariff corridor',
    buyerFocus: 'Kamwala & City Market (Lusaka) wholesalers, Copperbelt hardware suppliers, and retail distributors',
    marketSummary: 'Import hardware, auto parts, solar appliances, and garments from Yiwu via Dar es Salaam or Beira straight into Lusaka.',
    corridorAdvantage: 'Reinforced export packaging for overland trucking from Dar es Salaam/Beira to Lusaka and Copperbelt.'
  },
  {
    slug: 'zimbabwe',
    name: 'Zimbabwe',
    code: 'ZW',
    flag: '🇿🇼',
    currency: 'USD',
    region: 'africa',
    ports: 'Harare & Bulawayo Dry Ports (via Beira Port, Mozambique or Durban)',
    seaTransitDays: '23–28 Days (via Beira Corridor to Harare)',
    airTransitDays: '4–6 Days Express / 7–10 Days Harare Air Cargo',
    customsCompliance: 'MIC CBCA (Consignment Based Conformity Assessment via BV/SGS) & ZIMRA ASYCUDA World',
    buyerFocus: 'Mbare, Gulf Complex & Downtown Harare wholesale traders, hardware stores, and USD retail chains',
    marketSummary: 'Use the short Beira-to-Harare corridor to import CBCA-certified Yiwu hardware, kitchenware, footwear, and electronics.',
    corridorAdvantage: 'Pre-shipment CBCA conformity inspection at our Yiwu warehouse and fast 23-day routing via Beira Port to Harare.'
  },
  {
    slug: 'rwanda',
    name: 'Rwanda',
    code: 'RW',
    flag: '🇷🇼',
    currency: 'RWF',
    region: 'africa',
    ports: 'Kigali Logistics Platform / Masaka Dry Port (via Dar es Salaam or Mombasa)',
    seaTransitDays: '23–28 Days (via Dar es Salaam Central Corridor)',
    airTransitDays: '3–5 Days Express / 6–9 Days RwandAir Cargo (KGL)',
    customsCompliance: 'RSB (Rwanda Standards Board) IPoC Conformity, RRA Electronic Single Window & strict ban on non-biodegradable polybags',
    buyerFocus: 'Quartier Mateus & Nyabugogo (Kigali) wholesale importers, construction hardware stores, and Eastern DRC traders',
    marketSummary: 'Source eco-compliant, RSB-certified merchandise from Yiwu to Kigali via Dar es Salaam or direct RwandAir cargo.',
    corridorAdvantage: 'Replaces banned plastic polybags with eco-friendly paper/biodegradable inner packaging in Yiwu to pass Rwanda customs smoothly.'
  },
  {
    slug: 'tunisia',
    name: 'Tunisia',
    code: 'TN',
    flag: '🇹🇳',
    currency: 'TND',
    region: 'africa',
    ports: 'Radès (Tunis), Sfax, Bizerte, Sousse',
    seaTransitDays: '23–28 Days',
    airTransitDays: '4–6 Days Express / 8–11 Days Air Cargo',
    customsCompliance: 'TTN (Tunisie TradeNet), INNORPI Technical Control (AMC) & French/Arabic labeling',
    buyerFocus: 'Tunis & Sfax commercial wholesalers, industrial hardware importers, and retail distributors',
    marketSummary: 'Import hardware tools, sewing accessories, stationery, and household goods from Yiwu to Port of Radès and Sfax.',
    corridorAdvantage: 'Complete technical files for INNORPI import technical control (AMC) and direct Mediterranean routing to Radès.'
  },
  {
    slug: 'mauritius',
    name: 'Mauritius',
    code: 'MU',
    flag: '🇲🇺',
    currency: 'MUR',
    region: 'africa',
    ports: 'Port Louis',
    seaTransitDays: '16–21 Days',
    airTransitDays: '4–6 Days Express / 7–10 Days Air Cargo',
    customsCompliance: 'China-Mauritius FTA Certificate of Origin (Duty-Free access), MSB standards & MRA TradeNet',
    buyerFocus: 'Port Louis wholesale importers, island hypermarkets, resort hospitality buyers, and Indian Ocean distributors',
    marketSummary: 'Mauritius enjoys Africa’s first Free Trade Agreement with China—import Yiwu retail, hotel, and hardware goods to Port Louis at 0% duty.',
    corridorAdvantage: 'Official China-Mauritius FTA Certificate of Origin issuance and fast 16–21 day direct sailings from Ningbo to Port Louis.'
  },

  // ── 6. SOUTH & CENTRAL ASIA (9) ──
  {
    slug: 'india',
    name: 'India',
    code: 'IN',
    flag: '🇮🇳',
    currency: 'INR',
    region: 'south-central-asia',
    ports: 'Nhava Sheva (JNPT Mumbai), Mundra, Chennai, Kolkata, Cochin, Tughlakabad ICD (Delhi)',
    seaTransitDays: '12–16 Days (Chennai/Kolkata) / 15–19 Days (Nhava Sheva/Mundra)',
    airTransitDays: '3–5 Days Express / 6–9 Days Air Cargo',
    customsCompliance: 'BIS (ISI/CRS) Certification, ICEGATE Bill of Entry (BoE), EPR Plastic/E-Waste, Legal Metrology MRP stickers & Country of Origin',
    buyerFocus: 'Sadar Bazar & Karol Bagh (Delhi), Crawford Market & Masjid Bunder (Mumbai), Sowcarpet (Chennai) & Chickpet (Bengaluru) importers',
    marketSummary: 'Source directly from 27,706 verified Yiwu stalls for Indian wholesale markets, D2C brands, Flipkart/Amazon India sellers, and corporate gifting.',
    corridorAdvantage: 'BIS compliance screening, Legal Metrology MRP & Country of Origin labeling in Yiwu, and 12–18 day direct sailings from Ningbo to JNPT, Mundra, and Chennai.'
  },
  {
    slug: 'pakistan',
    name: 'Pakistan',
    code: 'PK',
    flag: '🇵🇰',
    currency: 'PKR',
    region: 'south-central-asia',
    ports: 'Karachi Port (KPT), Port Qasim, Gwadar, Sust / Khunjerab (CPEC Overland)',
    seaTransitDays: '14–18 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air Cargo',
    customsCompliance: 'China-Pakistan FTA (CPFTA Phase-II Form P), PSW (Pakistan Single Window), PSQCA & EIF bank registration',
    buyerFocus: 'Bolton Market & Jodia Bazar (Karachi), Shah Alam Market (Lahore) & Raja Bazar (Rawalpindi) wholesale importers',
    marketSummary: 'Leverage CPFTA Phase-II tariff concessions and direct Ningbo–Karachi sailings to import Yiwu stationery, hardware, jewelry, and textiles.',
    corridorAdvantage: 'Official China-Pakistan FTA Form P issuance for preferential duty rates plus 14-day sea transit to Karachi and Port Qasim.'
  },
  {
    slug: 'bangladesh',
    name: 'Bangladesh',
    code: 'BD',
    flag: '🇧🇩',
    currency: 'BDT',
    region: 'south-central-asia',
    ports: 'Chattogram (Chittagong), Mongla, Dhaka Pangaon ICD',
    seaTransitDays: '12–16 Days',
    airTransitDays: '3–5 Days Express / 5–8 Days Dhaka Air Cargo',
    customsCompliance: 'L/C (Letter of Credit) & LCA Form, BSTI mandatory certification,IRC & ASYCUDA World HS code accuracy',
    buyerFocus: 'Chawkbazar, Islampur & Gulistan (Dhaka) wholesale importers, garment accessory buyers, and hardware traders',
    marketSummary: 'Supply Dhaka’s Chawkbazar and Bangladesh’s garment/retail sectors with direct Yiwu zippers, trims, hardware, toys, and daily goods.',
    corridorAdvantage: '100% L/C-compliant commercial documents, exact HS code & net weight verification for Chattogram customs, and 12-day sea transit.'
  },
  {
    slug: 'sri-lanka',
    name: 'Sri Lanka',
    code: 'LK',
    flag: '🇱🇰',
    currency: 'LKR',
    region: 'south-central-asia',
    ports: 'Port of Colombo (South Asia Megahub)',
    seaTransitDays: '10–14 Days (Direct Mainline Call)',
    airTransitDays: '3–5 Days Express / 6–8 Days Air Cargo',
    customsCompliance: 'SLSI (Sri Lanka Standards Institution) Import Inspection, CUSDEC ASYCUDA & APTA Certificate of Origin',
    buyerFocus: 'Pettah (Colombo) wholesale merchants, tourist hospitality buyers, hardware stores, and supermarket chains',
    marketSummary: 'Port of Colombo sits directly on the main Ningbo shipping lane (10–14 days)—ideal for Pettah wholesalers and Sri Lankan retailers.',
    corridorAdvantage: 'Ultra-fast 10–14 day mainline vessel calls from Ningbo to Colombo plus APTA preferential tariff documentation.'
  },
  {
    slug: 'nepal',
    name: 'Nepal',
    code: 'NP',
    flag: '🇳🇵',
    currency: 'NPR',
    region: 'south-central-asia',
    ports: 'Birgunj Dry Port (via Kolkata/Haldia) & Rasuwagadhi–Kerung / Tatopani–Zhangmu Overland Borders',
    seaTransitDays: '18–24 Days (Sea via Kolkata + Rail to Birgunj) / 12–16 Days (Overland Truck via Kerung/Tatopani)',
    airTransitDays: '3–5 Days Express / 5–8 Days Kathmandu (KTM) Air Cargo',
    customsCompliance: 'Department of Customs Nepal ASYCUDA, NBSM standards, EXIM Code & CTD (Customs Transit Declaration via Kolkata)',
    buyerFocus: 'Mahabouddha, New Road & Kalimati (Kathmandu) wholesale importers, footwear/apparel traders, and retail distributors',
    marketSummary: 'Import directly from Yiwu to Kathmandu’s Mahabouddha wholesale hub via Kerung/Tatopani overland trucking or Kolkata–Birgunj rail.',
    corridorAdvantage: 'Direct Yiwu-to-Kathmandu overland border trucking (Kerung/Tatopani) or through-B/L rail containers via Kolkata to Birgunj Dry Port.'
  },
  {
    slug: 'kazakhstan',
    name: 'Kazakhstan',
    code: 'KZ',
    flag: '🇰🇿',
    currency: 'KZT',
    region: 'south-central-asia',
    ports: 'Khorgos / Altynkol Dry Port, Dostyk, Almaty & Astana (Direct Rail & TIR Truck)',
    seaTransitDays: '10–14 Days (Direct Yiwu–Khorgos–Almaty Rail & TIR Trucking)',
    airTransitDays: '3–5 Days Express / 5–8 Days Air Auto Cargo',
    customsCompliance: 'EAC Declaration / Certificate of Conformity (EAEU TR CU), ASTANA-1 customs & Russian/Kazakh labeling',
    buyerFocus: 'Barakholka (Almaty) & Dordoi/Central Asian wholesale traders, Kaspi.kz marketplace sellers, and retail chains',
    marketSummary: 'Almaty is only 10–14 days from Yiwu via the Khorgos railway/trucking gateway—ideal for Kaspi.kz sellers and Barakholka wholesalers.',
    corridorAdvantage: 'Direct Yiwu–Almaty/Astana container block trains and TIR bonded trucks through Khorgos with full EAC certification.'
  },
  {
    slug: 'uzbekistan',
    name: 'Uzbekistan',
    code: 'UZ',
    flag: '🇺🇿',
    currency: 'UZS',
    region: 'south-central-asia',
    ports: 'Tashkent (Chukursay Terminal via Khorgos Rail or Kashgar–Irkeshtam TIR Truck)',
    seaTransitDays: '12–16 Days (Direct Yiwu–Tashkent Rail & Multimodal TIR Truck)',
    airTransitDays: '3–5 Days Express / 6–9 Days Air Cargo',
    customsCompliance: 'Uzstandard Certificate of Conformity, Asl Belgisi digital marking (appliances) & E-Kontrakt customs registration',
    buyerFocus: 'Abu Sahiy, Bek Baraka & Chorsu (Tashkent) wholesale importers, Uzum Market sellers, and industrial buyers',
    marketSummary: 'Supply Tashkent’s Abu Sahiy wholesale hub and Uzum Market via the fast 12–16 day Yiwu–Tashkent railway and Kashgar trucking corridor.',
    corridorAdvantage: 'Dedicated Yiwu–Tashkent block train & Kashgar–Osh–Tashkent TIR trucking with E-Kontrakt export declaration alignment.'
  },
  {
    slug: 'azerbaijan',
    name: 'Azerbaijan',
    code: 'AZ',
    flag: '🇦🇿',
    currency: 'AZN',
    region: 'south-central-asia',
    ports: 'Port of Baku (Alat) via Trans-Caspian Middle Corridor (Khorgos–Aktau–Baku) or Piraeus–Poti',
    seaTransitDays: '15–20 Days (Middle Corridor Rail/Caspian Ferry) / 24–28 Days (via Poti)',
    airTransitDays: '3–5 Days Express / 6–9 Days Baku Silk Way Air Cargo',
    customsCompliance: 'AZS National Certificate of Conformity, State Customs Committee e-Declaration & Azerbaijani labeling',
    buyerFocus: 'Sadarak & Bina (Baku) shopping center wholesalers, hardware distributors, and Caucasus traders',
    marketSummary: 'Import directly from Yiwu to Baku’s Sadarak Trade Center via the Trans-Caspian Middle Corridor block train or Black Sea Poti route.',
    corridorAdvantage: 'Direct Yiwu–Baku Trans-Caspian Middle Corridor rail containers in 15–20 days plus itemized customs invoice support.'
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    code: 'GE',
    flag: '🇬🇪',
    currency: 'GEL',
    region: 'south-central-asia',
    ports: 'Poti, Batumi (Black Sea) & Tbilisi Dry Port',
    seaTransitDays: '22–27 Days (Black Sea) / 14–18 Days (Middle Corridor Rail)',
    airTransitDays: '3–5 Days Express / 6–9 Days Tbilisi Air Cargo',
    customsCompliance: 'China-Georgia FTA Certificate of Origin (0% tariff on 96% of goods), Revenue Service eCustoms & EU-aligned standards',
    buyerFocus: 'Lilo Mall (Tbilisi) wholesale importers, Caucasus re-exporters (Armenia/Azerbaijan), and hospitality buyers',
    marketSummary: 'Georgia has a comprehensive Free Trade Agreement with China—import Yiwu goods duty-free into Poti, Batumi, and Tbilisi.',
    corridorAdvantage: 'Official China-Georgia FTA Certificate of Origin for zero customs duty plus both Black Sea (Poti) and Middle Corridor rail options.'
  },

  // ── 7. EAST & SOUTHEAST ASIA (7) ──
  {
    slug: 'singapore',
    name: 'Singapore',
    code: 'SG',
    flag: '🇸🇬',
    currency: 'SGD',
    region: 'east-southeast-asia',
    ports: 'Port of Singapore (Tuas Mega Port / Pasir Panjang)',
    seaTransitDays: '5–8 Days (Direct Ningbo Express)',
    airTransitDays: '2–3 Days Express / 4–6 Days Air/Sea DDP',
    customsCompliance: 'TradeNet Permit, Enterprise Singapore CPS (Consumer Protection Safety Mark), HSA & CSFTA/RCEP Form',
    buyerFocus: 'Shopee/Lazada regional sellers, orchard/heartland retail chains, corporate gift agencies, and ASEAN trading houses',
    marketSummary: 'Enjoy 5–8 day sea transit from Ningbo to Singapore and door-to-door SGD DDP consolidation from Yiwu.',
    corridorAdvantage: 'Ultra-fast 5–8 day direct sailings from Ningbo to Singapore, CSFTA/RCEP zero-tariff support, and weekly LCL consolidation.'
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    code: 'MY',
    flag: '🇲🇾',
    currency: 'MYR',
    region: 'east-southeast-asia',
    ports: 'Port Klang (Northport/Westports), Tanjung Pelepas, Penang, Kuching, Kota Kinabalu',
    seaTransitDays: '6–10 Days',
    airTransitDays: '2–4 Days Express / 4–6 Days Air DDP',
    customsCompliance: 'ASEAN-China FTA Form E / RCEP, SIRIM-ST COA (electrical/comms), MC Toy Safety Mark & NPRA',
    buyerFocus: 'GM Klang & Kenanga (Kuala Lumpur) wholesalers, RM2 eco-shop chains, Shopee/TikTok Shop sellers, and East Malaysia importers',
    marketSummary: 'Supply GM Klang, RM2 variety chains, and Malaysian e-commerce stores directly from 27,706 Yiwu booths with 6–10 day sea transit.',
    corridorAdvantage: 'Official Form E / RCEP Certificate of Origin for 0% duty plus direct LCL/FCL to Port Klang, Penang, Sabah, and Sarawak.'
  },
  {
    slug: 'philippines',
    name: 'Philippines',
    code: 'PH',
    flag: '🇵🇭',
    currency: 'PHP',
    region: 'east-southeast-asia',
    ports: 'Manila (MICT / South Harbor), Batangas, Cebu, Davao, Subic',
    seaTransitDays: '5–9 Days',
    airTransitDays: '2–4 Days Express / 4–7 Days Air DDP',
    customsCompliance: 'ASEAN-China FTA Form E / RCEP, DTI BPS (PS Mark / ICC Sticker), FDA Philippines & BOC E2M',
    buyerFocus: 'Divisoria, Baclaran & Binondo (Manila) wholesale merchants, Shopee/Lazada/TikTok PH sellers, and provincial department stores',
    marketSummary: 'Import directly from Yiwu factory stalls to Manila, Cebu, and Davao in just 5–9 days with Form E duty relief or all-in Sea LCL consolidation.',
    corridorAdvantage: 'Fast 5–9 day Ningbo–Manila/Cebu sailings, Form E zero-tariff paperwork, and multi-booth warehouse consolidation in Yiwu.'
  },
  {
    slug: 'indonesia',
    name: 'Indonesia',
    code: 'ID',
    flag: '🇮🇩',
    currency: 'IDR',
    region: 'east-southeast-asia',
    ports: 'Tanjung Priok (Jakarta), Tanjung Perak (Surabaya), Belawan (Medan), Semarang',
    seaTransitDays: '8–12 Days',
    airTransitDays: '3–5 Days Express / 5–8 Days Air Cargo',
    customsCompliance: 'ASEAN-China FTA Form E, SNI (Standar Nasional Indonesia), Lartas PI / LS (Surveyor Report via KSO Sucofindo) & BPOM',
    buyerFocus: 'Tanah Abang, Asemka / Pasar Pagi & Mangga Dua (Jakarta) API-U importers, Surabaya wholesalers, and Tokopedia/Shopee brands',
    marketSummary: 'Navigate Indonesia’s SNI and Lartas import regulations smoothly by sourcing from verified Yiwu manufacturers with pre-shipment KSO surveyor readiness.',
    corridorAdvantage: 'Full support for KSO Sucofindo/Surveyor Indonesia pre-shipment inspection (LS), Form E tariff relief, and SNI labeling in Yiwu.'
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    code: 'TH',
    flag: '🇹🇭',
    currency: 'THB',
    region: 'east-southeast-asia',
    ports: 'Laem Chabang, Bangkok Port (Klong Toey), Lat Krabang ICD ( plus 5–7 Day Overland Truck)',
    seaTransitDays: '6–10 Days (Sea) / 5–7 Days (Yiwu–Kunming–Bangkok Overland Truck)',
    airTransitDays: '2–4 Days Express / 4–6 Days Air DDP',
    customsCompliance: 'ASEAN-China FTA Form E, TISI (Thai Industrial Standards Institute) Mark, Thai FDA & NSW customs',
    buyerFocus: 'Sampeng Lane, Pratunam & Bobae (Bangkok) wholesale importers, 20-Baht shop chains, and Thai social commerce brands',
    marketSummary: 'Connect Yiwu Futian Market directly to Bangkok’s Sampeng Lane and Laem Chabang via 5-day overland trucking or 6-day ocean freight.',
    corridorAdvantage: 'Choice of 5–7 day overland container trucking via Mohan/Chiang Khong or 6–10 day sea freight with Form E & TISI compliance.'
  },
  {
    slug: 'vietnam',
    name: 'Vietnam',
    code: 'VN',
    flag: '🇻🇳',
    currency: 'VND',
    region: 'east-southeast-asia',
    ports: 'Hải Phòng, Cát Lái (Ho Chi Minh City), Cái Mép, Đà Nẵng (plus Pingxiang–Hữu Nghị Overland)',
    seaTransitDays: '5–8 Days (Sea) / 3–5 Days (Yiwu–Pingxiang–Hanoi Overland Truck)',
    airTransitDays: '2–3 Days Express / 3–5 Days Overland Express',
    customsCompliance: 'ASEAN-China FTA Form E / RCEP, CR Conformity Mark (toys/helmets/electricals), VNACCS & Vietnamese sub-labels',
    buyerFocus: 'Đồng Xuân / Ninh Hiệp (Hanoi) & Chợ Lớn / An Đông (HCMC) wholesalers, garment/shoe factories, and Shopee VN sellers',
    marketSummary: 'Source raw garment/shoe accessories, hardware, household goods, and fashion items from Yiwu to Hanoi in 3–5 days by truck or HCMC in 6 days by sea.',
    corridorAdvantage: 'Direct 3–5 day bonded trucking via Pingxiang/Hữu Nghị to Hanoi plus Form E zero-duty sea containers to Hải Phòng and Cát Lái.'
  },
  {
    slug: 'south-korea',
    name: 'South Korea',
    code: 'KR',
    flag: '🇰🇷',
    currency: 'KRW',
    region: 'east-southeast-asia',
    ports: 'Busan, Incheon, Pyeongtaek',
    seaTransitDays: '2–4 Days (Ningbo–Busan/Incheon Ferry & Container Express)',
    airTransitDays: '1–3 Days Express / 3–4 Days Sea-Express',
    customsCompliance: 'KC (Korea Certification) Safety Mark, China-Korea FTA Certificate of Origin, UNI-PASS & mandatory Korean 원산지 ("Made in China") marking',
    buyerFocus: 'Namdaemun & Dongdaemun (Seoul) wholesalers, Coupang Rocket Growth sellers, Naver SmartStore brands, and Daiso-style retailers',
    marketSummary: 'South Korea is just 48–96 hours by vessel from Ningbo/Yiwu—ideal for Coupang sellers, Naver SmartStore brands, and Seoul wholesale distributors.',
    corridorAdvantage: 'Strict 원산지 (Country of Origin) item-by-item labeling & Coupang barcode prep at our Yiwu warehouse with 2–4 day sailings to Incheon and Busan.'
  },

  // ── 8. OCEANIA & PACIFIC (2) ──
  {
    slug: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    currency: 'AUD',
    region: 'oceania',
    ports: 'Melbourne, Sydney (Port Botany), Brisbane, Fremantle (Perth), Adelaide',
    seaTransitDays: '12–16 Days (Direct Ningbo–Sydney/Melbourne/Brisbane)',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP',
    customsCompliance: 'ChAFTA Certificate of Origin (0% tariff), RCM (Regulatory Compliance Mark), SAA Type I plug & DAFF BICON Biosecurity',
    buyerFocus: 'Australian retail chains, Amazon AU / eBay sellers, trade hardware wholesalers, and promotional product importers',
    marketSummary: 'Import duty-free under ChAFTA with fast 12–16 day direct container sailings from Ningbo to Sydney, Melbourne, Brisbane, and Fremantle.',
    corridorAdvantage: 'Official ChAFTA Certificate of Origin for 0% customs duty, BMSB fumigation & timber biosecurity declarations, and RCM/SAA plug verification in Yiwu.'
  },
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    flag: '🇳🇿',
    currency: 'NZD',
    region: 'oceania',
    ports: 'Auckland, Tauranga, Lyttelton (Christchurch), Wellington',
    seaTransitDays: '14–18 Days',
    airTransitDays: '3–5 Days Express / 6–9 Days Air DDP',
    customsCompliance: 'China-NZ FTA (NZCFTA) Certificate of Origin (0% duty), RCM / SDoC electrical safety & MPI Biosecurity Quarantine declaration',
    buyerFocus: 'Auckland & Christchurch wholesale distributors, variety retail chains, hardware merchants, and hospitality buyers',
    marketSummary: 'Leverage the upgraded China-New Zealand Free Trade Agreement for zero-duty entry of Yiwu consumer goods, hardware, and homeware into Auckland and Tauranga.',
    corridorAdvantage: 'Official China-NZ FTA Certificate of Origin, strict MPI container cleanliness & wooden product quarantine checks in Yiwu, and 14–18 day ocean transit.'
  }
];

export type ResolvedCountryRoute =
  | {
      type: 'country';
      slug: string;
      country: CountryCorridor;
      category: null;
    }
  | {
      type: 'country-category';
      slug: string;
      country: CountryCorridor;
      category: CategoryHub;
    };

const COUNTRY_BY_SLUG = new Map<string, CountryCorridor>(
  COUNTRIES.map((c) => [c.slug, c])
);

const COUNTRIES_SORTED_BY_SLUG_LENGTH = [...COUNTRIES].sort(
  (a, b) => b.slug.length - a.slug.length
);

const CATEGORY_SLUG_ALIASES: Record<string, string> = {
  'hardware-hand-power-tools': 'hardware-tools-locks',
};

export function getCountryBySlug(slug: string): CountryCorridor | undefined {
  return COUNTRY_BY_SLUG.get(slug);
}

export function resolveCountryCorridorRoute(slug: string): ResolvedCountryRoute | null {
  if (!slug) return null;

  const directCountry = COUNTRY_BY_SLUG.get(slug);
  if (directCountry) {
    return {
      type: 'country',
      slug: directCountry.slug,
      country: directCountry,
      category: null,
    };
  }

  for (const country of COUNTRIES_SORTED_BY_SLUG_LENGTH) {
    const prefix = `${country.slug}-`;
    if (!slug.startsWith(prefix)) continue;

    const rawCategorySlug = slug.slice(prefix.length);
    const resolvedCategorySlug = CATEGORY_SLUG_ALIASES[rawCategorySlug] || rawCategorySlug;
    const category = CATEGORY_HUBS.find((cat) => cat.slug === resolvedCategorySlug);

    if (category) {
      return {
        type: 'country-category',
        slug: `${country.slug}-${category.slug}`,
        country,
        category,
      };
    }
  }

  return null;
}

export function getAllCountryCorridorSlugs(): string[] {
  const slugs: string[] = [];
  for (const c of COUNTRIES) {
    slugs.push(c.slug);
    for (const cat of CATEGORY_HUBS) {
      slugs.push(`${c.slug}-${cat.slug}`);
    }
  }
  return slugs;
}

export interface SmartCountrySeoMeta {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  geoRegionCode: string;
  nativeSearchBanner: string;
  importerChannels: string;
  freightAndCustomsEdge: string;
  extraFaqs: { name: string; text: string }[];
}

export function getSmartCountrySeoMeta(
  country: CountryCorridor,
  category?: CategoryHub | null
): SmartCountrySeoMeta {
  const catName = category ? category.shortName : 'Wholesale Consumer Goods, Toys, Hardware & Apparel';
  const catLocation = category ? `${category.districtLabel} (${category.floor})` : 'Yiwu Futian Districts 1–5 & Huangyuan';

  // 1. Native-language & regional high-intent search hooks
  let nativeTerms: string[] = [];
  let nativeSearchBanner = '';
  let importerChannels = country.buyerFocus;
  let freightAndCustomsEdge = country.corridorAdvantage;

  if (country.slug === 'usa') {
    nativeTerms = [
      `Yiwu wholesale suppliers for USA Amazon FBA sellers`,
      `direct China factory contacts for US dollar stores`,
      `import ${catName} from Yiwu to Los Angeles Long Beach Savannah NY`,
      `DDP sea freight + UPS combined SFUC China to USA`,
      `Section 301 tariff HTS code optimization Yiwu`,
      `CPSC ASTM F963 FDA compliant Yiwu factories`,
      `bypass Alibaba trading companies direct Yiwu booth WeChat`
    ];
    nativeSearchBanner = `US Importer Search Intent: Amazon FBA Private Label · Dollar & Variety Store Chains · Sea+UPS Combined (SFUC $1.50–$1.80/kg DDP) · ISF 10+2 & CPSC/FDA Compliance`;
    importerChannels = `Amazon FBA / TikTok Shop / Walmart Marketplace brands, US regional dollar-store & variety chains, ASD Market Week wholesale distributors, and promotional product importers`;
    freightAndCustomsEdge = `For US shipments between 100 kg and 2,000 kg, Sea + UPS Combined (SFUC) from Yiwu to Los Angeles/Long Beach delivers door-to-door DDP in 22–28 days at $1.50–$1.80/kg with zero customs broker headaches. For 20'GP/40'HQ containers to LA, Savannah, NY/NJ, or Houston, we coordinate ISF 10+2 filings 48 hours pre-vessel and verify CPSC/ASTM/FDA lab reports during a $99 Stall Audit.`;
  } else if (country.slug === 'canada') {
    nativeTerms = [
      `Yiwu wholesale suppliers for Canada importers`,
      `import from Yiwu China to Vancouver Montreal Toronto`,
      `fournisseurs grossistes Yiwu Chine pour le Canada Québec`,
      `importer directement d'usine Yiwu sans intermédiaire`,
      `CBSA CARM customs clearance China to Canada LCL FCL`,
      `bilingual English French packaging OEM Yiwu factories`,
      `Amazon.ca FBA wholesale suppliers Yiwu direct contacts`
    ];
    nativeSearchBanner = `Canada (EN/FR) Importer Search Intent: Amazon.ca FBA & Canadian Retail Chains · Fournisseurs Grossistes Yiwu Chine (Québec/Montréal) · CBSA CARM & Bilingual Packaging`;
    importerChannels = `Amazon.ca FBA sellers, Toronto/Mississauga & Vancouver cash-and-carry wholesalers, Montreal/Quebec retail distributors, and Canadian dollar/variety stores`;
    freightAndCustomsEdge = `Direct 14–16 day Pacific container sailings from Ningbo to Port of Vancouver and Prince Rupert (with CN/CPKC rail to Toronto & Montreal ICDs). Our Yiwu field engineers verify Canadian Bilingual (English/French) Consumer Packaging & Labelling Act requirements and prepare commercial invoices formatted for CBSA CARM portal clearance.`;
  } else if (country.slug === 'brazil') {
    nativeTerms = [
      `fornecedores atacadistas de Yiwu China para o Brasil`,
      `importar direto da fábrica em Yiwu para Santos Paranaguá Itajaí`,
      `catálogo de fornecedores mercado Futian Yiwu WhatsApp WeChat`,
      `importação empresarial RADAR Siscomex INMETRO ANATEL China Brasil`,
      `consolidação de container compartilhado LCL FCL Yiwu Brasil`,
      `fornecedores 25 de Março Brás São Paulo direto da China`
    ];
    nativeSearchBanner = `Busca Comercial Brasil (PT-BR): Fornecedores Atacadistas de Yiwu China · Importação Direta RADAR Siscomex & INMETRO · Consolidação em Santos, Paranaguá e Itajaí`;
    importerChannels = `Importadores da Rua 25 de Março e Brás (São Paulo), vendedores Mercado Livre Platinum / Shopee / Amazon BR, redes de lojas de departamentos e distribuidores atacadistas`;
    freightAndCustomsEdge = `Consolide mercadorias de 5 a 30 boxes diferentes do Mercado Futian em um único container FCL/LCL com fatura comercial (Commercial Invoice) e Packing List 100% alinhados às exigências da Receita Federal (RADAR/Siscomex, NCM detalhado, INMETRO para brinquedos/panelas e ANATEL).`;
  } else if (country.region === 'latin-america' || country.slug === 'mexico') {
    nativeTerms = [
      `proveedores mayoristas de Yiwu China para ${country.name}`,
      `importar ${catName} directo de fábrica en Yiwu a ${country.name}`,
      `catálogo de fabricantes mercado Futian Yiwu contactos directos WeChat`,
      `agente de compras en Yiwu sin intermediarios para ${country.name}`,
      `envío marítimo contenedor consolidado LCL FCL Ningbo a ${country.ports}`,
      `cómo importar de Yiwu China a ${country.name} paso a paso`
    ];
    nativeSearchBanner = `Búsqueda Comercial LATAM (ES): Proveedores Mayoristas de Yiwu China para ${country.name} · Importación Directa sin Intermediarios · Consolidación a ${country.ports}`;
    importerChannels = `${country.buyerFocus}, vendedores de Mercado Libre / Falabella / Amazon, importadores mayoristas y cadenas de tiendas departamentales en ${country.name}`;
    freightAndCustomsEdge = `${country.corridorAdvantage} Nuestro equipo en Yiwu consolida pedidos de múltiples puestos de Futian en un solo embarque hacia ${country.ports}, verificando etiquetado en español, normas locales (${country.customsCompliance}) y certificados de origen para reducir aranceles.`;
  } else if (country.region === 'europe') {
    const euroExtra: string[] = [
      `Yiwu wholesale suppliers for ${country.name} importers`,
      `CE REACH RoHS certified Yiwu manufacturers ${country.name}`,
      `Yiwu to ${country.name} railway freight & Ningbo sea container`,
      `EORI customs clearance & DDP shipping China to ${country.name}`,
      `European discount retail & variety store suppliers Yiwu China`
    ];
    if (['germany', 'austria', 'switzerland'].includes(country.slug)) {
      euroExtra.push(
        `Yiwu Großhandel Lieferanten Direktimport nach ${country.name}`,
        `China Fabrik Kontakte Yiwu Markt ohne Zwischenhändler`,
        `CE REACH LFGB geprüfte Hersteller Yiwu China`
      );
      nativeSearchBanner = `DACH Direktimport (DE/EN): Yiwu Großhandel Lieferanten & Fabrik-Kontakte · CE / REACH / LFGB / LUCID Prüfung vor Ort · 18-Tage Yiwu-Duisburg Bahnfracht & Seefracht Hamburg`;
    } else if (['france', 'belgium'].includes(country.slug)) {
      euroExtra.push(
        `fournisseurs grossistes Yiwu Chine import direct ${country.name}`,
        `importer de Yiwu sans intermédiaire contacts usines WeChat`
      );
      nativeSearchBanner = `Import Direct Europe (FR/EN): Fournisseurs Grossistes Yiwu Chine · Vérification Normes CE / REACH / Triman · Fret Maritime Le Havre / Anvers & Train Yiwu`;
    } else if (country.slug === 'spain') {
      euroExtra.push(
        `proveedores mayoristas de Yiwu China en España`,
        `importar directo de fábrica en Yiwu a Valencia Barcelona Madrid`,
        `tren de carga Yiwu Madrid y transporte marítimo desde Ningbo`
      );
      nativeSearchBanner = `Importación Directa España (ES/EN): Proveedores Mayoristas de Yiwu China · Tren Yiwu–Madrid y Puerto de Valencia/Barcelona · Certificación CE y ROHS en Origen`;
    } else if (country.slug === 'italy') {
      euroExtra.push(
        `fornitori all'ingrosso Yiwu Cina importazione diretta Italia`,
        `importare dalla Cina Yiwu contatti diretti fabbriche`
      );
      nativeSearchBanner = `Importazione Diretta Italia (IT/EN): Fornitori all'Ingrosso Mercato di Yiwu · Verifica Certificati CE / REACH · Spedizioni Genova, La Spezia e Trieste`;
    } else if (country.slug === 'netherlands') {
      euroExtra.push(
        `Yiwu groothandel leveranciers China direct importeren Nederland`,
        `China fabriek contacten Yiwu markt Rotterdam Artikel 23 btw`
      );
      nativeSearchBanner = `Direct Importeren Nederland (NL/EN): Yiwu Groothandel Leveranciers · Haven van Rotterdam (Artikel 23 BTW-verlegging) · CE & REACH Inspectie`;
    } else if (country.slug === 'poland') {
      euroExtra.push(
        `hurtownia Yiwu Chiny bezpośredni importerzy Polska`,
        `import z Yiwu Chiny pociąg Małaszewicze port Gdańsk`
      );
      nativeSearchBanner = `Import Bezpośredni Polska (PL/EN): Hurtownia i Producenci Yiwu Chiny · Pociąg Yiwu–Małaszewicze (14–18 Dni) & Port Gdańsk · Certyfikaty CE/REACH`;
    } else {
      nativeSearchBanner = `Europe & UK Direct Sourcing Corridor: Verified CE / REACH / RoHS / UKCA Factory Compliance · Sea Freight to ${country.ports} & Yiwu–Europe Express Block Train`;
    }
    nativeTerms = euroExtra;
  } else {
    nativeTerms = [
      `import from Yiwu to ${country.name}`,
      `Yiwu wholesale market suppliers for ${country.name}`,
      `direct China factory WeChat mobile numbers ${country.name}`,
      `LCL FCL container shipping Ningbo to ${country.ports}`,
      `${country.customsCompliance} inspection Yiwu`
    ];
    nativeSearchBanner = `Global Direct Sourcing Corridor (${country.code}): 27,706 Verified Yiwu Booths · Sea & Air Consolidation to ${country.ports} · ${country.customsCompliance}`;
  }

  const seoTitle = category
    ? `Yiwu ${category.shortName} Wholesale Suppliers for ${country.name} (${country.flag}) — Direct Factory Prices & Shipping to ${country.ports.split(',')[0]} | Sino Trade Link`
    : `Import from Yiwu China to ${country.name} (${country.flag}) — 27,706 Verified Factory Stalls, Direct Contacts & Shipping to ${country.ports.split(',')[0]} | Sino Trade Link`;

  const seoDescription = category
    ? `Source ${category.shortName} directly from Yiwu ${catLocation} for ${country.name} (${country.ports}, ${country.seaTransitDays} sea transit). Verify ${country.customsCompliance} compliance, unlock +86 factory phones ($29), or book a $99 stall audit.`
    : `Bypass 15–30% trading markups when importing from Yiwu to ${country.name} (${country.ports}). Browse 27,706 verified stalls, verify ${country.customsCompliance} with a $99 physical booth audit, and ship LCL/FCL at 6% open-book commission.`;

  const baseKeywords = category
    ? [
        `Yiwu ${category.shortName} wholesale ${country.name}`,
        `import ${category.shortName} from China to ${country.name}`,
        `${category.shortName} manufacturer Yiwu ${country.name}`,
        `${category.districtLabel} ${category.floor} booths ${country.name}`,
        ...category.seoKeywords,
        ...nativeTerms
      ]
    : [
        `import from Yiwu to ${country.name}`,
        `Yiwu wholesale market directory ${country.name}`,
        `Yiwu sourcing agent alternative ${country.name}`,
        `China wholesale suppliers ${country.name}`,
        `shipping from Ningbo Yiwu to ${country.ports}`,
        `${country.customsCompliance} Yiwu factory audit`,
        ...nativeTerms
      ];

  const extraFaqs = [
    {
      name: `What are the top retail and wholesale buyer channels importing from Yiwu to ${country.name}?`,
      text: `Active importers on the Yiwu–${country.name} corridor include ${importerChannels}. By sourcing directly from Futian Districts 1–5 and Huangyuan stalls, ${country.name} buyers eliminate 15%–30% trading company markups.`
    },
    {
      name: `What is the most cost-effective freight and customs strategy from Yiwu to ${country.name} (${country.ports})?`,
      text: `${freightAndCustomsEdge} Ocean transit from Ningbo-Zhoushan takes ${country.seaTransitDays}, while Air Express / DDP sample consolidation ($149 for up to 5 stalls) arrives in ${country.airTransitDays}.`
    }
  ];

  return {
    seoTitle,
    seoDescription,
    seoKeywords: Array.from(new Set(baseKeywords)).join(', '),
    geoRegionCode: country.code,
    nativeSearchBanner,
    importerChannels,
    freightAndCustomsEdge,
    extraFaqs
  };
}

