let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

// console.log(`Bem-vina, ${info.personagem}`

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["recorrente"] = 'sim'
// console.log(info)

// 3 - Faça um for/in que mostre todas as chaves do objeto.

for (const key in info) {
  console.log(key)
}