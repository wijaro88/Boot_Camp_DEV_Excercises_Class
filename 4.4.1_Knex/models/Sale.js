const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createSale = (sale) => {
    return database('venta')
        .insert(sale).returning('id');
};



module.exports={
    createSale
}