let dropdownBtn = document.getElementById("dropdown-btn");
let dropdownList = document.getElementById("select-sort");

if (dropdownBtn) {
  dropdownBtn.addEventListener("click", function () {
    dropdownList.style.display =
      dropdownList.style.display === "flex" ? "none" : "flex";
    dropdownBtn.style.borderColor =
      dropdownList.style.display === "flex" ? "#2a8927" : "#e9e8e8";
  });

  dropdownList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      dropdownBtn.querySelector("span").textContent = e.target.textContent;
      dropdownList.style.display = "none";
    }
  });

  document.addEventListener("click", function (e) {
    if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.style.display = "none";
    }
  });
}
