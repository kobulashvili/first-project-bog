const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});






  const topMenu = document.querySelector('header');
  const secondMenu = document.querySelector('.nav-bar');
  const topMenuHeight = topMenu.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= topMenuHeight) {
      secondMenu.classList.add('at-top');
    } else {
      secondMenu.classList.remove('at-top');
    }
  });



document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.mobile-burger .burger-btn');
  const burgerMenu = document.querySelector('.mobile-burger .burger-menu');
  const icon = burgerBtn.querySelector('i');

  burgerBtn.addEventListener('click', () => {
    // Toggle menu
    burgerMenu.classList.toggle('open');

    // Toggle icon
    if (burgerMenu.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {

    const elements = document.querySelectorAll('.motion');
    const revealPoint = 150;

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
  




const carousel = document.querySelector('#mainCarousel');
const buttons = document.querySelectorAll('.new-btn');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    bootstrap.Carousel.getOrCreateInstance(carousel).to(index);

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

buttons[0].classList.add('active');

