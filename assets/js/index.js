'use strict';
try {
  const lightbulb = document.querySelector('.lightbulb');
  const switchLightBtn = document.querySelector('.switchLightBtn');

  if (!lightbulb || !switchLightBtn) {
    throw new Error('Element not found');
  }

  switchLightBtn.addEventListener('click', () => {
    lightbulb.classList.toggle('lightbulbOff');
    lightbulb.classList.toggle('lightbulbOn');
  });
} catch (error) {
  console.error(error);
}
