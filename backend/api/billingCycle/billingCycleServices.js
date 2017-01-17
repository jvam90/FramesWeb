const billingCycleServ = require("./billingCycle");

billingCycleServ.methods(["get", "post", "put", "delete"]);

//como eu to usando node-rest no schema, com o método methods e passando os verbos como array, ele já cria um serviço com todos os métodos
//agora é preciso criar as rotas para cada um desses serviços
module.exports = billingCycleServ;