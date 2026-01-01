(function () {
  const year = new Date().getFullYear();
  const translations = {
    cs: {
      hero: {
        tagline: 'Victoria Cup',
        title: 'Victoria cup: až do západu slunce',
        date: '18.–19. července 2026',
        lead:
          'Místní turnaj na trávě v Chřibské pro mixové týmy. Hrajeme férově, jednoduše a s pohodovou atmosférou uprostřed léta.',
        cta: 'Zjistit více'
      },
      facts: {
        title: 'Základní informace',
        locationLabel: 'Místo',
        locationValue: 'Fotbalové hřiště u ZŠ a MŠ Tadeáše Haenkeho Chřibská',
        mapLink: 'Otevřít mapu',
        formatLabel: 'Formát a typ',
        formatValue: '7 vs 7 • mix • tráva • zápasy 60 minut nebo do 13 bodů',
        capacityLabel: 'Kapacita a startovné',
        capacityValue: 'Max. 10 týmů • 3000 Kč / tým nebo 130 EUR / tým'
      },
      format: {
        title: 'Jak turnaj proběhne',
        lead: 'Jednoduchý dvoudenní program bez zbytečných efektů – jen frisbee, přátelé a prostor na západy slunce.',
        points: [
          'Sobota ráno až neděle odpoledne, registrace od 8:00',
          '2 skupiny a následně vyřazovací pavouk o pořadí',
          'Každý zápas 60 minut nebo do 13 bodů (cap +1)',
          'Garantujeme minimálně 5 zápasů pro každý tým',
          'WFDF pravidla, hra bez rozhodčích a s důrazem na spirit'
        ]
      },
      travel: {
        title: 'Cesta, spaní a jídlo',
        transportHeading: 'Doprava',
        transportText:
          'Autobus z Děčína staví na náměstí pár kroků od školy. Parkování je možné na náměstí nebo u školy u hřiště.',
        sleepHeading: 'Spaní',
        sleepText: 'Spaní v tělocvičně ve škole nebo ve vlastním stanu na školním pozemku.',
        foodHeading: 'Jídlo',
        foodText: 'Hospody ve vesnici nebo stánek s jednoduchým občerstvením přímo u hřiště.'
      },
      map: {
        title: 'Kde hrajeme',
        text: 'Hřiště je u školy Tadeáše Haenkeho v Chřibské. Všechno – šatny, sprchy i spaní – je v dosahu pár minut.'
      },
      signup: {
        title: 'Registrace týmu',
        text: 'Vyplňte formulář pro potvrzení účasti. Kapacita je omezená na 10 týmů, rozhoduje pořadí přihlášení a platby.',
        cta: 'Otevřít registrační formulář',
        note: 'Po odeslání formuláře vám během dvou dnů potvrdíme přijetí a platební údaje.'
      },
      contact: {
        title: 'Kontakt',
        personHeading: 'Organizátorka',
        personName: 'Jana Novotná',
        emailHeading: 'E-mail',
        phoneHeading: 'Telefon'
      },
      gallery: {
        title: 'Místo pro fotky',
        text: 'Sem doplníme aktuální fotografie hřiště a zázemí, až je budete mít k dispozici.'
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
        lead:
          'A relaxed mixed grass tournament in Chřibská. Two days of fair play ultimate, friendly people and a view of the Lusatian Mountains.',
        cta: 'Read more'
      },
      facts: {
        title: 'Key Facts',
        locationLabel: 'Location',
        locationValue: 'Football pitch by Tadeáš Haenke Primary & Kindergarten, Chřibská',
        mapLink: 'Open map',
        formatLabel: 'Format & type',
        formatValue: '7 vs 7 • mixed • natural grass • games 60 min or to 13 points',
        capacityLabel: 'Capacity & fee',
        capacityValue: 'Max 10 teams • 3000 CZK / team or 130 EUR / team'
      },
      format: {
        title: 'Tournament format',
        lead: 'A straightforward schedule focused on playing. No distractions, just quality games and time to enjoy sunset views.',
        points: [
          'Saturday morning until Sunday afternoon, on-site check-in from 8:00',
          'Two pools followed by a full placement bracket',
          'Games are 60 minutes or first to 13 (cap +1)',
          'Every team plays at least five games',
          'WFDF rules, self-officiated with focus on Spirit'
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
        foodText: 'Local pubs in the village plus a simple snack stand by the field.'
      },
      map: {
        title: 'Where we play',
        text: 'The field sits next to the Tadeáš Haenke school in Chřibská. Facilities, showers and sleeping spots are all within a few minutes.'
      },
      signup: {
        title: 'Sign up',
        text: 'Please submit the form to secure your slot. Capacity is limited to 10 teams and we confirm places after payment.',
        cta: 'Open sign-up form',
        note: 'We will reply within two days with payment details and the next steps.'
      },
      contact: {
        title: 'Contact',
        personHeading: 'Tournament lead',
        personName: 'Jana Novotná',
        emailHeading: 'Email',
        phoneHeading: 'Phone'
      },
      gallery: {
        title: 'Space for photos',
        text: 'Image placeholders are ready; swap them for real photos of the venue once you have them.'
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

  applyLanguage('cs');
})();
