saque = prompt("Insira O Valor Do Saque:");

notas100 = saque/100
notas100 = Math.trunc(notas100)
saque = saque%100

notas50 = saque/50
notas50 = Math.trunc(notas50)
saque = saque%50

notas20 = saque/20
notas20 = Math.trunc(notas20)
saque = saque%20

notas10 = saque/10
notas10 = Math.trunc(notas10)
saque = saque%10

notas5 = saque/5
notas5 = Math.trunc(notas5)
saque = saque%5

notas2 = saque/2
notas2 = Math.trunc(notas2)
saque = saque%2

document.write(`${notas100} Cédulas De 100$;<br> ${notas50} Cédulas de 50$;<br> ${notas20} Cédulas de 20$;<br> ${notas10} Cédulas de 10$;<br> ${notas5} Cédulas de 5$;<br> ${notas2} Cédulas de 2$;<br>`)