const SaleModel = require('../models/Sale');
const SaleProductModel = require('../models/SaleProduct');

const createSale = (req, res) => {

    let saleDataId;
    let saleProductsPromises = [];

    //1. Crear una venta.
    SaleModel.createSale({ "dni_cliente": req.body.dniCliente })
    .then((data) => {
        saleDataId = data[0].id;
        //2. Crear un conjunto de productos asociados a una venta (venta_producto).
        for (saleProduct of req.body.productos) {
            saleProductsPromises.push(SaleProductModel.createSaleProduct(
            {
                sku_producto: saleProduct.idProducto,
                cantidad: saleProduct.cantidad,
                id_venta: saleDataId
            }
            ))
        }
        return Promise.all(saleProductsPromises);
    })
    .then((data) => {
        return res.status(201).send({ message: data })
    })
    .catch((error) => {
        return res.status(500).send({ message: error })
    })
}

const getDetailedSale = (req, res) => {
    SaleModel.getFullSaleById(req.params.id)
    .then((data) => {
        const detailedSale = {
                                idVenta: req.params.id
                             }
        const productsList = data.map((product) => ({
                                                        sku: product.sku_producto,
                                                        cantidad: product.cantidad,
                                                        nombre: product.nombre,
                                                        precio: product.precio
                                                    }));
        detailedSale.products = productsList;
        const totalSaleInit = 0;
        const totalSaleSum = productsList.reduce((accumulator, product) => (product.cantidad * product.precio) + accumulator, totalSaleInit);
        detailedSale.total = totalSaleSum;
        return res.status(200).send({ message: detailedSale})
    })
    .catch((error) => {
        return res.status(500).send({ message: error })
    })
}

module.exports = {
    createSale,
    getDetailedSale
}