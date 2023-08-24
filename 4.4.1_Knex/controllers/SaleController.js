const SaleModel = require('../models/Sale');
const SaleProductModel = require('../models/SaleProduct');


const createSale=(req, res)=>{
//1. crear una venta 
    SaleModel.createSale({"id_cliente":req.body.idcliente})
    .then((data)=>{

    }).catch((error)=>{
        return res.status(500).send({message:error})
    })
//2. crear un registro con productos asociados a una venta 





};



module.exports={
    createSale,
}   