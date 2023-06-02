let n = Number(prompt("Digite um número para mostrar seu fatorial"));
let f = 1;
if (n >= 0) {
  for (let i = 2; i <= n; i++) {
    f *= i;
  }
  document.write(`${n}!=${f}`);
} else {
  document.write(`Digite um número natural positivo.`);
}
