const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createSale = (sale) => {
    return database('venta')
        .insert(sale).returning('id');
};

const getDetailedSaleById = (id) => {
    return database.select('*').from('venta')
    .join('venta_producto', 'venta_producto.id_venta', 'venta.id')
    .join('producto', 'producto.sku', 'venta_producto.sku_producto')
    .join('cliente', 'cliente.dni', 'venta.dni_cliente')
    .where('id', id);
}

module.exports={
    createSale,
    getDetailedSaleById
}