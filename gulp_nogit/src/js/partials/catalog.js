var isHeaderButtonClick = false;
var isFirstScreenCatalogListClick = false;

var headerButtonCatalog1 = document.querySelector(".header__button-catalog");
if (headerButtonCatalog1) {
  var bgGray = document.querySelector(".bg-gray");
  var mobileMenu = document.querySelector(".mobile_menu");
  var xCloseElements = document.querySelectorAll(".x_close");
  var xOpenElements = document.querySelectorAll(".x_open");
  var catalogHeaderContainer = document.querySelector(
    ".catalog_header-container"
  );
  var firstScreenCatalogList = document.querySelector(
    ".first-screen_catalog-list"
  );

  headerButtonCatalog1.addEventListener("click", function (event) {
    toggleMenu();
  });

  firstScreenCatalogList.addEventListener("click", function (event) {
    isFirstScreenCatalogListClick = true;
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".header__button-catalog") &&
      !event.target.closest(".mobile_menu") &&
      !event.target.closest(".x_close") &&
      !event.target.closest(".x_open")
    ) {
      closeMenu();
    }
  });

  function toggleMenu() {
    isHeaderButtonClick = !isHeaderButtonClick;
    bgGray.classList.toggle("bg-gray--active");
    document.body.style.overflow = isHeaderButtonClick ? "hidden" : "visible";
    xCloseElements.forEach((element) => {
      element.style.display = isHeaderButtonClick ? "flex" : "none";
    });
    xOpenElements.forEach((element) => {
      element.style.display = isHeaderButtonClick ? "none" : "flex";
    });
    headerButtonCatalog1.classList.toggle("header__button-catalog--active");
    catalogHeaderContainer.style.display = isHeaderButtonClick
      ? "block"
      : "none";
    mobileMenu.classList.toggle("active");
  }

  function closeMenu() {
    bgGray.classList.remove("bg-gray--active");
    document.body.style.overflow = "visible";
    xCloseElements.forEach((element) => {
      element.style.display = "none";
    });
    xOpenElements.forEach((element) => {
      element.style.display = "flex";
    });
    headerButtonCatalog1.classList.remove("header__button-catalog--active");
    catalogHeaderContainer.style.display = "none";
    mobileMenu.classList.remove("active");
    isHeaderButtonClick = false;
    isFirstScreenCatalogListClick = false;
  }

  // Отримуємо елементи кнопки каталогу та svg-іконок
  const buttonCatalog = document.querySelector(".header__button-catalog");
  const svgSizeCloser = buttonCatalog.querySelector(".svg-size_closer");
  const svgSizeMenu = buttonCatalog.querySelector(".svg-size_menu");

  // Додаємо обробник події для події наведення миші на кнопку каталогу
  buttonCatalog.addEventListener("mouseenter", function () {
    // Додаємо клас .color-green до svg-іконок
    svgSizeCloser.classList.add("color-green");
    svgSizeMenu.classList.add("color-green");
    svgSizeCloser.classList.add("svg__transition");
    svgSizeMenu.classList.add("svg__transition");
  });

  // Додаємо обробник події для події зняття курсора з кнопки каталогу
  buttonCatalog.addEventListener("mouseleave", function () {
    // Видаляємо клас .color-green з svg-іконок
    svgSizeCloser.classList.remove("color-green");
    svgSizeMenu.classList.remove("color-green");
    svgSizeCloser.classList.remove("svg__transition");
    svgSizeMenu.classList.remove("svg__transition");
  });
}
