let di = parseFloat(prompt("Digite o valor do depósito inicial:"));
let tj = parseFloat(prompt("Digite a taxa de juros (em porcentagem):"));

if (!isNaN(di) && !isNaN(tj)) {
  let tjm = tj / 100;
  let tgj = 0;
  document.write(`<h2>Valor a cada mes</h2>`);
  for (var mes = 1; mes <= 24; mes++) {
    let vm = di * Math.pow(1 + tjm, mes);
    tgj += vm - di;
    document.write(`${mes}---${vm.toFixed(2)}<br>`);
  }
  document.write(
    `<h3>O total ganho com juros no período é: R$ ${tgj.toFixed(2)}</h3>`
  );
} else {
  document.write("Valores inválidos.");
}
