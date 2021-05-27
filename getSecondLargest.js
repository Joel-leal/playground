const numbers = [2, 13, 4, 16, 28, 19];
let biggerNumber = 0;
for (let i = 0; i < numbers.length; i++) {
  if (biggerNumber < numbers[i]) {
    biggerNumber = numbers[i];
  }
}
const position = numbers.indexOf(biggerNumber);
numbers.splice(position, 1);
let biggerPredecessorNumber = 0;
for (let z = 0; z < numbers.length; z++) {
  if (biggerPredecessorNumber < numbers[z]) {
    biggerPredecessorNumber = numbers[z];
  }
}
console.log(biggerPredecessorNumber);
