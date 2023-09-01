const express = require('express');
const router = express.Router();
const { ProductController } = require('../controllers');

//crear
router.post('/', ProductController.createProduct);
//leer
router.get('/', ProductController.allProducts);
router.get('/:id',ProductController.getOneProduct);

//actualizar
router.put('/:id', (req, res) => res.send({ message: "se sustituyo" }));

router.patch('/:id', (req, res) => res.send({ message: "se modifico una o mas propiedades" }));
// borrar
router.delete('/:id', (req, res) => res.send({ message: "se borró" }));




module.exports = router;