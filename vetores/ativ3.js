let vetor = [];

for (let i = 0; i < 8; i++) {
  vetor[i] = Number(prompt(`Digite o ${i + 1}° número`));
}

let n = Number(prompt("Digite o número que deseja procurar"));

let p = -1;

for (let i = 0; i < vetor.length; i++) {
  if (n == vetor[i]) {
    p = i;
    document.write(`${n} encontrado na posição ${p}`);
  }
}

if (p == -1) {
  document.write(`${n} não encontrado`);
}
