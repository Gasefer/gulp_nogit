(function ($) {
  "use strict";

  $(document).ready(function () {
    // svg4everybody({})
  });
})(jQuery);

var isHeaderButtonClick = false;
var isFirstScreenCatalogListClick = false;

document
  .querySelector(".header__button-catalog")
  .addEventListener("click", function (event) {
    var bgGray = document.querySelector(".bg-gray");
    var xCloseElements = document.querySelectorAll(".x_close");
    var xOpenElements = document.querySelectorAll(".x_open");

    isHeaderButtonClick = !isHeaderButtonClick;

    if (bgGray && !isHeaderButtonClick && !isFirstScreenCatalogListClick) {
      bgGray.classList.remove("bg-gray--active");
      document.body.style.overflow = "visible";

      // Показуємо x_close та приховуємо x_open
      xCloseElements.forEach((element) => {
        element.style.display = "none";
      });
      xOpenElements.forEach((element) => {
        element.style.display = "flex";
      });
    } else {
      bgGray.classList.add("bg-gray--active");
      document.body.style.overflow = "hidden";

      // Показуємо x_open та приховуємо x_close
      xCloseElements.forEach((element) => {
        element.style.display = "flex";
      });
      xOpenElements.forEach((element) => {
        element.style.display = "none";
      });
    }
  });

document
  .querySelector(".first-screen_catalog-list")
  .addEventListener("click", function (event) {
    isFirstScreenCatalogListClick = true;
  });

document.addEventListener("click", function (event) {
  var bgGray = document.querySelector(".bg-gray");
  var xCloseElements = document.querySelectorAll(".x_close");
  var xOpenElements = document.querySelectorAll(".x_open");

  if (
    bgGray &&
    !event.target.closest(".header__button-catalog") &&
    !event.target.closest(".first-screen_catalog-list")
  ) {
    bgGray.classList.remove("bg-gray--active");
    document.body.style.overflow = "visible";

    // Показуємо x_close та приховуємо x_open
    xCloseElements.forEach((element) => {
      element.style.display = "none";
    });
    xOpenElements.forEach((element) => {
      element.style.display = "flex";
    });

    // Скидаємо стани кліків
    isHeaderButtonClick = false;
    isFirstScreenCatalogListClick = false;
  }
});

//=require partials/swiper.js
//=require partials/send-form-smtp.js
