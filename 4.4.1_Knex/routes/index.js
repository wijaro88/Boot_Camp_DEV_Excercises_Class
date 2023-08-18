const express = require('express');
const router = express.Router();


const ClientRoutes = require('./ClientRoutes');
const ProductRoutes = require('./ProductRoutes');
const SalesRoutes = require('./SalesRoutes');


router.use('/clients', ClientRoutes);
router.use('/products', ProductRoutes);
router.use('/sales', SalesRoutes);


module.exports = router;