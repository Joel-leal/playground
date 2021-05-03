const n = 4;
function factorial(n) {
  let factorialNumber = n;
  if (n == 0) {
    factorialNumber = 1;
  }
  if (n > 0) {
    factorialNumber = factorial(n - 1) * n;
  }
  return factorialNumber;
}
console.log(factorial(n));
