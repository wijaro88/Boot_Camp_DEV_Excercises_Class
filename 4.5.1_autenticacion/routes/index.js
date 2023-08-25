const express = require('express');
const router = express.Router();

const UserRoutes = require('./UserRoutes');

router.use('/users', UserRoutes);

module.exports = router;