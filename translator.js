(function () {
  const year = new Date().getFullYear();
  const translations = {
    cs: {
      hero: {
        tagline: 'Victoria Cup',
        title: 'Victoria cup: až do západu slunce',
        date: '18.–19. července 2026',
        lead: 'Letní fun turnaj na trávě v Chřibské pro mixové týmy.',
        cta: 'Přihlásit se'
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
          'Hraje se podle <a class="text-link" href="https://rules.wfdf.sport/" target="_blank" rel="noopener">oficiálních WFDF pravidel</a>, hra bez rozhodčích a s důrazem na spirit'
        ]
      },
      travel: {
        title: 'Cesta, spaní a jídlo',
        transportHeading: 'Doprava',
        transportText:
          'Autobus z Děčína staví na náměstí pár kroků od školy. Parkování je možné na náměstí nebo u školy u hřiště.',
        sleepHeading: 'Spaní',
        sleepText: 'Spaní v tělocvičně ve škole nebo ve vlastním stanu na školním pozemku. (zahrnuto v PF 100Kč/hráče)',
        foodHeading: 'Jídlo',
        foodText:
          'Hospody ve vesnici (Restaurace Radnice, Hospůdka Na křižovatce, Restaurace Na Stodolci) nebo stánek s jednoduchým občerstvením přímo u hřiště. V obci je také několik menších obchodů.'
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
        personName: 'Sunset - Ondra Brém',
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
          'Tadeáš Haenke, rodák z Chřibské, kde se turnaj odehrává, se proslavil jako světoběžný botanik a badatel, který na svých výpravách do Jižní Ameriky poprvé zaznamenal obří leknín Victoria amazonica, známý také jako viktorie královská. Název turnaje se odkazuje na tuto rostlinu jejíž listy připomínají svým tvarem herní disk.'
      },
      footer: {
        text: `© ${year} Victoria cup by <a class="text-link" href="https://www.sunsetfrisbee.cz/">Sunset</a>. Všechna práva vyhrazena.`,
        backToTop: 'Zpět nahoru'
      }
    },
    en: {
      hero: {
        tagline: 'Victoria Cup',
        title: 'Victoria Cup: Until the Sunset',
        date: '18–19 July 2026',
        lead: 'A summer fun tournament on grass in Chřibská for mixed teams.',
        cta: 'Sign up'
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
          'Played under the <a class="text-link" href="https://rules.wfdf.sport/" target="_blank" rel="noopener">official WFDF rules</a>, self-officiated (no referees) with a Spirit focus'
        ]
      },
      travel: {
        title: 'Travel, sleep and food',
        transportHeading: 'Travel',
        transportText:
          'The bus from Děčín stops right on the town square a short walk from the school. Parking is available on the square or next to the school.',
        sleepHeading: 'Sleeping',
        sleepText: 'Indoors in the school gym or outdoors in your own tent on the school grounds. (included in PF 100 CZK/player)',
        foodHeading: 'Food',
        foodText:
          'Village pubs (Restaurace Radnice, Hospůdka Na křižovatce, Restaurace Na Stodolci) or a small refreshment stand right next to the field.'
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
        personName: 'Sunset - Ondra Brém',
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
          'Tadeáš Haenke, a native of Chřibská where the tournament takes place, became famous as a globetrotting botanist and explorer who, during his expeditions to South America, was the first to document the giant water lily Victoria amazonica, also known as the Victoria regia. The name of the tournament refers to this plant, whose leaves resemble the shape of a flying disc.'
      },
      footer: {
        text: `© ${year} Victoria Cup by <a class="text-link" href="https://www.sunsetfrisbee.cz/">Sunset</a>. All rights reserved.`,
        backToTop: 'Back to top'
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    createTranslator({
      translations,
      defaultLanguage: 'cs',
      textSelector: '[data-i18n]',
      listSelector: '[data-i18n-list]',
      langButtonSelector: '.lang-button'
    }).init();
  });

  function createTranslator({
    translations,
    defaultLanguage = 'en',
    textSelector = '[data-i18n]',
    listSelector = '[data-i18n-list]',
    langButtonSelector = '.lang-button'
  }) {
    const textNodes = document.querySelectorAll(textSelector);
    const listNodes = document.querySelectorAll(listSelector);
    const languageButtons = document.querySelectorAll(langButtonSelector);
    let currentLanguage = defaultLanguage;

    function resolve(key, langPack) {
      return key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), langPack);
    }

    function renderText(langPack) {
      textNodes.forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (!key) return;
        const value = resolve(key, langPack);
        if (typeof value === 'string') {
          node.innerHTML = value;
        }
      });
    }

    function renderLists(langPack) {
      listNodes.forEach((node) => {
        const key = node.getAttribute('data-i18n-list');
        if (!key) return;
        const value = resolve(key, langPack);
        if (Array.isArray(value)) {
          node.innerHTML = value.map((item) => `<li>${item}</li>`).join('');
        }
      });
    }

    function highlightButtons(lang) {
      languageButtons.forEach((button) => {
        const isActive = button.getAttribute('data-lang') === lang;
        button.classList.toggle('lang-button--active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
    }

    function setLanguage(lang) {
      if (!translations[lang]) return;
      const langPack = translations[lang];
      currentLanguage = lang;
      renderText(langPack);
      renderLists(langPack);
      document.documentElement.setAttribute('lang', lang);
      highlightButtons(lang);
    }

    function bindLanguageButtons() {
      languageButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const lang = button.getAttribute('data-lang');
          if (lang && lang !== currentLanguage) {
            setLanguage(lang);
          }
        });
      });
    }

    function init() {
      bindLanguageButtons();
      setLanguage(currentLanguage);
    }

    return {
      init,
      setLanguage
    };
  }
})();
