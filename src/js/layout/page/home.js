import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// document.addEventListener("DOMContentLoaded", () => {
//   const wrapper = document.querySelector(".stages__wrapper");
//   if (!wrapper) return;

//   const items = wrapper.children;

//   const combined12 = document.createElement("div");
//   combined12.className = "stages__item combined";
//   combined12.innerHTML = `
//     <div class="number">1</div>
//     <div class="text">${items[0]?.textContent.trim() || ""}</div>
//     <div class="number">2</div>
//     <div class="text">${items[1]?.textContent.trim() || ""}</div>
//   `;

//   const combined45 = document.createElement("div");
//   combined45.className = "stages__item combined";
//   combined45.innerHTML = `
//     <div class="number">4</div>
//     <div class="text">${items[3]?.textContent.trim() || ""}</div>
//     <div class="number">5</div>
//     <div class="text">${items[4]?.textContent.trim() || ""}</div>
//   `;

//   // Вставляем объединённые блоки в нужные позиции
//   items[0].before(combined12);
//   items[4].before(combined45);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const breakpoint = 816;
//   const originalWrapper = document.querySelector(".stages__wrapper");
//   if (!originalWrapper) return;

//   // Сохраняем исходный HTML для восстановления
//   const originalHTML = originalWrapper.innerHTML;

//   // Функция для создания новой разметки
//   function createSwiperMarkup() {
//     // Создаём контейнер .swiper
//     const swiperDiv = document.createElement("div");
//     swiperDiv.classList.add("swiper");

//     // Создаём новый .stages__wrapper с классом swiper-wrapper
//     const newWrapper = document.createElement("div");
//     newWrapper.classList.add("stages__wrapper", "swiper-wrapper");

//     // Получаем все исходные .stages__item
//     // const items = Array.from(originalWrapper.querySelectorAll(".stages__item"));
//     const items = [...originalWrapper.querySelectorAll(".stages__item")];

//     // Формируем слайды согласно вашей структуре:
//     // 1-й слайд
//     const slide1 = document.createElement("div");
//     slide1.classList.add("swiper-slide");
//     slide1.append(items[0].cloneNode(true), items[1].cloneNode(true));

//     // 2-й слайд
//     const slide2 = document.createElement("div");
//     slide2.classList.add("swiper-slide");
//     slide2.append(items[2].cloneNode(true));

//     // 3-й слайд
//     const slide3 = document.createElement("div");
//     slide3.classList.add("swiper-slide");
//     slide3.append(items[3].cloneNode(true), items[4].cloneNode(true));

//     // 4-й слайд
//     const slide4 = document.createElement("div");
//     slide4.classList.add("swiper-slide");
//     slide4.append(items[5].cloneNode(true));

//     // 5-й слайд
//     const slide5 = document.createElement("div");
//     slide5.classList.add("swiper-slide");
//     slide5.append(items[6].cloneNode(true));

//     // Добавляем слайды в обёртку
//     newWrapper.append(slide1, slide2, slide3, slide4, slide5);

//     // Вставляем новую структуру во внешний контейнер
//     swiperDiv.append(newWrapper);

//     return swiperDiv;
//   }

//   // Функция переключения разметки в зависимости от ширины
//   function checkWidthAndUpdate() {
//     const currentWidth = window.innerWidth;

//     if (currentWidth < breakpoint) {
//       // Если уже есть .swiper — ничего не делаем
//       if (!document.querySelector(".swiper")) {
//         // Создаём новую разметку
//         const newSwiper = createSwiperMarkup();

//         // Заменяем исходный .stages__wrapper на .swiper
//         originalWrapper.parentNode.replaceChild(newSwiper, originalWrapper);
//       }
//     } else {
//       // При ширине >= breakpoint восстанавливаем исходную разметку, если нужно
//       const swiperDiv = document.querySelector(".swiper");
//       if (swiperDiv) {
//         // Создаём новый div stages__wrapper и вставляем исходный HTML
//         const restoredWrapper = document.createElement("div");
//         restoredWrapper.classList.add("stages__wrapper");
//         restoredWrapper.innerHTML = originalHTML;

//         // Заменяем .swiper на исходный .stages__wrapper
//         swiperDiv.parentNode.replaceChild(restoredWrapper, swiperDiv);
//       }
//     }
//   }

//   // Запускаем при загрузке
//   checkWidthAndUpdate();

//   // И при изменении размера окна с небольшой задержкой (дебаунс)
//   let resizeTimeout;
//   window.addEventListener("resize", function () {
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(checkWidthAndUpdate, 150);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const breakpoint = 816;
//   const originalWrapper = document.querySelector(".stages__wrapper");
//   const swiperContainer = document.querySelector(".swiper"); // уже есть в разметке
//   if (!originalWrapper || !swiperContainer) return;

//   const originalHTML = originalWrapper.innerHTML;

//   function createSwiperWrapper() {
//     const newWrapper = document.createElement("div");
//     newWrapper.classList.add("stages__wrapper1", "swiper-wrapper");

//     const items = [...originalWrapper.querySelectorAll(".stages__item")];

//     const slide1 = document.createElement("div");
//     slide1.classList.add("swiper-slide");
//     slide1.append(items[0].cloneNode(true), items[1].cloneNode(true));

//     const slide2 = document.createElement("div");
//     slide2.classList.add("swiper-slide");
//     slide2.append(items[2].cloneNode(true));

//     const slide3 = document.createElement("div");
//     slide3.classList.add("swiper-slide");
//     slide3.append(items[3].cloneNode(true), items[4].cloneNode(true));

//     const slide4 = document.createElement("div");
//     slide4.classList.add("swiper-slide");
//     slide4.append(items[5].cloneNode(true));

//     const slide5 = document.createElement("div");
//     slide5.classList.add("swiper-slide");
//     slide5.append(items[6].cloneNode(true));

//     newWrapper.append(slide1, slide2, slide3, slide4, slide5);

//     return newWrapper;
//   }

//   function checkWidthAndUpdate() {
//     const currentWidth = window.innerWidth;

//     if (currentWidth < breakpoint) {
//       if (!swiperContainer.querySelector(".swiper-wrapper")) {
//         // Скрываем исходный блок
//         originalWrapper.style.display = "none";

//         // Создаём и вставляем новый .stages__wrapper.swiper-wrapper
//         const newWrapper = createSwiperWrapper();
//         // swiperContainer.appendChild(newWrapper);
//         swiperContainer.append(newWrapper);
//       }
//     } else {
//       // При ширине >= breakpoint
//       // Показываем исходный блок
//       originalWrapper.style.display = "";

//       // Удаляем .swiper-wrapper, если есть
//       const existingWrapper = swiperContainer.querySelector(".swiper-wrapper");
//       if (existingWrapper) {
//         existingWrapper.remove();
//       }
//     }
//   }

//   checkWidthAndUpdate();

//   let resizeTimeout;
//   window.addEventListener("resize", function () {
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(checkWidthAndUpdate, 150);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const breakpoint = 816;
//   const stagesWrapper = document.querySelector(".swiper .stages__wrapper");
//   if (!stagesWrapper) return;

//   const originalItems = [...stagesWrapper.querySelectorAll(".stages__item")];

//   // Вынесенная функция создания слайда
//   function createSlide(items) {
//     const slide = document.createElement("div");
//     slide.classList.add("swiper-slide");
//     slide.append(...items.map((i) => i.cloneNode(true)));
//     return slide;
//   }

//   function createSlides() {
//     stagesWrapper.innerHTML = "";
//     stagesWrapper.classList.add("swiper-wrapper");

//     const slides = [
//       createSlide([originalItems[0], originalItems[1]]),
//       createSlide([originalItems[2]]),
//       createSlide([originalItems[3], originalItems[4]]),
//       createSlide([originalItems[5]]),
//       createSlide([originalItems[6]]),
//     ];

//     stagesWrapper.append(...slides);
//   }

//   function resetWrapper() {
//     stagesWrapper.classList.remove("swiper-wrapper");
//     stagesWrapper.innerHTML = "";
//     stagesWrapper.append(...originalItems);
//   }

//   function checkWidthAndUpdate() {
//     if (window.innerWidth < breakpoint) {
//       if (!stagesWrapper.classList.contains("swiper-wrapper")) {
//         createSlides();
//       }
//     } else {
//       if (stagesWrapper.classList.contains("swiper-wrapper")) {
//         resetWrapper();
//       }
//     }
//   }

//   checkWidthAndUpdate();

//   window.addEventListener("resize", () => {
//     checkWidthAndUpdate();
//   });
// });

// new Swiper("#cp-home-stages .swiper", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,
//   modules: [Navigation, Autoplay, Pagination],

//   // autoplay: {
//   //   delay: 4900,
//   //   disableOnInteraction: false,
//   // },

//   speed: 1500, // длительность анимации перехода

//   // Navigation arrows
//   navigation: {
//     nextEl: "#cp-home-stages .swiper-button-next",
//     prevEl: "#cp-home-stages .swiper-button-prev",
//   },

//   pagination: {
//     el: "#cp-home-stages .swiper-pagination",
//     clickable: true,
//   },
// });

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
