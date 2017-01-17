const mongoose = require("mongoose"); // faz a conexão com o mongodb e mapeamento dos objetos a serem salvos no banco.
module.exports = mongoose.connect("mongodb://localhost/db_finance");
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O {VALUE} informado é menor que o limite mínimo '{MIN}'.";
mongoose.Error.messages.Number.max = "O {VALUE} informado é maior que o limite mínimo '{MAX}'.";