'use strict';

// ============================================================
// DATA LOADER
// ============================================================
async function loadContent() {
  try {
    const response = await fetch('data/content.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error('[EduFuture] Gagal memuat content.json:', err.message);
    return null;
  }
}

// ============================================================
// MOBILE NAV TOGGLE
// ============================================================
function initMobileNav() {
  const nav = document.getElementById('main-nav');
  const toggleBtn = document.querySelector('.js-nav-toggle');
  if (!nav || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// SMOOTH SCROLL
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('.js-smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href?.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ============================================================
// SCROLL REVEAL — Intersection Observer
// ============================================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.js-reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

// ============================================================
// STICKY HEADER — IntersectionObserver pada sentinel
// ============================================================
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  // Sentinel tipis diletakkan tepat di bawah header sebagai penanda posisi scroll
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.height = '1px'; // functional size for IntersectionObserver, not visual styling
  header.insertAdjacentElement('afterend', sentinel);

  new IntersectionObserver(
    ([entry]) => header.classList.toggle('is-scrolled', !entry.isIntersecting),
    { threshold: 0 }
  ).observe(sentinel);
}

// ============================================================
// COURSE CATALOG — Render & Filter
// ============================================================
function buildCourseCard(course) {
  return `
    <article class="course-card js-course-card" data-category="${course.category}">
      <div class="course-card__icon" aria-hidden="true">${course.icon}</div>
      <div class="course-card__body">
        <span class="course-card__badge">${course.level}</span>
        <h3 class="course-card__title">${course.title}</h3>
        <p class="course-card__desc">${course.description}</p>
      </div>
      <div class="course-card__footer">
        <span class="course-card__duration">
          <i class="fa-regular fa-clock" aria-hidden="true"></i>
          ${course.duration_minutes} menit
        </span>
        <button class="btn-enroll js-enroll-btn" data-course-id="${course.id}" data-course-title="${course.title}">
          Daftar
        </button>
      </div>
    </article>
  `.trim();
}

function initCourseCatalog(courses) {
  const grid = document.querySelector('.js-course-grid');
  const filterBtns = document.querySelectorAll('.js-filter-btn');
  if (!grid || !filterBtns.length) return;

  grid.innerHTML = courses.map(buildCourseCard).join('');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      grid.querySelectorAll('.js-course-card').forEach(card => {
        const isMatch = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !isMatch);
      });
    });
  });

  // Event delegation untuk tombol daftar
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.js-enroll-btn');
    if (!btn) return;

    const title = btn.dataset.courseTitle;
    btn.textContent = 'Terdaftar ✓';
    btn.classList.add('is-enrolled');
    btn.disabled = true;

    console.info(`[EduFuture] Pengguna mendaftar: ${title}`);
  });
}

// ============================================================
// EVENT SCHEDULE — Render tabel
// ============================================================
function formatEventDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function initSchedule(scheduleItems) {
  const tbody = document.querySelector('.js-schedule-tbody');
  if (!tbody) return;

  tbody.innerHTML = scheduleItems
    .map(
      item => `
      <tr class="schedule-row">
        <td data-label="Tanggal">${formatEventDate(item.event_date)}</td>
        <td data-label="Kegiatan">${item.event_name}</td>
        <td data-label="Kategori">
          <span class="schedule-badge schedule-badge--${item.category}">${item.category}</span>
        </td>
        <td data-label="Mode">
          <span class="schedule-mode schedule-mode--${item.mode}">${item.mode}</span>
        </td>
        <td data-label="Waktu">${item.event_time}</td>
      </tr>
    `.trim()
    )
    .join('');
}

// ============================================================
// TESTIMONIAL SLIDER
// ============================================================
function buildTestimonialSlide(testimonial) {
  const stars = '<i class="fa-solid fa-star" aria-hidden="true"></i>'.repeat(testimonial.rating);
  const initial = testimonial.name.charAt(0).toUpperCase();

  return `
    <div class="testimonial-slide js-testimonial-slide" role="group" aria-label="Ulasan dari ${testimonial.name}">
      <div class="testimonial-card">
        <div class="testimonial-card__rating" aria-label="Rating: ${testimonial.rating} dari 5">
          ${stars}
        </div>
        <blockquote class="testimonial-card__content">"${testimonial.content}"</blockquote>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar" aria-hidden="true">${initial}</div>
          <div>
            <p class="testimonial-card__name">${testimonial.name}</p>
            <p class="testimonial-card__role">${testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  `.trim();
}

function initTestimonialSlider(testimonials) {
  const track = document.querySelector('.js-testimonial-track');
  const prevBtn = document.querySelector('.js-slide-prev');
  const nextBtn = document.querySelector('.js-slide-next');
  const dotsContainer = document.querySelector('.js-slider-dots');
  if (!track || !prevBtn || !nextBtn) return;

  track.innerHTML = testimonials.map(buildTestimonialSlide).join('');

  const total = testimonials.length;
  let currentIndex = 0;
  let autoPlayTimer;

  if (dotsContainer) {
    dotsContainer.innerHTML = testimonials
      .map(
        (_, i) =>
          `<button class="slider-dot js-slider-dot${i === 0 ? ' is-active' : ''}"
            data-index="${i}"
            aria-label="Tampilkan ulasan ${i + 1}">
          </button>`
      )
      .join('');
  }

  function goToSlide(index) {
    currentIndex = ((index % total) + total) % total;
    // translateX dinamis berdasarkan kalkulasi index — dikecualikan dari aturan no-inline-style
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dotsContainer?.querySelectorAll('.js-slider-dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentIndex);
    });
  }

  function startAutoPlay() {
    autoPlayTimer = setInterval(() => goToSlide(currentIndex + 1), 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayTimer);
  }

  prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    goToSlide(currentIndex - 1);
    startAutoPlay();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoPlay();
    goToSlide(currentIndex + 1);
    startAutoPlay();
  });

  dotsContainer?.addEventListener('click', (e) => {
    const dot = e.target.closest('.js-slider-dot');
    if (!dot) return;
    stopAutoPlay();
    goToSlide(parseInt(dot.dataset.index, 10));
    startAutoPlay();
  });

  const sliderSection = document.getElementById('testimonial-slider');
  sliderSection?.addEventListener('mouseenter', stopAutoPlay);
  sliderSection?.addEventListener('mouseleave', startAutoPlay);

  // Touch/swipe support untuk mobile
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 50) return; // abaikan swipe terlalu pendek
    stopAutoPlay();
    goToSlide(delta > 0 ? currentIndex + 1 : currentIndex - 1);
    startAutoPlay();
  });

  startAutoPlay();
}

// ============================================================
// FAQ ACCORDION
// ============================================================
function buildFAQItem(faq, index) {
  return `
    <div class="faq-item js-faq-item">
      <button
        class="faq-question js-faq-question"
        aria-expanded="false"
        aria-controls="faq-answer-${index}"
        id="faq-question-${index}"
      >
        <span>${faq.question}</span>
        <i class="fa-solid fa-chevron-down faq-icon" aria-hidden="true"></i>
      </button>
      <div
        class="faq-answer js-faq-answer"
        id="faq-answer-${index}"
        role="region"
        aria-labelledby="faq-question-${index}"
      >
        <p>${faq.answer}</p>
      </div>
    </div>
  `.trim();
}

function initFAQ(faqs) {
  const accordion = document.getElementById('faq-accordion');
  if (!accordion) return;

  accordion.innerHTML = faqs.map(buildFAQItem).join('');

  accordion.addEventListener('click', (e) => {
    const questionBtn = e.target.closest('.js-faq-question');
    if (!questionBtn) return;

    const clickedItem = questionBtn.closest('.js-faq-item');
    const isAlreadyOpen = clickedItem.classList.contains('is-open');

    // Tutup semua item (one-open-at-a-time accordion)
    accordion.querySelectorAll('.js-faq-item').forEach(item => {
      item.classList.remove('is-open');
      item.querySelector('.js-faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isAlreadyOpen) {
      clickedItem.classList.add('is-open');
      questionBtn.setAttribute('aria-expanded', 'true');
    }
  });
}

// ============================================================
// INIT
// ============================================================
async function init() {
  initMobileNav();
  initSmoothScroll();
  initScrollReveal();
  initStickyHeader();

  const data = await loadContent();
  if (!data) return;

  initCourseCatalog(data.courses);
  initSchedule(data.schedule);
  initTestimonialSlider(data.testimonials);
  initFAQ(data.faq);
}

document.addEventListener('DOMContentLoaded', init);
