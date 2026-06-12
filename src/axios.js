const axios = require('axios');
const api_key = require('./api_key')

const instanciaAxios = axios.create({
  baseURL: 'https://companyenrichment.abstractapi.com/v1/',
  timeout: 5000, 
  params: { 
    api_key: api_key 
  }
});
module.exports=instanciaAxios