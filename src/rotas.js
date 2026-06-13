const { empresas } = require("./controlador/empresas");
const express = require('express');
const rotas = express();
rotas.get('/empresas',empresas)

module.exports = rotas