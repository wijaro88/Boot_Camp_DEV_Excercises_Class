const express = require('express');

const router = express.Router();

const TaskRoutes = require('./TaskRoutes');

router.use('/tasks', TaskRoutes);

module.exports = router;