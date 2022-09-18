//  2) Desenvolver uma aplicação web em Node.js para
// uma determinada loja que precisa calcular o preço de 
// venda de um produto. O cálculo deverá ser efetuado 
// através da multiplicação do preço unitário pela 
// quantidade vendida e, posteriormente, subtrair o 
// valor do desconto. Considerar todas as variáveis do 
// tipo de dado real, que serão digitadas pelo usuário
// através de um formulário HTML. 

var fs = require('fs');
var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser =
    bodyParser.urlencoded({ extended: true });
var servidor = app.listen(8080, function () {
    var porta = servidor.address().port;
    console.log("Servidor executando na porta %s", porta);
});

app.get('/', function (req, res) {
    fs.readFile('pedido.html',
        function (erro, dado) {
            res.writeHead(200, {
                'Content-Type':
                    'text/html'
            });
            res.write(dado);
            res.end();
        });
});

app.post('/calcula', urlencodedParser, //requisicao que sera gerada
    function (req, res) {
        try {
            fs.readFile('resposta.html',
                function (erro, dado) {
                    console.log(dado);
                    total = parseInt(req.body.precoUnit) * parseInt(req.body.qtd);
                    totalVenda = total - (total * (parseInt(req.body.desconto)/100));
                    dado = dado.toString().replace("{{totalVenda}}", totalVenda);

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(dado);
                    res.end();
                });
        } catch (error) {
            console.log(error);
        }
    });

