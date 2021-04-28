const list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for (let z = 0; z < list.length; z++) {
  n = list[z];
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(`o número ${n} primo`);
  } else {
    console.log(`o número ${n} não é primo`);
  }
}

// código pode melhorar no tempo de busca
