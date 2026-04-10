/* ============================================================
   CANVAS PARTICLE BACKGROUND
   ============================================================ */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(
      Math.floor((canvas.width * canvas.height) / 14000),
      90
    );
    for (let i = 0; i < count; i++) {
      particles.push({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        r:       Math.random() * 1.2 + 0.2,
        vx:      (Math.random() - 0.5) * 0.14,
        vy:      (Math.random() - 0.5) * 0.14,
        opacity: Math.random() * 0.1 + 0.02,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width)  p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 133, 161, ${p.opacity * 0.5})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); createParticles(); }, 200);
  });

  resize();
  createParticles();
  draw();
}

/* ============================================================
   TYPING ANIMATION
   ============================================================ */
function initTyping() {
  const el = document.getElementById('typed');
  if (!el) return;

  const phrases = [
    'Firmware Engineer',
    'Algorithm Enthusiast',
    'Systems Thinker',
    'Lifelong Learner',
    'Problem Solver',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;

  function tick() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 2400);
        return;
      }
      setTimeout(tick, 75);
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, 450);
        return;
      }
      setTimeout(tick, 40);
    }
  }

  setTimeout(tick, 1600);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNav() {
  const nav        = document.getElementById('nav');
  const hamburger  = document.getElementById('nav-hamburger');
  const mobileNav  = document.getElementById('mobile-nav');
  const progressEl = document.getElementById('progress-bar');
  const navLinks   = document.querySelectorAll('.nav-links a');
  const sections   = document.querySelectorAll('section[id]');

  /* Scroll: progress bar + scrolled class + active link */
  function onScroll() {
    const scrollY = window.scrollY;

    // Nav appearance
    nav.classList.toggle('scrolled', scrollY > 40);

    // Progress bar
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progressEl.style.width = (docH > 0 ? (scrollY / docH) * 100 : 0) + '%';

    // Active section highlight
    let current = '';
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* Hamburger toggle */
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* Smooth scroll + close mobile nav on link click */
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href.startsWith('#')) return;
      e.preventDefault();
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ============================================================
   SCROLL REVEAL  (IntersectionObserver)
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = `${i * 0.07}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initTyping();
  initNav();
  initReveal();
});
