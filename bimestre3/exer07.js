let qtpar = 0;
let qtimpar = 0;
let smpar = 0;
let smgeral = 0;
let n;

do {
  n = parseInt(prompt("Digite um número positivo (ou zero para sair):"));
  if (n !== 0 && n >= 0) {
    smgeral += n;

    if (n % 2 === 0) {
      qtpar++;
      smpar += n;
    } else {
      qtimpar++;
    }
  } else if (n == 0) {
    document.write(`Resultados:<br>`);
  } else {
    document.write(`Por favor, digite um valor válido.`);
  }
} while (n !== 0);

if (qtpar > 0) {
  let mdpar = smpar / qtpar;
  document.write(`Média dos valores pares: ${mdpar}<br>`);
}

let mdgeral = smgeral / (qtpar + qtimpar);

document.write(`Quantidade de números pares: ${qtpar}<br>`);
document.write(`Quantidade de números ímpares: ${qtimpar}<br>`);
document.write(`Média geral: ${mdgeral}<br>`);
