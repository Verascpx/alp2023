let smidade = 0;
let qtmidade = 0;
let idade = 0;

do {
  idade = parseInt(prompt("Digite a idade (ou -1 para sair):"));

  if (idade >= 18) {
    smidade += idade;
    qtmidade++;
  } else if (idade == 0 || idade < -1 || isNaN(idade)) {
    document.write(`Idade inválida<br>`);
  }
} while (idade !== -1);

if (qtmidade > 0) {
  const mmidade = smidade / qtmidade;
  document.write(
    `Soma das idades das pessoas maiores de idade: ${smidade}<br>`
  );
  document.write(`Média de idade das pessoas maiores de idade: ${mmidade}<br>`);
} else {
  document.write("Nenhuma pessoa maior de idade foi informada.<br>");
}
