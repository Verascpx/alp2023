let p = Number(prompt("digite o seu peso"));
let a = Number(prompt("digite a sua altura"));
let imc = p/(a**2);
if(imc<=18.5){
document.write("você está abaixo do peso.");
}
else if(imc>18.5 && imc<=24.9){
document.write("você está com o peso normal.");
}
else if(imc>25 && imc<=29.9){
document.write("você está acima do peso.");
}
else if(imc>30 && imc<=34.9){
document.write("você está com obesidade nível 1.");
}
else if(imc>35 && imc<=39.9){
document.write("você está com obesidade nível 2.");
}
else if(imc>=40){
document.write("você está com obesidade nível 3.");
}