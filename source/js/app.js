window.addEventListener("DOMContentLoaded", function () {
  var star = document.querySelector(".rating__group");
  var rating = document.querySelector(".rating__caption");

  star.addEventListener("mouseover", function () {
    rating.classList.toggle("rating__caption--hovered");
  });

  star.addEventListener("mouseout", function () {
    rating.classList.toggle("rating__caption--hovered");
  });
});
