const list = [
  10, 15, 13, 20, 17, 18, 15, 16, 18, 19, 20, 19, 20, 15, 18, 19, 13, 11, 12,
  16,
];
let sum = 0;
for (let i = 0; i < list.length; i++) {
  sum += list[i];
}
let media = sum / 20;
console.log(`o valor da média é ${media}`);
let listUpMedia = [];
for (let z = 0; z < list.length; z++) {
  if (list[z] > media) {
    listUpMedia.push(list[z]);
  }
}
console.log(`O número total de notas acima da média é: ${listUpMedia.length}`);
