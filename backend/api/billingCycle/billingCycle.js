const restful = require("node-restful"); //permite expor api rest para a aplicação
const mongoose = restful.mongoose;

//o restful permite criar apis mais simples, mas depende do mongoose
const creditoSchema = new mongoose.Schema({
	nome: {type: String, required: [true, "Informe o nome do crédito."]},
	valor: {type: Number, required: [true, "Informe o valor do crédito."]},
});

const debitoSchema = new mongoose.Schema({
	nome: {type: String, required: [true, "Informe o nome do débito."]},
	valor: {type: Number, min: 0, required: [true, "Informe o valor do débito."]},
	status: {type: String, required: false, uppercase: [true, "Informe o status do débito."], enum: ["PAGO", "PENDENTE", "AGENDADO"]}
})

const cicloSchema = new mongoose.Schema({
	nome: {type: String, required: [true, "Informe o nome do ciclo de pagamento."]},
	mes: {type: Number, min: 1, max: 12, required: [true, "Informe o mês do ciclo de pagamento."]},
	ano: {type: Number, min: 1970, max: 2100, required: [true, "Informe o ano do ciclo de pagamento."]},
	creditos: [creditoSchema],//dizendo que creditos é um array que puxa o esquema creditoSchema
	debitos: [debitoSchema]
})

module.exports = restful.model('BillingCycle', cicloSchema);


//independente de usar mongoose puro ou com restful, é preciso fazer os schemas necessários.


