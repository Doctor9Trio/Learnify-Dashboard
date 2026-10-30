# Learnify Platform — Master Internal Index & Registry 📋

> **Confidential & Internal Engineering Reference**
> This registry serves as the authoritative source of truth for all templates in the **Learnify Platform**.
> It tracks the canonical **Indian Template Name**, the active **Folder / Slug**, and the **Legacy / Source Code Identifier** to prevent accidental naming collisions or duplicate implementations when scaffolding new templates (LNF-021+).

---

## 🗂️ Active Template Registry (LNF-001 to LNF-026)

| ID                | Indian Template Name      | Devanagari       | Active Folder / Slug | Legacy Source Code | Domain & Industry                        | Live Entry URL                                         |
| ----------------- | ------------------------- | ---------------- | -------------------- | ------------------ | ---------------------------------------- | ------------------------------------------------------ |
| **LNF-001** | **Vanijya Retail**  | वाणिज्य   | `vanijya`          | `corbel`         | Omnichannel Retail, Health Gauge & POS   | `http://localhost:3456/vanijya/#/dashboard`          |
| **LNF-002** | **Bhoomi Outdoors** | भूमि         | `bhoomi`           | `solum`          | Technical Outdoor Apparel Storefront     | `http://localhost:3456/bhoomi/`                      |
| **LNF-003** | **Bahi Khata**      | बही खाता  | `bahikhata`        | `ledge`          | Fast Shop POS, Stock Reorder & Barcode   | `http://localhost:3456/bahikhata/#overview`          |
| **LNF-004** | **Samvad Social**   | संवाद       | `samvad`           | `murmura`        | 8-Network Multi-Platform Social Suite    | `http://localhost:3456/samvad/#/overview`            |
| **LNF-005** | **Kutumb Money**    | कुटुम्ब   | `kutumb`           | `kinby`          | Family Shared Wealth & 3D Flipping Card  | `http://localhost:3456/kutumb/#/home`                |
| **LNF-006** | **Aarogya Clinic**  | आरोग्य     | `aarogya`          | `tend`           | Clinical Practice CRM & WhatsApp Board   | `http://localhost:3456/aarogya/#/today`              |
| **LNF-007** | **Dantika Clinic**  | दन्तिका   | `dantika`          | `ivora`          | Dental Practice OS & 32-Tooth Odontogram | `http://localhost:3456/dantika/#/today`              |
| **LNF-008** | **Rasayan Lab**     | रसायन       | `rasayan`          | `vessa`          | Luxury Skincare Formulation & Batch QA   | `http://localhost:3456/rasayan/#/dashboard/overview` |
| **LNF-009** | **Karigar Service** | कारीगर     | `karigar`          | `mender`         | Support-Desk CRM & Kanban Pipeline       | `http://localhost:3456/karigar/#/cases`              |
| **LNF-010** | **Yantra Auto**     | यंत्र       | `yantra`           | `camber`         | Performance Auto Tuning & Dyno Curve     | `http://localhost:3456/yantra/`                      |
| **LNF-011** | **Yatra Mobility**  | यात्रा     | `yatra`            | `strada`         | Luxury Supercar Rental & Telematics      | `http://localhost:3456/yatra/`                       |
| **LNF-012** | **Parivahan OS**    | परिवहन     | `parivahan`        | `noria`          | Logistics & Node-Canvas Flow Builder     | `http://localhost:3456/parivahan/#/overview`         |
| **LNF-013** | **Karkhana ERP**    | कारख़ाना | `karkhana`         | `cadra`          | Workshop ERP, Gantt & Stock Matrix       | `http://localhost:3456/karkhana/#/dashboard`         |
| **LNF-014** | **Daksh Dev**       | दक्ष         | `daksh`            | `portfolio`      | 3D Interactive WebGL Creative Portfolio  | `http://localhost:3456/daksh/`                       |
| **LNF-015** | **Srijan Studio**   | सृजन         | `srijan`           | `gesso`          | Fine Art Marketplace & Collector Portal  | `http://localhost:3456/srijan/`                      |
| **LNF-016** | **Griha Living**    | गृह           | `griha`            | `kvist`          | Scandinavian Furniture & Ceramics Store  | `http://localhost:3456/griha/`                       |
| **LNF-017** | **Mishri 3D**       | मिश्री     | `mishri`           | `nero`           | Artisanal Chocolatier & 3D Cacao Pod     | `http://localhost:3456/mishri/#`                     |
| **LNF-018** | **Kaala Studio**    | काला         | `kaala`            | `vanta`          | Audiophile Headphones & 360 Video Scrub  | `http://localhost:3456/kaala/`                       |
| **LNF-019** | **Gati Fitness**    | गति           | `gati`             | `stride`         | Biometric Training OS & Activity Rings   | `http://localhost:3456/gati/#/`                      |
| **LNF-020** | **Pangat POS**      | पंगत         | `pangat`           | `tavola`         | Restaurant Dining Floor & Real-Time KOT  | `http://localhost:3456/pangat/#/overview`            |
| **LNF-021** | **Aarambh Studio**  | आरम्भ       | `aarambh`          | `intro`          | Kinetic Typography Brand Intro & Agency  | `http://localhost:3456/aarambh/`                     |
| **LNF-022** | **Aamrai Orchards** | आमराई       | `aamrai`           | `mango`          | Gourmet Sun-Ripened Mango E-Commerce     | `http://localhost:3456/aamrai/`                      |
| **LNF-023** | **Kosh Treasury**   | कोष           | `kosh`             | `orvel`          | Studio Finance, Dot-Matrix Cashflow      | `http://localhost:3456/kosh/#/overview`              |
| **LNF-024** | **Sandhi Pipeline** | सन्धि       | `sandhi`           | `accord`         | Client Pipeline CRM & Deal Board         | `http://localhost:3456/sandhi/`                      |
| **LNF-025** | **Maitri CRM**      | मैत्री       | `maitri`           | `rapport`        | Customer CRM, Schedule & Invoices        | `http://localhost:3456/maitri/#/overview`            |
| **LNF-026** | **Vastu Living**    | वास्तु       | `vastu`            | `oria`           | Architectural Furniture & Checkout       | `http://localhost:3456/vastu/`                       |

---


## 🛡️ Collision Prevention Checklist for Developers

Before creating a new template folder:

1. **Check Active Slugs**: Ensure the proposed folder name is **NOT** present in the table above.
2. **Check Legacy Code Words**: Ensure the template does not re-use any legacy identifier (`corbel`, `solum`, `ledge`, `murmura`, `kinby`, `tend`, `ivora`, `vessa`, `mender`, `camber`, `strada`, `noria`, `cadra`, `portfolio`, `gesso`, `kvist`, `nero`, `vanta`, `stride`, `tavola`).
3. **Use Indian Root Naming**: Every new template folder must be named using its lowercase Indian slug (e.g. `pragya/`, `vidya/`).
4. **Register in `INTERNAL_INDEX.md`**: Update this file with the new LNF sequence ID, slug, and description.
5. **Add to Showcase Hub**: Add the corresponding launch card into root `index.html`.
