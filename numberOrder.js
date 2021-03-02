
const letter = "batata"
// const i = 1
let print = ''
for(let i = 0; i < letter.length; i++){
    if(letter[i] > 0 || letter[i-1] > letter[i]){
        print = "N";
    }
    else{
        print = 0;
    }   
}

    console.log(letter + ":" + print)