const { empresas } = require("./controlador/empresas");
const express = require('express');
const rotas = express();
rotas.get('/empresas/:dominioEmpresa',empresas)

module.exports = rotas