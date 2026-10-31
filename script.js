// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

// Close the mobile menu after a navigation link is selected
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// Light and dark theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const darkModeOn = document.body.classList.contains('dark');
  themeToggle.textContent = darkModeOn ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', darkModeOn ? 'Switch to light theme' : 'Switch to dark theme');
});

// Small toast message for service buttons
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('.learn-more').forEach((button) => {
  button.addEventListener('click', () => {
    showToast(`${button.dataset.service}: Thanks for your interest! Contact us to know more.`);
  });
});

// Contact form validation and feedback (demo only; no message is sent to a server)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.getElementById('nameError').textContent = name ? '' : 'Please enter your name.';
  document.getElementById('emailError').textContent = emailPattern.test(email) ? '' : 'Please enter a valid email address.';
  document.getElementById('messageError').textContent = message.length >= 10 ? '' : 'Please write at least 10 characters.';

  if (name && emailPattern.test(email) && message.length >= 10) {
    document.getElementById('formFeedback').textContent = 'Thank you! Your message has been validated successfully.';
    contactForm.reset();
  } else {
    document.getElementById('formFeedback').textContent = 'Please correct the highlighted fields.';
  }
});

// Automatically display the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
