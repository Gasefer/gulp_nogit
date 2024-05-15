document.addEventListener("DOMContentLoaded", function () {
  var dropdownBtn = document.getElementById("dropdown-btn");
  var dropdownList = document.getElementById("select-sort");

  dropdownBtn.addEventListener("click", function () {
    dropdownList.style.display =
      dropdownList.style.display === "flex" ? "none" : "flex";
  });

  dropdownList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      dropdownBtn.querySelector("h5").textContent = e.target.textContent; // Оновлення тексту в <h5>
      dropdownList.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.style.display = "none";
    }
  });
});
