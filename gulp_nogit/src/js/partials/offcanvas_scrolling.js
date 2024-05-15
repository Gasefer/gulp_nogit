var offcanvas = new bootstrap.Offcanvas(
  document.getElementById("offcanvasSortMenu")
);
var offcanvasToggle = document.querySelector('[data-bs-toggle="offcanvas"]');
var body = document.querySelector("body");

// Додаємо клас "overflow-hidden" до body при відкритті підкладки offcanvas
offcanvas._element.addEventListener("shown.bs.offcanvas", function () {
  body.style.overflow = "hidden";
  body.style.paddingRight = "0px";
});

// Видаляємо клас "overflow-hidden" при закритті підкладки offcanvas
offcanvas._element.addEventListener("hidden.bs.offcanvas", function () {
  body.style.overflow = "visible";
  body.style.paddingRight = "0px";
});
