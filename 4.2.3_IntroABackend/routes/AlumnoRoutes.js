const express = require('express');
const router = express.Router();
const AlumnoControllers = require('../controllers/AlumnoControllers');


router.get('/', AlumnoControllers.getAlumnos);
router.get('/:idAlumno', AlumnoControllers.getOneAlumno);
router.post('/', AlumnoControllers.createAlumno);

module.exports = router;