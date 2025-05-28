document.addEventListener('DOMContentLoaded', () => {
  // Typewriter effect
  const text = "Welcome to my personal website";
  const typewriterElement = document.querySelector('.typewriter');
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      typewriterElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  typeWriter();

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      navbar.classList.add('nav-hidden');
    } else {
      navbar.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission feedback
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        alert('Thanks for your submission!');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form');
    }
  });
});