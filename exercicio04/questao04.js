v1 = Number(prompt('Digite um número:'))
    if(v1>0){
        resul = v1
    }
    else{
        resul = v1*-1
    }
document.write(`o módulo de ${v1} é ${resul}.`)