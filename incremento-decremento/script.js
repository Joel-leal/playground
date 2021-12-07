const div = document.querySelector(".retorno")
const buttonIncremento = document.querySelector(".incremento")
const buttonDecremento = document.querySelector(".decremento")

let number = 0
function incremento(){
  number += 1
  div.innerHTML = number
}
function decremento(){
  number -= 1
  div.innerHTML = number
}
buttonIncremento.addEventListener("click", incremento)
buttonDecremento.addEventListener("click", decremento)