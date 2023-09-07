const {
    findALLTasks, 
    createTask,
} = require('../services/TaskService');

module.exports = {


    getAllTasks: (req, res) => {
        //codigo para conectar
        findALLTasks()
            .then((tasks) => {
                return res.status(200).send(tasks);
            })
            .catch((err) => {
                console.log('error importante en el instante');
                return res.status(500).send('hubo un error');
            });

    },

    getOneTaskById: (req, res) => {
        return res.send('getOneTaskById');
    },

    searchTasks: (req, res) => { //aggregate
        return res.send('searchTasks');
    },

    addTask: (req, res) => {
        const { description, end_date } = req.body;
        createTask({ description, end_date })
            .then((task) => {
                return res.status(201).send(task);
            })
            .catch((err) => {
                console.log('error importante adicionando una task');
                return res.status(500).send('hubo un error creando task');
            });

    },

    updateTask: (req, res) => {
        return res.send('updateTask');
    },

    deleteTask: (req, res) => {
        return res.send('deleteTask');
    },




};