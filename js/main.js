const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filterValue = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filterValue === 'all' || category === filterValue;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const isValid =
      nameInput && nameInput.value.trim() !== '' &&
      emailInput && emailInput.value.trim() !== '' &&
      messageInput && messageInput.value.trim() !== '';

    if (!isValid) {
      event.preventDefault();
      alert('Por favor, completa todos los campos antes de enviar tu mensaje.');
      return;
    }

    if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      event.preventDefault();
      alert('Ingresa un correo electrónico válido.');
      return;
    }

    if (form.action.includes('tu-id-de-formspree')) {
      event.preventDefault();
      alert('Formulario listo para conectarse con Formspree. Reemplaza el endpoint editado en el archivo HTML.');
    }
  });
}
