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
  autoplay: {
    delay: 1200
  }
});

const recipes = new Swiper('.recipes__slider', {
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: true,
  spaceBetween: 30
});