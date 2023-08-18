const ClientModel = require('../models/Clients');

const createClient=(req, res)=> {
ClientModel.createClient(req.body)
.then((respuesta) => {
    return res.status(201).send({ message: respuesta })
})
.catch((error) => {
    return res.status(500).send({ message: error })
});
};



module.exports={
    createClient,
};