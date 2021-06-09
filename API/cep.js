const selectCep = document.getElementById("input-cep");

selectCep.addEventListener("blur", () => {
  const url = `https://viacep.com.br/ws/${selectCep.value}/json/`;
  fetch(url)
    .then((res) => res.json()) // transforma response em objeto
    .then((data) => {
      const output = document.getElementById("logradouro");
      output.innerHTML = data.logradouro;
      const outputBairro = document.getElementById("bairro");
      outputBairro.innerHTML = data.bairro;
      const outputLocalidade = document.getElementById("localidade");
      outputLocalidade.innerHTML = data.localidade;
      const outputUf = document.getElementById("uf");
      outputUf.innerHTML = data.uf;
      //   output.innerHTML = JSON.stringify(data, null, 4);
    })
    .catch((error) => {
      const output = document.getElementById("logradouro");
      output.innerHTML = error.massage;
    });
});

// async function getCep(cep) {
//   //   const res = await fetch(url);
//   //   const data = await res.json();
//   //   console.log(data.logradouro);
// }
