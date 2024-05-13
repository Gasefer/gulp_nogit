var mini_swiper1 = new Swiper(".mini_swiper1", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next1",
    prevEl: ".mini-swiper-button-prev1",
  },
});

var mini_swiper2 = new Swiper(".mini_swiper2", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next2",
    prevEl: ".mini-swiper-button-prev2",
  },
});

var mini_swiper3 = new Swiper(".mini_swiper3", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next3",
    prevEl: ".mini-swiper-button-prev3",
  },
});

var mini_swiper4 = new Swiper(".mini_swiper4", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next4",
    prevEl: ".mini-swiper-button-prev4",
  },
});

var mini_swiper5 = new Swiper(".mini_swiper5", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
    1023: {
      slidesPerView: 5,
      spaceBetween: 52.5,
    },
  },
  navigation: {
    nextEl: ".mini-swiper-button-next5",
    prevEl: ".mini-swiper-button-prev5",
  },
});

mini_swiper1.on("slideChange", updateButtonStyles1);
mini_swiper2.on("slideChange", updateButtonStyles2);
mini_swiper3.on("slideChange", updateButtonStyles3);
mini_swiper3.on("slideChange", updateButtonStyles4);
mini_swiper3.on("slideChange", updateButtonStyles5);

document.addEventListener("DOMContentLoaded", function () {
  updateButtonStyles1(),
    updateButtonStyles2(),
    updateButtonStyles3(),
    updateButtonStyles4(),
    updateButtonStyles5();
});

// Отримуємо кнопку "like"
var likeButtons = document.querySelectorAll(".like-button");

// Додаємо обробник подій для кожної кнопки
likeButtons.forEach(function (likeButton) {
  likeButton.addEventListener("click", function (event) {
    event.preventDefault(); // Відміна стандартної дії по кліку

    // Отримуємо стани елементів .button_like та .button_like-active для цієї кнопки
    var like = likeButton.querySelector(".button_like");
    var likeActive = likeButton.querySelector(".button_like-active");

    // Перемикаємо їх видимість
    if (like.style.display === "none") {
      like.style.display = "block";
      likeActive.style.display = "none";
    } else {
      like.style.display = "none";
      likeActive.style.display = "block";
    }
  });
});
