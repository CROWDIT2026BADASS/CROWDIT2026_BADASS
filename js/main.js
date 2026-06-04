'use strict';

const FALLBACK_DATA = {
  "courses": [
    {
      "id": 1,
      "category": "matematika",
      "title": "Aljabar Dasar",
      "description": "Pelajari konsep variabel, persamaan linear, dan fungsi dari nol hingga mahir.",
      "level": "Pemula",
      "duration_minutes": 120,
      "icon": "📐"
    },
    {
      "id": 2,
      "category": "matematika",
      "title": "Kalkulus & Turunan",
      "description": "Memahami limit, turunan, dan integral untuk persiapan kuliah sains dan teknik.",
      "level": "Menengah",
      "duration_minutes": 180,
      "icon": "📊"
    },
    {
      "id": 3,
      "category": "sains",
      "title": "Fisika Mekanika",
      "description": "Hukum Newton, gerak parabola, dan energi mekanik dijelaskan secara visual dan intuitif.",
      "level": "Pemula",
      "duration_minutes": 150,
      "icon": "⚛️"
    },
    {
      "id": 4,
      "category": "sains",
      "title": "Kimia Organik",
      "description": "Memahami struktur molekul, reaksi substitusi, dan eliminasi dalam kimia organik.",
      "level": "Menengah",
      "duration_minutes": 160,
      "icon": "🧪"
    },
    {
      "id": 5,
      "category": "bahasa",
      "title": "Bahasa Inggris Sehari-hari",
      "description": "Percakapan praktis, tata bahasa dasar, dan kosakata untuk komunikasi harian.",
      "level": "Pemula",
      "duration_minutes": 90,
      "icon": "💬"
    },
    {
      "id": 6,
      "category": "bahasa",
      "title": "Public Speaking",
      "description": "Teknik berbicara di depan umum, storytelling, dan manajemen rasa gugup.",
      "level": "Menengah",
      "duration_minutes": 100,
      "icon": "🎤"
    },
    {
      "id": 7,
      "category": "teknologi",
      "title": "Dasar Pemrograman Python",
      "description": "Variabel, kondisional, perulangan, dan fungsi — fondasi berpikir komputasional.",
      "level": "Pemula",
      "duration_minutes": 200,
      "icon": "🐍"
    },
    {
      "id": 8,
      "category": "teknologi",
      "title": "Web Development Dasar",
      "description": "HTML, CSS, dan JavaScript dasar untuk membangun halaman web pertamamu.",
      "level": "Pemula",
      "duration_minutes": 240,
      "icon": "🌐"
    },
    {
      "id": 9,
      "category": "seni",
      "title": "Desain Grafis Digital",
      "description": "Prinsip desain, teori warna, dan tipografi menggunakan tools desain modern.",
      "level": "Pemula",
      "duration_minutes": 130,
      "icon": "🎨"
    },
    {
      "id": 10,
      "category": "matematika",
      "title": "Statistika & Probabilitas",
      "description": "Distribusi data, uji hipotesis, dan analisis regresi untuk kebutuhan riset.",
      "level": "Lanjutan",
      "duration_minutes": 210,
      "icon": "📈"
    }
  ],
  "schedule": [
    {
      "event_name": "Webinar: Strategi Belajar Efektif di Era Digital",
      "category": "umum",
      "event_date": "2026-06-10",
      "event_time": "09.00 - 11.00 WIB",
      "mode": "online"
    },
    {
      "event_name": "Workshop Python untuk Pemula",
      "category": "teknologi",
      "event_date": "2026-06-14",
      "event_time": "13.00 - 16.00 WIB",
      "mode": "online"
    },
    {
      "event_name": "Kelas Intensif Aljabar & Persiapan UTBK",
      "category": "matematika",
      "event_date": "2026-06-18",
      "event_time": "08.00 - 12.00 WIB",
      "mode": "offline"
    },
    {
      "event_name": "Seminar Kimia: Dunia di Balik Molekul",
      "category": "sains",
      "event_date": "2026-06-22",
      "event_time": "10.00 - 12.00 WIB",
      "mode": "online"
    },
    {
      "event_name": "Bootcamp Desain Grafis — Batch 3",
      "category": "seni",
      "event_date": "2026-06-28",
      "event_time": "09.00 - 17.00 WIB",
      "mode": "offline"
    },
    {
      "event_name": "Talk Show: Karier di Bidang Teknologi",
      "category": "teknologi",
      "event_date": "2026-07-05",
      "event_time": "14.00 - 16.00 WIB",
      "mode": "online"
    }
  ],
  "testimonials": [
    {
      "name": "Rina Septiani",
      "role": "Mahasiswa Teknik Informatika",
      "content": "EduTech benar-benar mengubah cara saya belajar pemrograman. Materinya mudah dipahami dan bisa diakses kapan saja tanpa harus install aplikasi berat.",
      "rating": 5
    },
    {
      "name": "Budi Santoso",
      "role": "Guru SMA Negeri 3",
      "content": "Sebagai pengajar, saya terkesan dengan kualitas konten dan kemudahan navigasinya. Saya rekomendasikan ke semua murid saya untuk belajar mandiri di sini.",
      "rating": 5
    },
    {
      "name": "Citra Dewi",
      "role": "Pelajar SMA, Kelas 12",
      "content": "Jadwal webinar dan kelasnya sangat membantu persiapan UTBK saya. Penjelasan dari instruktur jelas dan langsung ke inti pembahasan.",
      "rating": 4
    },
    {
      "name": "Andi Firmansyah",
      "role": "Fresh Graduate, Jurusan Ekonomi",
      "content": "Kursus Public Speaking di EduTech sangat membantu saya dalam menghadapi sesi wawancara kerja. Materi praktis dan bisa langsung diaplikasikan.",
      "rating": 5
    },
    {
      "name": "Dewi Lestari",
      "role": "Desainer Freelance",
      "content": "Saya mulai belajar desain grafis dari nol lewat EduTech. Sekarang saya sudah bisa mengerjakan proyek klien sendiri. Platform terbaik untuk belajar mandiri!",
      "rating": 5
    }
  ],
  "faq": [
    {
      "question": "Apakah semua kelas di EduTech gratis?",
      "answer": "Ya, EduTech adalah platform purwarupa (prototype) yang dirancang untuk mendemonstrasikan kemudahan akses pendidikan. Semua konten yang tersedia saat ini dapat diakses secara gratis tanpa perlu membuat akun."
    },
    {
      "question": "Apakah saya perlu menginstal aplikasi untuk mengakses EduTech?",
      "answer": "Tidak perlu! EduTech dirancang sebagai platform berbasis web yang ringan. Cukup buka melalui peramban (Chrome, Firefox, Safari, Edge) di perangkat apapun — desktop, tablet, maupun smartphone."
    },
    {
      "question": "Bagaimana cara mendaftar ke sebuah kelas?",
      "answer": "Cukup klik tombol 'Daftar' pada kartu kelas yang kamu minati di bagian Katalog Kelas. Kamu akan langsung terdaftar dan mendapat akses ke materi tersebut."
    },
    {
      "question": "Apakah ada sertifikat setelah menyelesaikan kelas?",
      "answer": "Fitur sertifikat dijadwalkan hadir pada pengembangan berikutnya. Pada versi prototype ini, fokus kami adalah kemudahan akses materi dan kenyamanan pengalaman belajar."
    },
    {
      "question": "Bagaimana cara mendaftar webinar atau kelas offline?",
      "answer": "Temukan kegiatan yang kamu inginkan di bagian Jadwal Kegiatan, lalu hubungi tim EduTech melalui informasi kontak yang tersedia. Kami akan mengirimkan detail pendaftaran dan tautan kegiatan melalui email."
    },
    {
      "question": "Apakah materi di EduTech cocok untuk semua tingkat kemampuan?",
      "answer": "Ya. Setiap kelas memiliki label tingkat kesulitan (Pemula, Menengah, Lanjutan) sehingga kamu bisa memilih materi yang paling sesuai dengan kemampuan dan tujuan belajarmu saat ini."
    },
    {
      "question": "Bisakah saya mengakses EduTech di smartphone?",
      "answer": "Tentu saja! EduTech dibangun dengan prinsip mobile-first dan responsif penuh. Tampilan dan fungsionalitas berjalan optimal di semua ukuran layar, termasuk smartphone dengan lebar layar di bawah 576px."
    }
  ]
};

// ============================================================
// DATA LOADER
// ============================================================
async function loadContent() {
  try {
    const response = await fetch('data/content.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (err) {
    console.warn('[EduTech] Gagal memuat content.json via fetch, menggunakan fallback local data:', err.message);
    return FALLBACK_DATA;
  }
}

// ============================================================
// FULLSCREEN CHAPTER MENU & NAVIGATION
// ============================================================
function initFullscreenMenu() {
  const menu = document.getElementById('fullscreen-menu');
  const toggleBtn = document.querySelector('.js-nav-toggle');
  const closeBtn = document.querySelector('.js-menu-close');
  const menuLinks = document.querySelectorAll('.js-menu-link');
  const selector = document.querySelector('.menu-nav-selector');
  const navCol = document.querySelector('.menu-nav-col');

  if (!menu || !toggleBtn) return;

  function openMenu() {
    menu.classList.add('is-open');
    document.body.classList.add('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.add('is-closing');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (selector) selector.classList.remove('is-visible');
    
    setTimeout(() => {
      menu.classList.remove('is-closing');
    }, 400);
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Handle Chapter click for Cinematic Transition
  const chapterCards = document.querySelectorAll('.js-chapter-card');
  const splatterTransition = document.getElementById('splatter-transition');
  const finalScene = document.getElementById('final-cinematic-scene');

  function triggerCinematicTransition(e) {
    if (!splatterTransition || !finalScene) {
      closeMenu();
      return;
    }

    // Get the title of the clicked card and update the final scene text
    if (e && e.currentTarget) {
      const cardTitle = e.currentTarget.querySelector('.chapter-card__title');
      const finalSceneText = finalScene.querySelector('h2');
      if (cardTitle && finalSceneText) {
        finalSceneText.innerHTML = `SELAMAT DATANG <br> DI KELAS ${cardTitle.innerText}`;
      }
    }

    // Trigger splatter transition
    splatterTransition.classList.add('is-active');

    // Hide menu after a short delay to match splatter animation
    setTimeout(() => {
      closeMenu();
      finalScene.classList.add('is-visible');
    }, 300);

    // Remove splatter transition after it finishes
    setTimeout(() => {
      splatterTransition.classList.remove('is-active');
    }, 1500);
  }

  chapterCards.forEach(card => {
    card.addEventListener('click', triggerCinematicTransition);
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      
      // Simulate page transition with loading overlay
      const loader = document.getElementById('loading-overlay');
      if (loader) {
        loader.classList.add('is-active');
        
        setTimeout(() => {
          closeMenu();
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          
          setTimeout(() => {
            loader.classList.remove('is-active');
          }, 800); // Hide loader after 800ms
        }, 600); // Wait for loader to appear
      } else {
        closeMenu();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    link.addEventListener('mouseenter', () => {
      if (!selector || !navCol) return;
      
      const linkLi = link.closest('li');
      const indexVal = linkLi.dataset.index || '10';
      
      const liRect = linkLi.getBoundingClientRect();
      const parentRect = navCol.getBoundingClientRect();
      const topOffset = liRect.top - parentRect.top + (liRect.height / 2) - (selector.getBoundingClientRect().height / 2);
      
      selector.style.top = `${topOffset}px`;
      selector.querySelector('.selector-number').textContent = indexVal;
      selector.classList.add('is-visible');
    });
  });

  const linksList = document.querySelector('.menu-nav-links');
  if (linksList && selector) {
    linksList.addEventListener('mouseleave', () => {
      selector.classList.remove('is-visible');
    });
  }

  menu.addEventListener('click', (e) => {
    if (e.target === menu || e.target.classList.contains('menu-backdrop')) {
      closeMenu();
    }
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
  sentinel.style.height = '1px'; // ukuran fungsional, bukan styling visual
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
    <div class="col-md-6 col-lg-4 course-card-wrapper js-course-card" data-category="${course.category}">
      <article class="card h-100 bg-dark text-white border-0 border-start border-danger border-4 rounded-0 shadow-sm transition-smooth course-card-hover">
        <div class="card-body p-4 d-flex flex-column">
          <div class="fs-1 mb-4" aria-hidden="true">${course.icon}</div>
          <span class="badge bg-danger text-uppercase tracking-wider align-self-start mb-3 font-heading">${course.level}</span>
          <h3 class="card-title font-display fs-2 text-uppercase mb-3">${course.title}</h3>
          <p class="card-text text-secondary mb-4 flex-grow-1 font-body">${course.description}</p>
        </div>
        <div class="card-footer bg-transparent border-secondary d-flex justify-content-between align-items-center p-4">
          <span class="text-white font-heading">
            <i class="fa-regular fa-clock" aria-hidden="true"></i> ${course.duration_minutes} menit
          </span>
          <button class="btn btn-outline-danger text-uppercase tracking-wider fw-bold rounded-0 js-enroll-btn" data-course-id="${course.id}" data-course-title="${course.title}">
            Daftar
          </button>
        </div>
      </article>
    </div>
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

    console.info(`[EduTech] Pengguna mendaftar: ${title}`);
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
        <td data-label="Tanggal" class="p-4">${formatEventDate(item.event_date)}</td>
        <td data-label="Kegiatan" class="p-4 text-white">${item.event_name}</td>
        <td data-label="Kategori" class="p-4">
          <span class="badge bg-secondary text-uppercase">${item.category}</span>
        </td>
        <td data-label="Mode" class="p-4">
          <span class="badge ${item.mode === 'online' ? 'bg-success' : 'bg-warning text-dark'} text-uppercase">${item.mode}</span>
        </td>
        <td data-label="Waktu" class="p-4">${item.event_time}</td>
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
    <div class="testimonial-slide js-testimonial-slide w-100 flex-shrink-0" role="group" aria-label="Ulasan dari ${testimonial.name}">
      <div class="card bg-transparent border-0 text-center px-4">
        <div class="card-body">
          <div class="text-danger fs-3 mb-4" aria-label="Rating: ${testimonial.rating} dari 5">
            ${stars}
          </div>
          <blockquote class="font-display display-5 text-uppercase text-white lh-1 mb-5">"${testimonial.content}"</blockquote>
          <div class="d-flex align-items-center justify-content-center gap-3">
            <div class="bg-danger text-white d-flex align-items-center justify-content-center font-display fs-3" style="width: 60px; height: 60px; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);" aria-hidden="true">${initial}</div>
            <div class="text-start">
              <p class="font-heading fs-5 text-white mb-0 text-uppercase tracking-wider">${testimonial.name}</p>
              <p class="text-secondary mb-0">${testimonial.role}</p>
            </div>
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
    <div class="faq-item js-faq-item border-bottom border-secondary">
      <button
        class="faq-question js-faq-question w-100 d-flex justify-content-between align-items-center py-4 px-0 bg-transparent border-0 text-white font-display fs-2 text-uppercase text-start"
        aria-expanded="false"
        aria-controls="faq-answer-${index}"
        id="faq-question-${index}"
      >
        <span>${faq.question}</span>
        <i class="fa-solid fa-chevron-down faq-icon text-secondary" aria-hidden="true"></i>
      </button>
      <div
        class="faq-answer js-faq-answer"
        id="faq-answer-${index}"
        role="region"
        aria-labelledby="faq-question-${index}"
      >
        <p class="font-body text-secondary fs-5 pb-4 m-0">${faq.answer}</p>
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
// 3D SCROLL-JACKING SCENE (Pure Vanilla JS, No Libraries)
// ============================================================
function initCinematicScroll() {
  const container = document.querySelector('.scene-3d-container');
  const world = document.querySelector('.js-scene-world');
  const layers = document.querySelectorAll('.scene-layer');

  if (!container || !world) return;

  // Initialize layers to their exact Z positions
  layers.forEach(layer => {
    const z = layer.getAttribute('data-z') || 0;
    layer.style.transform = `translate(-50%, -50%) translateZ(${z}px)`;
  });

  let currentScroll = 0;
  let targetScroll = 0;
  const maxZ = 6000; // How far the camera flies forward
  
  // Parallax variables
  let mouseX = 0;
  let mouseY = 0;
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;

  // Smooth scroll and parallax interpolation (Lerp)
  function render() {
    // Linear Interpolation for buttery smoothness
    currentScroll += (targetScroll - currentScroll) * 0.08;
    currentRotX += (targetRotX - currentRotX) * 0.05;
    currentRotY += (targetRotY - currentRotY) * 0.05;

    // Move the world towards the camera (positive Z) and apply mouse parallax rotation
    const zMove = currentScroll * maxZ;
    world.style.transform = `translateZ(${zMove}px) rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;

    requestAnimationFrame(render);
  }

  // Update target based on scroll position
  window.addEventListener('scroll', () => {
    const rect = container.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    
    if (scrollableDistance <= 0) return;
    
    let progress = -rect.top / scrollableDistance;
    progress = Math.max(0, Math.min(1, progress));
    
    targetScroll = progress;
  }, { passive: true });

  // Update parallax targets on mouse move
  window.addEventListener('mousemove', (e) => {
    // Normalize mouse coordinates from -1 to 1
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    
    // Convert to subtle degrees (e.g., max 5 degrees rotation)
    targetRotY = mouseX * 5;
    targetRotX = -mouseY * 5; // Invert Y for natural feel
  });

  // Start the render loop
  requestAnimationFrame(render);
}

// ============================================================
// INIT
// ============================================================
async function init() {
  initFullscreenMenu();
  initSmoothScroll();
  initScrollReveal();
  initStickyHeader();
  initCinematicScroll();

  const data = await loadContent();
  if (!data) return;

  initCourseCatalog(data.courses);
  initSchedule(data.schedule);
  initTestimonialSlider(data.testimonials);
  initFAQ(data.faq);
}

document.addEventListener('DOMContentLoaded', init);
