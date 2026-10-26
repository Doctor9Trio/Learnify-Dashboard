# Developer Onboarding & "Continue" Protocol

> **Instructions for Any Developer or AI Agent Joining This Project**  
> Just say **"Continue"** to automatically pick up the next batch of 2 suites.

---

## ⚡ Quick Start for Developers & Agents

If you just opened this project and want to continue the work, follow these automated steps:

### 1. Check REA Tool Availability
Run the REA inspector on the target suite to extract design tokens and verify asset integrity:
```bash
node bin/rea-inspector.mjs <suite_name>
```
*If not yet scaffolded with modular files, add `--scaffold`:*
```bash
node bin/rea-inspector.mjs <suite_name> --scaffold
```

### 2. Check Active Batch
Open [`BATCH_EXECUTION_CHECKLIST.md`](BATCH_EXECUTION_CHECKLIST.md) to see which batch is currently marked **"NEXT UP FOR EXECUTION"** (strictly **2 suites per session**).

### 3. Follow the 6-Phase REA Workflow
Open [`PIXEL_PERFECT_REA_WORKFLOW.md`](PIXEL_PERFECT_REA_WORKFLOW.md) and implement:
- `css/tokens.css` & `css/reset.css`
- `css/layout.css` & `css/responsive.css`
- `css/components.css` & `css/pages/*.css`
- `js/main.js`, `js/router.js`, `js/theme.js`, `js/store.js`
- Pure HTML5, Vanilla CSS custom properties, Vanilla ES6 modules. ZERO external libraries, ZERO build step.

### 4. Visual Verification (QA)
Test locally on `http://localhost:3456/<suite>/`:
- Desktop (`>= 1280px`), Tablet (`768-1279px`), Mobile (`< 768px`).
- Dark/Light mode toggle with zero flash.
- Check browser console: **0 errors required**.

### 5. Tick Checklist & Commit
- Tick the checkboxes in [`BATCH_EXECUTION_CHECKLIST.md`](BATCH_EXECUTION_CHECKLIST.md).
- Commit and push to Git:
  ```bash
  git add .
  git commit -m "feat: complete Batch [X] pixel-perfect reverse engineering"
  git push origin main
  ```
