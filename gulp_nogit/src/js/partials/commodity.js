let number_input = document.getElementById("numberInput");

if (number_input) {
  const numberInput = document.getElementById("numberInput");
  const decreaseBtn = document.getElementById("decreaseBtn");

  function updateButtonState() {
    if (numberInput.value == 0) {
      decreaseBtn.classList.add("disabled");
    } else {
      decreaseBtn.classList.remove("disabled");
    }
  }

  // Initial call to set the correct state on page load
  updateButtonState();

  document.addEventListener("DOMContentLoaded", function () {
    const likeBlock = document.querySelector(".commodity_buy-like-block");
    const like = document.querySelector(".commodity-buy-like");
    const likeActive = document.querySelector(".commodity-buy-like-active");

    likeBlock.addEventListener("click", function () {
      if (like.style.display === "none") {
        like.style.display = "block";
        likeActive.style.display = "none";
      } else {
        like.style.display = "none";
        likeActive.style.display = "block";
      }
    });
  });

  // swiper
  var thumbSwiper = new Swiper(".thumb-swiper", {
    spaceBetween: 10,
    slidesPerView: 4.8,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 7.9,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 7.6,
        spaceBetween: 15,
      },
    },
  });

  var mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next_commodity",
      prevEl: ".swiper-button-prev_commodity",
    },
    thumbs: {
      swiper: thumbSwiper,
    },
  });
}
