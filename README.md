# Sarthak Dashboard Product Suites 🚀

A flagship collection of pixel-perfect, zero-dependency, ultra-modern web application suites built for omnichannel retail operations and multi-network social media management.

Featuring a master launcher portal, full Single Page Application (SPA) routing, real-time interactive charts, slide-out drawer sheets, ⌘K universal command palettes, elastic ink-pill navigation, and zero-flash multi-palette light/dark theming.

---

## 🌟 Included Suites

### 1. 🛍️ Corbel Omnichannel Retail Suite (`/corbel/`)
*Pixel-perfect clone & enhancement of Corbel demo.*
- **Interactive Semicircular Gauge**: Live health score gauge with animated SVG stroke transitions and channel performance metrics.
- **Dynamic Revenue & Analytics**: Dual-year revenue bar chart (`2025`/`2026`) with animated height transitions and hover tooltips.
- **Hourly Visitor Heatmap & Channel Donut**: Peak engagement heatmaps and sales channel breakdown.
- **13 Interactive SPA Pages**:
  - `Dashboard`, `Orders` (with slide-out order fulfillment sheets), `Products` (inventory meters & stock tracking), `Customers (CRM)`, `Analytics`, `Messages`, `Email Campaigns`, `Automations`, `Integrations`, `Workspace (Kanban boards)`, `Help Center`, `Feedback`, and `Settings`.
- **Theme Engine**: Instant toggle between Light & Dark themes, plus 4 curated palettes (`Mono`, `Pastel`, `Ocean`, `Sage`).

### 2. 📱 Murmura Social Media Management Suite (`/murmura/`)
*Pixel-perfect clone & enhancement of Murmura social suite.*
- **8-Network Multi-Publishing**: Schedule, draft, and publish to Instagram, Facebook, X, LinkedIn, TikTok, YouTube, Pinterest, and Threads.
- **Unified Social Inbox**: Real-time cross-platform conversation threads, comment responses, and direct messaging.
- **Multi-Tier Approval Workflows**: Role-based access control, pending review states, and publishing controls.
- **Visual Publishing Calendar**: Weekly and monthly view with campaign tags, time slot scheduling, and unscheduled drafts drawer.
- **Cross-Channel Analytics & Social Listening**: Follower growth, reach, sentiment analysis, and brand mention monitors.
- **Floating Dock & Ink Pill Navigation**: Physics-based tab indicators, quick action dock, and ambient background mesh gradient shaders.

### 3. 🌐 Master Portal Hub (`/index.html`)
- Unified executive landing page showcasing both product suites with live cards, feature highlights, and direct launch links.

---

## 🛠️ Quick Start

Zero build step or compilation required! Runs directly in any modern browser via static HTTP server:

```bash
# Using npx http-server
npx http-server -p 3456

# Or using Python
python -m http.server 3456
```

Open `http://localhost:3456` in your browser:
- Master Hub: `http://localhost:3456/`
- Corbel Retail Dashboard: `http://localhost:3456/corbel/#/dashboard`
- Murmura Social Media Suite: `http://localhost:3456/murmura/#/overview`

---

## 🎨 Technology Stack
- **Core**: Vanilla HTML5, Modern ECMAScript (ES6 Modules)
- **Styling**: Vanilla CSS with CSS Custom Properties tokens, responsive viewport queries, fluid physics animations
- **Vector Graphics**: Pure inline SVG icons, gauges, charts, and sparklines
- **Build**: Zero build step runtime (Vite production asset bundles)
