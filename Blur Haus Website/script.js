/* =========================================================
   BLUR HAUS MEDIA · script.js
   Loader · Custom cursor · Scroll reveals · Page transitions ·
   Photo parallax · Marquee speed control
   ========================================================= */

(function () {
  'use strict';

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('is-gone'), 100);
      setTimeout(() => loader.classList.add('is-removed'), 1300);
    });
    // Fallback in case load already fired
    if (document.readyState === 'complete') {
      setTimeout(() => loader.classList.add('is-gone'), 100);
      setTimeout(() => loader.classList.add('is-removed'), 1300);
    }
  }

  /* ---------- CUSTOM CURSOR ---------- */
  const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;
  if (!isTouch) {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');

    if (dot && ring) {
      let mx = window.innerWidth / 2, my = window.innerHeight / 2;
      let rx = mx, ry = my;

      window.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      });

      function tick() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        requestAnimationFrame(tick);
      }
      tick();

      // Hover state on interactive elements
      const interactiveSelectors = 'a, button, .card, .tier, input, textarea, select, label';
      document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
      });

      window.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
      window.addEventListener('mouseenter', () => { dot.style.opacity = 1; ring.style.opacity = 1; });
    }
  }

  /* ---------- HERO WORD STAGGER ---------- */
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const words = heroTitle.querySelectorAll('.word');
    words.forEach((w, i) => {
      w.style.animationDelay = (0.4 + i * 0.09) + 's';
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('in-view'));
  }

  /* ---------- SMOOTH PAGE TRANSITIONS ---------- */
  const internalLinks = document.querySelectorAll('a[href]');
  internalLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Only intercept same-origin, non-anchor, non-mailto, non-tel links
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
    link.addEventListener('click', (e) => {
      // allow modifier keys / new tab
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || link.target === '_blank') return;
      e.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(() => { window.location.href = href; }, 380);
    });
  });

  /* ---------- ABOUT PHOTO PARALLAX ---------- */
  const photoEl = document.querySelector('.about-hero-photo img');
  if (photoEl && !isTouch) {
    let ticking = false;
    function updateParallax() {
      const rect = photoEl.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      const visible = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      const offset = (visible - 0.5) * 40; // -20 to +20 px
      photoEl.style.transform = `translateY(${offset - 30}px)`;
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    updateParallax();
  }

})();
