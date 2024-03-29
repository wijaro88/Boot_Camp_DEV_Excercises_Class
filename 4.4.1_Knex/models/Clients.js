const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createClient = (client) => {
    return database('cliente')
        .insert(client);
};
const getClient = (id) => {
    // console.log('client',client);
    // return database('cliente')
    return database.select('*').from('cliente').where('id_cliente', id );

};
const getAllClients = (client) => {
    return database.select('*').from('cliente');

};

module.exports = {
    createClient,
    getClient,
    getAllClients,
}