let a = Number(prompt("digite o valor de um ano"));
let b = a % 4;
let i = a % 100;
let s = a % 400;
if ((b == 0 && i != 0) || s == 0) {
  document.write("o seu ano é bissexto");
} else {
  document.write("o seu ano não é bissexto");
}
