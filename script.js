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
        capacityValue: '10 týmů • 3000 Kč / tým nebo 130 EUR / tým'
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
        title: 'Místo pro fotky',
        text: 'Sem doplníme aktuální fotografie hřiště a zázemí, až je budeme mít k dispozici.'
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
        capacityValue: '10 teams • 3000 CZK / team or 130 EUR / team'
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
        foodText: 'Local pubs in the village plus a simple snack stand by the field.'
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
        title: 'Space for photos',
        text: 'Image placeholders are ready; swap them for real photos of the venue once you have them.'
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
