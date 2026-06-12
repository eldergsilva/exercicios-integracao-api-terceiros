const instanciaAxios = require("../axios")


const empresas = async ( req,res) =>{
    
   return  res.status(200).json({mensagem: `OK`})
}
module.exports={
    empresas
}