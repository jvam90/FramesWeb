const express = require("express");

module.exports = function(servidor){
	const router = express.Router();	
	servidor.use("/api", router);
};