var mysql = require ('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "veiculos"
});
con.connect(function(erro){
    if (erro) throw erro;
    con.query("SELECT * FROM cadveic", function (erro, resultado){
        console.log("Veiculos Cadastrados: ");
        for (var i = 0; i < resultado.length; i++){
            console.log("---");
            console.log("MARCA: " +resultado[i].marca);
            console.log("MODELO: " +resultado[i].modelo);
            console.log("PLACA: " +resultado[i].placa);
            console.log('PREÇO: ' +resultado[i].preco)
        }
con.end();
    })
})
