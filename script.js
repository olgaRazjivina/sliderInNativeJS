const slides = document.querySelectorAll(".slider__item");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const dotsWrap = document.querySelector(".slider__dots");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

function showSlides(n) {
  if (n > slides.length - 1) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((item) => (item.style.display = "none"));
  dots.forEach((item) => item.classList.remove("dot--active"));

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("dot--active");
}

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

btnPrev.addEventListener("click", function () {
  plusSlide(-1);
});

btnNext.addEventListener("click", function () {
  plusSlide(1);
});

dotsWrap.addEventListener("click", function (event) {
  for (let i = 0; i < dots.length; i++) {
    if (event.target.classList.contains("dot") && event.target == dots[i]) {
      currentSlide(i);
    }
  }
});
