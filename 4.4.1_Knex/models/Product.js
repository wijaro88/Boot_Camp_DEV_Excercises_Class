const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const createProduct = (product) => {
    return database('Producto')
        .insert(product).returning('sku');
};
const allProducts = (product) => {
   
    return database.select (('producto.sku' , 'producto.nombre' , 'venta_producto.cantidad') .as ('descripcion_producto'))
    .from('producto').join('venta_producto').on('venta_producto.sku_producto', '=', 'producto.sku')
};
const getOneProduct = (sku) => {
    // console.log('client',client);
    // return database('cliente')
    return database.select('*').from('producto').where('sku', sku );

};


module.exports={
    createProduct,
    allProducts,
    getOneProduct,
}