const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const createProduct = (product) => {
    return database('producto')
        .insert(product);
};
const allProducts = (product) => {
   
    return database .select ('producto.sku' , 'producto.nombre' ,'producto.descripcion', 'venta_producto.cantidad') .as ('descripcion_producto')
    .from('producto')
    .join('venta_producto','venta_producto.sku_producto', '=', 'producto.sku');
};
const getOneProduct = (id) => {
   
    return database.select('*').from('producto').where('sku', id );

};
const deleteProduct = (product) => {
    return database('productos')
    .where({sku:product})
    .del()
    
}

module.exports={
    createProduct,
    allProducts,
    getOneProduct,
    deleteProduct
}