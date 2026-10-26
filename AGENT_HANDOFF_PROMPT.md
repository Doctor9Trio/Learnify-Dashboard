# Sarthak Dashboard — Agent Handoff & Session Prompt Playbook

> **Instructions for Starting Any Batch in a New Agent Session Window or Delegating to a Junior Developer**  
> Use this playbook to execute the 1:1 pixel-perfect reverse engineering **2 suites at a time**.

---

## 🚀 How to Launch a New Session

When opening a new session window in the IDE, simply copy and paste the prompt template below, substituting the target **Batch Number** and **Suite Names**.

---

## 📋 Universal Prompt Template (Copy-Paste Ready)

```text
You are continuing the Sarthak Dashboard pixel-perfect reverse-engineering project.
We are executing suites strictly 2-AT-A-TIME to prevent context window saturation and guarantee 1:1 handcrafted fidelity matching the benchmarks in /corbel/ and /murmura/.

Your task is to execute BATCH [X]:
1. Suite [A]: [suite_a_code_name] — [Indian Brand Name] ([Domain])
2. Suite [B]: [suite_b_code_name] — [Indian Brand Name] ([Domain])

MANDATORY RULES & WORKFLOW:
1. Read the following documentation files first:
   - d:\Workspace\Dashboard\PIXEL_PERFECT_REA_WORKFLOW.md
   - d:\Workspace\Dashboard\BATCH_EXECUTION_CHECKLIST.md
   - Reference implementations: d:\Workspace\Dashboard\corbel\ and d:\Workspace\Dashboard\murmura\

2. TECHNICAL STACK (STRICT):
   - Pure HTML5, Vanilla CSS (custom properties), Vanilla JS (ES6 modules).
   - ZERO external libraries, ZERO npm dependencies, ZERO build step, ZERO Tailwind.
   - Entry point for each suite: d:\Workspace\Dashboard\<suite_name>\index.html.

3. ARCHITECTURE FOR EACH SUITE:
   - Deconstruct raw bundles into modular directories:
     * <suite_name>/css/tokens.css (exact colors, radii, fonts, light/dark variables)
     * <suite_name>/css/reset.css
     * <suite_name>/css/layout.css (sidebar, topbar, mobile nav)
     * <suite_name>/css/components.css (buttons, badges, pills, cards, inputs)
     * <suite_name>/css/pages/*.css (individual view stylesheets)
     * <suite_name>/css/animations.css (timing curves, keyframes)
     * <suite_name>/css/responsive.css (<768px, 768-1279px, >=1280px)
     * <suite_name>/js/main.js (application entry & lifecycle)
     * <suite_name>/js/router.js (hash-based SPA routing)
     * <suite_name>/js/theme.js (zero-flash dark/light switcher + localStorage)
     * <suite_name>/js/store.js & <suite_name>/js/components/*.js (interactive logic, charts)

4. STEP-BY-STEP EXECUTION FOR EACH OF THE 2 SUITES:
   a. Run REA inspection: `node bin/rea-inspector.mjs <suite_name>`
   b. Extract tokens, layout, and component stylesheets.
   c. Wire Vanilla ES6 router, theme toggle, and component controllers.
   d. Verify all assets (images, SVGs, fonts) return HTTP 200 with zero missing assets.
   e. Test via browser at http://localhost:3456/<suite_name>/ on Desktop (1440px) and Mobile (375px).
   f. Verify light and dark mode instant toggling with zero flash.
   g. Ensure browser console has ZERO uncaught errors.

5. COMPLETION:
   - Update d:\Workspace\Dashboard\BATCH_EXECUTION_CHECKLIST.md and tick the completed checkboxes.
   - Commit changes to Git with: `git commit -m "feat: complete Batch [X] pixel-perfect reverse engineering"`
   - Push to origin main.
```

---

## 🎯 Quick Batch Reference Table

Use this table to quickly find the parameters for any batch:

| Batch | Suite 1 | Suite 2 | Indian Brand 1 | Indian Brand 2 | Domain 1 / Domain 2 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **Batch 1** | `kinby` | `vessa` | **Kutumb Money** *(कुटुम्ब)* | **Rasayan Lab** *(रसायन)* | Family Treasury / Skincare Science |
| **Batch 2** | `tavola` | `ivora` | **Pangat POS** *(पंगत)* | **Dantika Clinic** *(दन्तिका)* | Restaurant POS / Dental EHR |
| **Batch 3** | `cadra` | `noria` | **Karkhana ERP** *(कारख़ाना)* | **Parivahan OS** *(परिवहन)* | Manufacturing ERP / Logistics Flow |
| **Batch 4** | `mender` | `ledge` | **Karigar Service** *(कारीगर)* | **Bahi Khata** *(बही खाता)* | Support CRM / Shop Cash Register |
| **Batch 5** | `gesso` | `solum` | **Srijan Studio** *(सृजन)* | **Bhoomi Outdoors** *(भूमि)* | Creative Studio / Outdoor E-Commerce |
| **Batch 6** | `stride` | `kvist` | **Gati Fitness** *(गति)* | **Griha Living** *(गृह)* | GPS Fitness / Home Decor Catalog |
| **Batch 7** | `portfolio` | `camber` | **Daksh Dev** *(दक्ष)* | **Yantra Auto** *(यंत्र)* | Developer Portfolio / High-Performance Auto |
| **Batch 8** | `strada` | `vanta` | **Yatra Mobility** *(यात्रा)* | **Kaala Studio** *(काला)* | Chauffeur Fleet / Cinematic Audio |
| **Batch 9** | `nero` | `tend` | **Mishri 3D** *(मिश्री)* | **Aarogya Clinic** *(आरोग्य)* | 3D Confectionery / Clinic Practice |

---

## 🔍 Pre-Flight & Post-Flight Checklist for New Agents

### Before Starting a Batch:
1. Ensure the local dev server is running on `http://localhost:3456/` (or run `npx serve -l 3456 .`).
2. Run `git status` to verify the working directory is clean.
3. Check [`BATCH_EXECUTION_CHECKLIST.md`](file:///d:/Workspace/Dashboard/BATCH_EXECUTION_CHECKLIST.md) to confirm the previous batch is checked off.

### Before Marking a Batch Complete:
1. Open the suite in the browser using `browser_subagent` or direct browser inspection.
2. Check console logs for errors.
3. Resize to 375px width to test mobile bottom navigation.
4. Verify the suite is accessible from the Master Portal Hub at `http://localhost:3456/index.html`.
5. Check off the items in [`BATCH_EXECUTION_CHECKLIST.md`](file:///d:/Workspace/Dashboard/BATCH_EXECUTION_CHECKLIST.md).
