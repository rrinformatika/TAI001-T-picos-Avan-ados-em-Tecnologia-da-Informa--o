var fs = require('fs');
var http = require("http");
var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser =
    bodyParser.urlencoded({ extended: true });

// https://icons.getbootstrap.com/

var caneta = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg>';
var lixo = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja"
});
con.connect(function (erro) {
    var servidor = app.listen(8080, function () {
        var porta = servidor.address().port;
        console.log("Servidor executando na porta % s", porta);
    });
    app.get('/', function (req, res) {
        fs.readFile('principal.html', function (erro, dado) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(dado);
            res.end();
        });
    });

    /* ROTINA QUE LISTA O CONTEUDO DO BANCO DE DADOS */

    app.get('/produtos', function (req, res) {
        fs.readFile('produtos.html', function(erro, dado) {
        con.query("SELECT * FROM produto", function (erro, resultado) {
        if (erro) throw erro;
        var tabela = "<table class='table table-hover'>" +
        "<tr class='table-primary'>" + 
        "<td>Operações</td><td>Código</td>" + 
        "<td>Descrição</td>" +
        "<td>Preço</td></tr>";
        for (var i = 0; i < resultado.length; i++) {
        tabela += "<tr><td>" + 
        "<a href='/editar-produto?cod=" +
        resultado[i].codigo + 
        "' class='btn btn-primary btn-sm'>" + caneta + "</a> " +
        "<a href='/apagar-produto?cod=" +  resultado[i].codigo + "' class='btn btn-primary btn-sm'>" + lixo + "</a></td>" + "<td>" + resultado[i].codigo + "</td>" +"<td>" + resultado[i].descricao + "</td>" +"<td align='right'>" + resultado[i].preco.toFixed(2) + "</td>";"</tr>";}
        tabela += "</table>";
        dado = dado.toString().replace("{{tabela}}", tabela);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(dado);
        res.end();
        });
        });
       });

app.get('/novo-produto', function (req, res) {
 fs.readFile('novo-produto.html', 
function(erro, dado) {
 res.writeHead(200, {'Content-Type':'text/html'});
 res.write(dado);
 res.end();
 });
});
app.post('/incluir-produto', urlencodedParser, function (req, res){
 var cmd = "INSERT INTO produto (codigo, descricao, preco) VALUES (?, ?, ?)";
 var dados = [req.body.codigo,req.body.descricao, req.body.preco];
 con.query(cmd, dados, function (erro) {
 if (erro) throw erro;
 res.redirect('/produtos');
 });
});
/* ROTINA QUE IRA EDITAR PRODUTOS */
app.get('/editar-produto', function (req, res) {
     fs.readFile('editar-produto.html', function(erro, dado) {
     var codigo = req.query.cod;
     var descricao;
     var preco;
     con.query("SELECT * FROM produto WHERE codigo=" + codigo, function (erro, resultado) {
     if (erro) throw erro;
     if (resultado.length > 0) {
     descricao = resultado[0].descricao;
     preco = resultado[0].preco.toFixed(2);
     }
     res.writeHead(200, {'Content-Type': 'text/html'});
     dado = dado.toString().replace("{{codigo}}", codigo);
     dado = dado.toString().replace("{{descricao}}", descricao);
     dado = dado.toString().replace("{{preco}}", preco);
     res.write(dado);
     res.end();
      });
      });
     });
  
/*      ROTINA PARA ATUALIZAR O REGISTRO QUE SE QUIS ALTERAR */

     app.post('/alterar-produto', urlencodedParser, function (req, res){
      var cmd = "UPDATE produto SET descricao=?, preco=? WHERE codigo=?";
     var dados = [req.body.descricao, req.body.preco, req.body.codigo];
         con.query(cmd, dados, function (erro) {
         if (erro) throw erro;
         res.redirect('/produtos');
         });
        });
     
    /* ROTINA PARA DELETAR O REGISTRO */

    app.get('/apagar-produto', function (req, 
        res) {
         var codigo = req.query.cod;
         con.query("DELETE FROM produto WHERE codigo=" + codigo, function (erro, resultado) {
         if (erro) throw erro;
         res.redirect('/produtos');
         });
        });
        
     

 /*       ROTINA QUE IRÁ REALIZAR A EXCLUSÃO */
       
/*     INSERIR A PARTIR DESSE PONTO */
});