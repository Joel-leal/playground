/*  depositoNeto = [[20, 25], [10, 5], [10, 10]]
    neto1 = 0 neto2 = 0
    neto1 = 20 neto2 = 25 -> neto1 - neto2 = -5
    neto1 = 30 neto2 = 30 -> neto1 - neto2 = 0
    neto1 = 40 neto2 = 40 -> neto1 - neto2 = 0
    listaSaldo = [-5,0,0]
*/
const depositoNeto = [
  [20, 25],
  [10, 5],
  [10, 10],
];
const depositoNeto1 = [
  [0, 5],
  [12, 0],
  [0, 20],
  [17, 1],
];

function contabilizaDepositos(depositos) {
  let saldos = [];
  let neto1 = 0;
  let neto2 = 0;
  for (let i = 0; i < depositos.length; i++) {
    const deposito = depositos[i]; //elemento 0 - lista na posição 0 depositos[i][0]
    neto1 += deposito[0];
    neto2 += deposito[1];
    let saldo = neto1 - neto2;
    saldos.push(saldo);
    console.log(`neto1:${neto1} neto2:${neto2} saldo:${saldo}`);
  }
  return saldos;
}
console.log(contabilizaDepositos(depositoNeto1));
