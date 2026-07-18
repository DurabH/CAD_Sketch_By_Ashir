# CAD SKETCH By Ashir — Professional Architectural Design Portfolio

A high-performance, responsive portfolio website built for **Ali Ashir**, a professional AutoCAD Designer and Architectural Draftsman. This project showcases architectural layout sets, 3D renderings, and technical documentation with a focus on speed, user experience, and SEO optimization.

---

## 🚀 Project Overview

**CAD SKETCH By Ashir** is a custom-built, single-page application (SPA) portfolio designed to bridge the gap between technical drafting and modern web presentation. The primary goal of this project was to create a fast, lightweight, and visually immersive experience for potential clients to view architectural floor plans (2D) and photorealistic elevations (3D).

### Key Features
*   **Performance First:** Built with Vite and Vanilla JavaScript/CSS for near-instant load times and high Lighthouse scores.
*   **Interactive Showcases:** Includes a custom "Blueprint-to-Reality" slider (2D to 3D comparison) and interactive portfolio lightboxes.
*   **SEO Optimized:** Comprehensive meta-tags, JSON-LD structured data (LocalBusiness schema), and optimized asset delivery for search engine visibility.
*   **Asset Optimization:** All client assets were converted to `.webp` format, reducing visual load times by ~80% without quality loss.
*   **Lead Generation:** Integrated WhatsApp and email conversion funnels directly into the project design.

---

## 🛠️ Tech Stack & Decisions

| Layer | Technology | Reason |
| :--- | :--- | :--- |
| **Core Engine** | Vite + Vanilla JS | Minimalist approach, eliminates heavy framework overhead. |
| **Styling** | Vanilla CSS | Custom properties, responsive grid, modular transitions. |
| **Assets** | WebP | Massive compression gains while retaining visual fidelity. |
| **Build Tool** | Vite | Ultra-fast development server and optimized production bundling. |

---

## 📁 Repository Structure

```text
CAD_Sketch_By_Ashir/
├── public/                 # Static assets (PDFs, icons)
├── src/
│   ├── assets/             # Optimized WebP portfolio & logo images
│   ├── styles/             # Modular CSS: main.css, about.css
│   └── main.js             # Core logic: sliders, canvas, filtering
├── index.html              # SEO-optimized entry point with JSON-LD
├── vite.config.js          # Vite build & optimization config
└── package.json            # Script controls & dependency management
```

---

## 👨‍💻 Developer Guide

To set up and work on this project locally, follow these steps:

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16+ recommended)
*   [npm](https://www.npmjs.com/)

### Installation & Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DurabH/CAD_Sketch_By_Ashir.git
    cd CAD_Sketch_By_Ashir
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

---

## 🛡️ License
This project is for professional portfolio purposes. All design assets and technical drawings are the property of Ali Ashir.

---

*Designed & Built for Ali Ashir.*
