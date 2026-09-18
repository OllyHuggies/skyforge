const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const waitlistForm = document.querySelector('#waitlist-form');
const formNote = document.querySelector('#form-note');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navLinks.classList.toggle('is-open', !isOpen);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  });
});

waitlistForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(waitlistForm).get('email');
  if (!email) return;
  formNote.textContent = 'You’re on the list. Watch the skies.';
  formNote.style.color = 'var(--lime)';
  waitlistForm.reset();
});