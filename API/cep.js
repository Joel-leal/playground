const cep = 31155555550;

async function getCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data.logradouro);

  fetch(url)
    .then((res) => res.json()) // transforma response em objeto
    .then((data) => {
      const output = document.getElementById("container");
      output.innerHTML = JSON.stringify(data, null, 4);
    })
    .catch((error) => {
      const output = document.getElementById("container");
      output.innerHTML = error.massage;
    });
}

getCep(cep);
