var num = Array();
console.log ('Tamanho inicial: ' + num.length);
var maior=0;
var media=0;
var menor=501;
for (var i = 0; i < 100; i++) {
 num[i] = Math.floor(Math.random() * 500 + 1)
 console.log(num[i]);
 if (num[i] > maior)
 maior = num[i];
 if (num[i] < menor)
 menor = num[i];
 media= num[i]+media;
}
console.log ('Tamanho final: ' +  num.length);
console.log ('Maior numero sorteado = '+ maior);
console.log ('A soma de todos os valores é: ' + media);
console.log ('A média dos numeros é ' + media/num.length);