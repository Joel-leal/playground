// 01 - Mensagem codificada
// Elabore uma função que ao receber uma string como parâmetro retorne outra string com a posição de cada caractere
// multiplicado por 3 no lugar do caractere. Exemplo: decodeString("Trybe") retorna "036912"
let string = "Trybe"

// Desenvolva seu código aqui

// let multiNumber = ''
// for( let i = 0; i < string.length; i++){
//   let numberIndex = i * 3
//   multiNumber += numberIndex
// }
// console.log(multiNumber)

// 02 - Calcular a soma de 1 até 1000
// Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.

// Desenvolva seu código aqui
// let sumNumber = 0
// for(let i = 1; i <= 1000; i++){
//   sumNumber += i
// }
// console.log(sumNumber)

// 03 - Escreva seu nome N vezes
// Faça um algoritmo usando a estrutura "FOR" que escreva 20 vezes seu nome no terminal.


// Desenvolva seu código aqui

// for(let i = 1; i <=20; i++){
//   const name = "Donald"
//   console.log(`Essa é a ${i}ª vez que o ${name}`)
// }

// 04 - Números divisíveis por 3
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// Desenvolva seu código aqui

let cont = 0
for(let i = 2; i <= 150; i++){
  if(i % 3 == 0){
    cont += 1
  }
}
if(cont == 50){
  console.log(`a quantidade de divisores de 3 entre 2 a 150 é ${cont}`)
}

// 05 - Imprima os números ímpares
//A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
//Crie um algoritmo que exibe todos os números inteiros ímpares desse intervalo.


// Desenvolva seu código aqui

// 06 - Ordem decrescente
// Escreva um algoritmo que imprima os números inteiros do intervalo de 100 a 200 em ordem decrescente.


// Desenvolva seu código aqui


