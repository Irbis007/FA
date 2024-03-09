

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

let scrollPosition = 0;
let scrollR = triggerBlock.scrollWidth;
window.addEventListener("wheel", function (e) {
  let scrollTop = triggerBlock.getBoundingClientRect().y;

  if (triggerBlock && window.innerWidth > 991) {
    if (e.deltaY > 0) {
      if (
        (window.innerHeight / 2 - triggerBlock.clientHeight / 2) + 20 >= scrollTop &&
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
        (window.innerHeight / 2 - triggerBlock.clientHeight / 2) -20 <= scrollTop &&
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

// VIDEO SECTION

const videoSectionAside = document.querySelector(".video__prices");
const videoSectionAsideData = [15100, 15110, 15120, 1530, 15140];



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


const animation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'), // контейнер для анимации
  renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
  loop: true, // зацикливание анимации
  autoplay: true, // автоматический запуск анимации
  path: './main.json' // путь к вашему JSON-файлу с анимацией
});

const animation2 = lottie.loadAnimation({
  container: document.getElementById('lottie-animation2'), // контейнер для анимации
  renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
  loop: true, // зацикливание анимации
  autoplay: true, // автоматический запуск анимации
  path: './main.json' // путь к вашему JSON-файлу с анимацией
});