// Navigation menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

// Contact form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector
