document.addEventListener('DOMContentLoaded', () =>{


const faqs = document.querySelectorAll(".faq .faq__body .item");

const blockHeght = document.querySelector('.block__height')

faqs.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("active")) {
      removeActive(faqs)
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

let mainContainer = document.querySelector("body");
let triggerBlock = document.querySelector(".benefits__slider-target");
let triggerBlockWrapper = document.querySelector('.benefits__slider')
let triggerBolckContetn = document.querySelector('.benefits__slider-wrapper')

let scrollPosition = 0;
let scrollWidth = 0
setTimeout(() =>{
  scrollWidth = window.innerWidth - document.documentElement.clientWidth
})

let triggerBlockWrapperWidth = triggerBlockWrapper.clientWidth


window.addEventListener("wheel", function (e) {
  let scrollTop = triggerBlock.getBoundingClientRect().y;
  if (triggerBlock && window.innerWidth > 991) {
    if (e.deltaY > 0) {
      if (
        window.innerHeight / 2 - triggerBlock.clientHeight / 2 + 20 >= scrollTop &&
        !(triggerBlock.scrollWidth - triggerBlock.clientWidth   < triggerBlock.scrollLeft) &&
        scrollTop > 0 &&
        triggerBlock.scrollLeft + triggerBlockWrapper.clientWidth + 40 < triggerBolckContetn.scrollWidth + 100
      ) {
        mainContainer.classList.add("unscroll");
        triggerBlockWrapper.style.width = triggerBlockWrapperWidth + scrollWidth + "px"
        scrollPosition += 15;
        triggerBlock.scrollLeft = scrollPosition;
      } else {
        mainContainer.classList.remove("unscroll");
        triggerBlockWrapper.style.width = triggerBlockWrapperWidth + 'px'
      }
    } else if (e.deltaY < 0) {
      if (
        window.innerHeight / 2 - triggerBlock.clientHeight / 2 - 20 <= scrollTop &&
        scrollPosition >= 0
      ) {
        mainContainer.classList.add("unscroll");
        triggerBlockWrapper.style.width = triggerBlockWrapperWidth + scrollWidth + 'px'
        scrollPosition -= 15;
        triggerBlock.scrollLeft = scrollPosition;
      } else {
        mainContainer.classList.remove("unscroll");
        triggerBlockWrapper.style.width = triggerBlockWrapperWidth + 'px'
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
const licensesImg = document.querySelector(".license .overview img");
const licensesClose = document.querySelector(".license .overview .close");

licenses.forEach((item) => {
  item.addEventListener("click", () => {
    licensesImg.src = item.children[0].src
    licensesImg.parentElement.classList.add('active')
    if(window.innerWidth > 767){
      licensesClose.style.left = `calc(50% + ${licensesImg.clientWidth / 2}px + 40px)`
    } else{
      licensesClose.style.left = `calc(50% + ${licensesImg.clientWidth / 2}px + 1px)`
    }
  });
});

licensesClose.addEventListener('click', () =>{
  licensesImg.parentElement.classList.remove('active')
})


function removeActive(list) {
  list.forEach((item) => {
    item.classList.remove("active");
  });
}

const scrollItems = document.querySelectorAll(".scroll-item");



const scrollAnimation = () => {
  scrollItems.forEach((el, i) => {
    if (window.innerHeight / 1.4 >=  el.getBoundingClientRect().y ) {
      if(el.classList.contains('scroll-group')){
        scrollItems[i].classList.add('animation-class');
        scrollItems[i+2].classList.add('animation-class');
        scrollItems[i+3].classList.add('animation-class');
      } else{
        el.classList.add("animation-class");
      }
    }
  });
};


scrollAnimation();
window.addEventListener("scroll", () => {
  scrollAnimation();
});

document.addEventListener('scroll', (event) => {
  event.preventDefault();
});


})