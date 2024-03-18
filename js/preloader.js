window.addEventListener("load", function (e) {
  const preloader = document.querySelector(".preloader");
  preloader.style.animation = "preloaderAnim 0.7s 1s forwards";
  const body = document.querySelector("body");
  setTimeout(() => {
    body.style.overflow = "auto";
  }, 1700);
});


