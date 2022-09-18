const { win32 } = require('path/posix');
const readline = require('readline');
const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
teclado.question('Digite o seu nome: ', 
(resposta) => {
    teclado.question('Qual sua idade? ',
    (resposta2) => {
        teclado.question(' Mora em qual cidade? ', 
        (resposta3) => {
        console.log('Olá ' + resposta + ' Tenho ' + resposta2 + ' de idade e moro em ' + resposta3);
       teclado.close();
        });});});
        