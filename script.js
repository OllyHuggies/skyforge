const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const waitlistForm = document.querySelector('#waitlist-form');
const formNote = document.querySelector('#form-note');
const waitlistModal = document.querySelector('#waitlist-modal');
const modalClose = waitlistModal?.querySelector('.modal-close');
const modalDone = waitlistModal?.querySelector('.modal-done');

const closeWaitlistModal = () => {
  if (!waitlistModal) return;
  waitlistModal.hidden = true;
  document.body.classList.remove('modal-open');
};

const openWaitlistModal = () => {
  if (!waitlistModal) return;
  waitlistModal.hidden = false;
  document.body.classList.add('modal-open');
  modalClose?.focus();
};

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
  if (formNote) formNote.hidden = true;
  waitlistForm.reset();
  openWaitlistModal();
});

modalClose?.addEventListener('click', closeWaitlistModal);
modalDone?.addEventListener('click', closeWaitlistModal);
waitlistModal?.addEventListener('click', (event) => {
  if (event.target === waitlistModal) closeWaitlistModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && waitlistModal && !waitlistModal.hidden) closeWaitlistModal();
});