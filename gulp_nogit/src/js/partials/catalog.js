document.addEventListener("DOMContentLoaded", function () {
  var isHeaderButtonClick = false;
  var isFirstScreenCatalogListClick = false;

  var bgGray = document.querySelector(".bg-gray");
  var mobileMenu = document.querySelector(".mobile_menu");
  var headerButtonCatalog = document.querySelector(".header__button-catalog");
  var xCloseElements = document.querySelectorAll(".x_close");
  var xOpenElements = document.querySelectorAll(".x_open");
  var catalogHeaderContainer = document.querySelector(
    ".catalog_header-container"
  );
  var firstScreenCatalogList = document.querySelector(
    ".first-screen_catalog-list"
  );

  headerButtonCatalog.addEventListener("click", function (event) {
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
    headerButtonCatalog.classList.toggle("header__button-catalog--active");
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
    headerButtonCatalog.classList.remove("header__button-catalog--active");
    catalogHeaderContainer.style.display = "none";
    mobileMenu.classList.remove("active");
    isHeaderButtonClick = false;
    isFirstScreenCatalogListClick = false;
  }
});
