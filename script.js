// Navigation menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

// Contact form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let errorMessage = '';

  if (nameInput.value === '') {
    errorMessage += 'Name is required.\n';
  }

  if (emailInput.value === '') {
    errorMessage += 'Email is required.\n';
  } else if (!isValidEmail(emailInput.value)) {
    errorMessage += 'Please enter a valid email address.\n';
  }

  if (messageInput.value === '') {
    errorMessage += 'Message is required.\n';
  }

  if (errorMessage !== '') {
    alert(errorMessage);
  } else {
    form.submit();
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

