const restful = require("node-restful"); //permite expor api rest para a aplicação
const mongoose = restful.mongoose;

//o restful permite criar apis mais simples, mas depende do mongoose
const creditoSchema = new mongoose.Schema({
	nome: {type: String, required: true},
	valor: {type: Number, required: true},
});

const debitoSchema = new mongoose.Schema({
	nome: {type: String, required: true},
	valor: {type: Number, min: 0, required: true},
	status: {type: String, required: false, uppercase: true, 
		enum: ["PAGO", "PENDENTE", "AGENDADO"]
	}
})

const cicloSchema = new mongoose.Schema({
	nome: {type: String, required: true},
	mes: {type: Number, min: 1, max: 12, required: true},
	ano: {type: Number, min: 1970, max: 2100, required: true},
	creditos: [creditoSchema],//dizendo que creditos é um array que puxa o esquema creditoSchema
	debitos: [debitoSchema]
})

module.exports = restful.model('BillingCycle', cicloSchema);


//independente de usar mongoose puro ou com restful, é preciso fazer os schemas necessários.


