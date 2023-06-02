let n = parseInt(prompt("Digite um número:"));
let qtli = parseInt(prompt("Digite a quantidade de linhas do triângulo:"));
let li = "";
if (!isNaN(n) || !isNaN(qtli)) {
  for (let i = 1; i <= qtli; i++) {
    li += `${n} `.repeat(i) + "<br>";
  }
  document.write(li);
} else {
  document.write(`Por favor, digite valores válidos`);
}
