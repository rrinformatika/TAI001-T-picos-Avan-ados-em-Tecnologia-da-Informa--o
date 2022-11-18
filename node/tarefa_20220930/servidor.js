/* Instruções:
a)Esta atividade pode ser resolvida individualmente ou em dupla.
b)Copiar todo o conteúdo desenvolvido em um ÚNICO arquivo no formato.doc ou.docx
do Microsoft Word e postar no Teams.
Desenvolver uma aplicação para a Web usando o Node.JS
que determine o preço final de uma compra, a partir dos seguintes dados digitados em um
formulário: produto, quantidade e preço unitário.Em seguida, para determinar o preço final,
devem - se utilizar os seguintes critérios para cálculo:
a)O preço total(bruto) é obtido multiplicando o preço unitário com a quantidade(1, 5 pontos).
b)Caso o preço total(bruto) seja superior a R$ 1.590, 00 aplicar um desconto de 4, 75 %
(1, 5 pontos).
c)O valor do imposto será obtido através das seguintes faixas(1, 5 pontos):
Preço 
total(bruto)Valor do Imposto < R$ 500,00 2, 5 % do preço
total(bruto) >= R$ 500, 00 e < R$ 1.500,00 5, 0 % do preço
total(bruto) >= R$ 1.500, 00 e < R$ 5.000,00 8, 25 % do preço
total(bruto) >= R$ 5.000, 00 25, 125 % do preço total(bruto)
d) O preço final será obtido somando o preço total(bruto) com o valor do imposto e subtraindo
o valor do desconto(1, 5 pontos). */

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
    fs.readFile('index.html',
        function (erro, dado) {
            res.writeHead(200, {
                'Content-Type':
                    'text/html'
            });
            res.write(dado);
            res.end();
        });
});
app.post('/calcula', urlencodedParser,
    function (req, res) {
        try {
            fs.readFile('resposta.html',
                function (erro, dado) {
                    var qtdeProd = (parseInt(req.body.qtdeProd));
                    console.log(qtdeProd);
                    var precoProd = (parseFloat(req.body.precoProd));
                    console.log(precoProd);
                    var precoFinal = qtdeProd * precoProd; /* letra a */
                    console.log(precoFinal);

                    if (precoFinal > 1590 && precoFinal < 5000){
                        var desconto = precoFinal * 0.0475;
                        imposto = precoFinal * 0.0825; /* letra b */

                        } else if (precoFinal > 5000 ){
                            imposto = precoFinal * 0.25125;
                        
                        precoFinal += imposto;
                        precoFinal -= desconto;
                        console.log(desconto)
                        console.log(imposto)
                        console.log(precoFinal)
                    }
 /*                    if (precoFinal)

                    }
                    



                    var idade = (hoje.getFullYear() -
                        parseInt(req.body.anoNasc));
                    var acima2010 = 0.0125;
                    var ate2009 = 0.0175;
                    var ate1999 = 0.0200;
                    var abaixo1979 = 0.0250;
                    var sexo = req.body.sexo;
                    var valorVeic = (parseInt(req.body.valorVeic));
                    var anoFabr = req.body.anoFabr;
                    var porcBonus = (parseInt(req.body.porcBonus));

                    if (anoFabr < 1980) {
                        var apolice = (valorVeic * abaixo1979)
                        console.log(apolice)
                    } else if (anoFabr < 2000) {
                        var apolice = (valorVeic * ate1999)
                    } else if (anoFabr < 2010) {
                        var apolice = (valorVeic * ate2009)
                    } else {
                        var apolice = (valorVeic * acima2010)
                    }
                    if (sexo == "M") {
                        apolice += apolice * 0.05
                        console.log(apolice)
                    }
                    if (sexo == "F") {
                        apolice -= apolice * 0.10
                        console.log(apolice)
                    }
                    if (idade < 30 || idade > 60) {
                        apolice += apolice * 0.20
                        console.log(apolice)
                    }
                    apolice -= (apolice * (porcBonus / 100))
                    console.log(porcBonus)
                    console.log(apolice) */
                    var valores = {
                        'precoFinal': precoFinal
                    };
                    for (var chave in valores) {
                        console.log(chave);
                        dado = dado.toString().replace("{{" +
                            chave + "}}", valores[chave]);
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(dado);
                    res.end();
                });
        } catch (error) {
            console.log(error);
        }
    });