let n = parseInt(prompt("Digite um número para gerar a tabuada"));
if (n >= 1 && n <= 10) {
  for (let i = 1; i <= 10; i++) {
    document.write(`${n} x ${i} = ${n * i}<br>`);
  }
} else {
  document.write("Número inválido. Por favor, digite um número de 1 a 10");
}
