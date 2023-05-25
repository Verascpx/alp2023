let l1 = Number(prompt("digite o valor do lado 1"));
let l2 = Number(prompt("digite o valor do lado 2"));
let l3 = Number(prompt("digite o valor do lado 3"));
if(l1<l2+l3 || l2<l1+l3 || l3<l2+l1){
if(l1==l2 && l2==l3){
document.write("o seu triângulo é equilatero.");
}
else if(l1==l2 || l2==l3 || l1==l3){
document.write("o seu triângulo é isósceles.");
}
else{
document.write("o seu triângulo é escaleno.");
}
}
else{
document.write("os lados selecionados não formam um triângulo.");
}