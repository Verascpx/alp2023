let vetor = [];
s = 0;

for (let i = 0; i < 10; i++) {
  vetor[i] = Number(prompt(`Digite o ${i + 1}° número`));
  s = s + vetor[i];
}

document.write(`números = [${vetor}]<br>`);
document.write(`a soma dos números do vetor é ${s}<br>`);
