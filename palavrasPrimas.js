let listLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x" ,"y" , "z", "A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X" ,"Y", "Z"]

const word = "D"

//let codeWord = word.charCodeAt(0)
function verificaPrimo(numero){
    if(numero < 2){
        return false
    }

    for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            return false
        }        
    }
    return true
}

function palavrasPrimas(x,y){
 let listValueLetter = [] 
    for(let i = 0; i < y.length; i++){
        for(let j = 0; j < x.length; j++){
            if(x[j] == y[i]){
                let valueLetter = i + 1 
                listValueLetter.push(valueLetter) 
            }
                
        }
            
    }
    let value = 0
    for(let k = 0; k < listValueLetter.length; k++){
        value = value + listValueLetter[k]
    }
}

let palavraPrima = verificaPrimo(value)
console.log(palavraPrima)

// separar em funções menores
// retornar valor pra fora da função

palavrasPrimas(word, listLetters)





