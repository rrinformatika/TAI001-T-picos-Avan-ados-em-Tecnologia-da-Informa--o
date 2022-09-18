const readline = require('readline');
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite a tabuada que deseja (1 a 9): ' , (t) => {
    if (t >= 1 && t <= 9){
        for (var i = 1; i <= 10; i++) {
            console.log(t + 'x' + i +' = ' + t*i)
        }
    } else
    console.log('Numero incorreto')
    teclado.close();
});
teclado
