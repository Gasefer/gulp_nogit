var modalFeedback = document.getElementById("modal_feedback");

modalFeedback.addEventListener("transitionend", function () {
  var body = document.querySelector("body");
  if (modalFeedback.classList.contains("show")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

let offcanvas_sortmenu = document.getElementById("offcanvasSortMenu");

if (offcanvas_sortmenu) {
  // offcanvas scrolling
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
}

//button offcanvas menu
const headerButtonCatalog = document.querySelector(
  '[data-target=".offcanvas-to-close"]'
);

document.addEventListener("show.bs.offcanvas", (event) => {
  const offcanvasElement = event.target;
  if (offcanvasElement.classList.contains("offcanvas-to-close")) {
    headerButtonCatalog.style.display = "none"; // Приховати кнопку при відкритті offcanvas
  }
});

document.addEventListener("hide.bs.offcanvas", (event) => {
  const offcanvasElement = event.target;
  if (offcanvasElement.classList.contains("offcanvas-to-close")) {
    headerButtonCatalog.style.display = ""; // Відобразити кнопку при закритті offcanvas
  }
});
