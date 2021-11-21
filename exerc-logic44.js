// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

// console.log(`Bem-vina, ${info.personagem}`)

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

// info["recorrente"] = 'sim'
// console.log(info)

// 3 - Faça um for/in que mostre todas as chaves do objeto.

// for (const key in info) {
//   console.log(key)
// }

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

// for (let key in info) {
// console.log(info[key])
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
// 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'.
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.


let info = [{
  personagem: 'Margarida',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrentes: "sim"
},
{
personagem: 'Tio Patinhas',
origem: 'Pato Donald',
nota: 'O último MacPatinhas',
recorrentes: "sim"
}
]

let list = ["personagem", "origem", "nota", "recorrentes"]
for(let i = 0; i < list.length; i += 1){
 if(i < (list.length-1)){
   console.log(info[0][list[i]] + " e " + info[1][list[i]])
 }
 if(info[0][list[i]] === info[1][list[i]]){
 console.log("ambos recorrentes")
 }
}
