let x = Number(prompt("digite o ponto x do centro"));
let r = Number(prompt("digite o valor do raio"));
let y = Number(prompt("digite o ponto y do centro"));
let x1 = Number(prompt("digite o ponto x do ponto"));
let y1 = Number(prompt("digite o ponto y do ponto"));
let d = (x1-x)**2;
let d2 = (y1-y)**2;
let d3 = (d+d2);
let d4 = d3**0.5
if(d4>r){
document.write("o ponto inserio não faz parte do circulo");
}
else{
document.write("o ponto inserido faz parte do circulo")
}