const faqs = document.querySelectorAll(".faq .faq__body .item");

faqs.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("active")) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

let mainContainer = document.querySelector("body");
let triggerBlock = document.querySelector(".benefits__slider-target");

let scrollPosition = 0;
let scrollR = triggerBlock.scrollWidth;
window.addEventListener("wheel", function (e) {
  let scrollTop = triggerBlock.getBoundingClientRect().y;

  if (triggerBlock && window.innerWidth > 991) {
    if (e.deltaY > 0) {
      if (
        window.innerHeight / 2 - triggerBlock.clientHeight / 2 + 20 >= scrollTop &&
        !(triggerBlock.scrollWidth - triggerBlock.clientWidth - 40 < triggerBlock.scrollLeft) &&
        scrollTop > 0
      ) {
        mainContainer.classList.add("unscroll");
        scrollPosition += 40;
        triggerBlock.scrollLeft = scrollPosition;
      } else {
        mainContainer.classList.remove("unscroll");
      }
    } else if (e.deltaY < 0) {
      if (
        window.innerHeight / 2 - triggerBlock.clientHeight / 2 - 20 <= scrollTop &&
        scrollPosition >= 0
      ) {
        mainContainer.classList.add("unscroll");

        scrollPosition -= 40;
        triggerBlock.scrollLeft = scrollPosition;
      } else {
        mainContainer.classList.remove("unscroll");
      }
    }
  }
});

const tabButton = document.querySelectorAll(".products .item__top");
const tabBody = document.querySelectorAll(".products .item__body");

tabButton.forEach((item, i) => {
  item.addEventListener("click", () => {
    removeActive(tabButton);
    removeActive(tabBody);
    item.classList.add("active");
    tabBody[i].classList.add("active");
  });
});

const licenses = document.querySelectorAll(".license__body .item");

licenses.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    mainContainer.style.overflow = "hidden";
  });
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".license") && e.target.tagName != "IMG") {
    removeActive(licenses);
    mainContainer.style.overflow = "auto";
  }
});

function removeActive(list) {
  list.forEach((item) => {
    item.classList.remove("active");
  });
}

const scrollItems = document.querySelectorAll(".scroll-item");

const scrollAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  scrollItems.forEach((el) => {
    let scrollOffset = el.offsetTop + el.offsetHeight / .3 ;
    if (window.innerHeight / 1.4 >=  el.getBoundingClientRect().y) {
      el.classList.add("animation-class");
    }
    console.log(el.getBoundingClientRect().y + window.innerHeight, windowCenter)
  });
};


scrollAnimation();
window.addEventListener("scroll", () => {
  scrollAnimation();
});

const animation = lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./main.json",
});

const animation2 = lottie.loadAnimation({
  container: document.getElementById("lottie-animation2"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./main.json",
});
