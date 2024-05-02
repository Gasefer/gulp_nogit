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

function updateButtonStyles1() {
  var prevButton1 = document.querySelector(".mini-swiper-button-prev1");
  var nextButton1 = document.querySelector(".mini-swiper-button-next1");

  var prevDisabled1 = prevButton1.getAttribute("aria-disabled");
  var nextDisabled1 = nextButton1.getAttribute("aria-disabled");

  if (prevDisabled1 === "true") {
    prevButton1.style.opacity = 0.5;
  } else {
    prevButton1.style.opacity = 1;
  }

  if (nextDisabled1 === "true") {
    nextButton1.style.opacity = 0.5;
  } else {
    nextButton1.style.opacity = 1;
  }
}

function updateButtonStyles2() {
  var prevButton2 = document.querySelector(".mini-swiper-button-prev2");
  var nextButton2 = document.querySelector(".mini-swiper-button-next2");

  var prevDisabled2 = prevButton2.getAttribute("aria-disabled");
  var nextDisabled2 = nextButton2.getAttribute("aria-disabled");

  if (prevDisabled2 === "true") {
    prevButton2.style.opacity = 0.5;
  } else {
    prevButton2.style.opacity = 1;
  }

  if (nextDisabled2 === "true") {
    nextButton2.style.opacity = 0.5;
  } else {
    nextButton2.style.opacity = 1;
  }
}
function updateButtonStyles3() {
  var prevButton3 = document.querySelector(".mini-swiper-button-prev3");
  var nextButton3 = document.querySelector(".mini-swiper-button-next3");

  var prevDisabled3 = prevButton3.getAttribute("aria-disabled");
  var nextDisabled3 = nextButton3.getAttribute("aria-disabled");

  if (prevDisabled3 === "true") {
    prevButton3.style.opacity = 0.5;
  } else {
    prevButton3.style.opacity = 1;
  }

  if (nextDisabled3 === "true") {
    nextButton3.style.opacity = 0.5;
  } else {
    nextButton3.style.opacity = 1;
  }
}

mini_swiper1.on("slideChange", updateButtonStyles1);
mini_swiper2.on("slideChange", updateButtonStyles2);
mini_swiper3.on("slideChange", updateButtonStyles3);

document.addEventListener("DOMContentLoaded", function () {
  updateButtonStyles1(), updateButtonStyles2(), updateButtonStyles3();
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
