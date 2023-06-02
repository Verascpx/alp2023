let n = parseInt(
  prompt(
    "Digite a quantidade de elementos da sequência de Fibonacci que deseja imprimir:"
  )
);
let dps = 1;
let antes = 1;
let cont = 2;
document.write(`${antes}, ${dps}`);
while (cont < n) {
  let prox = dps + antes;
  document.write(`, ${prox}`);
  antes = dps;
  dps = prox;
  cont++;
}
