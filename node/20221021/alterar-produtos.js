var mysql = require ('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja1"
});
con.connect(function(erro){
    if (erro) throw erro;
   var cmd = "UPDATE produto SET preco = preco * 0.9 WHERE preco > 2000.00";
   con.query(cmd, function(erro, resultado){
    if (erro) throw erro;
    console.log("O desconto foi aplicado para " + resultado.affectedRows + "produtos");
    con.end();
   })
});