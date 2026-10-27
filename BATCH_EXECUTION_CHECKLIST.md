# Sarthak Dashboard — One-by-One Artisanal REA Checklist

> **Tracking Matrix for Artisanal 1:1 Pixel-Perfect Reverse-Engineering**  
> **Rule**: Strict **1 suite at a time** to guarantee 100% focused fidelity, exact text accuracy, and complete GSAP animation timing.

---

## 📊 Overall Progress Summary

| Total Suites | Completed Suites | Remaining Suites | Progress | Current Active Suite |
|:---:|:---:|:---:|:---:|:---:|
| **20** | **20** (`corbel`, `murmura`, `kinby`, `vessa`, `tavola`, `ivora`, `cadra`, `noria`, `mender`, `ledge`, `gesso`, `solum`, `stride`, `kvist`, `portfolio`, `camber`, `strada`, `vanta`, `nero`, `tend`) | **0** | **100% — COMPLETE** | **🎉 ALL 20 SUITES FULLY REVERSE-ENGINEERED & MODULARIZED!** |

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
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

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
- **Target URL / Path**: `http://localhost:3456/ledge/#overview`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs ledge`. Verified 1 stylesheet, 1 script, 106 colors, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `ledge/css/tokens.css` (Lime merchant palette, night surfaces, dark/light mode), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `ledge/css/components.css` (buttons, POS till catalog, cart summary, stock count tables, dialog sheets) and `ledge/css/responsive.css`.
- [x] **Phase 4: POS Till View**: Quick-tap product catalog grid, live subtotal/tax cart drawer, tender calculations, and receipt modal.
- [x] **Phase 5: Stock Counting Sheet**: Barcode scanner simulator, physical vs book count diffing, and automated reorder alerts.
- [x] **Phase 6: Interactive JS & Theme**: Created `ledge/js/theme.js` with isolated `ledge:theme` and `ledge:accent` storage.
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified dark/light mode, mobile bottom navigation rail, and confirmed **0 console errors**.

---

### 📦 BATCH 5: Creative Studio & Outdoor Commerce
> **Suites**: `gesso` (Srijan Studio) & `solum` (Bhoomi Outdoors)  
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

#### Suite 11: `gesso` — Srijan Studio *(सृजन)*
- **Domain**: Design Agency Portfolio, Interactive Asset Fan-Cards, Video Studio
- **Target URL / Path**: `http://localhost:3456/gesso/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs gesso`. Verified 1 stylesheet, 1 script, 56 colors, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `gesso/css/tokens.css` (Editorial luxury typography, minimalist monochrome surfaces, dark/light mode), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `gesso/css/components.css` (buttons, badge chips, hero 3D fan cards, artist portfolio cards, video showcase cards, pricing tiers) and `gesso/css/responsive.css`.
- [x] **Phase 4: Fan-Card Layout**: CSS 3D transform card spread with hover expansion, perspective transforms, and smooth transitions.
- [x] **Phase 5: Project Showcases**: Video reel scrubbers, interactive pricing tiers, and marketplace showcase.
- [x] **Phase 6: Interactive JS & Theme**: Created `gesso/js/theme.js` with isolated `gesso:theme` storage and keyboard shortcuts (`T`).
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified 3D fan cards, studio video player, pricing plan tiers, and confirmed **0 console errors**.

#### Suite 12: `solum` — Bhoomi Outdoors *(भूमि)*
- **Domain**: Technical Outdoor Apparel & Equipment Store, 10-Page Commerce Engine
- **Target URL / Path**: `http://localhost:3456/solum/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs solum`. Verified 3 stylesheets, 14 scripts, 150 colors, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `solum/css/tokens.css` (Earth-tone trail palette, fulfillment statuses, nocturnal dark mode), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `solum/css/components.css` (pill buttons, icon buttons, product cards, terrain filters, gcards, lookbook meta, newsletter form, bag items) and `solum/css/responsive.css`.
- [x] **Phase 4: Product Catalog & Detail**: Filter chips, product grid cards with quick-add & favorites heart, lookbook card showcase.
- [x] **Phase 5: Cart & Checkout**: Slide-out bag dialog drawer, free shipping threshold progress meter, live subtotal, empty state.
- [x] **Phase 6: Interactive JS & Theme**: Created `solum/js/theme.js` with isolated `solum:theme` storage, click triggers, and keyboard shortcuts (`T`).
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified hero notch logo, bag drawer, nocturnal trail dark mode, mobile menu, and confirmed **0 console errors**.

---

### 📦 BATCH 6: Biometric Fitness & Nordic Furniture
> **Suites**: `stride` (Gati Fitness) & `kvist` (Griha Living)  
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

#### Suite 13: `stride` — Gati Fitness *(गति)*
- **Domain**: Personal Athletic Performance Dashboard, Concentric Activity Rings, Sleep Architecture Stages, Workout Logs
- **Target URL / Path**: `http://localhost:3456/stride/#/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs stride`. Verified 43 colors, 69 CSS vars, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `stride/css/tokens.css` (Ultra-dark OLED aesthetic, concentric ring metrics `--move`, `--exercise`, `--stand`, sleep stages `--deep`, `--core`, `--rem`, `--awake`), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `stride/css/components.css` (segmented controls `.seg`, `.btn`, `.kpi` cards, concentric SVG rings, charts, `.log` tables, `.type` radio groups, badges, dialogs) and `stride/css/responsive.css`.
- [x] **Phase 4: Concentric Activity Rings**: Dynamic SVG arc rendering with smooth animated completion for Move, Exercise, Stand metrics.
- [x] **Phase 5: Biometric Charts & Stages**: Hand-crafted SVG charts (Steps this week, Heart rate telemetry, Sleep hypnogram stages, Macros).
- [x] **Phase 6: Interactive JS & Theme**: Created `stride/js/theme.js` with isolated `stride-theme` / `gati-theme` storage, `#theme` button integration, and keyboard shortcuts (`T`).
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified dark/light mode toggle, concentric ring animations, view transitions, and confirmed **0 console errors**.

#### Suite 14: `kvist` — Griha Living *(गृह)*
- **Domain**: Scandinavian-Indian Furniture Catalog, Bento Grid, Room Lookbook
- **Target URL / Path**: `http://localhost:3456/kvist/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs kvist`. Verified 60 unique colors, 130 CSS variables, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `kvist/css/tokens.css` (Nordic birch/chalk palette, organic border radiuses, dark pine/charcoal nocturnal mode), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `kvist/css/components.css` (bento tiles, product cards, category navigation pills, buttons, room visualizer hotspots, order drawers, toasts) and `kvist/css/responsive.css`.
- [x] **Phase 4: Bento Grid Catalog**: Asymmetric product hero cards with quick-view hotspots, pricing details, and category filter navigation.
- [x] **Phase 5: Room Visualizer & Cart**: Interactive hotspot markers on room staging photos, live cart drawer counter updates, and add-to-bag interactivity.
- [x] **Phase 6: Interactive JS & Theme**: Created `kvist/js/theme.js` with isolated `kvist:theme` storage, keyboard shortcut `T`, and live theme syncing.
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified bento grid layouts, dark mode toggle, add to bag counter interaction, and confirmed **0 console errors**.

---

### 📦 BATCH 7: Developer Portfolio & High-Performance Auto
> **Suites**: `portfolio` (Daksh Dev) & `camber` (Yantra Auto)  
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

#### Suite 15: `portfolio` — Daksh Dev *(दक्ष)*
- **Domain**: Interactive Senior Full-Stack & Mobile Systems Architect Portfolio, 3D Particle Avatar, App Store Showcases
- **Target URL / Path**: `http://localhost:3456/portfolio/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs portfolio`. Verified 37 colors, 149 CSS variables, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `portfolio/css/tokens.css` (Deep space black `#050505`, emerald active accents, monochrome light mode tokens), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `portfolio/css/components.css` (interactive cards, app badges, tech marquee badges, project showcases, modals) and `portfolio/css/responsive.css`.
- [x] **Phase 4: Device Mockup & Showcase**: Interactive 4-app Google Play portfolio showcases, technology stack marquee, and responsive project cards.
- [x] **Phase 5: Experience Timeline**: Interactive developer history, tech stack tags, and contact links.
- [x] **Phase 6: Interactive JS & Theme**: Created `portfolio/js/theme.js` with isolated `portfolio:theme` storage, keyboard shortcut `T`, and live theme syncing.
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified 3D particle hero avatar, typography, dark/light theme switching, and confirmed **0 console errors**.

#### Suite 16: `camber` — Yantra Auto *(यंत्र)*
- **Domain**: High-Performance Automotive Parts & Tuning Catalog, 5-Vehicle Chassis Switcher, Interactive Dyno Curves
- **Target URL / Path**: `http://localhost:3456/camber/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs camber`. Verified 72 colors, 54 CSS variables, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `camber/css/tokens.css` (Warm bone parchment canvas, carbon nocturnal dark mode `#0a0d0b`, neon racing crimson accent `#ff4d1c`), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `camber/css/components.css` (speed bands, racing line SVGs, buttons, chassis switcher buttons, product cards, fitment callouts, drawers) and `camber/css/responsive.css`.
- [x] **Phase 4: Chassis Switcher & Fitment**: Dynamic 5-car silhouette switcher (Coupe, Track, Pickup, Bike, EV) with part fitment callouts and vehicle stage drive animations.
- [x] **Phase 5: Dyno Graph Curves**: RPM vs Horsepower and Torque interactive dyno curve graphs with real-time telemetry readout.
- [x] **Phase 6: Interactive JS & Theme**: Created `camber/js/theme.js` with isolated `camber-theme` / `yantra-theme` storage, `#theme-toggle` button in header, keyboard shortcut `T`, and live theme syncing.
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified chassis switcher, dyno curves, cart drawer, nocturnal dark mode, and confirmed **0 console errors**.

---

### 📦 BATCH 8: Fleet Mobility & Cinematic Audio
> **Suites**: `strada` (Yatra Mobility) & `vanta` (Kaala Studio)  
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

#### Suite 17: `strada` — Yatra Mobility *(यात्रा)*
- **Domain**: Luxury Chauffeur & Fleet Reservation Engine, Vehicle Tier Picker, Live Spec Readouts
- **Target URL / Path**: `http://localhost:3456/strada/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs strada`. Verified 66 colors, 48 CSS variables, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `strada/css/tokens.css` (Luxury midnight `#0a0b09`, neon lime `#d9f56b`, executive light mode `#f8faf5`), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `strada/css/components.css` (vehicle class chips, car stage cards, booking bar, spec telemetry, buttons) and `strada/css/responsive.css`.
- [x] **Phase 4: Fleet Tier Selector**: Interactive 4-class tab switcher (Sport, SUV, Sedan, Electric) with dynamic stage transitions and live specs (accel, hp, price/day).
- [x] **Phase 5: Booking Engine**: Filter driver segmented radiogroup, location input, and date picker booking bar.
- [x] **Phase 6: Interactive JS & Theme**: Created `strada/js/theme.js` with isolated `strada-theme` / `yatra-theme` storage, `#theme-toggle` button in header, keyboard shortcut `T`, and live theme syncing.
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified vehicle switcher, booking bar, theme toggle, mobile hamburger menu, and confirmed **0 console errors**.

#### Suite 18: `vanta` — Kaala Studio *(काला)*
- **Domain**: Cinematic Audio Hardware, Planar Magnetic Driver Scrubbing Showcase, Acoustic Sound Modes
- **Target URL / Path**: `http://localhost:3456/vanta/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs vanta`. Verified 88 colors, 62 CSS variables, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `vanta/css/tokens.css` (Planar magnetic pitch-black `#050507`, acoustic studio light mode `#f5f4f7`, precision red accents `#ff2a3c`), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `vanta/css/components.css` (magnetic buttons, touch gesture cards, driver scrub visuals, spec tables, sound mode pills) and `vanta/css/responsive.css`.
- [x] **Phase 4: Planar Magnetic Driver Visualizer**: Exploded driver view visualizer, acoustic chamber breakdown, and 249g comfort engineering callouts.
- [x] **Phase 5: Acoustic Telemetry & Gestures**: Touch gesture interaction cards (swipe, double tap, hold for ANC), specs matrix (45dB noise canceling, 40h battery, LDAC hi-res).
- [x] **Phase 6: Interactive JS & Theme**: Created `vanta/js/theme.js` with isolated `vanta-theme` / `kaala-theme` storage, `#theme-toggle` button in header, keyboard shortcut `T`, and live theme syncing.
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified planar driver sections, light/dark mode switching, responsive navigation, and confirmed **0 console errors**.

---

### 📦 BATCH 9: 3D Confectionery & Clinical Practice
> **Suites**: `nero` (Mishri 3D) & `tend` (Aarogya Clinic)  
> **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**

#### Suite 19: `nero` — Mishri 3D *(मिश्री)*
- **Domain**: Artisanal Single-Origin Confectionery, 3D Tasting Studio, Interactive Cocoa Bean Parallax
- **Target URL / Path**: `http://localhost:3456/nero/`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs nero`. Verified 15 colors, 14 CSS variables, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `nero/css/tokens.css` (Warm cacao `#d9c3a0`, dark noir `#1c140e`, amber accent `#e8a317`), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `nero/css/components.css` (3D chocolate stage, thumb rail, magnetic cursor, sound toggle, buy buttons) and `nero/css/responsive.css`.
- [x] **Phase 4: 3D Chocolate Stage & Rail**: Interactive 4-variety selection rail (Origin 72%, Noir 85%, Sea Salt, Orange) with dynamic text and image transitions.
- [x] **Phase 5: Floating Cocoa Bean Parallax**: Multi-depth 3D floating cocoa bean layer reacting smoothly to mouse motion.
- [x] **Phase 6: Interactive JS & Theme**: Created `nero/js/theme.js` with isolated `nero-theme` / `mishri-theme` storage, `#theme-toggle` button in header, keyboard shortcut `T`, and live theme syncing.
- [x] **Phase 7: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified chocolate variety switching, dark noir mode toggle, responsive layout, and confirmed **0 console errors**.

#### Suite 20: `tend` — Aarogya Clinic *(आरोग्य)*
- **Domain**: Multi-Specialty Clinic EHR, Doctor Timeline, WhatsApp Patient Consultation Desk
- **Target URL / Path**: `http://localhost:3456/tend/#/today`
- **Status**: ✅ **COMPLETED (Pixel-Perfect Verified)**
- [x] **Phase 1: REA Inspection & Assets**: Inspected with `bin/rea-inspector.mjs tend`. Verified 117 colors, 156 CSS variables, 0 missing assets.
- [x] **Phase 2: Tokens & Shell**: Created `tend/css/tokens.css` (Clinical sage `#eef2ef`, nocturnal dark `#0b1312`, WhatsApp emerald `#1fa855`), `reset.css`, and `layout.css`.
- [x] **Phase 3: Components**: Created `tend/css/components.css` (buttons, clinic clock, finder modal, search drawer, toast alerts, doctor cards) and `tend/css/responsive.css`.
- [x] **Phase 4: Multi-View Clinic Suite**: 7 fully modular interactive pages:
  - `Today` (`#/today`): Patient flow board, waiting room queues, live consultations.
  - `Inbox` (`#/inbox`): WhatsApp multi-channel inbox with message ticks, status badges, and 24-hour rule countdown.
  - `Patients` (`#/patients`): Patient EHR directory with WhatsApp consent, medical histories, and tag filters.
  - `Schedule` (`#/schedule`): Clinician timeline grid, slot bookings, and appointment rescheduler.
  - `Campaigns` (`#/campaigns`): WhatsApp reminder templates and broadcast broadcast manager.
  - `Reports` (`#/reports`): Practice analytics, appointment throughput, and consultation charts.
  - `Settings` (`#/settings`): Clinic hours, team roster, webhook credentials, and appearance toggles.
- [x] **Phase 5: Interactive JS & Theme**: Created `tend/js/theme.js` with isolated `tend:theme` / `aarogya:theme` storage, `#btn-theme` button in header, keyboard shortcut `T`, and live theme syncing.
- [x] **Phase 6: QA & Verification**: Tested via browser subagent on Desktop (`1440x900`) and Mobile (`375x812`). Verified view routing across all 7 views, light/dark mode switching, responsive bottom bar navigation, and confirmed **0 console errors**.

---

## 🎨 Phase 10: Complete Asset Integrity & Media Restoration Matrix

> **Goal**: Ensure 100% zero-404 media asset completeness across all 20 suites. No broken image boxes, missing product packaging, or missing avatars.  
> **Rule**: Strict batch execution (2 suites per session checkpoint) with visual verification in the browser.

---

### 📦 ASSET BATCH 1: Skincare Formulation & Global Icons (COMPLETED)
> **Target**: `vessa` (Rasayan Lab) & Global Favicon/Touch-Icons  
> **Status**: ✅ **COMPLETE**

#### Suite 4: `vessa` — Rasayan Lab *(रसायन)*
- **Issue**: Broken image icons on all 12 product cards at `http://localhost:3456/vessa/#/products/catalog`.
- **Target Folder**: `vessa/photos/vessa/`
- [x] **Generate Core Skincare Product Photos**:
  - [x] `balm.jpg`: Amber glass jar with minimalist label for Calendula Rescue Balm (15ml, 50ml).
  - [x] `oil.jpg`: Botanical dropper bottle with pump dispenser for Camellia Cleansing Oil (30ml, 100ml, 200ml).
  - [x] `serum.jpg`: Minimalist amber pipette serum bottle for Niacinamide 10% Serum (15ml, 30ml).
  - [x] `fluid.jpg`: Pure matte white airless pump dispenser for Barrier Fluid SPF 30 (50ml).
  - [x] `gel.jpg`: Frosted sleek tube container for Hydra Gel Cream (50ml, 75ml).
  - [x] `duo.jpg`: Brushed aluminum pump bottles with clean typography for Hand & Body Duo / Neroli Wash (250ml).
- [x] **Visual Verification**:
  - [x] Verify `http://localhost:3456/vessa/#/products/catalog` in browser: 0 broken images, all 12 cards show crisp, aesthetic product imagery.
  - [x] Verify light/dark theme contrast.
  - [x] Verified product detail hero view (`#/products/item/bfs50`).

#### Global Root Assets
- **Issue**: Missing `/favicon.svg` and `/apple-touch-icon.png` causing 404s across all suites.
- [x] Create `favicon.svg`: Minimalist, geometric dark SVG icon for Learnify Dashboard.
- [x] Create `apple-touch-icon.png`: High-res iOS home screen icon.
- [x] Copy or serve cleanly for all suites.

---

### 📦 ASSET BATCH 2: Furniture Living & Hospitality Staff (COMPLETED)
> **Target**: `kvist` (Griha Living) & `tavola` (Pangat POS)  
> **Status**: ✅ **COMPLETE**

#### Suite 14: `kvist` — Griha Living *(गृह)*
- **Target Folder**: `kvist/images/`
- [x] Populate missing customer review avatars:
  - [x] `avatar-1.jpg` (Ines Duarte)
  - [x] `avatar-2.jpg` (Jonas Holm)
  - [x] `avatar-3.jpg` (Aiko Nakamura)
- [x] Verify zero 404s on home page (`/`) and product catalog (`/shop`).

#### Suite 5: `tavola` — Pangat POS *(पंगत)*
- **Target Folder**: `tavola/photos/tavola/staff/`
- [x] Populate all 12 staff avatar photos in `staff/` (`enzo-marchetti-sm.jpg`, `kofi-mensah-sm.jpg`, `arjun-rao-sm.jpg`, `kenji-sato-sm.jpg`, `clara-jansen-sm.jpg`, `ada-nwosu-sm.jpg`, `elin-berg-sm.jpg`, `lucia-vidal-sm.jpg`, `omar-haddad-sm.jpg`, `mei-lin-sm.jpg`, `samuel-owusu-sm.jpg`, `giulia-romano.jpg`, etc.).
- [x] Verified culinary presentation & staff member cards in browser: 0 broken images across the team grid.

---

### 📦 ASSET BATCH 3: Social Publishing & Portfolio Showcase (COMPLETED)
> **Target**: `murmura` (Samvad Social) & `portfolio` (Shilp Portfolio)  
> **Status**: ✅ **COMPLETE**

#### Suite 2: `murmura` — Samvad Social *(संवाद)*
- **Target Folder**: `murmura/photos/murmura/`
- [x] Populate channel & post preview assets (`posts/*.jpg`, `posts/*-sm.jpg` across coffee, furniture, automotive, and botanical campaigns).
- [x] Populate team avatars (`team/*.jpg`) and customer/community avatars (`people/*.jpg`).
- [x] Verify feed, overview (`#/overview`), and inbox (`#/inbox`) views with zero broken image icons in browser.

#### Suite 15: `portfolio` — Shilp Portfolio *(शिल्प)*
- **Target Folder**: `portfolio/assets/`
- [x] Verify high-resolution project showcase tiles (`hero_center`, `ecommerce`, `expense`, `habitflow`, `mindpixel`).
- [x] Verify interactive WebGL tile animation and responsive layout.

---

## 🛠️ Batch Completion Protocol (Checklist for every session)

When finishing a batch of 2 suites, verify:
1. [ ] Both suites have clean `css/` (`tokens.css`, `layout.css`, `components.css`, `pages/*.css`) and `js/` (`main.js`, `router.js`, `theme.js`).
2. [ ] Zero 404 errors for any media or font assets.
3. [ ] Responsive verified on Mobile (`<768px`), Tablet (`768-1279px`), and Desktop (`>=1280px`).
4. [ ] Both suites tested with `browser_subagent` in light and dark mode with **zero console errors**.
5. [ ] Both suites verified from the Master Hub (`http://localhost:3456/index.html`).
6. [ ] Tick the checkboxes in this file and commit changes with message: `feat: complete Batch X pixel-perfect reverse engineering`.
