var fs = require('fs');
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended: true});

var servidor = app.listen(8080, function(){
    var porta = servidor.address().port;
    console.log("Servidor executando na porta %s", porta);
});

app.get('/', function(req,res){
    fs.readFile('P1-form.html',function(erro,dado){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(dado);
        res.end();
    });
});

app.post('/compra', urlencodeParser,function(req,res){
    fs.readFile('P1-res.html',function(erro,dado){
        
        var produto = req.body.produto;
        var quantidade = req.body.quantidade;
        var precoUnitario = req.body.precoUnitario;
        var precoFinal;
        var imposto = 0;
        var desconto = 0;
        var precoTotalBruto = parseFloat(precoUnitario) * parseInt(quantidade);
        
        if(precoTotalBruto < 500){
            imposto = precoTotalBruto * (2.5 / 100);
        }else if(precoTotalBruto >= 500 && precoTotalBruto < 1500){
            imposto = precoTotalBruto * (5 / 100);
        }else if(precoTotalBruto >= 1500 && precoTotalBruto < 5000){
            imposto = precoTotalBruto * (8.25 / 100);
        }else if(precoTotalBruto >= 5000){
            imposto = precoTotalBruto * (25.125 / 100);
        }
        
        if(precoTotalBruto >= 1590){
            desconto = precoTotalBruto * (4.75 / 100);
        }

        precoFinal = (precoTotalBruto + imposto) - desconto;

        dado = dado.toString().replace("{{precoFinal}}", precoFinal);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(dado);
        res.end();

    });
});
