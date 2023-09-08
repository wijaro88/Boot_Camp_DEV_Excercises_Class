const express = require('express');
const { createUser } = require('../services/UserService');

const router = express.Router();


//Agregar un usuario nuevo
router.post('/', createUser);

module.exports = router;