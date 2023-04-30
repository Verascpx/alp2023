//Questão 7
custo = Number(prompt(`Insira o custo:`))
percentual = Number(prompt(`Insira o percentual:`))

calpercentual = custo*(percentual/100)
vf = calpercentual+custo

alert(`O valor de venda é $${vf.toFixed(2)}`)