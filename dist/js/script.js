const menu = ['Slide 1', 'Slide 2', 'Slide 3']
const mySwiper = new Swiper ('.swiper-container', {
    // If we need pagination
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const showCase = new Swiper('.showcase__slider', {
  slidesPerView: 5,
  spaceBetween: 1,
  loop: true,
  // autoplay: {
  //   delay: 1200
  // },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 1,
    }
  }
});

const recipes = new Swiper('.recipes__slider', {
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.recipes__arrows-item_next',
    prevEl: '.recipes__arrows-item_prev',
  }
});

const find = new Swiper('.find__slider', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true
});

function menuToggle() {
  const burger = document.querySelector('.header__burger'),
      menu = document.querySelector('.header__nav'),
      close = document.querySelector('.header__close');

  burger.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
  });

  close.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
  });
  
};

menuToggle();