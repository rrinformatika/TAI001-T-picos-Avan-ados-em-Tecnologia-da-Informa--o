var mysql = require ('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "exercicio1"
});
con.connect(function(erro){
    if (erro) throw erro;
    var cmd = "DELETE FROM cliente WHERE cpf = 16862387898";
    con.query(cmd, function(erro){
        if (erro) throw erro;
        console.log("Cliente apagado");
        con.end();
        })

});