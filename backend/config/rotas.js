const express = require("express");

module.exports = function(servidor){
	const router = express.Router();	
	servidor.use("/api", router);//vinculei o roteador para cada chamada que possua '/api' na url

	//rotas da api
	const billingCycleService = require('../api/billingCycle/billingCycleServices');
	billingCycleService.register(router, "/billingCycles"); //a api vai ser chamada quando tiver billingCycles
};