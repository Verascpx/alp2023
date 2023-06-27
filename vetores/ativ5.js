let vetor = [];

for (let i = 0; i < 10; i++) {
  vetor[i] = Math.floor(Math.random() * 100);
}
document.write(`Vetor = ${vetor}<br>`);
document.write(`<hr>`);
document.write(`Vetor ao contrário: <br>`);

for (let i = vetor.length - 1; i >= 0; i--) {
  document.write(`${vetor[i]}`);
}
