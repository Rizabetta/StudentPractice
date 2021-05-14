function main () {
  const panelsElements = document.querySelector('.wrapper');

  let clicksRed = 0;
  let clicksGreen = 0;
  let clicksBlue = 0;

  const redBlock = document.querySelector('.red');
  const greenBlock = document.querySelector('.green');
  const blueBlock = document.querySelector('.blue');

  const counterRed = document.querySelector('.red-counter');
  const counterGreen = document.querySelector('.green-counter');
  const counterBlue = document.querySelector('.blue-counter');
 		
  redBlock.onclick = function () {counterRed.textContent = clicksRed++; };
  greenBlock.onclick = function () {counterGreen.textContent = clicksGreen++;};
  blueBlock.onclick = function () {counterBlue.textContent = clicksBlue++;};
}

window.onload = main;