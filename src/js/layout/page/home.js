import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
  const breakpoint = 816;
  const stagesWrapper = document.querySelector(".swiper .stages__wrapper");
  if (!stagesWrapper) return;

  const originalItems = [...stagesWrapper.querySelectorAll(".stages__item")];

  let swiperInstance; // переменная для хранения экземпляра Swiper

  function createSlide(items) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.append(...items.map((i) => i.cloneNode(true)));
    return slide;
  }

  function createSlides() {
    stagesWrapper.innerHTML = "";
    stagesWrapper.classList.add("swiper-wrapper");

    const slides = [
      createSlide([originalItems[0], originalItems[1]]),
      createSlide([originalItems[2]]),
      createSlide([originalItems[3], originalItems[4]]),
      createSlide([originalItems[5]]),
      createSlide([originalItems[6]]),
    ];

    stagesWrapper.append(...slides);
  }

  function resetWrapper() {
    stagesWrapper.classList.remove("swiper-wrapper");
    stagesWrapper.innerHTML = "";
    stagesWrapper.append(...originalItems);
  }

  function initSwiper() {
    swiperInstance = new Swiper("#cp-home-stages .swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      // loop: true,
      modules: [Navigation, Pagination],
      speed: 1500,
      navigation: {
        nextEl: "#cp-home-stages .swiper-button-next",
        prevEl: "#cp-home-stages .swiper-button-prev",
      },
      pagination: {
        el: "#cp-home-stages .swiper-pagination",
        clickable: true,
      },
    });
  }

  function destroySwiper() {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = undefined;
    }
  }

  function checkWidthAndUpdate() {
    if (window.innerWidth < breakpoint) {
      if (!stagesWrapper.classList.contains("swiper-wrapper")) {
        createSlides();
        initSwiper(); // инициализируем Swiper после создания слайдов
      }
    } else {
      if (stagesWrapper.classList.contains("swiper-wrapper")) {
        destroySwiper(); // уничтожаем Swiper перед возвратом к исходной разметке
        resetWrapper();
      }
    }
  }

  checkWidthAndUpdate();

  window.addEventListener("resize", () => {
    checkWidthAndUpdate();
  });
});

// swiper для team
new Swiper("#cp-home-team .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  modules: [Navigation, Autoplay, Pagination],

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    // pauseOnMouseEnter: true
  },

  breakpoints: {
    816: {
      slidesPerView: 2,
    },
    1045: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },

  speed: 1500, // длительность анимации перехода

  // Navigation arrows
  navigation: {
    nextEl: "#cp-home-team .swiper-button-next",
    prevEl: "#cp-home-team .swiper-button-prev",
  },

  pagination: {
    el: "#cp-home-team .swiper-pagination",
    clickable: true,
    type: 'fraction'
  },
});
