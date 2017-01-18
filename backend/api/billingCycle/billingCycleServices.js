const billingCycleServ = require("./billingCycle");
const _ = require("lodash");

billingCycleServ.methods(["get", "post", "put", "delete"]);
billingCycleServ.updateOptions({new: true, runValidators: true});

//Quando eu faço uma atualização com o verbo PUT, a resposta dele é o registro antigo, para só 
//depois retornar o registro novo por um GET. Para resolver esse problema, é preciso configurar
//o serviço para quando houver um PUT, sempre retornar o registro novo. Bem como é preciso ativar a
//validação dos validadores quando houver métodos PUT

billingCycleServ.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);//posso interceptar métodos http para chamar 
//middlewares antes ou depois de serem executados.

function sendErrorsOrNext(req, res, next){
	const bundle = res.locals.bundle;
	if(bundle.errors){
		var erros = parseErrors(bundle.errors);
		res.status(500).json({erros});
	}else{
		next();
	}
}

function parseErrors(nodeRestfulErrors){
	const erros = [];
	_.forIn(nodeRestfulErrors, erro => erros.push(erro.message));
	return erros;
}

billingCycleServ.route('count', (req, res, next) => {
	billingCycleServ.count((erro, valor) => {
		if(erro){
			res.status(500).json({errors: [erro]});
		}else{
			res.json({valor});
		}
	})
});

//como eu to usando node-rest no schema, com o método methods e passando os verbos como array, ele já cria um serviço com todos os métodos
//agora é preciso criar as rotas para cada um desses serviços
module.exports = billingCycleServ;