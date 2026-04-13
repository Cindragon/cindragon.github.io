/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  en: {
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.skills':     'Skills',
    'nav.contact':    'Contact',

    'hero.scroll': 'scroll',

    'about.title': 'About',
    'about.p1': 'From Western Literature to Firmware Engineering — my path is built on the belief that the most capable engineers are shaped by more than just code.',
    'about.p2': 'I hold a <strong>Master\'s in Network Learning Technology</strong> from National Central University, and recently served as a <strong>UEFI Firmware Developer</strong> at Pegatron Corporation — writing, testing, and debugging low-level firmware.',
    'about.p3': 'Before that, I spent nearly two years managing the Cool English educational platform at NTNU, where our team grew it to <strong>over 1 million registered users</strong>. I also built Python automation tools that cut administrative workload by 80%, turning hours of manual work into one-line commands.',
    'about.p4': 'Today, I stay sharp through consistent algorithm practice and continue pushing myself to understand systems at their deepest level.',
    'about.stat.leetcode': 'LeetCode Problems',
    'about.stat.projects': 'Projects',
    'about.stat.toeic':    'TOEIC Score',
    'about.stat.ielts':    'IELTS Band',

    'exp.title':      'Experience &amp; Education',
    'exp.badge.work': 'Work',
    'exp.badge.edu':  'Education',

    'exp1.title': 'UEFI Firmware Developer',
    'exp1.org':   'Pegatron Corporation · Taipei, Taiwan',
    'exp1.li1':   'Customized and delivered UEFI firmware builds based on customer and platform requirements.',
    'exp1.li2':   'Modified and maintained UEFI firmware source code for functional adjustments and bug fixes.',
    'exp1.li3':   'Performed firmware validation via smoke tests and stress tests to ensure system stability.',
    'exp1.li4':   'Analyzed UEFI logs and test results to identify and resolve firmware-related issues.',

    'exp2.title': 'Project Assistant — Cool English Platform',
    'exp2.org':   'National Taiwan Normal University (NTNU) · Taipei, Taiwan',
    'exp2.li1':   'Led team in planning and executing online events and competitions, growing monthly active users by ~5%.',
    'exp2.li2':   'Organized 5 online competitions attracting 56,000+ participants with 17,000+ award recipients.',
    'exp2.li3':   'Grew platform to 260,000+ new registrations in two years, reaching 1 million users in 2022.',
    'exp2.li4':   'Built a Python automation script for data processing, reducing admin workload by 80%.',

    'edu1.title': 'M.S. in Network Learning Technology',
    'edu1.org':   'National Central University (NCU) · Taoyuan, Taiwan',
    'edu2.title': 'B.A. in Western Language and Literature',
    'edu2.org':   'National University of Kaohsiung (NUK) · Kaohsiung, Taiwan',

    'proj.title':  'Projects',
    'proj1.title': 'LeetCode Practice',
    'proj1.desc':  'Systematically solving 400+ algorithm problems in C++ and Python. Topics span arrays, binary trees, dynamic programming, sorting, graphs, and more. All solutions are organized and documented on GitHub as a growing reference.',
    'proj2.title': 'Mini Games Compilation',
    'proj2.desc':  'A multi-game compilation integrating Snake, Doodle Jump, and Tetris built with C++ OOP and the SFML library. Features scoring, level progression, and a high-score record system. Practiced the full software lifecycle from design through optimization.',
    'proj3.title': 'Cool English Project',
    'proj3.desc':  'Led the planning and execution of 5 online English competitions for the Cool English platform, attracting 56,000+ participants. Organized logistics, coordinated with stakeholders, and implemented a Python automation tool that reduced administrative workload by 80%.',

    'skills.title':         'Skills &amp; Certifications',
    'skills.cat.lang':      'Programming Languages',
    'skills.cat.systems':   'Systems &amp; Tools',
    'skills.cat.cert':      'Certificate',
    'skills.cat.languages': 'Languages',

    'contact.title': 'Contact',
    'contact.intro': 'You can contact me at any time!',
    'contact.btn':   'Start a Conversation',

    'footer.crafted': 'Crafted with HTML, CSS &amp; vanilla JavaScript',

    typing: ['Firmware Engineer', 'Algorithm Enthusiast', 'Systems Thinker', 'Lifelong Learner', 'Problem Solver'],
  },

  zh: {
    'nav.about':      '關於我',
    'nav.experience': '經歷',
    'nav.projects':   '專案',
    'nav.skills':     '技能',
    'nav.contact':    '聯絡',

    'hero.scroll': '向下捲動',

    'about.title': '關於我',
    'about.p1': '我叫蔡鎮鴻，陰錯陽差之下，從西洋文學的領域中跨足至軟體工程，從此開始踏上工程師的道路。',
    'about.p2': '我擁有國立中央大學的<strong>網路學習科技碩士學位</strong>，並曾任職於和碩聯合科技擔任 <strong>UEFI 韌體開發工程師</strong>，負責撰寫、測試及除錯底層韌體。',
    'about.p3': '在此之前，我在台師大任職，擔任 Cool English 平臺專案助理近兩年，帶領團隊將平台成長至<strong>超過百萬名註冊用戶</strong>。我也開發了 Python 自動化工具，將行政作業時間縮減 80%，讓繁瑣的手動流程化為指令。',
    'about.p4': '現在，我持續透過演算法練習保持敏銳，並持續學習新的技術與知識。',
    'about.stat.leetcode': 'LeetCode 題目',
    'about.stat.projects': '專案數量',
    'about.stat.toeic':    '多益成績',
    'about.stat.ielts':    '雅思分數',

    'exp.title':      '經歷與學歷',
    'exp.badge.work': '工作',
    'exp.badge.edu':  '學歷',

    'exp1.title': 'UEFI 韌體開發工程師',
    'exp1.org':   '和碩聯合科技 · 台北，台灣',
    'exp1.li1':   '根據客戶與平台需求，客製化並交付 UEFI 韌體建置。',
    'exp1.li2':   '修改並維護 UEFI 韌體原始碼，進行功能調整與錯誤修復。',
    'exp1.li3':   '透過冒煙測試與壓力測試執行韌體驗證，確保系統穩定性。',
    'exp1.li4':   '分析 UEFI 日誌與測試結果，識別並解決韌體相關問題。',

    'exp2.title': '專案助理 — 酷英語平台',
    'exp2.org':   '國立台灣師範大學 (NTNU) · 台北，台灣',
    'exp2.li1':   '帶領團隊規劃並執行線上活動與競賽，每月活躍用戶成長約 5%。',
    'exp2.li2':   '舉辦 5 場線上競賽，吸引超過 56,000 名參與者，17,000 人以上獲獎。',
    'exp2.li3':   '兩年內新增逾 26 萬名註冊用戶，於 2022 年達成百萬用戶里程碑。',
    'exp2.li4':   '開發 Python 自動化腳本處理資料，將行政工作量降低 80%。',

    'edu1.title': '網路學習科技 碩士',
    'edu1.org':   '國立中央大學 (NCU) · 桃園，台灣',
    'edu2.title': '西洋語文學系 學士',
    'edu2.org':   '國立高雄大學 (NUK) · 高雄，台灣',

    'proj.title':  '專案',
    'proj1.title': 'LeetCode 演算法練習',
    'proj1.desc':  '系統性地以 C++ 與 Python 解題，累積 400+ 道演算法題目，涵蓋陣列、二元樹、動態規劃、排序、圖等主題。所有解題過程均整理於 GitHub，持續更新作為個人參考資料庫。',
    'proj2.title': '小遊戲合集',
    'proj2.desc':  '以 C++ 物件導向程式設計與 SFML 函式庫開發，整合貪吃蛇、Doodle Jump 與俄羅斯方塊三款遊戲。具備計分、關卡進度與最高分紀錄系統，完整實踐從設計到優化的軟體開發生命週期。',
    'proj3.title': '酷英語專案',
    'proj3.desc':  '主導規劃並執行酷英平台的 5 場線上英語競賽，吸引超過 56,000 名參與者。負責跨團隊溝通、協調時程以及規劃專案內容，並實作 Python 自動化工具，將行政工作量降低 80%。',

    'skills.title':         '技能與證照',
    'skills.cat.lang':      '程式語言',
    'skills.cat.systems':   '系統與工具',
    'skills.cat.cert':      '證照',
    'skills.cat.languages': '語言能力',

    'contact.title': '聯絡我',
    'contact.intro': '隨時歡迎與我聯繫！',
    'contact.btn':   '開始對話',

    typing: ['韌體工程師', '演算法愛好者', '系統思考者', '終身學習者', '問題解決者'],
  },
};

/* ============================================================
   LANGUAGE STATE & TOGGLE
   ============================================================ */
let currentLang = 'en';
let typingGen   = 0;

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';

  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';
  localStorage.setItem('lang', lang);

  // Restart typing with new language phrases
  const typedEl = document.getElementById('typed');
  if (typedEl) { typedEl.textContent = ''; startTyping(typedEl, 0); }
}

function initLang() {
  const saved = localStorage.getItem('lang') || 'en';
  if (saved !== 'en') applyLang(saved);

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'zh' : 'en');
    });
  }
}

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
function startTyping(el, delay) {
  const gen = ++typingGen;
  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;

  function tick() {
    if (typingGen !== gen) return; // cancelled by language switch
    const phrases = translations[currentLang].typing;
    const current = phrases[phraseIdx % phrases.length];

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

  setTimeout(tick, delay !== undefined ? delay : 0);
}

function initTyping() {
  const el = document.getElementById('typed');
  if (!el) return;
  startTyping(el, 1600);
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
  initLang();
});
