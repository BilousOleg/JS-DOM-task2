'use strict';

// Завдання 1

try {
  const clickBtn = document.querySelector('.clickBtn');

  if (!clickBtn) {
    throw new Error('Element not found');
  }

  clickBtn.addEventListener('click', () => {
    alert('Привіт тобі, клацальщик!');
  });
} catch (error) {
  console.error(error);
}

// Завдання 2

try {
  const anchorEl = document.querySelector('.buttonCreator');

  if (!anchorEl) {
    throw new Error('Element not found');
  }

  // Варіант багаторазового створення кнопки
  // anchorEl.addEventListener('click', () => {
  //   const newBtnEl = document.createElement('button');
  //   // Текст для того, щоб кнопку було видно
  //   newBtnEl.textContent = 'Я кнопка';
  //   anchorEl.after(newBtnEl);
  // });

  // Варіант з одноразовим створенням
  const newBtnEl = document.createElement('button');
  // Текст для того, щоб кнопку було видно
  newBtnEl.textContent = 'Я кнопка';

  anchorEl.addEventListener('click', () => {
    anchorEl.after(newBtnEl);
  });
} catch (error) {
  console.error(error);
}
