//lista de exercícios do dia 4.3

//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 ,
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 10
let symbol = '*'
let listSymbol = ''
for(let i = 0; i < 10; i++){
  listSymbol += symbol
}
for(let k = 0; k < 10; k++){
  console.log(listSymbol)
}