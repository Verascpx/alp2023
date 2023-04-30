//Questão 2
valor1 = Number(prompt(`Insira o primeiro valor:`))
quant1 = Number(prompt(`Insira a quantidade:`))
valor2 = Number(prompt(`Insira o segundo valor:`))
quant2 = Number(prompt(`Insira a quantidade:`))
ipi = Number(prompt(`Insira o imposto(sem porcentagem):`))

cal = (valor1*quant1+valor2*quant2)*(ipi/100+1)

alert(`O valor com o imposto fica ${cal.toFixed(2)}%`)