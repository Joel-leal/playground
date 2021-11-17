/*
02 - Jogo de fantasia- Parte 2
Além dos pontos de vida (PV), será necessário estipular o equipamento inicial do(a) personagem.
Tudo isso deve ser feito no mesmo código, seguindo a seguinte tabela:
|   Classe     |   Pontos de Vida   |   Equipamento Inicial   |
|    Mago      |        5PV         |         Varinha         |
|   Arqueiro   |        10PV        |        Arco Curto       |
|   Guerreiro  |        15PV        |          Espada         |
|   Cavaleiro  |        20PV        |     Armadura Completa   |
Escreva um algoritmo que recebe o nome de uma classe e retorne os pontos de vida e o equipamento inicial do(a) personagem.
Por exemplo:
---------------
Entrada:
"Guerreiro"
Saída:
"15PV, Espada."
---------------
Desafio: faça sem usar estruturas condicionais (ifs ou switches).
*/

// const fantasyGame = require("./fantasyGame");

function fantasyGame2(className) {
  // Desenvolva seu código nessa função
  const jogo2 = {
    mago : {
      ponto : "5PV",
      equipamento : "varinha",
    },
    arqueiro : {
      ponto : "10PV",
      equipamento : "Arco Curto",
    },
    guerreiro : {
      ponto : "15PV",
      equipamento : "Espada",
    },
    cavaleiro : {
      ponto : "20PV",
      equipamento : "Armadura Completa",
    }
  }
  let returnValue = jogo2[className].ponto + ", " + jogo2[className].equipamento + "."
  return returnValue
}

console.log(fantasyGame2("cavaleiro"))

module.exports = fantasyGame2;