const number = 15;
function divisores(x) {
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      console.log(i);
    }
  }
}
divisores(number);
