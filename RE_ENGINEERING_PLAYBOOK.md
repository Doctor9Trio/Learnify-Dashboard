# Sarthak Product Suites — Reverse-Engineering Playbook & Standard Operating Procedure (SOP)

This document formalizes the exact methodology used for **Corbel** and **Murmura** into an engineering standard. Every suite in the ecosystem is replicated with **100% pixel-perfect fidelity** — matching every padding pixel, SVG icon, dynamic chart animation, responsive viewport query, and zero-flash theme toggle.

---

## 🏛️ The 5 Pillars of Pixel-Perfect Replication

1. **REA Deep Asset Harvesting**: Zero missing chunks. We parse the full Abstract Syntax Tree (AST) and dynamic dependency graph (`__vite__mapDeps`, linked chunk manifests, WebP assets, and custom font weights) so zero 404s ever occur.
2. **Relative Path Resolution (`./assets/`)**: Vite bundles hardcode root paths like `/<app>/assets/`. We rewrite the internal module preloader function `return '/<app>/' + e` to `return './' + e`, allowing each dashboard to run standalone inside its own folder without needing a reverse proxy or separate port.
3. **Contextual Indian Branding & Scope Isolation**: We assign a domain-specific Indian tech brand name derived from its real-world function, while isolating `localStorage` keys (e.g. `<suite>:theme`, `<suite>:accent`) to prevent theme pollution across suites.
4. **Interactive Component & Motion Verification**: We visually verify every interactive feature: drag-and-drop boards, interactive charts, slide-out drawer sheets, modal finders (`⌘K`), and physics-based ink-pill tab sliders.
5. **Master Portal Hub Integration & Git Sync**: Each suite is registered on the master hub [`index.html`](file:///d:/Workspace/Dashboard/index.html), documented in [`README.md`](file:///d:/Workspace/Dashboard/README.md), and given an isolated git commit & push.

---

## 📋 The 20-Suite Ecosystem Registry

| # | Code Name | Live Source URL | **Platform Utility** | **Authentic Indian Brand** | Status |
|---|---|---|---|---|---|
| **1** | `corbel` | `/corbel/` | Omnichannel Retail, Inventory & Orders | **Vanijya Retail** *(वाणिज्य)* | ✅ Complete |
| **2** | `murmura` | `/murmura/` | 8-Network Social Media & Unified Inbox | **Samvad Social** *(संवाद)* | ✅ Complete |
| **3** | `kinby` | `kinby/#/home` | Family Shared Finance, Allowances & Pots | **Kutumb Money** *(कुटुम्ब)* | ✅ Complete |
| **4** | `vessa` | `vessa/#/dashboard/overview` | Skincare Lab Formulation & Inventory | **Rasayan Lab** *(रसायन)* | ✅ Complete |
| **5** | `tavola` | `tavola/#/overview` | Restaurant Table Management & Kitchen POS | **Pangat POS** *(पंगत)* | ✅ Complete |
| **6** | `ivora` | `ivora/#/today` | Dental Practice & Interactive 32-Tooth Chart | **Dantika Clinic** *(दन्तिका)* | ✅ Complete |
| **7** | `cadra` | `cadra/#/dashboard` | Workshop Manufacturing & Production ERP | **Karkhana ERP** *(कारख़ाना)* | ✅ Complete |
| **8** | `noria` | `noria/#/overview` | Freight Forwarding & Logistics Flow Automation | **Parivahan OS** *(परिवहन)* | ✅ Complete |
| **9** | `mender` | `mender/` | Support-Desk CRM, Drag-and-Drop Pipeline | **Karigar Service** *(कारीगर)* | ✅ Complete |
| **10** | `ledge` | `ledge/#overview` | Shop POS Register, Stock Counting & Reorders | **Bahi Khata** *(बही खाता)* | ✅ Complete |
| **11** | `gesso` | `gesso/` | Creative Design Canvas & Brand System | **Srijan Studio** *(सृजन)* | ⏳ Next |
| **12** | `solum` | `solum/` | Real Estate Leases, Tenants & Property CRM | **Bhoomi Real Estate** *(भूमि)* | ⏳ Pending |
| **13** | `stride` | `stride/` | GPS Athletic Runs, Cadence & Biometrics | **Gati Fitness** *(गति)* | ⏳ Pending |
| **14** | `kvist` | `kvist/shop` | Home Decor E-Commerce + Merchant Admin | **Griha Living** *(गृह)* | ⏳ Pending |
| **15** | `portfolio` | `portfolio/` | Animated Interactive Developer Portfolio | **Daksh Dev** *(दक्ष)* | ⏳ Pending |
| **16** | `camber` | `camber/` | High-Performance Auto Parts & Tuning | **Yantra Auto** *(यंत्र)* | ⏳ Pending |
| **17** | `strada` | `strada/` | Car Rental Booking & Fleet Mobility Hub | **Yatra Mobility** *(यात्रा)* | ⏳ Pending |
| **18** | `vanta` | `vanta/` | Ultra-Dark Cinematic Video Scrubbing Launch | **Kaala Studio** *(काला)* | ⏳ Pending |
| **19** | `nero` | `nero/#` | 3D Flipping Card Confectionery Picker | **Mishri 3D** *(मिश्री)* | ⏳ Pending |
| **20** | `tend` | `tend/#/today` | Clinic CRM, Doctor Schedule & WhatsApp Desk | **Aarogya Clinic** *(आरोग्य)* | ⏳ Pending |

---

## 🔍 Quality Assurance Checklist (Run on Every Suite)

- [ ] **Zero Missing Assets**: Every `.js`, `.css`, `.webp`, `.svg`, and `.woff2` file returns HTTP 200 locally.
- [ ] **Subfolder Relative Routing**: URL hash routing (`#/view`) works identically under `http://localhost:3456/<suite>/`.
- [ ] **Responsive Breakpoints**:
  - Desktop (`>= 1280px`): Full sidebar navigation, all columns, large charts.
  - Tablet (`768px – 1279px`): Collapsed rail or scrollable top nav.
  - Mobile (`< 768px`): 1-column layout, bottom tab bar navigation (`.mnav` / `.tabbar`).
- [ ] **Interactive Elements**:
  - Live charts with hover tooltips and dynamic animations.
  - Drag-and-drop boards (Kanban, Gantt, KOT kitchen tickets).
  - Search command palettes (`⌘K`).
  - Side sheets and modals.
- [ ] **Zero-Flash Theming**: Light/Dark toggle swaps CSS custom property tokens instantly without layout shift.
- [ ] **Browser Console Audit**: Zero uncaught JavaScript errors or unhandled promise rejections.
