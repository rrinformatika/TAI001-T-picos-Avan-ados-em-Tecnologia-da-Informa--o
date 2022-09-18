const readline = require('readline');
const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
teclado.question('Digite um número: ', (num) => { 
 if (num > 5) { 
 console.log("O valor é maior que cinco.");
 }
 else if (num < 5) {
 console.log("O valor é menor que cinco.");
 }
 else {
 console.log("O valor é igual a cinco.");
 }
 teclado.close();
});
console.log('Fim!!');

