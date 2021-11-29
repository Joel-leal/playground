function highestCount(listNumber) {
  // seu código aqui
  let maiorNumero = 0;
  for (let i = 0; i < listNumber.length; i += 1) {
    if (maiorNumero < listNumber[i]) {
      maiorNumero = listNumber[i];
    }
  }
  let cont = 0;
  for (let z = 0; z < listNumber.length; z++) {
    if (listNumber[z] === maiorNumero) {
      cont += 1;
    }
  }
  return cont;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));