var mysql = require ('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja1"
});
con.connect(function(erro){
    if (erro) throw erro;
    con.query("SELECT * FROM produto", function (erro, resultado){
        console.log("produtos cadastrados: ");
        for (var i = 0; i < resultado.length; i++){
            console.log("---");
            console.log("Codigo: " +resultado[i].codigo);
            console.log("Descrição: " +resultado[i].descricao);
            console.log("Preço: " +resultado[i].preco);
        }
con.end();
    })
})
