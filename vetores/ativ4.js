let v = [];

for (let i = 0; i < 10; i++) {
  v[i] = Number(prompt(`Digite o ${i + 1}° número`));
}

for (let i = 0; i < v.length; i++) {
  document.write(`Posição: ${i + 1} | Elemento: ${v[i]}<br>`);
}
