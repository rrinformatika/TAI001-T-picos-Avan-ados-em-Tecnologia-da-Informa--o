var express = require('express');
var app = express();
var servidor = app.listen(8080, function () {
    var porta = servidor.address().port;
    console.log("Servidor executando na porta %s", porta);
});

app.use(express.static('img'));
app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1> Jogo de Dados<h1>');
    var oc = Array(0, 0, 0, 0, 0, 0);
    for (i = 0; i < 100; i++) {
        var face = Math.floor(Math.random() * 6 + 1);
        oc[face -1]++;
        res.write('<img src="Dado_' + face + '.jpg">');
    }
res.write('<h2> Sumario:<h2>');
for (i = 0; i < oc.length; i++){
    res.write('O lado ' + (i + 1) +' ocorreu ' + oc[i] +' vezes.<br>');
}
    });
