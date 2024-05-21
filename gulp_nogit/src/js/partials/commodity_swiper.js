var thumbSwiper = new Swiper(".thumb-swiper", {
  spaceBetween: 15,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
});

var mainSwiper = new Swiper(".main-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next_commodity",
    prevEl: ".swiper-button-prev_commodity",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});
