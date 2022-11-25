var mysql = require ('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "exercicio1"
});
con.connect(function(erro){
    if (erro) throw erro;
   var cmd = "UPDATE cliente SET nome = 'Reginaldo da Silva Rossi' WHERE nome = 'Reginaldo Rossi'";
   con.query(cmd, function(erro, resultado){
    if (erro) throw erro;
    console.log("O nome foi alterado");
    con.end();
   })
});