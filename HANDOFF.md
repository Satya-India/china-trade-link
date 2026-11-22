# Sino Trade Link (`sinotradelink.com`) — Complete Project Handoff & Memory

**Last Updated:** October 8, 2026  
**Workspace Path:** `/Users/satya/Documents/Yiwu Website/china_markets_directory`  
**GitHub Repository:** `https://github.com/Satya-India/china-trade-link.git` (`main` branch)  
**Git Author Identity:** `Satya-India <satya.africa@gmail.com>`  
**Live Production URL:** [https://sinotradelink.com](https://sinotradelink.com)

---

## 1. Executive Summary & Strategic Positioning

Sino Trade Link has been architected as an **Outcome-Driven Sourcing & On-Ground Execution Platform** for China's physical wholesale markets (Yiwu Futian International Trade City Districts 1–5, District 6 Expansion, Production Materials Market, and Huangyuan Garment Market).

- **Public website:** Supplier directory, China sourcing information, and WhatsApp enquiries for supplier visits. Public paid service offers have been removed.

---

## 2. Cloud Infrastructure & Bindings

| Component | Identifier / Value | Notes |
|---|---|---|
| **Cloudflare Zone** | `29bc036d2d7b414a16bd077160516180` | `sinotradelink.com` & `www.sinotradelink.com` |
| **Cloudflare Worker** | `china-trade-link` | Latest live version: `d6859692-0678-4293-a0d4-3f0a6d069ca6` |
| **Cloudflare D1 Database** | `sinotradelink-db` (`ace4b44c-95cf-4172-98e8-d7a0e2c41a9d`) | Bound as `env.DB` in `wrangler.json` |
| **Cloudflare KV** | `SESSION` (`5a252a687f15464cbfd7df0199271ff7`) | Bound as `env.SESSION` in `wrangler.json` |
| **Operations Portal** | `https://sinotradelink.com/app` | Consolidated into Sino Trade AI (JWT + RBAC auth); legacy `/admin/*` 301 redirects |
| **Email Alerts** | `RESEND_API_KEY` | Configured on Worker via encrypted Cloudflare secret |
| **WhatsApp Ground Desk** | `+86 134 8272 5985` | Embedded globally & pre-filled per stall/service |

---

## 3. Database Schema & Dataset (`sinotradelink-db`)

1. **`suppliers` Table (27,706 rows):**
   - `shop_id` (Primary Key), `name`, `clean_name`, `company_name`, `contact_person`
   - `unmasked_direct_phone` (99.9% coverage), `wechat_id`, `email`
   - `district` (`1, 2, 3, 4, 5, 6, 7, 60`), `floor`, `gate`, `booth_no`, `full_location`
   - `sample_products`, `chinese_official_category`, `is_direct_factory`
2. **`inquiries` Table:**
   - Stores direct wholesale RFQs, quote requests (`/api/unlock-contact`), and general enquiries (`/api/inquiry`).

---

## 4. Payments Policy

- PayPal checkout, `/api/payment/complete`, and `/api/download-pack` have been permanently removed. All sourcing flows operate via free WhatsApp-first direct inquiries.

---

## 5. Sitemaps & SEO Architecture

- **Master Sitemap Index:** `https://sinotradelink.com/sitemap.xml`
- **Core Pages Sitemap:** `https://sinotradelink.com/sitemaps/pages.xml`
- **Paginated Supplier Sitemaps (27,706 URLs):**
  - `https://sinotradelink.com/sitemaps/suppliers-1.xml` (1–5,000)
  - `https://sinotradelink.com/sitemaps/suppliers-2.xml` (5,001–10,000)
  - `https://sinotradelink.com/sitemaps/suppliers-3.xml` (10,001–15,000)
  - `https://sinotradelink.com/sitemaps/suppliers-4.xml` (15,001–20,000)
  - `https://sinotradelink.com/sitemaps/suppliers-5.xml` (20,001–25,000)
  - `https://sinotradelink.com/sitemaps/suppliers-6.xml` (25,001–27,706)
- **Crawler Directives:** Configured in `public/robots.txt` and `public/llms.txt`.
- **Bing Webmaster API & IndexNow Bulk Indexing:**
  - **Bing Webmaster API Key:** Stored exclusively in environment variable `BING_API_KEY` (never committed to source)
  - **Bing Verification Tag (`msvalidate.01`):** `D323FDCD8670F30E79A66452C4D9A7FA` (in `src/layouts/Layout.astro`)
  - **IndexNow Key:** Stored in environment variable `INDEXNOW_KEY` (separate from Webmaster API key)
  - **Automated Sync Script:** `BING_API_KEY=... INDEXNOW_KEY=... npm run seo:bing` (`node scripts/bing-seo-sync.mjs`)

---

## 6. Interactive Sourcing Tools & Field Playbooks

1. **China Sourcing, OEM & Freight Playbook (`/sourcing-guide`):**
   - **Interactive Volumetric Weight, CBM & Landed Cost Calculator:** Pure vanilla JS calculator comparing actual gross weight vs. express volumetric weight (`÷5000`) and air/SFUC volumetric weight (`÷6000`), estimating total and per-unit landed costs across FedEx IE, Air + UPS (`AFUC`), Sea + UPS (`SFUC`), and Sea `LCL` across US West, Central, and East Coast regions.
   - **Incoterms & 7 Shipping Methods Deep Dive:** `EXW`, `FOB`, `DDP` (`DDP - EXW = Total Freight`) plus FCL container capacities (`20'GP = 28 CBM`, `40'GP = 58 CBM`, `40'HQ = 68 CBM`) and why ePacket/China Post fails B2B bulk imports.
   - **9-Step OEM & Private Label Manufacturing Roadmap:** 3D prototypes, Direct Factory Showrooms vs. trading stalls, Close-to-MOQ & Far-Below-MOQ negotiation scripts, NNN Agreements & `< $300` Provisional Patents, 3-stage budgeting with mold benchmarks, PP sample verification, compliance, Yiwu packaging/kitting, and pre-shipment QC.
   - **10-Point Verification & Import FAQ:** Native accessible `<details name="import-faq-accordion">` accordion.
2. **Expanded Yiwu Market Map (`/market-map`):**
   - **4 Niche Yiwu Wholesale Complexes:** International Production Materials Market, Yiwu Furniture Market, Yiwu Building & Material Market, and Zhezhong Timber Market.
   - **14 Specialized & Stock-Lot Streets:** Filterable street directory (including Meihu & Wuai Stock-Lot Streets with 80% off factory overruns, Changchun Ornament Street, Chouzhou Packaging Street, etc.) with 1-click **"Copy Chinese Address for Taxi"** buttons.
   - **How Business Works Inside Yiwu:** The 10-Booth Cluster Rule, Translator Reality, Ready-Stock vs. Custom Packaging, Cash RMB vs. T/T Wire Deposits, and Ningbo Port / Yixinou Eurasia Railway logistics.


---

## 7. Standard Build, Deploy & Git Workflow

```bash
# 1. Local Build Verification
cd "/Users/satya/Documents/Yiwu Website/china_markets_directory"
npm run build

# 2. Deploy to Cloudflare Worker (sinotradelink.com)
npx wrangler deploy

# 3. Stage & Commit Locally (Always use Satya-India author)
git add .
git commit -m "your commit message" --author="Satya-India <satya.africa@gmail.com>"

# 4. Push to GitHub (Only after explicit user approval)
git push origin main
```

