const SaleModel = require('../models/Sale');
const SaleProductModel = require('../models/SaleProduct');

const createSale = (req, res) => {
    //1. Crear una venta
    let saleId;
    let productsList = [];
    SaleModel.createSale({ dni_cliente: req.body.dniCliente })
    .then((data) => {
        saleId = data[0].id;
        //2. Crear la lista de productos (registro de la tabla venta_producto)
        productsList = req.body.productos.map(producto => ({
            sku_producto: producto.idProducto,
            id_venta: saleId,
            cantidad: producto.cantidad
        }));

        return SaleProductModel.createSaleProductBatch(productsList);
    })
    .then(data => {
        return res.status(231).send({message: "Venta creada"});
    })
    .catch(error => {
        return res.status(531).send({message: error});
    })
}

const getDetailedSale = (req, res) => {
    SaleModel.getDetailedSaleById(req.params.id).
    then(data => {
        return res.status(201).send({message: data});
    }).catch(error => {
        return res.status(500).send({message: error});
    })
}


module.exports = {
    createSale,
    getDetailedSale
}