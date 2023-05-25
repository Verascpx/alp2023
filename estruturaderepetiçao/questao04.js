let a = Number(prompt("digite o valor de A"));
let b = Number(prompt("digite o valor de B"));
let c = Number(prompt("digite o valor de C"));
let d = (b**2)-(4*a*c);
let e = (-b+Math.sqrt(d))/2*a;
let f = (-b-Math.sqrt(d))/2*a;
let g = -b/(2*a);
if(d>0){
document.write(`os valores de x são iguais a ${parseInt(e)}
e ${parseInt(f)}`);
}
else if(d==0){
document.write(`o valor de x é igual a ${parseInt(g)}`);
}
else{
document.write("a equação não é possivel ser resolvida");
}
