var mysql = require ('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "exercicio1"
});
con.connect(function(erro){
    if (erro) throw erro;
    var cmd = "INSERT INTO cliente (cpf, nome, telefone) VALUES (?,?,?)";
    var dados = [16862387898,"Reginaldo Rossi", 16862387898];
    con.query(cmd, dados, function(erro){
        if (erro) throw erro;
        console.log("Inserido");
        con.end();
    })
})