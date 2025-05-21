document.addEventListener('DOMContentLoaded', () => {
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

// const navbar = document.querySelector(".navbar");
// const navbarOffsetTop = navbar.offsetTop;
// const sections = document.querySelectorAll("section");
// const navbarLinks = document.querySelectorAll(".navbar-link");
// const progress = document.querySelector(".progress-bars-wrapper");
// const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

// window.addEventListener("scroll", () => {
//   mainFn();
// });

// const mainFn = () => {
//   if (window.pageYOffset >= navbarOffsetTop) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }

//   sections.forEach((section, i) => {
//     if (window.pageYOffset >= section.offsetTop - 10) {
//       navbarLinks.forEach((navbarLink) => {
//         navbarLink.classList.remove("change");
//       });
//       navbarLinks[i].classList.add("change");
//     }
//   });

//   if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
//     document.querySelectorAll(".progress-percent").forEach((el, i) => {
//       el.style.width = `${progressBarPercents[i]}%`;
//       el.previousElementSibling.firstElementChild.textContent =
//         progressBarPercents[i];
//     });
//   }
// };

// mainFn();

// window.addEventListener("resize", () => {
//   window.location.reload();
// });
