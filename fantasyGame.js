// 01 - Jogo de fantasia
// Você é responsável pelo sistema de um novo jogo de fantasia medieval.
// Escreva um algoritmo que recebe o nome da classe e retorne os pontos de vida do(a) personagem, com base na tabela a seguir:
// |   Classe     |   Pontos de Vida   |
// |    Mago      |        5PV         |
// |   Arqueiro   |        10PV        |
// |   Guerreiro  |        15PV        |
// |   Cavaleiro  |        20PV        |
// Por exemplo:
// ------------
// Entrada:
// "Mago"'
// Saída:
// "Mago, 5PV"
// ------------
// Desafio: faça sem usar estruturas condicionais (ifs ou switches)
//

function fantasyGame(className) {
  // Desenvolva seu código nessa função
  const jogo ={
    mago: "5PV",
    arqueiro: "10PV",
    guerreiro: "15PV",
    cavaleiro: "20PV",
  }
  let returnValue = className + ", " + jogo[className] + "."
  return returnValue
}

console.log(fantasyGame("arqueiro"))
module.exports = fantasyGame;