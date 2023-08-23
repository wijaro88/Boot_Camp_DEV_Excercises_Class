const express = require('express');
const router = express.Router();
const { ClientController } = require('../controllers');

//crear
router.post('/', ClientController.createClient);
//leer
router.get('/:id', ClientController.getClient);
router.get('/', ClientController.getAllClients);

//actualizar
router.put('/:id', (req, res) => res.send({ message: "se sustituyo" }));

router.patch('/:id', (req, res) => res.send({ message: "se modifico una o mas propiedades" }));
//
router.delete('/:id', (req, res) => res.send({ message: "se borró" }));




module.exports = router;