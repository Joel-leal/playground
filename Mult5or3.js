function sumMult(number) {
  let sumNumber = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sumNumber += i;
    }
  }
  return sumNumber;
}

console.log(sumMult(1000));
