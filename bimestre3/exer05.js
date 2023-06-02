let b = parseFloat(prompt("Digite a base"));
let e = parseFloat(prompt("Digite o expoente"));
let cont = e - e;
let resul;
if (!isNaN(b) && !isNaN(e)) {
  if (e != 0) {
    while (cont <= e) {
      resul = b * b;
      cont++;
    }
  } else {
    document.write(`${b} elevado a 0 é igual a 1<br>`);
  }
  document.write(`${b} elevado a ${e} é igual a ${resul}<br>`);
} else {
  document.write(`Digite um valor válido<br>`);
}
