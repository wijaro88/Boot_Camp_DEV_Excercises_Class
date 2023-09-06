const express = require('express');

const router = express.Router();

const TaskController = require('../controllers/TaskController');
// Obtener todas las tareas
router.get('/',TaskController.getAllTask);
// obtener una tarea por id
router.get('/:id',TaskController.getOneTaskById);

router.get('/search', TaskController.searchTask);

router.post('/', TaskController.addTask);

router.patch('/:id',TaskController.updateTask);
// eliminar una tarea
router.delete('/', TaskController.deleteTask);

module.exports=router;