const billingCycleServ = require("./billingCycle");

billingCycleServ.methods(["get", "post", "put", "delete"]);
billingCycleServ.updateOptions({new: true, runValidators: true});

//Quando eu faço uma atualização com o verbo PUT, a resposta dele é o registro antigo, para só 
//depois retornar o registro novo por um GET. Para resolver esse problema, é preciso configurar
//o serviço para quando houver um PUT, sempre retornar o registro novo. Bem como é preciso ativar a
//validação dos validadores quando houver métodos PUT

//como eu to usando node-rest no schema, com o método methods e passando os verbos como array, ele já cria um serviço com todos os métodos
//agora é preciso criar as rotas para cada um desses serviços
module.exports = billingCycleServ;