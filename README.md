# CAD SKETCH By Ashir - Professional AutoCAD Designer Portfolio

A high-performance, visually striking, and SEO-optimized portfolio website built for **Ali Ashir**, a professional AutoCAD Designer and Architectural Draftsman.

---

## 🛠️ Technical Stack & Decisions
*   **Core Engine:** **Vite + Vanilla HTML/CSS/JS**
    *   *Why?* To maintain ultra-clean, minimal code, eliminating massive modern framework boilerplate (React/Next.js). This ensures instantaneous loading speeds, smooth scroll animations, and perfect Google Lighthouse scores.
*   **Styling:** **Vanilla CSS** with CSS Custom Properties (Variables) for direct layout control, modular transitions, and clean theme changes.
*   **Assets Optimization (Anti-Lag Strategy):** All client JPEGs have been pre-converted to modern **WebP format** (compressing sizes by ~80% with zero detail loss). PDFs are served as static download files, preventing initial page-load bloat.
*   **Architecture:** **Single-Page Application (SPA)** using responsive scroll anchoring, custom sliders, and interactive modal/lightbox views for deep catalog browsing.

---

## 🎨 Theme & Branding
*   **Colors:** Derived directly from the client's service card layout. Uses a rich obsidian black/grey base with warm amber and metallic gold highlights:
    *   Primary Background: `#07080a` (Obsidian Black)
    *   Secondary Background: `#0f1216` (Slate Grey)
    *   Primary Accent: `#e5a93c` (Golden Amber)
    *   Secondary Accent: `#c5a059` (Metallic Gold Accent)
*   **Typography:** Technical sans-serif header pairing:
    *   Headings: `Space Grotesk` (gives a technical CAD blueprint feel)
    *   Body: `Outfit` (clean, geometric, highly legible spacing)

---

## 📁 Workspace Directory Structure
```text
CAD_Sketch/
├── public/                 # Static assets copied directly to build root
│   └── pdf/                # Client PDF plans (Nabeel, Suleman, Talib, Hashmat)
├── src/
│   ├── assets/             # Optimized WebP assets
│   │   ├── logo/           # Branding logos & service card WebPs
│   │   └── portfolio/      # Categorized Interior & Exterior design WebPs
│   ├── styles/
│   │   └── main.css        # Core stylesheet, variables, resets, and media queries
│   └── main.js             # Interaction logic & blueprint canvas renderer
├── index.html              # Fully SEO-optimized HTML entry point with JSON-LD schema
├── package.json            # Node script controls
└── vite.config.js          # Vite assets optimization & server configuration
```

---

## 🚀 Progress Milestone 1 (30% Complete)
We have completed the foundation setup. What is done so far:
1.  **Project Shell & Configs:** Set up `.gitignore`, `package.json`, and configured `vite.config.js` for optimal chunk bundling.
2.  **SEO & Schema Markup:** Created `index.html` structure with structured SEO keywords, OpenGraph meta properties, preloaded Google font hooks, and a custom **JSON-LD Schema (LocalBusiness)** block for search engines.
3.  **Visual Design Token System:** Created `src/styles/main.css` detailing all typography, colors, resets, grid layouts, responsive queries, and transition specs.
4.  **Image Optimization:** Created a Python asset-compressor and converted all 30+ project drawings into optimized `.webp` format.
5.  **Statically Served PDFs:** Structured and copied the client's mapbook drawing PDFs to the public directory for fast download linking.

---

## 💻 Developer Commands
To run this website locally or build for production:

*   **Install dependencies:**
    ```bash
    npm install
    ```
*   **Start Local Dev Server:**
    ```bash
    npm run dev
    ```
*   **Compile Production Assets:**
    ```bash
    npm run build
    ```
