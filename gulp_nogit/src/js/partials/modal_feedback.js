var modalFeedback = document.getElementById("modal_feedback");

modalFeedback.addEventListener("transitionend", function () {
  var body = document.querySelector("body");
  if (modalFeedback.classList.contains("show")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});
