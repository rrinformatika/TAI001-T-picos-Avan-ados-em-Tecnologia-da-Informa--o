var mysql = require ('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja1"
});
con.connect(function(erro){
    if (erro) throw erro;
    var cmd = "DELETE FROM produto WHERE codigo = 15";
    con.query(cmd, function(erro){
        if (erro) throw erro;
        console.log("Produto apagado");
        con.end();
        })

});