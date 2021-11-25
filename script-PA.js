// function createpalette(numberPalette) {
//   const square = document.getElementById('color-palette');
//   for (let key = 0; key < numberPalette; key += 1) {
//     const palette = document.createElement('div');
//     palette.className = 'color';
//     square.appendChild(palette);
//   }
// }
// createpalette(4);

// document.querySelector('#color-palette').children[0].style.backgroundColor = '#000';
// document.querySelector('#color-palette').children[1].style.backgroundColor = '#255';
// document.querySelector('#color-palette').children[2].style.backgroundColor = '#64f';
// document.querySelector('#color-palette').children[3].style.backgroundColor = '#0ff';

function createSquarePixels(squareLength) {
  const square = document.getElementById('pixel-board');
  for (let i = 0; i < squareLength; i += 1) {
    const rowPixels = document.createElement('section');
    rowPixels.className = 'row';
    for (let k = 0; k < squareLength; k += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      rowPixels.appendChild(pixel);
    }
    square.appendChild(rowPixels);
  }
}
createSquarePixels(5);

const colorPalette = document.getElementById('color-palette');
const sectionPixels = document.getElementById('pixel-board');
const buttonClear = document.getElementById('clear-board');
const buttonChangeBoardSize = document.querySelector('#generate-board');
const newColors = document.querySelector('#new-colors');
// REQUISITO 7
function selectedColor(event) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', selectedColor);

// REQUISITO 8
function colorPixel(event) {
  // if (event.target.id !== 'pixel-board') {
  const elementSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  const colorValue = window.getComputedStyle(elementSelected).backgroundColor;
  eventTarget.style.backgroundColor = colorValue;
  // }
}
// O método getComputedStyle () obtém todas as propriedades e valores CSS reais (calculados) do elemento especificado.
// O estilo computado é o estilo realmente usado na exibição do elemento, após a aplicação de "estilos" de fontes múltiplas.
sectionPixels.addEventListener('click', colorPixel);

// REQUISITO 9
function clear() {
  const pixels = document.querySelectorAll('.pixel'); // não aceita getElementBtId pois estamos tratando uma array
  for (let i = 0; i < pixels.length; i += 1) {
    // pixels[i].style.backgroundColor = 'white';
    pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
buttonClear.addEventListener('click', clear);

// REQUISITO 10 E 11

function checkInterval(number) {
  if (number < 5) {
    return 5;
  } if (number > 50) {
    return 50;
  }
  return number;
}

function generateNewBoard() {
  const getInputValue = document.querySelector('#board-size');
  if (getInputValue.value !== '') {
    const number = checkInterval(getInputValue.value);
    sectionPixels.innerHTML = '';
    sectionPixels.style.width = `${number * 42}px`;
    sectionPixels.style.height = `${number * 42}px`;
    for (let index = 1; index <= number ** 2; index += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.classList.add('border');
      sectionPixels.appendChild(pixel);
    }
  } else {
    alert('Board inválido!');
  }
  getInputValue.value = '';
}

buttonChangeBoardSize.addEventListener('click', generateNewBoard);

// REQUISITO 12
function generateRandomColor() {
  const random1 = Math.floor(Math.random() * 256);
  const random2 = Math.floor(Math.random() * 256);
  const random3 = Math.floor(Math.random() * 256);
  return `rgb(${random1}, ${random2}, ${random3})`;
}

function randomColor() {
  const pickColorPalette = document.querySelectorAll('.color');
  for (let index = 1; index < pickColorPalette.length; index += 1) {
    pickColorPalette[index].style.backgroundColor = generateRandomColor();
  }
}

randomColor();

newColors.addEventListener('click', randomColor);
