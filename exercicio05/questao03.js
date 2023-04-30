preço = prompt("Insira O Valor Do Litro:");
valor = prompt("Insira O Valor Que Deseja Abastecer:");

custo = valor/preço

document.write(`Quantidade de litros comprados é: ${custo.toFixed(4)}.`);