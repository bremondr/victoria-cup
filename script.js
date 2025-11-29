(function () {
  const footer = document.querySelector('.footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Ultimate Praha. Všechna práva vyhrazena.`;
  }

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
