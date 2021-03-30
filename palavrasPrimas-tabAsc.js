function wordPrime(word){
    let acc = 0 
    for(let i = 0 ; i < word.length; i++){
        const adjustValue = (word[i] >= "a" && word[i] <= "z") ? 96 : 38

        let adjustValue = 0
        if (word[i] >= "a" && word[i] <= "z") {
            adjustValue = 96
        } else {
            adjustValue = 38
        }

        let letterValue = word.charCodeAt(i) - adjustValue 
        acc += letterValue
    }     
    return acc
}

function checkPrime(number){
    if(number < 2){
        return false
    }

    for(let i = 2; i < number; i++){
        if(number % i == 0){
            return false
        }        
    }
    return true
}

// let word = "AcM"
// let result = checkPrime(wordPrime(word))
// console.log(result)

const testCases = [ 
    'UFRN',
    'contest',
    'AcM',
]
testCases.map(word => console.log(word, ' -> ', checkPrime(wordPrime(word))))



111111111111
101100001111
101100001101
101111111111