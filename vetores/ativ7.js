let v = [];

for (let i = 0; i < 10; i++) {
  v[i] = Number(prompt(`Digite o ${i + 1}° número`));
}
document.write(`vetor = [${v}]`);
document.write(`<hr>`);
let menor = Number.MAX_VALUE;
let pos = 0;

for (let i = 0; i < v.length; i++) {
  if (v[i] < menor) {
    pos = i;
    menor = v[i];
  }
}

document.write(
  `O menor elemento é ${menor} e foi encontrado na posição ${pos}`
);
