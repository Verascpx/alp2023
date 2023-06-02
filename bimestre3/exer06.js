let n = parseInt(prompt("Digite um número decimal: "));
let bin = "";
while (n > 0) {
  let rest = n % 2;
  bin = rest + bin;
  n = Math.floor(n / 2);
}
document.write(`O número binário correspondente é: ${bin}`);
