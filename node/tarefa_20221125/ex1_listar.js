var mysql = require ('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "exercicio1"
});
con.connect(function(erro){
    if (erro) throw erro;
    con.query("SELECT * FROM cliente", function (erro, resultado){
        console.log("Clientes cadastrados: ");
        for (var i = 0; i < resultado.length; i++){
            console.log("---");
            console.log("cpf: " +resultado[i].cpf);
            console.log("Nome: " +resultado[i].nome);
            console.log("Telefone: " +resultado[i].telefone);
        }
con.end();
    });
});
