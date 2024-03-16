import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 1000,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

if (window.innerWidth < 768) {
  const swiper2 = new Swiper(".swiper-2", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
