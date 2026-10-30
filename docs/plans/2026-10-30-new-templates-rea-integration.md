# New Templates REA Integration (LNF-021 to LNF-026) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replicate, reverse-engineer, and integrate 6 new production-grade dashboard suites (`intro`, `mango`, `orvel`, `accord`, `rapport`, `oria`) into the Learnify Dashboard using the 6-phase REA methodology, assign authentic Indian brand names and slugs (`aarambh`, `aamrai`, `kosh`, `sandhi`, `maitri`, `vastu`), verify existing implementations of `camber` (`yantra`) and `cadra` (`karkhana`), and register all new templates on the master showcase portal (`index.html`).

**Architecture:** Pure HTML5, Vanilla CSS custom properties, and Vanilla ES6 modules following the benchmark implementations of `vanijya` and `samvad`. Each suite is structured into clean `css/` (`tokens.css`, `layout.css`, `components.css`, `animations.css`, `responsive.css`) and `js/` (`main.js`, `router.js`, `theme.js`) directories with isolated `localStorage` namespacing (`<slug>:theme`), zero-flash theming, unconditional animation triggers (`force-reduced`), non-secure HTTP shims for `crypto.randomUUID()`, and full LAN network compatibility.

**Tech Stack:** HTML5, CSS Custom Properties, Vanilla ES6 Modules, SVG Icons, GSAP/Web Animations API, Node.js replication & asset harvesting toolchain.

---

## 🗂️ Name Mapping & Registry (Indian Brand Identities)

| ID | Proposed Indian Name | Devanagari | Target Slug | Legacy Source Code | Domain & Industry | Live Demo Source URL |
|---|---|---|---|---|---|---|
| **LNF-021** | **Aarambh Studio** | आरम्भ | `aarambh` | `intro` | Kinetic Typography Brand Intro & Interactive Agency Timeline | `https://demo.codeandchill.store/intro/` |
| **LNF-022** | **Aamrai Orchards** | आमराई | `aamrai` | `mango` | Gourmet Sun-Ripened Mango Orchard & Direct-to-Consumer E-Commerce | `https://demo.codeandchill.store/mango/` |
| **LNF-023** | **Kosh Treasury** | कोष | `kosh` | `orvel` | Manufacturing & Studio B2B Finance, Dot-Matrix Cashflow & Approvals | `https://demo.codeandchill.store/orvel/#/overview` |
| **LNF-024** | **Sandhi Pipeline** | सन्धि | `sandhi` | `accord` | High-Touch Client Pipeline CRM & Drag-and-Drop Deal Board | `https://demo.codeandchill.store/accord/` |
| **LNF-025** | **Maitri CRM** | मैत्री | `maitri` | `rapport` | Sales CRM with Meeting Scheduler, Customer Ledger & Invoices | `https://demo.codeandchill.store/rapport/#/overview` |
| **LNF-026** | **Vastu Living** | वास्तु | `vastu` | `oria` | Sculptural Architectural Furniture Storefront, Catalog & Checkout | `https://demo.codeandchill.store/oria/` |

> [!NOTE]
> **Existing Suites Cross-Check**:
> - `camber` is ALREADY present and verified as **LNF-010: Yantra Auto (यंत्र)** at `yantra/`.
> - `cadra` is ALREADY present and verified as **LNF-013: Karkhana ERP (कारख़ाना)** at `karkhana/`.
> Both will be audited to confirm 100% operational parity without duplicating existing folders.

---

## 🚀 Execution Batches (2 Suites Per Batch Protocol)

Following the standard protocol from `PIXEL_PERFECT_REA_WORKFLOW.md` and `AGENT_HANDOFF_PROMPT.md`:

- **Batch 10**: Suites 21 & 22 (`aarambh` [intro] & `aamrai` [mango])
- **Batch 11**: Suites 23 & 24 (`kosh` [orvel] & `sandhi` [accord])
- **Batch 12**: Suites 25 & 26 (`maitri` [rapport] & `vastu` [oria])
- **Master Hub & QA Phase**: Portal Showcase Update (`index.html`) & Deep Audit

---

## Detailed Task Breakdown

### Task 0: Upstream Verification & Registry Expansion

**Files:**
- Modify: `INTERNAL_INDEX.md`
- Create: `bin/replicate-new-batches.mjs`

**Step 1: Verify existing LNF-010 and LNF-013 integrity**
- Check `yantra/index.html` and `karkhana/index.html` to confirm zero broken links or missing assets.

**Step 2: Update `INTERNAL_INDEX.md`**
- Register LNF-021 through LNF-026 with their Indian names, slugs, and domains.

**Step 3: Create automated replication runner `bin/replicate-new-batches.mjs`**
- Build multi-suite harvester script invoking `bin/replicate-suite.mjs` with exact asset paths and catalog photo glob rules.

**Step 4: Commit**
```bash
git add INTERNAL_INDEX.md bin/replicate-new-batches.mjs
git commit -m "chore: register LNF-021 to LNF-026 in internal index"
```

---

### Task 1: BATCH 10A — Suite 21: `aarambh` (Aarambh Studio / intro)

**Files:**
- Create: `aarambh/index.html`
- Create: `aarambh/assets/*`
- Create: `aarambh/css/tokens.css`, `reset.css`, `layout.css`, `components.css`, `animations.css`, `responsive.css`
- Create: `aarambh/js/main.js`, `theme.js`

**Step 1: Harvest and replicate `intro` bundle**
- Run `node bin/replicate-new-batches.mjs aarambh` to download `assets/index-BrrEOvwf.js` and `assets/index-C8bc3ljG.css`.

**Step 2: Token extraction & modular styling**
- Extract typography, kinetic timing functions, and surface tokens into `aarambh/css/tokens.css`.
- Format clean modular stylesheets in `aarambh/css/`.

**Step 3: Apply Motion & Network Fixes**
- Ensure all `prefers-reduced-motion` media queries use `force-reduced` so timeline animations run unconditionally.
- Add non-secure context `crypto.randomUUID()` shim to `aarambh/index.html`.

**Step 4: Verify in Browser & Test Endpoint**
- Test `http://localhost:3456/aarambh/index.html`.
- Verify kinetic timeline scrubbing, typography reveals, and 0 console errors.

**Step 5: Commit**
```bash
git add aarambh/
git commit -m "feat(aarambh): integrate Aarambh Studio kinetic brand intro (LNF-021)"
```

---

### Task 2: BATCH 10B — Suite 22: `aamrai` (Aamrai Orchards / mango)

**Files:**
- Create: `aamrai/index.html`
- Create: `aamrai/assets/*`
- Create: `aamrai/photos/mango/*` (orchard, alphonso, himsagar, langra, hero, cut, story photos)
- Create: `aamrai/css/*` & `aamrai/js/*`

**Step 1: Harvest bundle and photo catalog**
- Run `node bin/replicate-new-batches.mjs aamrai` to download bundle assets and high-res mango orchard photography.

**Step 2: Token extraction & catalog modularization**
- Extract sun-ripened saffron/amber color tokens, card radii, and grid layouts into `aamrai/css/tokens.css` and `aamrai/css/layout.css`.

**Step 3: Apply Motion & Network Fixes**
- Patch motion queries to `force-reduced` for smooth floating mango slices and carousel transitions.
- Rewrite Vite relative paths to `./assets/` and `./photos/`.

**Step 4: Verify in Browser**
- Test `http://localhost:3456/aamrai/index.html`.
- Confirm all product cards (Alphonso, Himsagar, Langra), cart drawer, and harvest story photos return HTTP 200 with 0 console errors.

**Step 5: Commit**
```bash
git add aamrai/
git commit -m "feat(aamrai): integrate Aamrai Orchards farm-to-table e-commerce (LNF-022)"
```

---

### Task 3: BATCH 11A — Suite 23: `kosh` (Kosh Treasury / orvel)

**Files:**
- Create: `kosh/index.html`
- Create: `kosh/assets/*`
- Create: `kosh/css/*` & `kosh/js/*`

**Step 1: Harvest bundle and dependency chunks**
- Run `node bin/replicate-new-batches.mjs kosh` to harvest `assets/index-OrFaLgBI.js` and `assets/index-CsNrSoeX.css`.

**Step 2: Token extraction & financial dashboard layout**
- Extract financial metrics palette (ink slate, ledger mint, dot-matrix transaction highlights).
- Modularize into `kosh/css/tokens.css`, `layout.css`, `components.css`.

**Step 3: Interactive Routing & Motion**
- Wire SPA hash routing (`#/overview`, `#/cards`, `#/invoices`, `#/bills`).
- Isolate theme localStorage key `kosh:theme`.
- Apply motion patch `force-reduced` for dot-matrix timeline graph animation.

**Step 4: Verify in Browser**
- Test `http://localhost:3456/kosh/index.html#/overview`.
- Confirm dot chart transaction tooltips and card toggles operate with 0 console errors.

**Step 5: Commit**
```bash
git add kosh/
git commit -m "feat(kosh): integrate Kosh Treasury manufacturing finance OS (LNF-023)"
```

---

### Task 4: BATCH 11B — Suite 24: `sandhi` (Sandhi Pipeline / accord)

**Files:**
- Create: `sandhi/index.html`
- Create: `sandhi/assets/*`
- Create: `sandhi/photos/165-accord/*` (client avatars and contact photos)
- Create: `sandhi/css/*` & `sandhi/js/*`

**Step 1: Harvest bundle and avatar assets**
- Run `node bin/replicate-new-batches.mjs sandhi` to download `assets/index-DtoNja2p.js`, `assets/index-BOpfnzOw.css`, and client portrait photography.

**Step 2: Token extraction & Kanban pipeline modularization**
- Extract deal column tokens, card badges, drag states, and sheet drawers.
- Structure into `sandhi/css/tokens.css`, `layout.css`, `components.css`.

**Step 3: Interactive Deals & Theme Logic**
- Wire drag-and-drop client pipeline and contact inspector drawer.
- Isolate theme storage `sandhi:theme`.

**Step 4: Verify in Browser**
- Test `http://localhost:3456/sandhi/index.html`.
- Confirm deal dragging, customer modal, and mobile responsive dock with 0 console errors.

**Step 5: Commit**
```bash
git add sandhi/
git commit -m "feat(sandhi): integrate Sandhi Pipeline client deal board CRM (LNF-024)"
```

---

### Task 5: BATCH 12A — Suite 25: `maitri` (Maitri CRM / rapport)

**Files:**
- Create: `maitri/index.html`
- Create: `maitri/assets/*`
- Create: `maitri/photos/168-rapport/*` (client photos & customer avatars)
- Create: `maitri/css/*` & `maitri/js/*`

**Step 1: Harvest bundle and assets**
- Run `node bin/replicate-new-batches.mjs maitri` to download `assets/index-Dywa6qru.js`, `assets/index-Dxe3jV5a.css`, and customer avatars.

**Step 2: Token extraction & CRM modularization**
- Extract calm CRM palette, meeting timeline cards, invoice ledger tables, and growth graphs.
- Structure into `maitri/css/tokens.css`, `layout.css`, `components.css`.

**Step 3: Routing & Customer Memory**
- Wire hash router (`#/overview`, `#/customers`, `#/pipeline`, `#/schedule`, `#/invoices`).
- Isolate theme storage `maitri:theme`.

**Step 4: Verify in Browser**
- Test `http://localhost:3456/maitri/index.html#/overview`.
- Confirm customer records, meeting schedule calendar, and invoices load with 0 console errors.

**Step 5: Commit**
```bash
git add maitri/
git commit -m "feat(maitri): integrate Maitri CRM sales & relationship suite (LNF-025)"
```

---

### Task 6: BATCH 12B — Suite 26: `vastu` (Vastu Living / oria)

**Files:**
- Create: `vastu/index.html`
- Create: `vastu/assets/*`
- Create: `vastu/photos/oria/*` (high-res architectural furniture catalog photos)
- Create: `vastu/css/*` & `vastu/js/*`

**Step 1: Harvest bundle and catalog photography**
- Run `node bin/replicate-new-batches.mjs vastu` to download `assets/home-ByYgmzbG.js`, `assets/home-nnrqR0KS.css`, and furniture media.

**Step 2: Token extraction & luxury living modularization**
- Extract warm neutral tones, woodgrain surfaces, typography, and cart drawer styling.
- Structure into `vastu/css/tokens.css`, `layout.css`, `components.css`.

**Step 3: Interactive Storefront & Checkout**
- Wire shopping bag drawer, product customization pills, and checkout modal.
- Add `crypto.randomUUID()` shim to guarantee error-free cart checkout across local IP / HTTP.

**Step 4: Verify in Browser**
- Test `http://localhost:3456/vastu/index.html`.
- Confirm product hero zoom, cart interactions, and zero broken image icons with 0 console errors.

**Step 5: Commit**
```bash
git add vastu/
git commit -m "feat(vastu): integrate Vastu Living sculptural furniture store (LNF-026)"
```

---

### Task 7: Master Showcase Hub (`index.html`) Integration & Deep Audit

**Files:**
- Modify: `index.html`
- Modify: `BATCH_EXECUTION_CHECKLIST.md`
- Modify: `README.md`
- Run: `bin/deep-audit.mjs`

**Step 1: Add 6 New Showcase Cards to `index.html`**
- Insert cards for:
  1. `Aarambh Studio` (LNF-021, Category: `Creative & Brand`)
  2. `Aamrai Orchards` (LNF-022, Category: `Retail & Commerce`)
  3. `Kosh Treasury` (LNF-023, Category: `Fintech & Banking`)
  4. `Sandhi Pipeline` (LNF-024, Category: `Operations & CRM`)
  5. `Maitri CRM` (LNF-025, Category: `Operations & CRM`)
  6. `Vastu Living` (LNF-026, Category: `Retail & Commerce`)
- Update platform stats counters (Total templates: 26).

**Step 2: Run Deep Asset Audit**
- Run `node bin/deep-audit.mjs` across all 26 suites.
- Verify 100% asset availability and zero 404s.

**Step 3: Verify Local IP Connectivity**
- Curl all new endpoints via `http://192.168.24.239:3456/`.
- Ensure all return HTTP 200.

**Step 4: Commit**
```bash
git add index.html BATCH_EXECUTION_CHECKLIST.md README.md
git commit -m "feat: complete Master Hub integration for LNF-021 to LNF-026"
```

---

## Plan Review & Approval Gate

Please review the proposed Indian brand names and the 3-batch phased execution roadmap. Once approved, we will begin with **Batch 10** (`aarambh` & `aamrai`)!

