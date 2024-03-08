


window.addEventListener("load", function (e) {
  const preloader = document.querySelector(".preloader");
  preloader.style.animation = "preloaderAnim 0.7s 1s forwards";
  const body = document.querySelector("body");
  setInterval(() => {
    body.style.overflow = "auto";
  }, 1700);
});

const faqs = document.querySelectorAll(".faq .faq__body .item");

faqs.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("active")) {
      // removeActive(faqs)
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// CASE

let mainContainer = document.querySelector("body");
let triggerBlock = document.querySelector(".benefits__slider-target");

let isHorizontalScrolling = false;

let scrollPosition = 0;

window.addEventListener("wheel", function (e) {
  let scrollTop = triggerBlock.getBoundingClientRect().y;

  if (triggerBlock && this.window.innerWidth > 991) {

    if (
      this.window.innerHeight / 2 - triggerBlock.clientHeight / 2 >= scrollTop &&
      Math.ceil(triggerBlock.clientWidth / 10) !=
        Math.ceil((triggerBlock.scrollWidth - Math.ceil(triggerBlock.scrollLeft)) / 10) &&
      e.deltaY > 0 && scrollTop 
    ) {
      mainContainer.classList.add("unscroll");
      if (e.deltaY > 0) {
        scrollPosition += 60;
      } else {
        scrollPosition -= 60;
      }
      triggerBlock.scrollLeft = scrollPosition;
    } else if (
      e.deltaY < 0 &&
      this.window.innerHeight / 2 - triggerBlock.clientHeight / 2 <= scrollTop &&
      Math.ceil(triggerBlock.scrollLeft) != 0
    ) {
      mainContainer.classList.add("unscroll");
      if (e.deltaY > 0) {
        scrollPosition += 60;
      } else {
        scrollPosition -= 60;
      }
      triggerBlock.scrollLeft = scrollPosition;
    } else {
      mainContainer.classList.remove("unscroll");
    }
  }
});

// VIDEO SECTION

const videoSectionAside = document.querySelector(".video__prices");
const videoSectionAsideData = [];

for (let i = 0; i < 30; i++) {
  videoSectionAsideData.push(15100 + i * 10);
}

for (let i = 0; i <= videoSectionAsideData.length - 1; i++) {
  if (i === 6) {
    videoSectionAside.innerHTML += `
    <div class="aside__price active">${videoSectionAsideData[i]}.00</div>
  `;
  } else {
    videoSectionAside.innerHTML += `
    <div class="aside__price">${videoSectionAsideData[i]}.00</div>
  `;
  }
}

// TAB PRODUCT

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
