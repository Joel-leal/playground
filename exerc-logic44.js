let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log(`Bem-vina, ${info.personagem}`)

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["recorrente"] = 'sim'
// console.log(info)

// 3 - Faça um for/in que mostre todas as chaves do objeto.

for (const key in info) {
  console.log(key)
}

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let key in info) {
console.log(info[key])
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
// 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'.
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = [{
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
  if(list[i] === "recorrentes" && info2[0][list[i]] === "sim" && info2[1][list[i]] === "sim"){
  console.log("ambos recorrentes")
  }
 else{
   console.log(info2[0][list[i]] + " e " + info2[1][list[i]])
 }
}

// let ObjectInfo = {
// personagem: 'Tio Patinhas',
// origem: 'Pato Donald',
// nota: 'O último MacPatinhas',
// recorrentes: "sim"
// }
// let {personagem, origem, nota, recorrentes} = ObjectInfo

// console.log(personagem)

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let nome = leitor["nome"] + ' ' + leitor["sobrenome"]
let tituloLivro = leitor["livrosFavoritos"][0]['titulo']

// console.log(`o livro fafavorito de ${nome} se chama ${tituloLivro}`);

// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

let livro2 = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}
leitor["livrosFavoritos"].push(livro2)

// console.log(leitor["livrosFavoritos"][1])

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

let quantidadeLivros = leitor["livrosFavoritos"].length;

console.log(`${nome} tem ${quantidadeLivros} livros favoritos`)