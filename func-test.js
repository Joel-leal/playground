function biggerNUmber(arrayOfNumber){
  let maiorNumero = 0;
  for (let i = 0; i < arrayOfNumber.length; i += 1) {
    if (maiorNumero < arrayOfNumber[i]) {
      maiorNumero = arrayOfNumber[i];
    }
  }
  return maiorNumero
}


function highestCount(listNumber) {
  // seu código aqui
  let numberBigger = biggerNUmber(listNumber);
  let cont = 0;
  for (let z = 0; z < listNumber.length; z++) {
    if (listNumber[z] === numberBigger) {
      cont += 1;
    }
  }
  return cont;
}

console.log(highestCount([9, 9, 9, 17, 17, 17, 17, 9, 5, 17]));