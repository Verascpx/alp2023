let atle = [];

let soma = 0;

for (let i = 0; i < 10; i++) {
  atle[i] = Number(prompt(`Digite a ${i + 1}° altura`));
  soma += atle[i];
}

let med = soma / atle.length;

document.write(`A média das alturas é ${med.toFixed(2)}<br>`);

for (let i = 0; i < atle.length; i++) {
  if (atle[i] > med) {
    document.write(`O atleta ${i} tem uma altura de ${atle[i]}<br>`);
  }
}
