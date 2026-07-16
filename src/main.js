// CAD SKETCH By Ashir — Main JavaScript
// Stack: Vite + Vanilla JS
// Purpose: All interaction logic, canvas animation, dynamic rendering of data, slider, lightbox, contact form

/* ==========================================================================
   1. DATA — Services, Portfolio & Case Studies
   ========================================================================== */

const PROJECTS_2D = [
  { id: '2d_talib', title: 'Talib Hussain Project (2D Set)', tag: '2D Architectural Set', images: ['/assets/Talib_Hussain/1.jpeg', '/assets/Talib_Hussain/2.jpeg', '/assets/Talib_Hussain/3.jpeg', '/assets/Talib_Hussain/4.jpeg', '/assets/Talib_Hussain/5.jpeg', '/assets/Talib_Hussain/6.jpeg', '/assets/Talib_Hussain/7.jpeg', '/assets/Talib_Hussain/8.jpeg', '/assets/Talib_Hussain/9.jpeg', '/assets/Talib_Hussain/10.jpeg', '/assets/Talib_Hussain/11.jpeg', '/assets/Talib_Hussain/12.jpeg', '/assets/Talib_Hussain/13.jpeg', '/assets/Talib_Hussain/14.jpeg', '/assets/Talib_Hussain/15.jpeg'], cover: '/assets/Talib_Hussain/1.jpeg', desc: 'Comprehensive 15-page architectural set.' },
  { id: '2d_waris', title: 'Waris Ali Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/waris_1.jpeg', '/assets/2D_Designs/waris_2.jpeg', '/assets/2D_Designs/waris_3.jpeg'], cover: '/assets/2D_Designs/waris_1.jpeg', desc: 'Detailed 2D layout for Spanish Revival Villa.' },
  { id: '2d_afzal', title: 'Afzal Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/afzal.jpeg'], cover: '/assets/2D_Designs/afzal.jpeg', desc: 'Residential 2D Floor Plan.' },
  { id: '2d_anees', title: 'Anees Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/anees.jpeg'], cover: '/assets/2D_Designs/anees.jpeg', desc: 'Detailed residential layout.' },
  { id: '2d_hannan', title: 'Hannan Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/hannan.jpeg'], cover: '/assets/2D_Designs/hannan.jpeg', desc: 'Residential 2D Floor Plan.' },
  { id: '2d_haseeb', title: 'Haseeb Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/haseeb.jpeg'], cover: '/assets/2D_Designs/haseeb.jpeg', desc: '6 Marla Layout.' },
  { id: '2d_nabeel', title: 'Nabeel Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/nabeel.jpeg'], cover: '/assets/2D_Designs/nabeel.jpeg', desc: 'Residential 2D Floor Plan.' },
  { id: '2d_sajjad', title: 'Sajjad & Iqrar Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/sajjad and iqrar.jpeg'], cover: '/assets/2D_Designs/sajjad and iqrar.jpeg', desc: 'Dual-unit residential layout.' },
  { id: '2d_suleman', title: 'Suleman Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/suleman.jpeg'], cover: '/assets/2D_Designs/suleman.jpeg', desc: 'Narrow plot optimization plan.' },
  { id: '2d_hashmat', title: 'Syed Hashmat Residence (2D)', tag: '2D Architectural Plan', images: ['/assets/2D_Designs/syed_hashmat.jpeg'], cover: '/assets/2D_Designs/syed_hashmat.jpeg', desc: 'Residential 2D Floor Plan.' }
];

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

const PROJECTS = [
  { id: 'cafe', title: 'Café Project (England)', category: 'interior', tag: 'Interior Design', images: ['/assets/portfolio/interior/cafe_interior_4.webp', '/assets/portfolio/interior/cafe_interior_1.webp', '/assets/portfolio/interior/cafe_interior_2.webp', '/assets/portfolio/interior/cafe_interior_3.webp'], cover: '/assets/portfolio/interior/cafe_interior_4.webp' },
  { id: 'house2_3', title: 'Villa Elevation', category: 'exterior', tag: 'Exterior Design', images: ['/assets/portfolio/exterior/house_2_exterior_01.webp', '/assets/portfolio/exterior/house_2_exterior_02.webp', '/assets/portfolio/exterior/house_3_exterior_01.webp', '/assets/portfolio/exterior/house_3_exterior_02.webp'], cover: '/assets/portfolio/exterior/house_2_exterior_01.webp' },
  { id: 'house_gen1', title: 'Single Story Residence', category: 'exterior', tag: 'Exterior Design', images: ['/assets/portfolio/exterior/house_exterior0.webp'], cover: '/assets/portfolio/exterior/house_exterior0.webp', pdf2d: '/pdf/MR HASEEB 6 MARLA LAYOUT.pdf' },
  { id: 'wash_bed', title: 'Master Bedroom & Washroom (Canada Client)', category: 'interior', tag: 'Interior Design', images: ['/assets/portfolio/interior/bedroom_interior.webp', '/assets/portfolio/interior/washroom_interior.webp'], cover: '/assets/portfolio/interior/bedroom_interior.webp' },
  { id: 'house1', title: 'Luxury Villa Elevation with Spanish Tile Roof', category: 'exterior', tag: 'Exterior Design', images: ['/assets/portfolio/exterior/house_1_exterior_01.webp', '/assets/portfolio/exterior/house_1_exterior_02.webp', '/assets/portfolio/exterior/house_1_exterior_03.webp', '/assets/portfolio/exterior/house_1_exterior_04.webp'], cover: '/assets/portfolio/exterior/house_1_exterior_01.webp' },
  { id: 'house4', title: 'Spanish Revival Two-Story Villa', category: 'exterior', tag: 'Exterior Design', images: ['/assets/portfolio/exterior/house_4_exterior_01.webp', '/assets/portfolio/exterior/house_4_exterior_02.webp'], cover: '/assets/portfolio/exterior/house_4_exterior_01.webp', pdf2d: '/pdf/WARIS ALI DRAWINGS.pdf' },
  { id: 'conference_hall', title: 'Conference Room (Saudi Arabia Client)', category: 'interior', tag: 'Interior Design', images: ['/assets/portfolio/interior/conference_room_all.webp', '/assets/portfolio/interior/conference_room_interior_01.webp', '/assets/portfolio/interior/conference_room_interior_02.webp'], cover: '/assets/portfolio/interior/conference_room_all.webp' },
  { id: 'barber', title: 'Barber Shop (Dubai Client)', category: 'interior', tag: 'Interior Design', images: ['/assets/portfolio/interior/barber_interior_01.webp', '/assets/portfolio/interior/barber_interior_02.webp'], cover: '/assets/portfolio/interior/barber_interior_01.webp' },
  { id: 'house_gen2', title: 'Modernist Single Story Residence with Classical Accents', category: 'exterior', tag: 'Exterior Design', images: ['/assets/portfolio/exterior/house_exterior_11.webp'], cover: '/assets/portfolio/exterior/house_exterior_11.webp' },
  { id: 'living_suite', title: 'Minimalist Tech Office', category: 'interior', tag: 'Interior Design', images: ['/assets/portfolio/interior/interior_01.webp', '/assets/portfolio/interior/interior_02.webp'], cover: '/assets/portfolio/interior/interior_01.webp' },
  { id: 'house_gen3', title: 'Facade with Lawn', category: 'exterior', tag: 'Exterior Design', images: ['/assets/portfolio/exterior/house_exterior_22.webp'], cover: '/assets/portfolio/exterior/house_exterior_22.webp' },
  { id: 'int_lounge', title: 'Shop Lounge (Oman Client)', category: 'interior', tag: 'Interior Design', images: ['/assets/portfolio/interior/interior_04.webp'], cover: '/assets/portfolio/interior/interior_04.webp' },
  { id: 'house_gen4', title: 'Ultra Modern Cubic Villa Design', category: 'exterior', tag: 'Exterior Design', images: ['/assets/portfolio/exterior/house_exterior_33.webp'], cover: '/assets/portfolio/exterior/house_exterior_33.webp' },
  { id: 'int_lobby', title: 'Premium Lobby (Quetta Client)', category: 'interior', tag: 'Interior Design', images: ['/assets/portfolio/interior/lobby_interior.webp'], cover: '/assets/portfolio/interior/lobby_interior.webp' },
  { id: 'house_gen5', title: 'Modern Dual-Level Residential Elevation', category: 'exterior', tag: 'Exterior Design', images: ['/assets/portfolio/exterior/house_exterior_44.webp'], cover: '/assets/portfolio/exterior/house_exterior_44.webp' }
];

const CASE_STUDIES = [
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
  },
  {
    title: 'The Sajjad & Iqrar Residence',
    size: 'Approx. 7,200 SQ.FT',
    location: 'Upper Kurram, Parachinar',
    type: 'Residential Ground Floor (Dual Units)',
    features: ['6-Bedroom total (3+3 layout)', '3-Car Garage per unit', 'Modern TV Lounges', 'Private Verandahs & Entrances', 'Spacious Master Suites'],
    pdf: '/pdf/FINAL.pdf',
    review: '"Great work on designing a complex dual-unit residential project. The layout handles two separate family setups seamlessly."',
    author: 'Mr. Sajjad & Mr. Iqrar'
  },
  {
    title: 'The Hannan Residence',
    size: 'Approx. 1,900 SQ.FT',
    location: 'Parachinar',
    type: 'Residential Ground Floor',
    features: ['3-Bedroom layout', 'Modern TV-Lounge', 'Separate Dining & Kitchen', 'Side Yard Access', 'OTS Ventilation'],
    pdf: '/pdf/HANNAN GROUND FLOOR A2.pdf',
    review: '"Very efficient use of space. Ali provided a clear, professional blueprint that our builders found easy to follow."',
    author: 'Mr. Hannan'
  },
  {
    title: 'The Afzal Residence',
    size: 'Approx. 2,800 SQ.FT',
    location: 'Parachinar',
    type: 'Residential Ground Floor',
    features: ['4-Bedroom layout', 'Internal Verandahs', 'Separate Store', 'Electric Room', 'Open Yard Zones'],
    pdf: '/pdf/AFZAL SAHAB.pdf',
    review: '"Professional planning. Ali handled the complex room arrangements perfectly, making the layout feel spacious and organized."',
    author: 'Afzal Khan, Parachinar'
  },
  {
    title: 'The Anees Residence',
    size: 'Approx. 3,500 SQ.FT',
    location: 'Parachinar (Near Sports Complex)',
    type: 'Residential Ground Floor',
    features: ['3-Bedroom layout', 'Spacious TV Lounge', 'Dedicated Drawing Room', 'Double Verandah Access', 'Modern Kitchen & Bath Suites'],
    pdf: '/pdf/final anees sahab.pdf',
    review: '"An excellent design experience. The drawing and planning were very meticulous and met all our requirements."',
    author: 'Mr. Anees, Parachinar'
  },
  {
    title: 'The Suleman Residence',
    size: '2,132 SQ.FT',
    location: 'Parachinar',
    type: 'Residential Ground Floor',
    features: ['3-Bedroom layout', 'Master Bed + Dressing', 'TV-Lounge & Kitchen', 'Open Yard & Veranda', 'OTS Ventilation Zones'],
    pdf: '/pdf/MR. SULEMAN PROPOSAL.pdf',
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
    title: 'The Waris Ali Residence',
    size: 'Approx. 4,500 SQ.FT',
    location: 'Parachinar',
    type: 'Spanish Revival Two-Story Villa',
    features: ['Luxury 5-Bedroom layout', 'Spanish Revival Architecture', 'Detailed Front Elevation', 'Spacious Interior Planning', 'Full Technical Drawing Set'],
    pdf: '/pdf/WARIS ALI DRAWINGS.pdf',
    review: '"The Spanish Revival design is breathtaking. Ali captured every detail perfectly in the drawings."',
    author: 'Mr. Waris Ali, Parachinar'
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
  const villaElevationProject = PROJECTS.find(p => p.id === 'house2_3');
  const afterSrc = villaElevationProject ? villaElevationProject.images[0] : '/assets/portfolio/exterior/house_1_exterior_01.webp';
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
let visibleCount = 6; // Initially show 2 rows (assuming 3 per row)

function getFilteredProjects() {
  return currentFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === currentFilter);
}

function renderPortfolio(filter = 'all', resetCount = true) {
  const grid = document.getElementById('portfolioGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const showLessBtn = document.getElementById('showLessBtn');
  if (!grid) return;

  if (resetCount) {
    currentFilter = filter;
    visibleCount = 6;
  }

  const filtered = getFilteredProjects();

  // Show all projects on mobile, else use visibleCount
  const itemsToShow = (window.innerWidth < 768) ? filtered : filtered.slice(0, visibleCount);

  grid.innerHTML = itemsToShow.map((project, idx) => `
    <div class="portfolio-item" data-idx="${idx}" data-filter="${project.category}">
      <img src="${project.cover}" alt="${project.title}" loading="lazy" width="400" height="300">
      <div class="portfolio-overlay">
        <span class="portfolio-tag">${project.tag}</span>
        <h3>${project.title}</h3>
      </div>
    </div>
  `).join('');

  renderDots('portfolioGrid', 'dots3d', itemsToShow);

  // Update button visibility
  if (loadMoreBtn && showLessBtn) {
    const hasMore = filtered.length > visibleCount;
    const isExpanded = visibleCount > 6;

    // Hide buttons on mobile entirely
    if (window.innerWidth < 768) {
        loadMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
        showLessBtn.style.display = isExpanded ? 'block' : 'none';
    }
  }

  // Click to open lightbox
  grid.querySelectorAll('.portfolio-item').forEach(el => {
    el.addEventListener('click', () => {
      const itemIdx = parseInt(el.dataset.idx);
      const project = itemsToShow[itemIdx];
      openLightbox(project);
    });
  });
}

function initPortfolioActions() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const showLessBtn = document.getElementById('showLessBtn');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount = getFilteredProjects().length;
      renderPortfolio(currentFilter, false);
    });
  }

  if (showLessBtn) {
    showLessBtn.addEventListener('click', () => {
      renderPortfolio(currentFilter, true); // Resets to 6 items
      document.getElementById('portfolio-3d').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function initPortfolioFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPortfolio(btn.dataset.filter, true);
    });
  });
}

function openLightbox(project) {
  const existing = document.getElementById('lightboxModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.id = 'lightboxModal';

  // Carousel implementation
  modal.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close lightbox">✕</button>
      <div class="lightbox-carousel">
        <button class="carousel-nav prev">❮</button>
        <div class="carousel-track">
          ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
        </div>
        <button class="carousel-nav next">❯</button>
      </div>
      <div class="carousel-dots">
        ${project.images.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></span>`).join('')}
      </div>
      <div class="lightbox-caption">
        <h3>${project.title}</h3>
        <p>${project.tag}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Trigger reflow to apply animation
  requestAnimationFrame(() => {
    modal.classList.add('is-visible');
  });

  // Carousel Logic
  const track = modal.querySelector('.carousel-track');
  const slides = track.querySelectorAll('img');
  const dots = modal.querySelectorAll('.dot');
  let currentSlide = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
  }

  // Swipe logic
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) { // Swipe left
        currentSlide = (currentSlide + 1) % slides.length;
      } else { // Swipe right
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      }
      updateSlide();
    }
  }, { passive: true });

  modal.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  });
  modal.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.dataset.idx);
        updateSlide();
    });
  });

  const closeModal = () => {
    modal.classList.remove('is-visible');
    modal.addEventListener('transitionend', () => modal.remove(), { once: true });
  };

  modal.querySelector('.lightbox-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); }, { once: true });
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
    el.style.transition = `opacity 0.3s ${i * 0.02}s ease, transform 0.3s ${i * 0.02}s ease`;
    observer.observe(el);
  });
}

/* ==========================================================================
   10. CONTACT FORM — Build WhatsApp & Email message
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('clientContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName').value.trim();
    const projectType = document.getElementById('projectType').value;
    const area = document.getElementById('projectArea').value.trim();
    const details = document.getElementById('projectDetails').value.trim();

    const compiledMessage = `*New Project Enquiry — CAD SKETCH By Ashir*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📐 *Project Type:* ${projectType}\n` +
      `📏 *Covered Area:* ${area || 'Not specified'}\n` +
      `📝 *Requirements:*\n${details}`;

    const encoded = encodeURIComponent(compiledMessage);
    window.open(`https://wa.me/923170047813?text=${encoded}`, '_blank');
    
    // Optional: Reset form after sending
    form.reset();
  });
}

let visibleCount2d = 6; // Initially show 6 items

function renderPortfolio2D(resetCount = true) {
  const grid = document.getElementById('portfolio2dGrid');
  const loadMoreBtn = document.getElementById('loadMore2dBtn');
  const showLessBtn = document.getElementById('showLess2dBtn');
  if (!grid) return;
  
  if (resetCount) {
    visibleCount2d = 6;
  }

  // Show all projects on mobile, else use visibleCount2d
  const isMobile = window.innerWidth < 768;
  const itemsToShow = isMobile ? PROJECTS_2D : PROJECTS_2D.slice(0, visibleCount2d);
  
  grid.innerHTML = itemsToShow.map((project, idx) => `
    <div class="portfolio-item" data-idx="${idx}" data-filter="2d">
      <img src="${project.cover}" alt="${project.title}" loading="lazy" width="400" height="300">
      <div class="portfolio-overlay">
        <span class="portfolio-tag">${project.tag}</span>
        <h3>${project.title}</h3>
      </div>
    </div>
  `).join('');
  
  renderDots('portfolio2dGrid', 'dots2d', itemsToShow);

  // Update button visibility
  if (loadMoreBtn && showLessBtn) {
    const hasMore = PROJECTS_2D.length > visibleCount2d;
    const isExpanded = visibleCount2d > 6;
    
    // Hide buttons on mobile entirely
    if (isMobile) {
        loadMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
        showLessBtn.style.display = isExpanded ? 'block' : 'none';
    }
  }

  grid.querySelectorAll('.portfolio-item').forEach(el => {
    el.addEventListener('click', () => {
      const itemIdx = parseInt(el.dataset.idx);
      const project = itemsToShow[itemIdx];
      openLightbox(project);
    });
  });
}

// Add resize listener to handle orientation changes or window resizing
window.addEventListener('resize', () => {
    renderPortfolio2D(false);
    renderPortfolio('all', false);
});

function initPortfolioActions2d() {
  const loadMoreBtn = document.getElementById('loadMore2dBtn');
  const showLessBtn = document.getElementById('showLess2dBtn');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount2d = PROJECTS_2D.length;
      renderPortfolio2D(false);
    });
  }

  if (showLessBtn) {
    showLessBtn.addEventListener('click', () => {
      renderPortfolio2D(true); // Resets to 6 items
      document.getElementById('portfolio-2d').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function renderDots(gridId, dotsId, projects) {
  const dotsContainer = document.getElementById(dotsId);
  if (!dotsContainer) return;
  
  const totalDots = projects.length;
  dotsContainer.innerHTML = Array.from({length: totalDots}, (_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></span>`).join('');
  
  const grid = document.getElementById(gridId);
  grid.addEventListener('scroll', () => {
    updateActiveDot(grid, dotsContainer);
  }, { passive: true });
}

function updateActiveDot(grid, dotsContainer) {
    const scrollPos = grid.scrollLeft;
    const itemWidth = grid.offsetWidth * 0.85; 
    const activeIdx = Math.round(scrollPos / itemWidth);
    dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIdx);
    });
}

function initCaseStudiesCarousel() {
  const grid = document.getElementById('caseStudiesGrid');
  const prevBtn = document.querySelector('.carousel-nav-case.prev');
  const nextBtn = document.querySelector('.carousel-nav-case.next');
  
  if (!grid || !prevBtn || !nextBtn) return;
  
  const scrollAmount = 350 + 30; // Card width + gap

  prevBtn.addEventListener('click', () => {
    grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

/* ==========================================================================
   11. BOOT — Wire everything up when DOM is ready
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPortfolio('all');
  renderPortfolio2D();
  renderCaseStudies();

  initNavbar();
  initBlueprintCanvas();
  initSloganRotator();
  initBlueprintSlider();
  initPortfolioFilters();
  initPortfolioActions();
  initPortfolioActions2d();
  initCaseStudiesCarousel();
  initScrollReveal();
  initContactForm();
});
