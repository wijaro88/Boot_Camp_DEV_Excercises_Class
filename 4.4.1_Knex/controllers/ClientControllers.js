const ClientModel = require('../models/Clients');

const createClient = (req, res) => {
    ClientModel.createClient(req.body)
        .then((respuesta) => {
            return res.status(201).send({ message: respuesta })
        })
        .catch((error) => {
            return res.status(500).send({ message: error })
        });
};
const getClient = (req, res) => {
    ClientModel.getClient(req.params.id)
        .then((respuesta) => {
            return res.status(201).send({ message: respuesta })
        })
        .catch((error) => {
            return res.status(501).send({ message: error })
        });
};

const getAllClients = (req, res) => {
    ClientModel.getAllClients()
        .then((data) => {
            return res.status(200).send({ message: data })
        })
        .catch((error) => {
            return res.status(500).send({ message: error })
        });
};

module.exports = {
    createClient,
    getClient,
    getAllClients,
};