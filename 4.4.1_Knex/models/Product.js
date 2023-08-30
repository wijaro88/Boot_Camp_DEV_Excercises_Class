const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createProduct = (product) => {
    return database('Producto')
        .insert(product).returning('sku');
};
const allProducts = (product) => {
    return database.select('*').from('producto')
}


module.exports={
    createProduct,
    allProducts,
}