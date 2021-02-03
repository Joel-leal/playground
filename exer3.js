// Dada uma lista de palavras, retorne a maior palavra.

//Ex:
//["paulo", "rafaela", "enzo"]  -> "rafaela"
//["paulo", "pedro", "ana"] -> "paulo"
//[] -> null
//Obs: 
//* Caso tenhamos mais de uma palavra com o número maior de letras, retorne a primeira palavra encontrada
//* Se a lista for vazia, retorne null

// const list = ["ana", "paulo", "enzo", "pedro", "rafaela"]
// console.log(list.sort()) > Ordena os nomes na array
// let maiorPalavra = list[0]
 
// for (let i = 0; i < list.length; i++){
//     if(maiorPalavra.length < list[i].length){
        
//         maiorPalavra = list[i]
//     }
//    console.log(i+" "+maiorPalavra)
//     console.log(`${i} ${maiorPalavra}`)
// }
// console.log(maiorPalavra)

function pegaMaiorTamannhoPalavra(list){
 
    let maiorTamanhoPalavra = list[0].length
     for (let i = 0; i < list.length; i++){
        if(maiorTamanhoPalavra < list[i].length){
           
            maiorTamanhoPalavra = list[i].length
        }
       //console.log(i+" "+menorPalavra) 
    }
    return maiorTamanhoPalavra
}

const list1 = ["paulo", "pedro", "ana"]
const list2 = ["guilherme", "paulo", "enzo", "pedro", "rafaela"]

const testes = [list1, list2]
for (let i = 0; i < testes.length; i++){
    const teste = testes[i]
    const resultado = pegaMaiorTamannhoPalavra(teste)
    console.log(`i:${i}`)
    console.log(`teste: ${teste}`)
    console.log(`resultado: ${resultado}`)
}
