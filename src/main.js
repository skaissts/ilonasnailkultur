/**
 * ILONA NAILS — Premium Nail Studio Vienna
 * Main JavaScript: i18n, Animations, Interactions
 */

import './style.css';

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  de: {
    // Navigation
    'nav.services': 'Leistungen',
    'nav.about': 'Über mich',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Perfektion in jedem Detail',
    'hero.text': 'Professionelle Maniküre & Nageldesign in Wien',
    'hero.subtitle': 'Exklusive Nagelpflege mit höchsten Qualitäts- und Hygienestandards in Wien',
    'hero.cta': 'Termin buchen',

    // Philosophy
    'philosophy.title': 'Unsere Philosophie',
    'philosophy.text1': 'Wir arbeiten ausschließlich mit hochwertigen, sicheren und zertifizierten Materialien, um Ihnen ein makelloses Ergebnis zu garantieren.',
    'philosophy.text2': 'Sterilität und Komfort sind unsere obersten Prioritäten. Jedes Instrument wird nach strengsten Hygienestandards sterilisiert.',
    'philosophy.text3': 'Die Preisanpassungen spiegeln die gestiegenen Kosten für Premium-Materialien wider, um Ihnen weiterhin die beste Qualität bieten zu können.',

    // Services
    'services.title': 'Leistungen & Preise',
    'services.item1.title': 'Maniküre mit Gel / Gellack',
    'services.item2.title': 'Klassische Maniküre',
    'services.item3.title': 'Maniküre + Gellack (verstärkt)',
    'services.item4.title': 'Altes Material entfernen',
    'services.item5.title': 'Nagelreparatur (pro Nagel)',

    // About
    'about.title': 'Über mich',
    'about.name': 'Ilona',
    'about.text1': 'Mit über 8 Jahren Erfahrung in der Nagelkunstbranche habe ich meine Leidenschaft für Perfektion und Ästhetik zu meinem Beruf gemacht.',
    'about.text2': 'Jede Kundin ist einzigartig, und ich nehme mir die Zeit, Ihre Wünsche zu verstehen und ein individuelles Ergebnis zu schaffen, das Ihre Persönlichkeit unterstreicht.',
    'about.text3': 'Mein Ziel ist es, Ihnen nicht nur wunderschöne Nägel zu schenken, sondern auch einen Moment der Entspannung und Selbstpflege in angenehmer Atmosphäre.',

    // Materials
    'materials.title': 'Qualität & Sicherheit',
    'materials.item1.title': 'Zertifizierte Produkte',
    'materials.item1.text': 'Nur geprüfte und zugelassene Materialien von renommierten Marken',
    'materials.item2.title': 'Sterilisation',
    'materials.item2.text': 'Alle Instrumente werden nach strengsten Hygienestandards sterilisiert',
    'materials.item3.title': 'Ihre Sicherheit',
    'materials.item3.text': 'Ihr Wohlbefinden und Ihre Gesundheit haben für mich oberste Priorität',

    // Gallery
    'gallery.title': 'Meine Arbeiten',

    // Contact
    'contact.title': 'Kontakt',
    'contact.address': 'Wien, Österreich',
    'contact.cta': 'Termin buchen',
    'contact.mapLabel': 'Wien, Österreich',

    // Reviews
    'reviews.title': 'Das sagen meine Kunden',
    'reviews.item1.text': '"Ich bin absolut begeistert! Ilona arbeitet unglaublich präzise und sauber. Meine Nägel haben noch nie so gut ausgesehen und gehalten. Die Atmosphäre im Studio ist auch sehr entspannend."',
    'reviews.item1.name': 'Elena S.',
    'reviews.item2.text': '"Endlich habe ich jemanden gefunden, der mein Nageldesign genau so umsetzt, wie ich es mir vorstelle. Sehr große Auswahl an Farben und höchste Qualität. Absolute Empfehlung!"',
    'reviews.item2.name': 'Julia M.',
    'reviews.item3.text': '"Tolle Beratung und sehr liebevolle Behandlung. Man merkt, dass Ilona ihre Arbeit liebt. Alles ist sehr hygienisch und professionell. Ich komme gerne wieder!"',
    'reviews.item3.name': 'Sophie K.',

    // Booking
    'booking.title': 'Termin buchen',
    'booking.text': 'Vereinbaren Sie jetzt Ihren Wunschtermin — ich freue mich auf Sie!',
    'booking.phone': 'Anrufen',
    'booking.phoneHint': 'Jetzt direkt anrufen',
    'booking.whatsappText': 'Schreiben Sie mir',
    'booking.whatsappHint': 'Schnell & unkompliziert',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.'
  },

  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.about': 'Обо мне',
    'nav.gallery': 'Галерея',
    'nav.contact': 'Контакт',

    // Hero
    'hero.title': 'Совершенство в каждой детали',
    'hero.text': 'Профессиональный маникюр и дизайн ногтей в Вене',
    'hero.subtitle': 'Эксклюзивный уход за ногтями с высочайшими стандартами качества и гигиены в Вене',
    'hero.cta': 'Записаться',

    // Philosophy
    'philosophy.title': 'Наша философия',
    'philosophy.text1': 'Мы используем исключительно высококачественные, безопасные и сертифицированные материалы для безупречного результата.',
    'philosophy.text2': 'Стерильность и комфорт — наши главные приоритеты. Каждый инструмент стерилизуется по строжайшим гигиеническим стандартам.',
    'philosophy.text3': 'Обновление цен связано с ростом стоимости премиум-материалов, чтобы продолжать предлагать вам лучшее качество.',

    // Services
    'services.title': 'Услуги и цены',
    'services.item1.title': 'Маникюр с гелем / гель-лаком',
    'services.item2.title': 'Классический маникюр',
    'services.item3.title': 'Маникюр + гель-лак (укреплённый)',
    'services.item4.title': 'Снятие старого покрытия',
    'services.item5.title': 'Ремонт ногтя (за 1 ноготь)',

    // About
    'about.title': 'Обо мне',
    'about.name': 'Илона',
    'about.text1': 'С более чем 8-летним опытом в индустрии ногтевого искусства я превратила свою страсть к совершенству и эстетике в профессию.',
    'about.text2': 'Каждая клиентка уникальна, и я уделяю время, чтобы понять ваши пожелания и создать индивидуальный результат, подчёркивающий вашу личность.',
    'about.text3': 'Моя цель — подарить вам не только красивые ногти, но и момент расслабления и заботы о себе в приятной атмосфере.',

    // Materials
    'materials.title': 'Качество и безопасность',
    'materials.item1.title': 'Сертифицированные продукты',
    'materials.item1.text': 'Только проверенные и одобренные материалы от известных брендов',
    'materials.item2.title': 'Стерилизация',
    'materials.item2.text': 'Все инструменты стерилизуются по строжайшим гигиеническим стандартам',
    'materials.item3.title': 'Ваша безопасность',
    'materials.item3.text': 'Ваше здоровье и благополучие — мой главный приоритет',

    // Gallery
    'gallery.title': 'Мои работы',

    // Contact
    'contact.title': 'Контакт',
    'contact.address': 'Вена, Австрия',
    'contact.cta': 'Записаться',
    'contact.mapLabel': 'Вена, Австрия',

    // Footer
    'footer.rights': 'Все права защищены.',

    // Reviews
    'reviews.title': 'Отзывы клиентов',
    'reviews.item1.text': '"Я в полном восторге! Илона работает невероятно точно и аккуратно. Мои ногти никогда не выглядели так хорошо. Атмосфера в студии очень расслабляющая."',
    'reviews.item1.name': 'Елена С.',
    'reviews.item2.text': '"Наконец-то я нашла мастера, который делает дизайн в точности так, как я хочу. Огромный выбор цветов и высочайшее качество. Искренне рекомендую!"',
    'reviews.item2.name': 'Юлия М.',
    'reviews.item3.text': '"Прекрасная консультация и очень внимательное отношение. Видно, что Илона любит свою работу. Всё очень гигиенично и профессионально. Обязательно вернусь!"',
    'reviews.item3.name': 'София К.',

    // Booking
    'booking.title': 'Записаться',
    'booking.text': 'Запишитесь на прием прямо сейчас — буду рада вас видеть!',
    'booking.phone': 'Позвонить',
    'booking.phoneHint': 'Позвонить сейчас',
    'booking.whatsappText': 'Написать мне',
    'booking.whatsappHint': 'Быстро и удобно',
  },

  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Perfection in Every Detail',
    'hero.text': 'Professional Manicure & Nail Design in Vienna',
    'hero.subtitle': 'Exclusive nail care with the highest quality and hygiene standards in Vienna',
    'hero.cta': 'Book Appointment',

    // Philosophy
    'philosophy.title': 'Our Philosophy',
    'philosophy.text1': 'I work exclusively with high-quality, safe, and certified materials to guarantee you a flawless result.',
    'philosophy.text2': 'Sterility and comfort are my top priorities. Every instrument is sterilized according to the strictest hygiene standards.',
    'philosophy.text3': 'Price adjustments reflect the increased costs of premium materials to continue offering you the best quality.',

    // Services
    'services.title': 'Services & Prices',
    'services.item1.title': 'Manicure with Gel / Gel Polish',
    'services.item2.title': 'Classic Manicure',
    'services.item3.title': 'Manicure + Gel Polish (reinforced)',
    'services.item4.title': 'Old Material Removal',
    'services.item5.title': 'Nail Repair (per nail)',

    // About
    'about.title': 'About Me',
    'about.name': 'Ilona',
    'about.text1': 'With over 8 years of experience in the nail art industry, I have turned my passion for perfection and aesthetics into my profession.',
    'about.text2': 'Every client is unique, and I take the time to understand your wishes and create an individual result that highlights your personality.',
    'about.text3': 'My goal is to give you not only beautiful nails but also a moment of relaxation and self-care in a pleasant atmosphere.',

    // Materials
    'materials.title': 'Quality & Safety',
    'materials.item1.title': 'Certified Products',
    'materials.item1.text': 'Only tested and approved materials from renowned brands',
    'materials.item2.title': 'Sterilization',
    'materials.item2.text': 'All instruments are sterilized according to the strictest hygiene standards',
    'materials.item3.title': 'Your Safety',
    'materials.item3.text': 'Your well-being and health are my top priority',

    // Gallery
    'gallery.title': 'My Work',

    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Vienna, Austria',
    'contact.cta': 'Book Appointment',
    'contact.mapLabel': 'Vienna, Austria',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Reviews
    'reviews.title': 'What My Clients Say',
    'reviews.item1.text': '"I am absolutely delighted! Ilona works incredibly precisely and cleanly. My nails have never looked this good and lasted this long. The atmosphere in the studio is also very relaxing."',
    'reviews.item1.name': 'Elena S.',
    'reviews.item2.text': '"Finally found someone who creates the nail design exactly as I imagine it. Huge selection of colors and highest quality. Highly recommended!"',
    'reviews.item2.name': 'Julia M.',
    'reviews.item3.text': '"Great consultation and very loving treatment. You can tell that Ilona loves her work. Everything is very hygienic and professional. I will definitely be back!"',
    'reviews.item3.name': 'Sophie K.',

    // Booking
    'booking.title': 'Book Appointment',
    'booking.text': 'Book your appointment now — I look forward to seeing you!',
    'booking.phone': 'Call',
    'booking.phoneHint': 'Call now',
    'booking.whatsappText': 'Message me',
    'booking.whatsappHint': 'Quick & easy'
  }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================
let currentLang = localStorage.getItem('ilona-lang') || 'de';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ilona-lang', lang);
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Optionally unobserve after reveal
        // revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  const revealElements = document.querySelectorAll(
    '.reveal-section, .reveal-card, .reveal-line, .reveal-left, .reveal-right, .reveal-zoom, .reveal-gallery'
  );

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

// ============================================
// PARALLAX EFFECT
// ============================================
function initParallax() {
  const brushStrokes = document.querySelectorAll('.brush-stroke');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;

    if (scrollY < heroHeight) {
      brushStrokes.forEach((stroke, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = scrollY * speed;
        stroke.style.transform = `translateY(${yPos}px)`;
      });
    }
  }, { passive: true });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav__link');

  function openMenu() {
    burger?.classList.add('active');
    nav?.classList.add('mobile-open');
    document.querySelector('.header')?.classList.add('menu-open');
    // slight delay to allow display:flex to apply before transform
    requestAnimationFrame(() => {
      nav?.classList.add('active');
      overlay?.classList.add('active');
    });
    // document.body.style.overflow = 'hidden'; // ALLOW BODY SCROLL
  }

  function closeMenu() {
    burger?.classList.remove('active');
    nav?.classList.remove('active');
    overlay?.classList.remove('active');
    document.querySelector('.header')?.classList.remove('menu-open');

    // Check if we are scrolled at the top, if so resets style
    // But since we want consistent look, we handle header via CSS :has(.nav.mobile-open)

    // wait for transition to finish before hiding
    setTimeout(() => {
      nav?.classList.remove('mobile-open');
    }, 400); // matches --transition-base

    document.body.style.overflow = '';
  }

  burger?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav?.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking overlay
  overlay?.addEventListener('click', closeMenu);

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close button
  const navClose = document.getElementById('navClose');
  if (navClose) {
    navClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav?.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// LANGUAGE SWITCHER (Dropdown)
// ============================================
function initLanguageSwitcher() {
  const dropdown = document.getElementById('langDropdown');
  const toggle = document.getElementById('langToggle');
  const currentDisplay = document.getElementById('langCurrent');
  const items = document.querySelectorAll('.lang-dropdown__item');

  // Toggle dropdown open/close
  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown?.classList.toggle('open');
  });

  // Close when clicking outside
  document.addEventListener('click', () => {
    dropdown?.classList.remove('open');
  });

  // Handle language selection
  items.forEach(item => {
    item.addEventListener('click', () => {
      const lang = item.dataset.lang;
      setLanguage(lang);

      // Update current display
      if (currentDisplay) {
        currentDisplay.textContent = lang.toUpperCase();
      }

      // Update active state
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Close dropdown
      dropdown?.classList.remove('open');
    });
  });

  // Initialize with saved/default language
  setLanguage(currentLang);

  // Update display on load
  if (currentDisplay) {
    currentDisplay.textContent = currentLang.toUpperCase();
  }
  items.forEach(item => {
    item.classList.toggle('active', item.dataset.lang === currentLang);
  });
}

// ============================================
// IMAGE ERROR HANDLING
// ============================================
function initImageFallbacks() {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    img.addEventListener('error', () => {
      // Create a gradient placeholder on error
      img.style.background = 'linear-gradient(135deg, #F8E8E8 0%, #E8C4C4 100%)';
      img.alt = '';
    });
  });
}

// ============================================
// GALLERY LIGHTBOX
// ============================================
function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery__item');

  // Open lightbox on gallery item click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close lightbox on close button click
  lightboxClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
  });

  // Close lightbox on background click
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox?.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initScrollAnimations();
  initParallax();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initImageFallbacks();
  initGalleryLightbox();

  initGalleryScroll();

  console.log('✨ Ilona Nails website initialized');
});

// ============================================
// GALLERY SCROLL (Auto + Manual)
// ============================================
function initGalleryScroll() {
  const container = document.querySelector('.gallery__container');
  const track = document.querySelector('.gallery__track');
  if (!container || !track) return;

  // Clone items for infinite loop
  const originalItems = Array.from(track.children);

  // Clone enough times to ensure smooth scrolling without gaps
  // 2 sets of clones is usually enough: [Original] [Clone1] [Clone2]
  // We scroll through Original, then snap back to start of Original (which looks like start of Clone1)
  // Actually, standard technique: [CloneBefore] [Original] [CloneAfter] or just [Original] [Clone1]

  // Let's do [Original] [Clone1] and reset when we hit end of Original.
  // To be safe with wide screens, we might need more clones.
  // Let's add 3 sets of clones to be safe.
  originalItems.forEach(item => track.appendChild(item.cloneNode(true)));
  originalItems.forEach(item => track.appendChild(item.cloneNode(true)));
  originalItems.forEach(item => track.appendChild(item.cloneNode(true)));

  let position = 0;
  let isDragging = false;
  let startX = 0;
  let prevPos = 0;
  let animationID;
  const speed = 0.8; // Slightly faster auto-scroll

  // Calculate width of one set
  const getSingleSetWidth = () => {
    const item = originalItems[0];
    if (!item) return 0;
    const style = window.getComputedStyle(item);
    const width = item.offsetWidth;
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    return (width + margin + gap) * originalItems.length;
  };

  let singleSetWidth = getSingleSetWidth();

  // Update on resize
  window.addEventListener('resize', () => {
    singleSetWidth = getSingleSetWidth();
  });

  function animate() {
    if (!isDragging) {
      position -= speed;
    }

    // Infinite loop logic
    // If we've scrolled past the first set (negative direction)
    if (position <= -singleSetWidth) {
      position += singleSetWidth;
    }
    // If we've dragged past the start (positive direction)
    else if (position > 0) {
      position -= singleSetWidth;
    }

    track.style.transform = `translateX(${position}px)`;
    animationID = requestAnimationFrame(animate);
  }

  // Start animation
  animationID = requestAnimationFrame(animate);

  // Touch Events
  container.addEventListener('touchstart', handleStart, { passive: true });
  container.addEventListener('touchmove', handleMove, { passive: false });
  container.addEventListener('touchend', handleEnd);

  // Mouse Events
  container.addEventListener('mousedown', handleStart);
  container.addEventListener('mousemove', handleMove);
  container.addEventListener('mouseup', handleEnd);
  container.addEventListener('mouseleave', () => {
    if (isDragging) handleEnd();
  });

  function handleStart(e) {
    isDragging = true;
    startX = getX(e);
    prevPos = position;
    container.style.cursor = 'grabbing';
    // Cancel animation to prevent fighting? 
    // Actually we keep animating but skip auto-scroll update in the loop
  }

  function handleMove(e) {
    if (!isDragging) return;

    // Check if it's a touch event or mouse event
    // For touch, we want to prevent default scroll if it's primarily horizontal
    // but here we just prevent default to be safe for the carousel
    if (e.type === 'touchmove') {
      // e.preventDefault(); // Optional: prevent page scroll while dragging gallery
    }

    const currentX = getX(e);
    const diff = currentX - startX;
    position = prevPos + diff;

    // We don't update transform here, we let the animate loop do it
    // but we updated 'position' which the loop uses.
  }

  function handleEnd() {
    isDragging = false;
    container.style.cursor = 'grab';
  }

  function getX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
  }
}
