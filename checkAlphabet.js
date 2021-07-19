const phrase = "ABCDEFGHIJKLMNOPQRSTUWVYXZ";
function printAlphabet() {
  const listLetterAlphabet = [];
  for (let i = 65; i < 123; i++) {
    if (i >= 65 && i <= 90) {
      let letter = String.fromCharCode(i);
      listLetterAlphabet.push(letter);
    }
    if (i >= 97 && i < 123) {
      let letter = String.fromCharCode(i);
      listLetterAlphabet.push(letter);
    }
  }
  console.log(listLetterAlphabet);
  return listLetterAlphabet;
}

function checkAlphabet(phrase, listAlphabet) {
  let count = 0;
  for (let z = 0; z < listAlphabet; z++) {
    for (let x = 0; x < phrase; x++) {
      if ((listAlphabet[z] = phrase[x])) {
        count += 1;
        console.log(count);
      }
    }
  }
  return count;
}
const listAlphabet = printAlphabet();
checkAlphabet(phrase, listAlphabet);
