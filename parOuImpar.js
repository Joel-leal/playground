const lista1 = [2,3,5,2,2,4,6,4]
const lista2 = [4,2,1,5,9,3,2,1]
const valor = []
for (let i = 0; i < lista1.length; i++){
    const x = lista1[i] + lista2[i]
    if(x%2 === 0){
        var y = 'par'
    } 
    else {
        var y = 'impar'
    }
    valor.push(y)
} 
const jogador1 = []
const jogador2 = []
for (let i = 0; i < valor.length; i++){
    if(valor[i] === 'par'){
        jogador1.push(1)  
    } 
    else {
       jogador2.push(0)
    }
} 
if(jogador1.length > jogador2.length){
    console.log('vencedor: jogador 1')
}
else{
    console.log('vencedor: Jogador2')
}
