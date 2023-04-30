//Questão 1
v1 = 8+9+7
v2 = v1/3
v3 = 4+5+6
v4 = v3/3
v5 = v2+v4
v6 = v5/2

alert(`a média de 8, 9 e 7 é ${v2}\n a média de 4, 5 e 6 é ${v4}\n a soma das duas médias é ${v5}\n a média das médias é ${v6}.`)



//Questão 2
valor1 = Number(prompt(`Insira o primeiro valor:`))
quant1 = Number(prompt(`Insira a quantidade:`))
valor2 = Number(prompt(`Insira o segundo valor:`))
quant2 = Number(prompt(`Insira a quantidade:`))
ipi = Number(prompt(`Insira o imposto(sem porcentagem):`))

cal = (valor1*quant1+valor2*quant2)*(ipi/100+1)

alert(`O valor com o imposto fica ${cal.toFixed(2)}%`)



//Questão 3
salarioa = Number(prompt(`Insira o salário minímo atual:`))
salariob = Number(prompt(`Insira o seu salário atual:`))

s = salariob/salarioa

alert(`você ganha aproximadamente≈ ${s.toFixed(1)}`)



//Questão 4
numero = Number(prompt(`Insira o um número inteiro:`))

sucessor = numero+1
antecessor = sucessor-2

alert(`seu antecessor é ${antecessor} e o sucessor é ${sucessor}`)



//Questão 5
va1 = Number(prompt(`Insira o valor de A:`))
va2 = Number(prompt(`Insira o valor de B:`))

troca1 = va2
valor2 = troca1
valor1 = va1

alert(`valor trocado de A é ${valor2} e de B é ${valor1}.`)



//Questão 6
valor = Number(prompt(`Insira o valor do seu produto adquirido aqui na loja mamão com açúcar:`))

pre1 = valor/1
pre2 = valor/2
pre3 = valor/3
pre4 = valor/4
pre5 = valor/5

alert(`Você tem parcelas de 1x de $${pre1.toFixed(2)}\n 2x de $${pre2.toFixed(2)}\n 3x de $${pre3.toFixed(2)}\n 4x de $${pre4.toFixed(2)}\n 5x de $${pre5.toFixed(2)}\n`)



//Questão 7
custo = Number(prompt(`Insira o custo:`))
percentual = Number(prompt(`Insira o percentual:`))

calpercentual = custo*(percentual/100)
vf = calpercentual+custo

alert(`O valor de venda é $${vf.toFixed(2)}`)



//Questão 8
num1 = Number(prompt(`Insira o primeiro valor:`))
num2 = Number(prompt(`Insira o segundo valor:`))

soma = num1+num2
sub = num1-num2
multi = num1*num2
div = num1/num2

alert(`Soma = ${soma.toFixed(2)}\n Subtração = ${sub.toFixed(2)}\n Multiplicação = ${multi.toFixed(2)}\n Divisão = ${div.toFixed(2)}`)


