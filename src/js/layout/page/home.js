document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.stages__wrapper');
  if (!wrapper) return;

  const items = wrapper.children;

  const combined12 = document.createElement('div');
  combined12.className = 'stages__item combined';
  combined12.innerHTML = `
    <div class="number">1</div>
    <div class="text">${items[0]?.textContent.trim() || ''}</div>
    <div class="number">2</div>
    <div class="text">${items[1]?.textContent.trim() || ''}</div>
  `;

  const combined45 = document.createElement('div');
  combined45.className = 'stages__item combined';
  combined45.innerHTML = `
    <div class="number">4</div>
    <div class="text">${items[3]?.textContent.trim() || ''}</div>
    <div class="number">5</div>
    <div class="text">${items[4]?.textContent.trim() || ''}</div>
  `;

  // Вставляем объединённые блоки в нужные позиции
  items[0].before(combined12);
  items[4].before(combined45);
});


