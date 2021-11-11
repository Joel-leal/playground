//lista de exercícios do dia 4.3

// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 ,
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// let n = 10
// let symbol = '*'
// let listSymbol = ''
// for(let i = 0; i < 10; i++){
//   listSymbol += symbol
// }
// for(let k = 0; k < 10; k++){
//   console.log(listSymbol)
// }

// 2-Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5
// let symbol = '*'
// let listSymbol = ''
// for(let i = 0; i < 5; i++){
//   listSymbol += symbol
//   console.log(listSymbol)
// }

// 3- Agora inverta o lado do triângulo.

// let n = 5 // número de elementos na lista
// let symbol = '*'
// let listSymbol = ''
// let k = n //número de posição de elementos na lista
// for(let i = 0; i < 5; i++){
//   for(let p = 0; p < n; p++){
//     if(p < k){
//       listSymbol = listSymbol + ' '
//     }
//     else(
//       listSymbol+=symbol
//     )
//   }
//   console.log(listSymbol)
//   listSymbol = ''
//   k -=1
// }

// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5
let symbol = '*'
let listSymbol = ''
let k = (n + 1)/2
let positionLeft = k
let positionRight = k

for(let i = 0; i < k; i++){
  for(let p = 0; p <= 5; p++){
    if(p < positionLeft || p > positionRight){
      listSymbol = listSymbol + ' '
    }
    else(
      listSymbol+=symbol
    )
  }
  listSymbol = ''
  positionLeft -=1
  positionRight+=1
  console.log(listSymbol)
}
