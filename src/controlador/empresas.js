const instanciaAxios = require("../axios")
const fs =require('fs/promises')

const empresas = async ( req,res) =>{

   const { dominioEmpresa } = req.query

   try {
   const empresa = await instanciaAxios.get(`/?domain=${dominioEmpresa}`) ; 
   console.log(empresa.data)
   
   if (empresa && empresa.data.name  ) {
      const dadosDaEmpresa = JSON.parse(await fs.readFile('./src/empresas.json')
     );
    dadosDaEmpresa.push(empresa.data) ;
    await fs.writeFile('./src/empresas.json',JSON.stringify(dadosDaEmpresa,null,2))
    
   }
   return  res.status(200).json(empresa.data)  
   } catch (error) { 

   return  res.status(500).json({mensagem:error.message})   
   }
}
   
module.exports={
    empresas
}