let buttonEnviar = document.querySelector(".button-enviar")
let inputEmail = document.querySelector(".email")
let inputPassword = document.querySelector(".password")
let form = document.querySelector("trybewarts-login");

function validarForm() {
    if(inputEmail.value =="tryber@teste.com" &&
  inputPassword.value == "123456")
  {
    alert("Olá, Tryber!");
    inputEmail.focus();
    return

  }
    else{
      alert( "Email ou senha inválidos." );
      inputEmail.focus();
      return
  }
}

buttonEnviar.addEventListener('click', validarForm)