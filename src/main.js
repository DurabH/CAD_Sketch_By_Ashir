// CAD SKETCH By Ashir — Main JavaScript
// Stack: Vite + Vanilla JS
// Purpose: All interaction logic, canvas animation, dynamic rendering of data, slider, lightbox, contact form

import '/src/styles/main.css';

/* ==========================================================================
   1. DATA — Services, Portfolio & Case Studies
   ========================================================================== */

const SERVICES = [
  {
    icon: '📐',
    title: '2D & 3D Layout Planning',
    desc: 'Spatially optimized, standard-compliant floor plans for residential and commercial builds — from furniture to partition layouts.',
    ref: 'Backed by real client proposals: up to 3,780 sq.ft covered'
  },
  {
    icon: '🏠',
    title: '3D Front Elevations',
    desc: 'Stunning daytime and dusk photorealistic exterior facade renderings that bring your building design to life.',
    ref: 'Multi-story residential house renders available'
  },
  {
    icon: '🛋️',
    title: 'Interior & Exterior Designing',
    desc: 'Full photorealistic 3D interior design for bedrooms, lobbies, cafes, conference rooms, barber shops, and washrooms.',
    ref: 'Commercial & residential interior portfolios'
  },
  {
    icon: '📋',
    title: 'TMA Approval Files',
    desc: 'Complete, submission-ready architectural sets including site plans, sewerage layouts, septic tanks, and elevation sheets.',
    ref: 'Full 36-page municipal drawing sets delivered'
  }
];

const PORTFOLIO_ITEMS = [
  // Exterior Designs
  { src: '/src/assets/portfolio/exterior/house_exterior0.webp',     title: 'Modern Double Story', category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_exterior_11.webp',   title: 'Contemporary Residence',    category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_exterior_22.webp',   title: 'Facade with Lawn',          category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_exterior_33.webp',   title: 'Villa Elevation',           category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_exterior_44.webp',   title: 'Corner Plot Design',        category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_1_exterior_01.webp', title: 'House 1 – Front View',      category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_1_exterior_02.webp', title: 'House 1 – Side View',       category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_1_exterior_03.webp', title: 'House 1 – Evening Render',  category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_1_exterior_04.webp', title: 'House 1 – Street View',     category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_2_exterior_01.webp', title: 'House 2 – Main Elevation',  category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_2_exterior_02.webp', title: 'House 2 – Gate View',       category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_3_exterior_01.webp', title: 'House 3 – Front',           category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_3_exterior_02.webp', title: 'House 3 – Side',            category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_4_exterior_01.webp', title: 'House 4 – Elevation A',     category: 'exterior', tag: 'Exterior Design' },
  { src: '/src/assets/portfolio/exterior/house_4_exterior_02.webp', title: 'House 4 – Elevation B',     category: 'exterior', tag: 'Exterior Design' },
  // Interior Designs
  { src: '/src/assets/portfolio/interior/lobby_interior.webp',              title: 'Premium Lobby',           category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/cafe_interior_1.webp',             title: 'Café — Main Hall',        category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/cafe_interior_2.webp',             title: 'Café — Counter View',     category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/cafe_interior_3.webp',             title: 'Café — Seating Area',     category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/cafe_interior_4.webp',             title: 'Café — Detail Shot',      category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/conference_room_all.webp',         title: 'Conference Room – Full',  category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/conference_room_interior_01.webp', title: 'Conference – Head Table', category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/conference_room_interior_02.webp', title: 'Conference – Side View',  category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/bedroom_interior.webp',            title: 'Master Bedroom Suite',    category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/barber_interior_01.webp',          title: 'Barber Shop — Main',      category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/barber_interior_02.webp',          title: 'Barber Shop — Angle',     category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/interior_01.webp',                 title: 'Living Space – Style A',  category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/interior_02.webp',                 title: 'Living Space – Style B',  category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/interior_03.webp',                 title: 'Hallway & Passage',       category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/interior_04.webp',                 title: 'Open Plan Lounge',        category: 'interior', tag: 'Interior Design' },
  { src: '/src/assets/portfolio/interior/washroom_interior.webp',           title: 'Premium Washroom',        category: 'interior', tag: 'Interior Design' }
];

const CASE_STUDIES = [
  {
    title: 'The Suleman Residence',
    size: '2,132 SQ.FT',
    location: 'Parachinar',
    type: 'Residential Ground Floor',
    features: ['3-Bedroom layout', 'Master Bed + Dressing', 'TV-Lounge & Kitchen', 'Open Yard & Veranda', 'OTS Ventilation Zones'],
    pdf: null,
    review: '"Exceptional attention to space optimization! Ali designed a perfect layout that maximized our narrow plot while maintaining excellent ventilation. Timely and professional."',
    author: 'Mr. Suleman, Parachinar'
  },
  {
    title: 'The Mohammad Nabeel Proposal',
    size: '3,780 SQ.FT',
    location: 'Parachinar',
    type: 'Residential Ground Floor',
    features: ['Large Master Suite', 'Guest Room + Lounge', 'Side & Back Lawns', 'Main Entrance Foyer Area', 'Media Wall Integration'],
    pdf: '/pdf/MR. NABEEL PROPOSAL.pdf',
    review: '"Very detailed drawings. The spacing is incredibly comfortable and the visual structure is perfect. Ali completed changes I requested within hours."',
    author: 'Mr. M. Nabeel, Parachinar'
  },
  {
    title: 'Talib Hussain Architectural Set',
    size: '4,810 SQ.FT Total',
    location: 'Sukkur',
    type: 'Full Structural & Planning Set (36 Pages)',
    features: ['Ground + First Floor + Mumty', 'Double-Heighted Living Room', 'Internal Bridge Connections', 'Complete Drainage & Sewerage', 'TMA Submission-Ready'],
    pdf: '/pdf/MR.TALIB HUSSAIN (SUKKUR) ARCHITECTURAL DRAWING SET.pdf',
    review: '"Ali delivered a massive 36-sheet blueprint set covering structure, plumbing, and elevations. It passed TMA approval without a single query. Absolutely brilliant work!"',
    author: 'Mr. Talib Hussain, Sukkur'
  },
  {
    title: 'The Syed Hashmat Residence',
    size: 'Standard Plot',
    location: 'Parachinar (Budlial)',
    type: 'Residential Final Floor Plan',
    features: ['4 Bedrooms Layout', 'Dual Entry Gates', 'Car Porch & Parking', 'Open Verandah & Back Gallery', 'C.Bath & Dedicated Passage'],
    pdf: '/pdf/SYED HASHMAT FINAL.pdf',
    review: '"Highly recommend Ali Ashir for home mapping. He understands local building codes perfectly and designed our parking and yards beautifully."',
    author: 'Syed Hashmat, Parachinar'
  }
];

const SLOGANS = [
  'Expert 2D Layouts & Photorealistic 3D Renders.',
  'Quality Work. Timely Delivery.',
  'Precision in Planning. Perfection in Execution.',
  'Turning Concept Sketches into Structural Realities.',
  'TMA-Compliant Layouts. Submission-Ready Accuracy.'
];

/* ==========================================================================
   2. NAVBAR — Scroll-aware transparency & Active section tracking
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.header');
  const navToggle = document.getElementById('navToggleBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll shrink/glaze effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Mobile hamburger toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  // Active link tracking via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = { rootMargin: '-40% 0px -55% 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

function updateActiveNavLink() {
  // Fallback scroll-based tracking
}

/* ==========================================================================
   3. BLUEPRINT CANVAS — Animated interactive CAD grid
   ========================================================================== */
function initBlueprintCanvas() {
  const canvas = document.getElementById('cadGridCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, mouse = { x: -9999, y: -9999 };
  const CELL_SIZE = 40;
  const PARTICLE_COUNT = 60;
  const particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  // Floating CAD particles (dots at grid intersections)
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(229, 169, 60, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('resize', resize, { passive: true });
  resize();

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Background grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += CELL_SIZE) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += CELL_SIZE) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    // Grid dots at intersections
    for (let x = 0; x < width; x += CELL_SIZE) {
      for (let y = 0; y < height; y += CELL_SIZE) {
        const dist = Math.hypot(x - mouse.x, y - mouse.y);
        const glow = Math.max(0, 1 - dist / 180);
        ctx.beginPath();
        ctx.arc(x, y, 1 + glow * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 169, 60, ${0.08 + glow * 0.6})`;
        ctx.fill();
      }
    }

    // Draw particles
    particles.forEach(p => { p.update(); p.draw(); });

    // Connect nearby particles with faint lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(197, 160, 89, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================================
   4. HERO SLOGAN ROTATOR — Smooth fade cycle
   ========================================================================== */
function initSloganRotator() {
  const el = document.getElementById('rotatingSlogan');
  if (!el) return;
  let idx = 0;

  function rotate() {
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => {
      idx = (idx + 1) % SLOGANS.length;
      el.textContent = SLOGANS[idx];
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400);
  }

  setInterval(rotate, 3200);
}

/* ==========================================================================
   5. SERVICES GRID — Render from data
   ========================================================================== */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <span class="service-ref">✦ ${s.ref}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   6. 2D ↔ 3D BLUEPRINT SLIDER — Drag interaction
   ========================================================================== */
function initBlueprintSlider() {
  const slider = document.getElementById('blueprintSlider');
  const handle = document.getElementById('sliderHandle');
  const afterImg = document.getElementById('sliderAfterImg');
  if (!slider || !handle || !afterImg) return;

  // Set a real 3D render image as the "after" background
  const afterSrc = '/src/assets/portfolio/exterior/house_1_exterior_01.webp';
  afterImg.style.backgroundImage = `url('${afterSrc}')`;
  afterImg.style.backgroundSize = 'cover';
  afterImg.style.backgroundPosition = 'center';

  let isDragging = false;
  let pos = 50; // percentage

  function setPosition(pct) {
    pos = Math.min(95, Math.max(5, pct));
    handle.style.left = `${pos}%`;
    afterImg.style.clipPath = `inset(0 0 0 ${pos}%)`;
  }

  function getPercent(clientX) {
    const rect = slider.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  handle.addEventListener('mousedown', () => { isDragging = true; });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (isDragging) setPosition(getPercent(e.clientX));
  });

  // Touch support
  handle.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });
  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (isDragging) setPosition(getPercent(e.touches[0].clientX));
  }, { passive: true });

  setPosition(50);
}

/* ==========================================================================
   7. PORTFOLIO GRID — Filterable rendering with Lightbox
   ========================================================================== */
let currentFilter = 'all';

function renderPortfolio(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  currentFilter = filter;

  const filtered = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  grid.innerHTML = filtered.map((item, idx) => `
    <div class="portfolio-item" data-idx="${idx}" data-filter="${item.category}">
      <img src="${item.src}" alt="${item.title}" loading="lazy" width="400" height="300">
      <div class="portfolio-overlay">
        <span class="portfolio-tag">${item.tag}</span>
        <h3>${item.title}</h3>
      </div>
    </div>
  `).join('');

  // Click to open lightbox
  grid.querySelectorAll('.portfolio-item').forEach(el => {
    el.addEventListener('click', () => {
      const itemIdx = parseInt(el.dataset.idx);
      const item = filtered[itemIdx];
      openLightbox(item.src, item.title, item.tag);
    });
  });
}

function initPortfolioFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPortfolio(btn.dataset.filter);
    });
  });
}

function openLightbox(src, title, tag) {
  const existing = document.getElementById('lightboxModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.id = 'lightboxModal';
  modal.style.display = 'flex';
  modal.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close lightbox">✕</button>
      <img src="${src}" alt="${title}">
      <div class="lightbox-caption">
        <h3>${title}</h3>
        <p>${tag}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('.lightbox-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.remove(); }, { once: true });
}

/* ==========================================================================
   8. CASE STUDIES — Render from data
   ========================================================================== */
function renderCaseStudies() {
  const grid = document.getElementById('caseStudiesGrid');
  if (!grid) return;

  grid.innerHTML = CASE_STUDIES.map(cs => `
    <div class="case-card">
      <div class="case-header">
        <h3>${cs.title}</h3>
        <span class="case-size">${cs.size}</span>
      </div>
      <div class="case-specs">
        <div class="spec-item"><strong>📍 Location:</strong> ${cs.location}</div>
        <div class="spec-item"><strong>📂 Type:</strong> ${cs.type}</div>
        <div class="spec-item"><strong>✦ Key Features:</strong></div>
        ${cs.features.map(f => `<div class="spec-item" style="padding-left:16px">— ${f}</div>`).join('')}
      </div>
      ${cs.pdf ? `
        <div class="case-download">
          <a href="${cs.pdf}" download class="btn btn-secondary btn-download">
            ⬇ Download Technical Drawing Set (PDF)
          </a>
        </div>
      ` : ''}
      <div class="review-blockquote">
        <p class="review-text">${cs.review}</p>
        <span class="review-author">— ${cs.author}</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   9. SCROLL REVEAL — Animate elements into view using IntersectionObserver
   ========================================================================== */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.service-card, .portfolio-item, .case-card, .stat-item, .method-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ${i * 0.05}s ease, transform 0.5s ${i * 0.05}s ease`;
    observer.observe(el);
  });
}

/* ==========================================================================
   10. CONTACT FORM — Build WhatsApp & Email message
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('clientContactForm');
  const successMsg = document.getElementById('formSuccessMsg');
  const whatsappBtn = document.getElementById('sendWhatsAppBtn');
  const emailBtn = document.getElementById('sendEmailBtn');
  if (!form) return;

  let compiledMessage = '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName').value.trim();
    const projectType = document.getElementById('projectType').value;
    const area = document.getElementById('projectArea').value.trim();
    const details = document.getElementById('projectDetails').value.trim();

    compiledMessage = `*New Project Enquiry — CAD SKETCH By Ashir*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📐 *Project Type:* ${projectType}\n` +
      `📏 *Covered Area:* ${area || 'Not specified'}\n` +
      `📝 *Requirements:*\n${details}`;

    form.style.display = 'none';
    successMsg.style.display = 'flex';
  });

  whatsappBtn?.addEventListener('click', () => {
    const encoded = encodeURIComponent(compiledMessage);
    window.open(`https://wa.me/923170047813?text=${encoded}`, '_blank');
  });

  emailBtn?.addEventListener('click', () => {
    const subject = encodeURIComponent('Project Enquiry — CAD SKETCH By Ashir');
    const body = encodeURIComponent(compiledMessage.replace(/\*/g, ''));
    window.open(`mailto:ashir313ali@gmail.com?subject=${subject}&body=${body}`, '_blank');
  });
}

/* ==========================================================================
   11. BOOT — Wire everything up when DOM is ready
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPortfolio('all');
  renderCaseStudies();

  initNavbar();
  initBlueprintCanvas();
  initSloganRotator();
  initBlueprintSlider();
  initPortfolioFilters();
  initScrollReveal();
  initContactForm();
});
