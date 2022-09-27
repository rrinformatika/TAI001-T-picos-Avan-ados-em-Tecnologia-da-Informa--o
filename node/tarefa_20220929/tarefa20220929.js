/* 8) Realizar o desenvolvimento de um servidor Node.js que disponibilize uma página HTML que irá receber 
as informações através de um formulário e realizar a validação dos dados digitados, considerando que 
uma seguradora de veículos precisa calcular o valor da apólice com base nas seguintes informações: 
nome, sexo e ano de nascimento do segurado, marca, modelo, ano de fabricação, valor do veículo e 
porcentagem do bônus. As seguintes validações deverão ser realizadas na própria página HTML que 
contém o formulário:
a) O campo sexo deverá aceitar apenas F (Feminino) ou M (Masculino).
b) O campo ano de nascimento deve aceitar um valor entre 2001 e 1901.
c) O campo ano de fabricação deverá ser um valor inteiro positivo.
d) O campo valor do veículo deve ser um número real positivo.
e) O campo porcentagem do bônus deverá ser um número real entre 0 e 25.
Quando o formulário for submetido o servidor deverá determinar o valor da apólice, a partir dos 
seguintes critérios para cálculo: 
a) Para veículos 2010 ou mais recentes o valor da apólice é de 1,25% do valor do veículo, veículos 
entre 2009 e 2000 o valor da apólice é de 1,75% do valor do veículo, veículos entre 1999 e 1980 o 
valor da apólice é de 2,00% e para os demais anos de fabricação devemos utilizar 2,50% como base 
de cálculo.
b) Caso o segurado seja do sexo feminino aplicar um desconto 10% sobre o valor calculado no item a, 
caso contrário, acrescer 5% ao valor calculado no item a.
c) Se o segurado possuir menos de 30 anos ou mais de 60 anos, acrescentar 20% ao valor da apólice 
após os cálculos realizados no item a e no item b.
d) A partir do valor apurado nos itens a, b e c aplicar o desconto com base na porcentagem de bônus 
informada pelo usuário.
Por fim, uma página HTML deverá ser exibida apresentando o valor da apólice.
 */

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
/* const apolice = (valor, idade, sexo, anoFabr) => {
    if (anoFabr > 2009){
        apolice=valor+(valor*1.25);
        if (sexo = "f") {apolice = apolice -(apolice*10)
            
        } else { apolice = apolice +(apolice*5)
            
        }
        

    } if(anoFabr < 2000){

    }
    return parseFloat(totalApolice)
  } */

app.post('/calcula', urlencodedParser,
    function (req, res) {
        try {
            fs.readFile('resultado.html',
                function (erro, dado) {
                    var hoje = new Date();
                    var idade = (hoje.getFullYear() -
                        parseInt(req.body.anoNasc));
                    var taxaIdade1 = 0.0125;
                    var taxaIdade2 = 0.0175;
                    var taxaIdade3 = 0.0200;
                    var taxaIdade4 = 0.0250;
                    var sexo = req.body.sexo;

                    var valorVeic = req.body.valorVeic,
                    if (idade > 30 || idade < 60) {
                        var apolice = (req.body.valorVeic + (req.body.valorVeic * 2.5))

                    }
                    var valores = {
                        'nome': req.body.nome,
                        'sexo': req.body.sexo,
                        'anoNasc': req.body.anoNasc,
                        'idade': idade,
                        'anoFabr': req.body.anoFabr,
                        'valorVeic': req.body.valorVeic,
                        'porcBonus': req.body.porcBonus,
                        'apolice': apolice = ('anoFabr' + ('anoFabr' * 0.2))
                    };
                    /*                     if ('idade' > 30) {
                                            console.log("Voce tem mais de 30 anos")
                                        } */
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