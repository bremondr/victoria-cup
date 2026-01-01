(function () {
  document.addEventListener('DOMContentLoaded', () => {
    createGallery({
      gridSelector: '[data-gallery-grid]',
      placeholderSelector: '[data-gallery-placeholder]',
      lightboxSelector: '[data-gallery-lightbox]',
      prevSelector: '[data-lightbox-prev]',
      nextSelector: '[data-lightbox-next]',
      closeSelector: '[data-lightbox-close]',
      imageSelector: '[data-lightbox-image]'
    }).init();
  });

  function createGallery({
    gridSelector,
    placeholderSelector,
    lightboxSelector,
    prevSelector,
    nextSelector,
    closeSelector,
    imageSelector,
    manifestCandidates = ['assets/manifest.json', 'assets/assets.json', 'assets/images.json']
  }) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];
    const elements = {
      grid: document.querySelector(gridSelector),
      placeholder: document.querySelector(placeholderSelector),
      lightbox: document.querySelector(lightboxSelector),
      image: document.querySelector(imageSelector),
      prev: document.querySelector(prevSelector),
      next: document.querySelector(nextSelector),
      close: document.querySelector(closeSelector)
    };

    const state = {
      images: [],
      activeIndex: 0
    };

    function isImage(path) {
      if (!path) return false;
      const lower = path.toLowerCase();
      return allowedExtensions.some((ext) => lower.endsWith(ext));
    }

    function normalizePath(path) {
      if (typeof path !== 'string') return null;
      const trimmed = path.trim();
      if (!trimmed) return null;
      if (/^https?:\/\//i.test(trimmed)) return trimmed;
      const clean = trimmed.replace(/^\.?\//, '');
      return clean.startsWith('assets/') ? clean : `assets/${clean}`;
    }

    function buildAlt(path) {
      const part = path.split('/').pop() || '';
      const base = part.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
      return base ? `Victoria Cup photo – ${base}` : 'Victoria Cup photo';
    }

    async function fetchManifest(url) {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) return [];
        const data = await response.json();
        const files = Array.isArray(data) ? data : data.files;
        if (!Array.isArray(files)) return [];
        const normalized = [];
        files.forEach((file) => {
          const path = normalizePath(file);
          if (path && isImage(path) && !normalized.includes(path)) {
            normalized.push(path);
          }
        });
        return normalized;
      } catch {
        return [];
      }
    }

    async function fetchDirectoryListing() {
      try {
        const response = await fetch('assets/', { cache: 'no-store' });
        if (!response.ok) return [];
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const links = Array.from(doc.querySelectorAll('a'));
        const normalized = [];
        links.forEach((link) => {
          const href = link.getAttribute('href');
          if (!href) return;
          const decoded = decodeURIComponent(href);
          if (!isImage(decoded)) return;
          const path = normalizePath(decoded);
          if (path && !normalized.includes(path)) {
            normalized.push(path);
          }
        });
        return normalized;
      } catch {
        return [];
      }
    }

    async function discoverImages() {
      for (const candidate of manifestCandidates) {
        const files = await fetchManifest(candidate);
        if (files.length) return files;
      }
      return fetchDirectoryListing();
    }

    function renderImages(images) {
      if (!elements.grid) return;
      if (elements.placeholder) {
        elements.placeholder.remove();
      }
      images.forEach((image, index) => {
        const figure = document.createElement('figure');
        figure.className = 'gallery__item';
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';
        img.addEventListener('click', () => openLightbox(index));
        figure.appendChild(img);
        elements.grid.appendChild(figure);
      });
    }

    function updateLightbox() {
      if (!elements.image || !state.images.length) return;
      const { src, alt } = state.images[state.activeIndex];
      elements.image.src = src;
      elements.image.alt = alt;
    }

    function openLightbox(index) {
      if (!elements.lightbox) return;
      state.activeIndex = index;
      updateLightbox();
      elements.lightbox.hidden = false;
      elements.lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    }

    function closeLightbox() {
      if (!elements.lightbox) return;
      elements.lightbox.hidden = true;
      elements.lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
    }

    function stepLightbox(delta) {
      const total = state.images.length;
      if (!total) return;
      state.activeIndex = (state.activeIndex + delta + total) % total;
      updateLightbox();
    }

    function bindLightboxControls() {
      if (elements.prev) {
        elements.prev.addEventListener('click', () => stepLightbox(-1));
      }
      if (elements.next) {
        elements.next.addEventListener('click', () => stepLightbox(1));
      }
      if (elements.close) {
        elements.close.addEventListener('click', closeLightbox);
      }
      if (elements.lightbox) {
        elements.lightbox.addEventListener('click', (event) => {
          if (event.target === elements.lightbox) {
            closeLightbox();
          }
        });
      }
      document.addEventListener('keydown', (event) => {
        if (!elements.lightbox || elements.lightbox.getAttribute('aria-hidden') === 'true') return;
        if (event.key === 'Escape') {
          closeLightbox();
        } else if (event.key === 'ArrowLeft') {
          stepLightbox(-1);
        } else if (event.key === 'ArrowRight') {
          stepLightbox(1);
        }
      });
    }

    async function init() {
      if (!elements.grid) return;
      const files = await discoverImages();
      if (!files.length) return;
      state.images = files.map((src) => ({
        src,
        alt: buildAlt(src)
      }));
      renderImages(state.images);
      bindLightboxControls();
    }

    return {
      init
    };
  }
})();
