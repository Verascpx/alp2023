let num = []
let par = []
let imp = []

for(let i = 0; i < 10; i++){
    num[i] = Math.floor(Math.random()* 100)
}
document.write(`<hr>`)

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0){
        par.push(num[i])
    }else{
        imp.push(num[i])
    }
}
