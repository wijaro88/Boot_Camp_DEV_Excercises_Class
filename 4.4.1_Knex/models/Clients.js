const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createClient = (client) => {
    return database('clients')
    .insert(client);
};


module.exports = {
    createClient,
}