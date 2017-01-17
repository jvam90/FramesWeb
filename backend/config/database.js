const mongoose = require("mongoose"); // faz a conexão com o mongodb e mapeamento dos objetos a serem salvos no banco.
module.exports = mongoose.connect("mongodb://localhost/db_finance");