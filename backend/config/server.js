const porta = 3003;//porta que vai ser usada pela aplicação
//a aplicação front-end vai ser independente da back-end. Ela vai rodar em outra porta.

const body_parser = require("body-parser");//serve para parsear o corpo da requisição, pegar dados de formulários, transformar em json, etc
const express = require("express");//framework web para node.
const server = express();

server.use(body_parser.urlencoded({extended: true}));//para toda a requisição que chegar ao servidor
server.use(body_parser.json()); //permite que o bodyparser parseie o corpo da requisição para tratar json
//urlencoded é o formato dos dados quando são submetidos pro servidor
//os dados vem no formato urlEncoded
//o bodyparser vai poder interpretar mais tipos de informações pelo extended:true
//ou seja, ele vai interpretar os dados das requisições.

//quando eu digo server.use, serve para todas as requisições

server.listen(porta, () => {
	console.log(`Servidor rodando na porta ${porta}.`);
});

module.exports = server;

