(function () {
  const year = new Date().getFullYear();
  const translations = {
    cs: {
      hero: {
        tagline: 'Victoria Cup',
        title: 'Victoria cup: až do západu slunce',
        date: '18.–19. července 2026',
        lead: 'Letní fun turnaj na trávě v Chřibské pro mixové týmy.',
        cta: 'Zjistit více'
      },
      facts: {
        title: 'Základní informace',
        locationLabel: 'Místo',
        locationValue: 'Chřibská',
        mapLink: 'Otevřít mapu',
        formatLabel: 'Formát a typ',
        formatValue: '7 vs 7 • mix • tráva',
        capacityLabel: 'Kapacita a startovné',
        capacityValue: '10 týmů • TF 3000Kč/tým + PF 100Kč/hráče'
      },
      format: {
        title: 'Jak turnaj proběhne',
        lead: 'Jednoduchý víkendový plán – žádné složité ceremonie, jen frisbee a pauzy na odpočinek.',
        points: [
          'Sobota ráno až neděle odpoledne, první výhoz v 9:00',
          'Zápasy jsou 50 minut (cap +1) a začínají vždy v celou hodinu',
          '2 skupiny a následně vyřazovací pavouk o pořadí',
          'Hraje se podle <a href="https://rules.wfdf.sport/" target="_blank" rel="noopener">oficiálních WFDF pravidel</a>, hra bez rozhodčích a s důrazem na spirit'
        ]
      },
      travel: {
        title: 'Cesta, spaní a jídlo',
        transportHeading: 'Doprava',
        transportText:
          'Autobus z Děčína staví na náměstí pár kroků od školy. Parkování je možné na náměstí nebo u školy u hřiště.',
        sleepHeading: 'Spaní',
        sleepText: 'Spaní v tělocvičně ve škole nebo ve vlastním stanu na školním pozemku. (PF 100Kč/hráče)',
        foodHeading: 'Jídlo',
        foodText: 'Hospody ve vesnici (Restaurace Radnice, Hospůdka Na křižovatce, Restaurace Na Stodolci) nebo stánek s jednoduchým občerstvením přímo u hřiště. V obci je také několik menších obchodů.'
      },
      map: {
        title: 'Kde hrajeme',
        text: 'Hřiště je u školy Tadeáše Haenkeho v Chřibské. Všechno – šatny, sprchy i spaní – je v dosahu pár minut.'
      },
      signup: {
        title: 'Registrace týmu',
        text: 'Vyplňte formulář pro potvrzení účasti. Kapacita je omezená na 10 týmů, rozhoduje pořadí přihlášení a platby.',
        cta: 'Otevřít registrační formulář',
        note: 'Po odeslání formuláře vám během týdne potvrdíme přijetí a zašleme platební údaje.'
      },
      contact: {
        title: 'Kontakt',
        personHeading: 'Organizátor',
        personName: 'Ondra Brém',
        emailHeading: 'Email',
        phoneHeading: 'Telefon'
      },
      gallery: {
        title: 'Jak to na místě vypadá',
        text: 'Sem doplníme aktuální fotografie hřiště a zázemí, až je budeme mít k dispozici.',
        placeholder: 'Další fotky brzy'
      },
      lore: {
        title: 'Victoria cup lore',
        text: 'TBD',
        story:
          'Chceme, aby turnaj připomínal dlouhé letní večery, kdy se hra protáhne až do oranžového nebe. Přijeďte si pro vlastní západ slunce.'
      },
      footer: {
        text: `© ${year} Victoria cup. Všechna práva vyhrazena.`,
        backToTop: 'Zpět nahoru'
      }
    },
    en: {
      hero: {
        tagline: 'Victoria Cup',
        title: 'Victoria Cup: Until the Sunset',
        date: '18–19 July 2026',
        lead: 'A summer fun tournament on grass in Chřibská for mixed teams.',
        cta: 'Read more'
      },
      facts: {
        title: 'Key Facts',
        locationLabel: 'Location',
        locationValue: 'Chřibská',
        mapLink: 'Open map',
        formatLabel: 'Format & type',
        formatValue: '7 vs 7 • mixed • grass',
        capacityLabel: 'Capacity & fee',
        capacityValue: '10 teams • TF 3000 CZK/team + PF 100 CZK/player'
      },
      format: {
        title: 'How the tournament runs',
        lead: 'A clean weekend schedule focused on playing, resting, and catching the sunset.',
        points: [
          'Saturday morning through Sunday afternoon, first pull at 9:00',
          'Games last 50 minutes (cap +1) and always start on the full hour',
          'Two pools followed by a placement bracket',
          'Played under the <a href="https://rules.wfdf.sport/" target="_blank" rel="noopener">official WFDF rules</a>, self-officiated (no referees) with a Spirit focus'
        ]
      },
      travel: {
        title: 'Travel, sleep and food',
        transportHeading: 'Travel',
        transportText:
          'The bus from Děčín stops right on the town square a short walk from the school. Parking is available on the square or next to the school.',
        sleepHeading: 'Sleeping',
        sleepText: 'Indoors in the school gym or outdoors in your own tent on the school grounds.',
        foodHeading: 'Food',
        foodText: 'Village pubs (Restaurace Radnice, Hospůdka Na křižovatce, Restaurace Na Stodolci) or a small refreshment stand right next to the field.'
      },
      map: {
        title: 'Where we play',
        text: 'The field sits next to the Tadeáš Haenke school in Chřibská. Facilities, showers and sleeping spots are all within a few minutes.'
      },
      signup: {
        title: 'Sign up',
        text: 'Please submit the form to confirm your spot. Capacity is limited to 10 teams; order of registration and payment decides.',
        cta: 'Open sign-up form',
        note: 'We will reply within a week with confirmation and payment details.'
      },
      contact: {
        title: 'Contact',
        personHeading: 'Organizer',
        personName: 'Ondra Brém',
        emailHeading: 'Email',
        phoneHeading: 'Phone'
      },
      gallery: {
        title: 'Location photos',
        text: 'Image placeholders are ready; swap them for real photos of the venue once you have them.',
        placeholder: 'More photos soon'
      },
      lore: {
        title: 'Victoria cup lore',
        text: 'TBD',
        story:
          'We want the tournament to feel like those endless summer evenings when games continue until the sky turns orange. Come chase your own sunset.'
      },
      footer: {
        text: `© ${year} Victoria Cup. All rights reserved.`,
        backToTop: 'Back to top'
      }
    }
  };

  const textElements = document.querySelectorAll('[data-i18n]');
  const listElements = document.querySelectorAll('[data-i18n-list]');
  const languageButtons = document.querySelectorAll('.lang-button');
  const galleryGrid = document.querySelector('[data-gallery-grid]');
  const galleryPlaceholder = document.querySelector('[data-gallery-placeholder]');
  const lightbox = document.querySelector('[data-gallery-lightbox]');
  const lightboxImage = document.querySelector('[data-lightbox-image]');
  const lightboxPrev = document.querySelector('[data-lightbox-prev]');
  const lightboxNext = document.querySelector('[data-lightbox-next]');
  const lightboxClose = document.querySelector('[data-lightbox-close]');

  let galleryImages = [];
  let activeImageIndex = 0;

  function applyLanguage(lang) {
    const langPack = translations[lang];
    if (!langPack) return;
    textElements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      const value = key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), langPack);
      if (typeof value === 'string') {
        element.textContent = value;
      }
    });

    listElements.forEach((listElement) => {
      const key = listElement.getAttribute('data-i18n-list');
      const value = key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), langPack);
      if (Array.isArray(value)) {
        listElement.innerHTML = value.map((item) => `<li>${item}</li>`).join('');
      }
    });

    document.documentElement.setAttribute('lang', lang);
    languageButtons.forEach((button) => {
      const active = button.getAttribute('data-lang') === lang;
      button.classList.toggle('lang-button--active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  const allowedImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];
  const manifestCandidates = ['assets/manifest.json', 'assets/assets.json', 'assets/images.json'];

  function isImagePath(path) {
    if (!path) return false;
    const lower = path.toLowerCase();
    return allowedImageExtensions.some((ext) => lower.endsWith(ext));
  }

  function normalizeAssetPath(path) {
    if (typeof path !== 'string') return null;
    const trimmed = path.trim();
    if (!trimmed) return null;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    const clean = trimmed.replace(/^\.?\//, '');
    return clean.startsWith('assets/') ? clean : `assets/${clean}`;
  }

  function buildAltFromFilename(path) {
    const fileName = path.split('/').pop() || '';
    const base = fileName.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
    return base ? `Victoria Cup photo – ${base}` : 'Victoria Cup photo';
  }

  async function readManifest(url) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) return [];
      const data = await response.json();
      const files = Array.isArray(data) ? data : data.files;
      if (!Array.isArray(files)) return [];
      const normalized = new Set();
      files.forEach((file) => {
        const path = normalizeAssetPath(file);
        if (path && isImagePath(path)) {
          normalized.add(path);
        }
      });
      return Array.from(normalized);
    } catch {
      return [];
    }
  }

  async function readDirectoryListing() {
    try {
      const response = await fetch('assets/', { cache: 'no-store' });
      if (!response.ok) return [];
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const links = Array.from(doc.querySelectorAll('a'));
      const files = new Set();
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (!href) return;
        const decoded = decodeURIComponent(href);
        if (!isImagePath(decoded)) return;
        const path = normalizeAssetPath(decoded);
        if (path) {
          files.add(path);
        }
      });
      return Array.from(files);
    } catch {
      return [];
    }
  }

  async function discoverAssetImages() {
    for (const candidate of manifestCandidates) {
      const result = await readManifest(candidate);
      if (result.length) {
        return result;
      }
    }
    return readDirectoryListing();
  }

  function renderGallery(images) {
    if (!galleryGrid || !images.length) return;
    if (galleryPlaceholder) {
      galleryPlaceholder.remove();
    }
    images.forEach(({ src, alt }, index) => {
      const figure = document.createElement('figure');
      figure.className = 'gallery__item';
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;
      img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(index));
      figure.appendChild(img);
      galleryGrid.appendChild(figure);
    });
  }

  function updateLightboxImage() {
    if (!lightboxImage || !galleryImages.length) return;
    const { src, alt } = galleryImages[activeImageIndex];
    lightboxImage.src = src;
    lightboxImage.alt = alt;
  }

  function openLightbox(index) {
    if (!lightbox || !galleryImages.length) return;
    activeImageIndex = index;
    updateLightboxImage();
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  function stepLightbox(delta) {
    if (!galleryImages.length) return;
    const total = galleryImages.length;
    activeImageIndex = (activeImageIndex + delta + total) % total;
    updateLightboxImage();
  }

  function bindLightboxControls() {
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => stepLightbox(-1));
    }
    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => stepLightbox(1));
    }
    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }
    if (lightbox) {
      lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
          closeLightbox();
        }
      });
    }

    document.addEventListener('keydown', (event) => {
      if (!lightbox || lightbox.getAttribute('aria-hidden') === 'true') return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        stepLightbox(-1);
      } else if (event.key === 'ArrowRight') {
        stepLightbox(1);
      }
    });
  }

  async function initGallery() {
    if (!galleryGrid) return;
    const files = await discoverAssetImages();
    if (!files.length) return;
    galleryImages = files.map((src) => ({
      src,
      alt: buildAltFromFilename(src)
    }));
    renderGallery(galleryImages);
    bindLightboxControls();
  }

  initGallery();
  applyLanguage('cs');
})();
