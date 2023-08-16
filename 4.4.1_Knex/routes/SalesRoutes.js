const express = require('express');
const router = express.Router();

//crear
router.post('/', (req, res) => res.send({ message: "se creo" }));
//leer
router.get('/', (req, res) => res.send({ message: "se leen todos" }));
router.get('/:id', (req, res) => res.send({ message: "se lee uno" }));

//actualizar
router.put('/:id', (req, res) => res.send({ message: "se sustituyo" }));

router.patch('/:id', (req, res) => res.send({ message: "se modifico una o mas propiedades" }));
//
router.delete('/:id', (req, res) => res.send({ message: "se borró" }));




module.exports = router;