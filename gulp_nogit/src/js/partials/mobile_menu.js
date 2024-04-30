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
