let v = [];

for (let i = 0; i < 10; i++) {
  v[i] = Number(prompt(`Digite o ${i + 1}° número`));
}

document.write(`números = [${v}]`);
document.write(`<hr>`);

let pares = 0;
let imp = 0;

for (let i = 0; i < v.length; i++) {
  if (v[i] % i == 0) {
    pares++;
  } else {
    imp++;
  }
}
