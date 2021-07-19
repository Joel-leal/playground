const phrase = "ABCDEFGHIJKLMNOPQRSTUWVYXZ";
function printAlphabet() {
  const listLetterAlphabet = [];
  for (let i = 65; i < 123; i++) {
    if (i >= 65 && i <= 90) {
      let letter = String.fromCharCode(i);
      listLetterAlphabet.push(letter);
    }
  }
  return listLetterAlphabet;
}
const listAlphabet = printAlphabet();

function checkAlphabet(listAlphabet, phrase) {
  let listCheck = [];
  for (let z = 0; z < listAlphabet; z++) {
    for (let x = 0; x < phrase; x++) {
      if ((listAlphabet[z] = phrase[x])) {
        listCheck.push(phrase[x]);
      }
    }
  }
  console.log(listCheck);
  return listCheck;
}

checkAlphabet(listAlphabet, phrase);
