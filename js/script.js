
  document.addEventListener("DOMContentLoaded", function () {

 const swiper = new Swiper(".testimonialSwiper", {
  centeredSlides: true,
  loop: true,
  speed: 600,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },

  on: {
    slideChange: function () {
      updateText(this);
    },
  },
});

setTimeout(() => {
  updateText(swiper);
}, 0);

 function updateText(swiperInstance) {
  const realIndex = swiperInstance.realIndex;

  const realSlide = swiperInstance.slides.find(
    slide => slide.getAttribute("data-swiper-slide-index") == realIndex
  );

  if (!realSlide) return;

  document.getElementById("testimonialText").textContent =
    realSlide.dataset.text || "";

  document.getElementById("testimonialName").textContent =
    realSlide.dataset.name || "";

  document.getElementById("testimonialRole").textContent =
    realSlide.dataset.role || "";
}
  
});