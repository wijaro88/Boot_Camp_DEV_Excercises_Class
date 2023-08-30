const ProductModel = require('../models/Product');

const createProduct = (req, res) => {
    ProductModel.createProduct(req.body)
        .then((respuesta) => {
            return res.status(201).send({ message: respuesta })
        })
        .catch((error) => {
            return res.status(500).send({ message: error })
        });
};

const allProducts = (req,res) => {
    ProductModel.allProducts()
    .then((data) => {
        return res.status(200).send({ message: data })
    })
    .catch((error) => {
        return res.status(500).send({ message: error })
    });
};


module.exports={
    createProduct,
    allProducts
}