v1 = Number(prompt('Insira o valor do boleto:'))
v2 = Number(prompt('Insira o valor do juros(sem porcentagem):'))
v3 = Number(prompt('Insira os dias de atrasos:'))

novo = v1+(v1*(v2/100))*v3

document.write(`O valor do boleto já com os juros é ${novo}$.`)