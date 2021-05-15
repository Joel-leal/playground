// criar uma função que retorna true - caso uma palavra tenha letras repetidas
//e false - caso não tenha letras repetidas

function letterRepeat(word) {
  for (let i = 0; i < word.length; i++) {
    for (let z = 0; z < word.length; z++) {
      if (word[i] == word[z] && i != z) {
        return true;
      }
    }
  }
  return false;
}
console.log(letterRepeat("anna"));
