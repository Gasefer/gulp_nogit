var isHeaderButtonClick = false;
var isFirstScreenCatalogListClick = false;

document
  .querySelector(".header__button-catalog")
  .addEventListener("click", function (event) {
    var bgGray = document.querySelector(".bg-gray");
    var mobileMenu = document.querySelector(".mobile_menu");
    var headerButtonCatalog = document.querySelector(".header__button-catalog");
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

      // Видаляємо клас активності з кнопки
      headerButtonCatalog.classList.remove("header__button-catalog--active");
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

      // Додаємо клас активності кнопці
      headerButtonCatalog.classList.add("header__button-catalog--active");
    }

    // Додаємо клас active до mobile_menu
    mobileMenu.classList.toggle("active");
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
  var mobileMenu = document.querySelector(".mobile_menu");
  var headerButtonCatalog = document.querySelector(".header__button-catalog");

  if (
    bgGray &&
    !event.target.closest(".header__button-catalog") &&
    !event.target.closest(".first-screen_catalog-list") &&
    !event.target.closest(".mobile_menu")
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

    // Закриваємо mobile_menu
    mobileMenu.classList.remove("active");

    // Видаляємо клас активності з кнопки
    headerButtonCatalog.classList.remove("header__button-catalog--active");
  }
});
