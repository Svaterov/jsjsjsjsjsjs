const prompt = require('prompt-sync')();
let zapros = prompt("Введите число : ");
for(let i = 1; i <= zapros; i += 2){
    console.log(i)
}