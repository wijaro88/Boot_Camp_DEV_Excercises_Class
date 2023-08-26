const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const createSaleProduct = (saleProduct) => {
    return database('venta_producto').insert(saleProduct);
}

const createSaleProductBatch = (saleProductRows) => {
    return database('venta_producto').batchInsert('venta_producto', saleProductRows);
}

module.exports = {
    createSaleProduct,
    createSaleProductBatch
}