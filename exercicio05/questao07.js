anos = Number(prompt('Insira sua idade em anos:'))
meses = Number(prompt('Insira sua idade em meses:'))
dias = Number(prompt('Insira sua idade em dias:'))

idade_dias =  anos*365+meses*30+dias

document.write(`total da sua idade em dias é ${idade_dias}.`)