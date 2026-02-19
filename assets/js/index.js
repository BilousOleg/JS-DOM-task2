'use strict';

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
