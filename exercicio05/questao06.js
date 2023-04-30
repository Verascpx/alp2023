v1 = Number(prompt('Insira o valor do produto:'))

des = v1*30/100
final = v1-des

document.write(`Você ganhou um desconto de ${des}$ e pagará apenas ${final}$.`)