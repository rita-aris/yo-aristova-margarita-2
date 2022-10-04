var popupButton = document.querySelector(".popup-button");
var popup = document.querySelector(".popup");
var input = document.querySelector(".form__input");
var closeButton = document.querySelector(".close-button");
var overlay = document.querySelector(".popup__overlay");

popupButton.addEventListener("click", function () {
  popup.classList.toggle("popup--visible");
  input.focus();
});

closeButton.addEventListener("click", function () {
  popup.classList.toggle("popup--visible");
  popupButton.focus();
});

overlay.addEventListener("click", function () {
  popup.classList.toggle("popup--visible");
  popupButton.focus();
});

window.addEventListener("keydown", function (event) {
  if (event.code === "Escape" && popup.classList.contains("popup--visible")) {
    popup.classList.toggle("popup--visible");
    popupButton.focus();
  }
});
