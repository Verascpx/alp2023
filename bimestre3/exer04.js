let n = parseInt(prompt("Digite um número inteiro"));
if (n >= 1) {
  let resul = true;
  if (n <= 1) {
    resul = false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        resul = false;
        break;
      }
    }
  }
  if (resul) {
    document.write(`O número ${n} é primo.`);
  } else {
    document.write(`O número ${n} não é primo.`);
  }
} else {
  document.write(`Digite um número inteiro  maior ou igual a 1`);
}