# Sarthak Dashboard — One-by-One Artisanal REA Checklist

> **Tracking Matrix for Artisanal 1:1 Pixel-Perfect Reverse-Engineering**  
> **Rule**: Strict **1 suite at a time** to guarantee 100% focused fidelity, exact text accuracy, and complete GSAP animation timing.

---

## 📊 Overall Progress Summary

| Total Suites | Completed Suites | Remaining Suites | Progress | Current Active Suite |
|:---:|:---:|:---:|:---:|:---:|
| **20** | **9** (`corbel`, `murmura`, `kinby`, `vessa`, `tavola`, `ivora`, `cadra`, `noria`, `mender`) | **11** | **45%** | **Suite 10: `ledge` (Bahi Khata) — NEXT UP** |

---

## 🏆 Gold Standard Benchmarks (Reference Implementations)

These two suites serve as the architectural blueprint and quality reference for all subsequent batches.

### Benchmark 1: `corbel` — Vanijya Retail *(वाणिज्य)*
- [x] **Tokens**: `css/tokens.css` with full light/dark color palette, radii, typography tokens.
- [x] **Layout**: `css/layout.css` with 60px fixed sidebar, sticky topbar, and 4-column KPI grid.
- [x] **Components**: `css/kpi-cards.css`, `css/widgets.css`, `css/views-interactive.css`, `css/overlays.css`.
- [x] **Interactive JS**: `js/main.js`, `js/router.js`, `js/theme.js`, `js/gauge.js`, `js/chart-bar.js`, `js/heatmap.js`, `js/donut.js`.
- [x] **Responsive**: Desktop (`>=1280px`), Tablet (`768-1279px`), Mobile (`<768px` bottom tabbar).
- [x] **Visual QA**: Verified 0 console errors, exact animation curves, light/dark mode persistence.

### Benchmark 2: `murmura` — Samvad Social *(संवाद)*
- [x] **Tokens & Base**: `css/index.css` with full dark/light tokens and component variables.
- [x] **Modular Views**: `css/overview.css`, `css/inbox.css`, `css/compose.css`, `css/calendar.css`, `css/channels.css`, `css/approvals.css`, `css/listening.css`, `css/analytics.css`, `css/library.css`, `css/team.css`, `css/settings.css`.
- [x] **Interactive JS**: `js/index.js`, `js/overview.js`, `js/inbox.js`, `js/compose.js`, `js/calendar.js`, `js/channels.js`, `js/approvals.js`, `js/charts.js`, `js/settings.js`.
- [x] **Visual QA**: Verified 0 console errors, multi-channel post composer, unified conversation inbox.

---

## 🚀 The 9 Execution Batches (2 Suites per Session)

---

### 📦 BATCH 1: Personal Finance & Skincare Science
> **Suites**: `kinby` (Kutumb Money) & `vessa` (Rasayan Lab)  
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

#### Suite 3: `kinby` — Kutumb Money *(कुटुम्ब)*
- **Domain**: Family Shared Treasury, Physical/Virtual Cards, Allowances & Pots
- **Target URL / Path**: `http://localhost:3456/kinby/#/home`
- [x] **Phase 1: REA Inspection & Assets**: Audit all SVG icons, card background assets, and fonts (`Manrope`, `Geist Mono`). Verified 0 missing assets.
- [x] **Phase 2: Tokens**: Created `kinby/css/tokens.css` (money palette, card gradients, light/dark values) and `reset.css`.
- [x] **Phase 3: Shell & Layout**: Built `kinby/css/layout.css` (collapsible rail sidebar, topbar balance pill, responsive tabbar).
- [x] **Phase 4: Modular Pages**:
  - [x] `kinby/css/pages/home.css` (balance hero card, quick actions, recent activity feed)
  - [x] `kinby/css/pages/cards.css` (3D card flipper, freeze toggle, spend limits slider)
  - [x] `kinby/css/pages/budgets.css` (category drag bars, allocation percentage rings)
  - [x] `kinby/css/pages/family.css` (member allowance cards, chore approval checklist)
  - [x] `kinby/css/pages/transfers.css` (quick recipient tray, currency input pad)
- [x] **Phase 5: Interactive JS**:
  - [x] `kinby/js/main.js` & `router.js` (hash routing across home, cards, budgets, family, transfers)
  - [x] `kinby/js/theme.js` (theme switcher + `kinby:theme` storage)
  - [x] `kinby/js/components/card-flipper.js` (interactive 3D flip card state)
  - [x] `kinby/js/components/budget-slider.js` (drag-to-adjust allowance limits)
- [x] **Phase 6: Visual QA & Subagent Verification**:
  - [x] Tested Desktop (`1440x900`), Tablet (`1024x768`), and Mobile (`375x812`).
  - [x] Verified light/dark toggle and checked browser console: 0 errors.
- [x] **Phase 7: Git Commit**: Batch 1A committed and pushed to `main`.

#### Suite 4: `vessa` — Rasayan Lab *(रसायन)*
- **Domain**: Skincare Lab Formulation, Ingredient Stability, Batch Kanban & Compliance
- **Target URL / Path**: `http://localhost:3456/vessa/#/dashboard/overview`
- [x] **Phase 1: REA Inspection & Assets**: Extracted formulation beaker SVGs, chemical property badges, molecular icons.
- [x] **Phase 2: Tokens**: Created `vessa/css/tokens.css` (clinical emerald/slate palette, pH indicator colors, radii).
- [x] **Phase 3: Shell & Layout**: Built `vessa/css/layout.css` (lab sidebar with status badges, sticky formulation breadcrumb).
- [x] **Phase 4: Modular Pages**:
  - [x] `vessa/css/pages/overview.css` (batch yield stats, compliance radar, ongoing tests)
  - [x] `vessa/css/pages/formulations.css` (ingredient percentage table, active concentration bars)
  - [x] `vessa/css/pages/batches.css` (drag-and-drop batch status Kanban board)
  - [x] `vessa/css/pages/stability.css` (temperature/UV exposure graph, degradation curve)
- [x] **Phase 5: Interactive JS**:
  - [x] `vessa/js/main.js` & `router.js` (routing across overview, formulations, batches, stability)
  - [x] `vessa/js/theme.js` (isolated `vessa:theme` storage)
  - [x] `vessa/js/components/kanban.js` (batch stage dragging)
  - [x] `vessa/js/components/ingredient-calc.js` (live formulation percentage recalculation)
- [x] **Phase 6: Visual QA & Subagent Verification**:
  - [x] Tested desktop & mobile viewports; verified 0 console errors.
- [x] **Phase 7: Git Commit**: Batch 1B committed and pushed to `main`.

---

### 📦 BATCH 2: Dining Hospitality & Dental Healthcare
> **Suites**: `tavola` (Pangat POS) & `ivora` (Dantika Clinic)  
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

#### Suite 5: `tavola` — Pangat POS *(पंगत)*
- **Domain**: Table Floor Plan, Real-Time KOT (Kitchen Order Tickets), Waitstaff Mobile POS
- **Target URL / Path**: `http://localhost:3456/tavola/#/overview`
- [x] **Phase 1: REA Inspection & Assets**: Audit all SVG icons, staff photos, and glass styling tokens. Verified 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `tavola/css/tokens.css` (dark luxury restaurant palette, ember/mint/amber gradients), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `tavola/css/components.css` (buttons, glass cards, status badges, live pulse clock).
- [x] **Phase 4: Floor Plan View**: Interactive SVG table map with seating status across Dining room, Terrace, and Bar.
- [x] **Phase 5: KOT Ticket Matrix**: Live kitchen order tickets board with status columns (`New`, `Cooking`, `Ready`, `Served`) and timers.
- [x] **Phase 6: Interactive JS & Theme**: Created `tavola/js/theme.js` with isolated `tavola:theme` storage and quick-action dock controller.
- [x] **Phase 7: QA & Verification**: Tested in browser on Desktop & Mobile. Verified dark/light mode toggle and confirmed **0 console errors**.

#### Suite 6: `ivora` — Dantika Clinic *(दन्तिका)*
- **Domain**: Dental Practice EHR, Interactive 32-Tooth Chart, Appointment Day Grid
- **Target URL / Path**: `http://localhost:3456/ivora/#/today`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Audit all clinical SVGs, enamel/dentin tokens, and font styles. Verified 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `ivora/css/tokens.css` (crisp clinical teal palette, enamel scales, light/dark variables), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `ivora/css/components.css` (buttons, clinical cards, teeth badges, responsive dock).
- [x] **Phase 4: Interactive 32-Tooth Chart**: Pure SVG interactive tooth diagram with surface condition tags (Crown, Cavity, Filling). Verified on patient records.
- [x] **Phase 5: Doctor Schedule**: Daily timeline appointment blocks with chair occupancy matrix and treatment notes.
- [x] **Phase 6: Interactive JS & Theme**: Created `ivora/js/theme.js` with isolated `ivora:theme` storage and dock navigation.
- [x] **Phase 7: QA & Verification**: Tested in browser via browser subagent on Desktop and Mobile. Verified light/dark mode and confirmed **0 console errors**.

---

### 📦 BATCH 3: Industrial ERP & Logistics Flow
> **Suites**: `cadra` (Karkhana ERP) & `noria` (Parivahan OS)  
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

#### Suite 7: `cadra` — Karkhana ERP *(कारख़ाना)*
- **Domain**: Factory Shopfloor, CNC Machine Telemetry, Work Orders, Raw Materials
- **Target URL / Path**: `http://localhost:3456/cadra/#/dashboard`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs cadra`. Verified 14 stylesheets, 17 scripts, 133 colors, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `cadra/css/tokens.css` (Industrial slate/amber palette, heavy-duty density layout, dark/light mode), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `cadra/css/components.css` (buttons, KPI cards, badges, shift telemetry widget, dialogs) and `cadra/css/responsive.css`.
- [x] **Phase 4: Gantt Schedule**: Machine timeline Gantt canvas with shift schedules (`WO-2047`, `WO-2041`, capacity strip).
- [x] **Phase 5: Telemetry Gauges**: Real-time floor status, RPM, temperature, and maintenance alert feeds.
- [x] **Phase 6: Interactive JS & Theme**: Created `cadra/js/theme.js` with isolated `cadra:theme` and `cadra:accent` storage.
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified dark/light mode and confirmed **0 console errors**.

#### Suite 8: `noria` — Parivahan OS *(परिवहन)*
- **Domain**: Freight Forwarding, Multi-Leg Shipments, Node Flow Automation Canvas
- **Target URL / Path**: `http://localhost:3456/noria/#/overview`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs noria`. Verified 10 stylesheets, 13 scripts, 112 colors, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `noria/css/tokens.css` (Tactical forest emerald palette, logistics indicators, dark/light mode), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `noria/css/components.css` (buttons, KPI cards, badges, slide drawers, finder, modals) and `noria/css/responsive.css`.
- [x] **Phase 4: Automation Canvas & Flows**: Multi-view logistics suite (Flows, Runs, Recipes, Copilot, Connections, Settings, Help).
- [x] **Phase 5: Shipment Tracker & Run Pulse**: Multi-leg route checkpoints, real-time running pulse, live execution counters.
- [x] **Phase 6: Interactive JS & Theme**: Created `noria/js/theme.js` with isolated `noria:theme` and `noria:rail` keyboard shortcuts (`[`).
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified dark/light mode, rail collapse, and confirmed **0 console errors**.

---

### 📦 BATCH 4: Customer Service & Merchant POS
> **Suites**: `mender` (Karigar Service) & `ledge` (Bahi Khata)  
> **Status**: ⏳ In Progress (1 of 2 Complete)

#### Suite 9: `mender` — Karigar Service *(कारीगर)*
- **Domain**: Support Ticket CRM, Technician Dispatch, Multi-Stage SLA Journey
- **Target URL / Path**: `http://localhost:3456/mender/#/cases`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs mender`. Verified 1 stylesheet, 1 script, 70 colors, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `mender/css/tokens.css` (Craft service slate palette, SLA codes, dark/light mode), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `mender/css/components.css` (buttons, KPI cards, badges, Kanban lane board, donut chart, dialog sheets) and `mender/css/responsive.css`.
- [x] **Phase 4: Support Pipeline**: Drag-and-drop ticket priority pipeline across New, Working, Waiting on client, Resolved.
- [x] **Phase 5: Customer Journey**: 4-stage interactive resolution timeline, crew assignment, and suggested knowledge base table.
- [x] **Phase 6: Interactive JS & Theme**: Created `mender/js/theme.js` with isolated `mender:theme` storage and keyboard shortcuts (`T`).
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified dark/light mode, bottom action rail, and confirmed **0 console errors**.

#### Suite 10: `ledge` — Bahi Khata *(बही खाता)*
- **Domain**: Merchant POS Register, Barcode Stock Counting, Supplier Reorders
- [ ] **Tokens & Shell**: Retail register interface, numpad layout, till drawer.
- [ ] **POS Till View**: Quick-tap product catalog grid, live subtotal/tax cart drawer.
- [ ] **Stock Counting Sheet**: Barcode scanner simulator, physical vs book count diffing.
- [ ] **Interactive JS**: Cart adder, till tender calculations, receipt modal.
- [ ] **QA & Git**: Visual verification and push.

---

### 📦 BATCH 5: Creative Studio & Outdoor Commerce
> **Suites**: `gesso` (Srijan Studio) & `solum` (Bhoomi Outdoors)  
> **Status**: ⏳ Pending

#### Suite 11: `gesso` — Srijan Studio *(सृजन)*
- **Domain**: Design Agency Portfolio, Interactive Asset Fan-Cards, Video Studio
- [ ] **Tokens & Shell**: Editorial luxury typography, minimalist monochrome surfaces.
- [ ] **Fan-Card Layout**: CSS 3D transform card spread with hover expansion.
- [ ] **Project Showcases**: Video reel scrubbers and typography test playgrounds.
- [ ] **Interactive JS**: Project modal drawers, cursor follow effects.
- [ ] **QA & Git**: Visual verification and push.

#### Suite 12: `solum` — Bhoomi Outdoors *(भूमि)*
- **Domain**: Technical Outdoor Apparel & Equipment Store, 10-Page Commerce Engine
- [ ] **Tokens & Shell**: Earth-tone palette, full e-commerce navigation header.
- [ ] **Product Catalog & Detail**: Filter sidebar, size/color variant swatches, sticky bag drawer.
- [ ] **Cart & Checkout**: Multi-step checkout accordion and order summary breakdown.
- [ ] **Interactive JS**: Filter state management, cart flyout, variant switcher.
- [ ] **QA & Git**: Visual verification and push.

---

### 📦 BATCH 6: Biometric Fitness & Nordic Furniture
> **Suites**: `stride` (Gati Fitness) & `kvist` (Griha Living)  
> **Status**: ⏳ Pending

#### Suite 13: `stride` — Gati Fitness *(गति)*
- **Domain**: GPS Running Tracker, Concentric Activity Rings, Sleep Stage Analysis
- [ ] **Tokens & Shell**: Ultra-dark OLED aesthetic, neon activity colors (Orange/Cyan/Magenta).
- [ ] **Concentric Activity Rings**: Dynamic SVG arc rendering with animated completion.
- [ ] **Elevation & Pace Charts**: Elevation profile area chart with hover pace tooltips.
- [ ] **Interactive JS**: Workout timeline scrub, interval lap table filters.
- [ ] **QA & Git**: Visual verification and push.

#### Suite 14: `kvist` — Griha Living *(गृह)*
- **Domain**: Scandinavian-Indian Furniture Catalog, Bento Grid, Room Lookbook
- [ ] **Tokens & Shell**: Warm birch/chalk palette, organic border radiuses.
- [ ] **Bento Grid Catalog**: Asymmetric product hero cards with quick-view hotspots.
- [ ] **Room Visualizer**: Interactive hotspot markers on room staging photos.
- [ ] **Interactive JS**: Room hotspot popovers, wishlist toggle, mini-cart drawer.
- [ ] **QA & Git**: Visual verification and push.

---

### 📦 BATCH 7: Developer Portfolio & High-Performance Auto
> **Suites**: `portfolio` (Daksh Dev) & `camber` (Yantra Auto)  
> **Status**: ⏳ Pending

#### Suite 15: `portfolio` — Daksh Dev *(दक्ष)*
- **Domain**: Interactive Senior Full-Stack Portfolio, Floating Device Mockup
- [ ] **Tokens & Shell**: Sleek dark developer aesthetic with code block styling.
- [ ] **Device Mockup**: Floating 3D phone/laptop iframe mockup with interactive app demos.
- [ ] **Experience Timeline**: Interactive work history tree with tech stack tags.
- [ ] **Interactive JS**: Interactive terminal simulator, project filter tabs.
- [ ] **QA & Git**: Visual verification and push.

#### Suite 16: `camber` — Yantra Auto *(यंत्र)*
- **Domain**: High-Performance Automotive Parts, 5-Vehicle Chassis Switcher
- [ ] **Tokens & Shell**: Racing carbon/crimson theme, aggressive typography.
- [ ] **Chassis Switcher**: Dynamic 5-car silhouette switcher with part fitment callouts.
- [ ] **Dyno Graph**: RPM vs Horsepower/Torque interactive dyno curves.
- [ ] **Interactive JS**: Vehicle selection, dyno run animation, part compatibility checker.
- [ ] **QA & Git**: Visual verification and push.

---

### 📦 BATCH 8: Fleet Mobility & Cinematic Audio
> **Suites**: `strada` (Yatra Mobility) & `vanta` (Kaala Studio)  
> **Status**: ⏳ Pending

#### Suite 17: `strada` — Yatra Mobility *(यात्रा)*
- **Domain**: Luxury Chauffeur & Fleet Reservation Engine, Vehicle Tier Picker
- [ ] **Tokens & Shell**: Executive midnight/champagne palette, sleek booking card.
- [ ] **Fleet Tier Selector**: Horizontal scrolling car cards with luggage/passenger badges.
- [ ] **Route Estimator**: Pickup/dropoff address inputs with estimated fare calculator.
- [ ] **Interactive JS**: Booking stepper, vehicle selection, add-on option toggles.
- [ ] **QA & Git**: Visual verification and push.

#### Suite 18: `vanta` — Kaala Studio *(काला)*
- **Domain**: Cinematic Audio Hardware, Planar Magnetic Driver Scrubbing Showcase
- [ ] **Tokens & Shell**: Pitch-black monochrome theme with precision acoustic typography.
- [ ] **Video Driver Scrub**: Scroll-driven or slider-driven exploded driver view.
- [ ] **Frequency Response Graph**: 20Hz-20kHz acoustic frequency response curve.
- [ ] **Interactive JS**: Audio frequency hover inspector, tech spec drawer.
- [ ] **QA & Git**: Visual verification and push.

---

### 📦 BATCH 9: 3D Confectionery & Clinical Practice
> **Suites**: `nero` (Mishri 3D) & `tend` (Aarogya Clinic)  
> **Status**: ⏳ Pending

#### Suite 19: `nero` — Mishri 3D *(मिश्री)*
- **Domain**: Artisanal Chocolates, 3D Flipping Card Box Customizer, Magnetic Cursor
- [ ] **Tokens & Shell**: Warm cacao/gold luxury palette, smooth magnetic physics.
- [ ] **3D Box Grid**: Interactive box builder with 3D card flip animations.
- [ ] **Flavour Profile Notes**: Cocoa origin percentages, tasting notes radar chart.
- [ ] **Interactive JS**: Box slot placement, 3D flip card triggers, custom gift ribbon selector.
- [ ] **QA & Git**: Visual verification and push.

#### Suite 20: `tend` — Aarogya Clinic *(आरोग्य)*
- **Domain**: Multi-Specialty Clinic EHR, Doctor Timeline, WhatsApp Consultation Desk
- [ ] **Tokens & Shell**: Soothing clinical sage/teal palette, clean patient card typography.
- [ ] **Consultation Desk**: Split-pane patient record with embedded WhatsApp message history.
- [ ] **Vital Signs History**: Blood pressure, blood glucose, and pulse timeline charts.
- [ ] **Interactive JS**: Prescription pad builder, appointment reschedule drag, message composer.
- [ ] **QA & Git**: Visual verification and push.

---

## 🛠️ Batch Completion Protocol (Checklist for every session)

When finishing a batch of 2 suites, verify:
1. [ ] Both suites have clean `css/` (`tokens.css`, `layout.css`, `components.css`, `pages/*.css`) and `js/` (`main.js`, `router.js`, `theme.js`).
2. [ ] Zero 404 errors for any media or font assets.
3. [ ] Responsive verified on Mobile (`<768px`), Tablet (`768-1279px`), and Desktop (`>=1280px`).
4. [ ] Both suites tested with `browser_subagent` in light and dark mode with **zero console errors**.
5. [ ] Both suites verified from the Master Hub (`http://localhost:3456/index.html`).
6. [ ] Tick the checkboxes in this file and commit changes with message: `feat: complete Batch X pixel-perfect reverse engineering`.
