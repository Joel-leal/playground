// exercicio PodCodar 11/02
const list = [['joel', -20], ['joel', 30]]
const guardaConta = {

}

function validatransacao(name, amount){
    if(guardaConta[name]===undefined){
        guardaConta[name] = 0
    }
    if(guardaConta[name] + amount < 0){
        console.log("Crédito especial disponível.")
        return false
    }
    guardaConta[name] = guardaConta[name] + amount  
    // Atualizando o saldo = valor atual + depósito
    return true
}

function consumer(list){
    for(let i = 0; i < list.length; i++){
        let transacao = list[i]
        let amount = transacao[1]
        let nametransacao = transacao[0]
        if(!validatransacao(nametransacao,amount)){
            console.log('Transação inválida!')
            return false    
        }
            
    }
    console.log("Transação realizada com sucesso!")
    return true
}


console.log(consumer(list))
console.log(consumer([['Anna', 30], ['Marcos', 10]]))
console.log(consumer([['Anna', 10], ['Marcos', 10], ['Anna', -50]]))