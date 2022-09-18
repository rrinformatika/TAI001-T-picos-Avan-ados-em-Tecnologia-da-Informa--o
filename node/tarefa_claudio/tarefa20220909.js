/*  5) Considerando que a aprovação de um aluno em 
determinada disciplina requer uma média final maior 
ou igual a 6,0 (seis). Elaborar um programa que 
receba duas notas, realize o cálculo da média, exiba 
o valor calculado, indicando se o aluno está aprovado 
ou reprovado. */

const { Console } = require("console");

/* console.clear();
const readline = require('readline');
const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
teclado.question('Digite a primeira nota: ', (nota1) => { 
 teclado.question('Digite a segunda nota: ', (nota2) => {
 var media = (parseInt(nota1) + 
parseInt(nota2))/2;
console.log("A sua média é: " + media);
if (media >= 6){
    console.log(" Aprovado ")
} else 
console.log("Reprovado")
 teclado.close();
 });
}); */

/* 6) A partir dos lados de um retângulo ou quadrado, 
digitados pelo usuário, elaborar uma aplicação que 
calcule e exiba o valor da área da figura e informe se 
é um retângulo ou um quadrado. Lembrando que a 
área é obtida pela multiplicação da base (L) pela 
altura (A). */

/* const readline = require('readline');
const { getSystemErrorMap } = require('util');
const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
console.clear()
console.log('------------------------------PROGRAMA PARA CALCULO DE AREA---------------------------')
teclado.question('Digite a largura: ', (largura) => { 
 teclado.question('Digite altura: ', (altura) => {
var area = parseInt(largura) * 
parseInt(altura);
console.log("A área calculada é: " + area);
if (largura == altura){
    console.log("O seu QUADRADO possui " + area + " de área")
} else 
console.log("O seu RETANGULO possui " + area + " de área");
 teclado.close();
 });
}); */


/* 7) Considerando um número inteiro digitado pelo 
usuário, calcular e exibir o valor da sua fatorial. Por 
exemplo, se o usuário digitar 4, temos que a fatorial 
é 4 x 3 x 2 x 1, isto é, 24. */

/* const readline = require('readline');
const { getSystemErrorMap } = require('util');
const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
var fatorial;
console.clear()
console.log('----------------------------PROGRAMA PARA EXIBIÇÃO DO FATORIAL---------------------------')
teclado.question('Digite um numero: ', (fatorial) => {
    var resultado = fatorial;
    for (var i = 1; i < fatorial; i++) {
        resultado *= i;
    }
    console.log('O fatorial do numero ' + fatorial + ' é ' + resultado);
  teclado.close();
}); */

/* 8) Considerando três números inteiros digitados pelo 
usuário, determinar e exibir o maior número. */

/* var maior=0;
var menor=0;
numA=0;
numB=0;
numC=0;
const readline = require('readline');
const { getSystemErrorMap } = require('util');
const teclado = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

console.clear();
console.log('-----------------------PROGRAMA PARA EXIBIR O MAIOR NUMERO------------------------')
teclado.question('Digite o numero A: ', (numA) => { 
    teclado.question('Digite o numero B: ', (numB) => {
        teclado.question('Digite o numero C: ', (numC) => {
var max = Math.max(numA, numB, numC);
console.log('O maior numero digitado foi: '+ max);
 teclado.close();
});
});
}); */

/* 9) Criar um programa que mostre a data e hora atuais 
da maneira que é utilizada no Brasil, por exemplo: 
“25/01/2021 19:45”. */ 
console.clear()
nomeMes = new Array ("01", "02", "03", "04", "05", "06","07", "08","09", "10", "11", "12")
var now = new Date();
console.log(now.getDate() + '/'+ nomeMes [now.getMonth() ]+ '/' + now.getFullYear() + '  ' + now.getHours() + ':' + now.getMinutes())

console.log(now)
