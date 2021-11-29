// Desafio 10
function techList(array, nameIs) {
  // seu código aqui
  if (array.length === 0) {
    let result = 'Vazio!';
    return result;
  }
  let listObject = [];
  let newArray = array.sort();
  for (let i = 0; i < array.length; i += 1) {
    let objectTec = {
      tech: newArray[i],
      name: nameIs,
    };
    listObject.push(objectTec);
  }

  return listObject;
}

console.log(techList([], 'Joel'));

// Desafio 11
function generatePhoneNumber(fone) {
  if (fone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  return `(${fone[0]}${fone[1]}) ${fone[2]}${fone[3]}${fone[4]}${fone[5]}${fone[6]}-${fone[7]}${fone[8]}${fone[9]}${fone[10]}`;
}

console.log(generatePhoneNumber('31973621629'));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
