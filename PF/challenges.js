// Desafio 1
function compareTrue(a, b) {
// seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// console.log(calcArea(4, 8));

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  return text.split(' ');
}

// console.log(splitSentence('Joel é uma pessoa instrutora na trybe.'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let element = `${array[array.length - 1]}, ${array[0]}`;
  return element;
}

// console.log(compareTrue(false, true));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// console.log(footballPoints(4, 3));

// Desafio 6
function biggerNUmber(arrayOfNumber) {
  let maiorNumero = arrayOfNumber[0];
  for (let i = 0; i < arrayOfNumber.length; i += 1) {
    if (maiorNumero < arrayOfNumber[i]) {
      maiorNumero = arrayOfNumber[i];
    }
  }
  return maiorNumero;
}

function highestCount(listNumber) {
  // seu código aqui
  let numberBigger = biggerNUmber(listNumber);
  let cont = 0;
  for (let z = 0; z < listNumber.length; z += 1) {
    if (listNumber[z] === numberBigger) {
      cont += 1;
    }
  }
  return cont;
}

// console.log(highestCount([19, 17, 22, 22, 19, 22, 17]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

//  catAndMouse(1, 20, 12);

// Desafio 8

function confereDivisibilidade(num) {
  let resultado = '';
  if (num % 15 === 0) { // mudança dessa variável de lugar pode acarretar erro no teste e no código
    resultado = 'fizzBuzz';
  } else if (num % 3 === 0) {
    resultado = 'fizz';
  } else if (num % 5 === 0) {
    resultado = 'buzz';
  } else { resultado = 'bug!'; }
  return resultado;
}

// function confereDivisibilidade(num) {
//   let resultado = '';
//   if (num % 3 === 0 && num % 5 !== 0) {
//     resultado = 'fizz';
//   } else if (num % 5 === 0 && num % 3 !== 0) {
//     resultado = 'buzz';
//   } else if (num % 15 === 0) {
//     resultado = 'fizzBuzz';
//   } else { resultado = 'bug!'; }
//   return resultado;
// }

function fizzBuzz(array) {
  let arrayString = [];
  for (let i = 0; i < array.length; i += 1) {
    arrayString.push(confereDivisibilidade(array[i]));
  }
  return arrayString;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(str) {
  // seu código aqui
  let newStr = str.replace(/a/ig, 1)
    .replace(/e/ig, 2)
    .replace(/i/ig, 3)
    .replace(/o/ig, 4)
    .replace(/u/ig, 5);
  return newStr;
}
console.log(encode('O vento levou a tristeza pra longe'));
function decode(num) {
  // seu código aqui
  let newNum = num.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return newNum;
}
console.log(decode('h2ll4'));
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
