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

document.addEventListener("DOMContentLoaded", function () {
  const breakpoint = 540;
  const originalWrapper = document.querySelector(".stages__wrapper");
  if (!originalWrapper) return;

  // Сохраняем исходный HTML для восстановления
  const originalHTML = originalWrapper.innerHTML;

  // Функция для создания новой разметки
  function createSwiperMarkup() {
    // Создаём контейнер .swiper
    const swiperDiv = document.createElement("div");
    swiperDiv.classList.add("swiper");

    // Создаём новый .stages__wrapper с классом swiper-wrapper
    const newWrapper = document.createElement("div");
    newWrapper.classList.add("stages__wrapper", "swiper-wrapper");

    // Получаем все исходные .stages__item
    // const items = Array.from(originalWrapper.querySelectorAll(".stages__item"));
    const items = [...originalWrapper.querySelectorAll(".stages__item")];

    // Формируем слайды согласно вашей структуре:
    // 1-й слайд
    const slide1 = document.createElement("div");
    slide1.classList.add("swiper-slide");
    slide1.append(items[0].cloneNode(true), items[1].cloneNode(true));

    // 2-й слайд
    const slide2 = document.createElement("div");
    slide2.classList.add("swiper-slide");
    slide2.append(items[2].cloneNode(true));

    // 3-й слайд
    const slide3 = document.createElement("div");
    slide3.classList.add("swiper-slide");
    slide3.append(items[3].cloneNode(true), items[4].cloneNode(true));

    // 4-й слайд
    const slide4 = document.createElement("div");
    slide4.classList.add("swiper-slide");
    slide4.append(items[5].cloneNode(true));

    // 5-й слайд
    const slide5 = document.createElement("div");
    slide5.classList.add("swiper-slide");
    slide5.append(items[6].cloneNode(true));

    // Добавляем слайды в обёртку
    // newWrapper.appendChild(slide1);
    // newWrapper.appendChild(slide2);
    // newWrapper.appendChild(slide3);
    // newWrapper.appendChild(slide4);
    // newWrapper.appendChild(slide5);

    // Вставляем новую структуру во внешний контейнер
    // swiperDiv.appendChild(newWrapper);

    // Добавляем слайды в обёртку
    newWrapper.append(slide1, slide2, slide3, slide4, slide5);

    // Вставляем новую структуру во внешний контейнер
    swiperDiv.append(newWrapper);

    return swiperDiv;
  }

  // Функция переключения разметки в зависимости от ширины
  function checkWidthAndUpdate() {
    const currentWidth = window.innerWidth;

    if (currentWidth < breakpoint) {
      // Если уже есть .swiper — ничего не делаем
      if (!document.querySelector(".swiper")) {
        // Создаём новую разметку
        const newSwiper = createSwiperMarkup();

        // Заменяем исходный .stages__wrapper на .swiper
        originalWrapper.parentNode.replaceChild(newSwiper, originalWrapper);
      }
    } else {
      // При ширине >= breakpoint восстанавливаем исходную разметку, если нужно
      const swiperDiv = document.querySelector(".swiper");
      if (swiperDiv) {
        // Создаём новый div stages__wrapper и вставляем исходный HTML
        const restoredWrapper = document.createElement("div");
        restoredWrapper.classList.add("stages__wrapper");
        restoredWrapper.innerHTML = originalHTML;

        // Заменяем .swiper на исходный .stages__wrapper
        swiperDiv.parentNode.replaceChild(restoredWrapper, swiperDiv);
      }
    }
  }

  // Запускаем при загрузке
  checkWidthAndUpdate();

  // И при изменении размера окна с небольшой задержкой (дебаунс)
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkWidthAndUpdate, 150);
  });
});
