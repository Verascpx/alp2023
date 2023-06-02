while (true) {
  let n = parseInt(prompt("Digite um número positivo(ou -1 para parar)"));
  if (n !== -1 && n >= 1) {
    document.write(`${n} invertido é ${n * -1}`);
  } else if (n == -1) {
    break;
  } else {
    document.write(`Por favor, digite um valor válido.`);
  }
}
