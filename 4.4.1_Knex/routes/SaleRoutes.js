const express = require('express');
const router = express.Router();

const { SaleController} = require('../controllers');

//crear
router.post('/', SaleController.createSale);
//leer
router.get('/', (req, res) => res.send({ message: "se leen todos" }));
router.get('/:id', SaleController.getDetailedSale);

//actualizar
router.put('/:id', (req, res) => res.send({ message: "se sustituyo" }));

router.patch('/:id', (req, res) => res.send({ message: "se modifico una o mas propiedades" }));
//
router.delete('/:id', (req, res) => res.send({ message: "se borró" }));




module.exports = router;