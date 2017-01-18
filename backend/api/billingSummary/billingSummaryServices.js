const _ = require("lodash");
const billingCycle = require("../billingCycle/billingCycle");

//middleware para sumarizar os ciclos de pagamento

function getSumario(req, res){
	billingCycle.aggregate({
		$project: {credito: {$sum: "$creditos.valor"}, debito: {$sum: "$debitos.valor"}}
	},{
		$group: {_id: null, credito: {$sum: "$credito"}, debito: {$sum: "$debito"}}
	},{
		$project: {_id: 0, credito: 1, debito: 1}
	}, function(erro, resultado){
		if(erro){
			res.status(500).json({errors: [erro]});
		}else{
			res.json(_.defaults(resultado[0], {credito: 0, debito: 0}));
		}
	});
}

module.exports = { getSumario };