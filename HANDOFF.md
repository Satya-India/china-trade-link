# Sino Trade Link (`sinotradelink.com`) — Complete Project Handoff & Memory

**Last Updated:** October 8, 2026  
**Workspace Path:** `/Users/satya/Documents/Yiwu Website/china_markets_directory`  
**GitHub Repository:** `https://github.com/Satya-India/china-trade-link.git` (`main` branch)  
**Git Author Identity:** `Satya-India <satya.africa@gmail.com>`  
**Live Production URL:** [https://sinotradelink.com](https://sinotradelink.com)

---

## 1. Executive Summary & Strategic Positioning

Sino Trade Link has been architected as an **Outcome-Driven Sourcing & On-Ground Execution Platform** for China's physical wholesale markets (Yiwu Futian International Trade City Districts 1–5, District 6 Expansion, Production Materials Market, and Huangyuan Garment Market).

- **Data Moat + Service Flywheel:** Rather than selling raw contact lists alone, the platform uses **27,706 verified stalls** (with 99.9% unmasked Chinese mobile numbers and exact Gate/Floor/Booth navigation coordinates) and **$29 Niche Category Packs** as a low-friction tripwire to convert international buyers into high-margin **On-Ground Yiwu Execution Services ($99–$299)**:
  1. **Physical Stall Audit & 4K Video Walkthrough ($99)**
  2. **Booth Sample Pickup & Consolidation Box ($149)**
  3. **Comprehensive Factory & License Verification ($299)**

---

## 2. Cloud Infrastructure & Bindings

| Component | Identifier / Value | Notes |
|---|---|---|
| **Cloudflare Zone** | `29bc036d2d7b414a16bd077160516180` | `sinotradelink.com` & `www.sinotradelink.com` |
| **Cloudflare Worker** | `china-trade-link` | Latest live version: `d6859692-0678-4293-a0d4-3f0a6d069ca6` |
| **Cloudflare D1 Database** | `sinotradelink-db` (`ace4b44c-95cf-4172-98e8-d7a0e2c41a9d`) | Bound as `env.DB` in `wrangler.json` |
| **Cloudflare KV** | `SESSION` (`5a252a687f15464cbfd7df0199271ff7`) | Bound as `env.SESSION` in `wrangler.json` |
| **Admin CRM Dashboard** | `https://sinotradelink.com/admin/leads` | Password (`ADMIN_PASSWORD`): `SinoAdmin2026!` |
| **Admin CSV Export** | `https://sinotradelink.com/api/admin/export.csv` | Authenticated via `ADMIN_PASSWORD` |
| **Email Alerts** | `RESEND_API_KEY` | Configured on Worker via `src/lib/notifications.ts` |
| **WhatsApp Ground Desk** | `+86 134 8272 5985` | Embedded globally & pre-filled per stall/service |

---

## 3. Database Schema & Dataset (`sinotradelink-db`)

1. **`suppliers` Table (27,706 rows):**
   - `shop_id` (Primary Key), `name`, `clean_name`, `company_name`, `contact_person`
   - `unmasked_direct_phone` (99.9% coverage), `wechat_id`, `email`
   - `district` (`1, 2, 3, 4, 5, 6, 7, 60`), `floor`, `gate`, `booth_no`, `full_location`
   - `sample_products`, `chinese_official_category`, `is_direct_factory` (`10,141` licensed factories)
2. **`leads_unlocks` Table:**
   - Captures buyer email/WhatsApp when unlocking stall contacts (`/api/unlock-contact`) and logs completed PayPal transactions (`/api/payment/complete` with prefix `PAYPAL_ORDER:`).
3. **`inquiries` Table:**
   - Stores direct wholesale RFQs and on-demand concierge stall audit bookings (`/api/inquiry`).

---

## 4. PayPal Live Checkout & KYC Status

- **File:** `src/components/PayPalCheckoutModal.astro`
- **Live Client ID:** `BAA-U7WpNQZudJZbn-39Kd2E2Alw7toZtsb_8pRNtFgIpkZXRT2yUdps5-Eyk-N7a2cz0LF0E0R4SOYGgc` (App ID: `APP-5U77933118435081G`)
- **Critical Technical Rule:** The `<script is:inline define:vars={{ PAYPAL_CLIENT_ID }}>` block in `PayPalCheckoutModal.astro` is **not** transpiled by Vite/TypeScript. It must strictly remain 100% pure vanilla JavaScript (never add TypeScript type casts like `as HTMLElement`).
- **Current KYC Status (Oct 8, 2026):**
  - **IDfy KYC Onboarding:** Completed (`Verification Successful`).
  - **Compliance Sync Window:** PayPal India takes **2–24 hours** to review the IDfy submission and lift `PAYEE_ACCOUNT_RESTRICTED`. (Also verify that Bank Account penny deposits and RBI Purpose Code `P0802`/`P1004` are confirmed in the PayPal dashboard).
  - **1-Click WhatsApp Checkout Fallback:** While PayPal completes its backend review, if any customer clicks "Pay with PayPal", `#paypal-error-box` displays a polite compliance sync notice and a green **"Complete Order via WhatsApp Desk ->"** button (`#paypal-error-wa-btn`) pre-populated with the exact item title and price. Once PayPal lifts the restriction, live checkouts will process automatically with zero code changes needed.

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

---

## 6. Interactive Sourcing Tools & Field Playbooks

1. **China Sourcing, OEM & Freight Playbook (`/sourcing-guide`):**
   - **Interactive Volumetric Weight, CBM & Landed Cost Calculator:** Pure vanilla JS calculator comparing actual gross weight vs. express volumetric weight (`÷5000`) and air/SFUC volumetric weight (`÷6000`), estimating total and per-unit landed costs across FedEx IE, Air + UPS (`AFUC`), Sea + UPS (`SFUC`), and Sea `LCL` across US West, Central, and East Coast regions.
   - **Incoterms & 7 Shipping Methods Deep Dive:** `EXW`, `FOB`, `DDP` (`DDP - EXW = Total Freight`) plus FCL container capacities (`20'GP = 28 CBM`, `40'GP = 58 CBM`, `40'HQ = 68 CBM`) and why ePacket/China Post fails B2B bulk imports.
   - **Direct Data + Flat-Fee Audits vs. 5%–10% Commission Agents:** Transparent side-by-side economics showing how buyers save `$1,200–$2,400+` per order over traditional Yiwu brokerage companies.
   - **9-Step OEM & Private Label Manufacturing Roadmap:** 3D prototypes, Direct Factory Showrooms vs. trading stalls, Close-to-MOQ & Far-Below-MOQ negotiation scripts, NNN Agreements & `< $300` Provisional Patents, 3-stage budgeting with mold benchmarks, PP sample verification, compliance, Yiwu packaging/kitting, and pre-shipment QC.
   - **10-Point Verification & Import FAQ:** Native accessible `<details name="import-faq-accordion">` accordion.
2. **Expanded Yiwu Market Map (`/market-map`):**
   - **4 Niche Yiwu Wholesale Complexes:** International Production Materials Market, Yiwu Furniture Market, Yiwu Building & Material Market, and Zhezhong Timber Market.
   - **14 Specialized & Stock-Lot Streets:** Filterable street directory (including Meihu & Wuai Stock-Lot Streets with 80% off factory overruns, Changchun Ornament Street, Chouzhou Packaging Street, etc.) with 1-click **"Copy Chinese Address for Taxi"** buttons.
   - **How Business Works Inside Yiwu:** The 10-Booth Cluster Rule, Translator Reality, Ready-Stock vs. Custom Packaging, Cash RMB vs. T/T Wire Deposits, and Ningbo Port / Yixinou Eurasia Railway logistics.
3. **Field Engineer Stall Inspection Standards (`/concierge`):**
   - Category-specific stall inspection tolerances (Plush GSM & stuffing density, Plastics parting lines & flashing, Hardware salt-spray & metal thickness) and the `$149` Volumetric Sample Consolidation math (`20 stalls -> 1 box`).

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

