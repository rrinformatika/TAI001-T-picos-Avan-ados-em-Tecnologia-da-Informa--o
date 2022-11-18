const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const cliente = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
async function inserir(){
    try {
        await cliente.connect();
        console.log("Conectado!");
        const banco = cliente.db('loja');
        await banco.collection('produtos')
            .insertOne({codigo: 9, descricao: 'Cama de casado',preco: 250});
    }
    finally {
        console.log("Inserido!");
        await cliente.close();
    }
}
