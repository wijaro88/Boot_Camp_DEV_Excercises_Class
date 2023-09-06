const {
    findALLTasks, createTask,
} =require('../services/TaskService');

module.exports = {


    getAllTask: (req, res) => {
        findALLTasks()
            .then((tasks) => {
                return res.status(200).send(tasks);
            })
            .catch((err) =>{
                console.log('error importante en el instante');
                return res.status(500).send('hubo un error');
            });
        
    },

    getOneTaskById: (req, res) => {
        return res.send('getOneTaskById');
    },

    searchTask: (req, res) => { //aggregate
        return res.send('searchTask');
    },

    addTask: (req, res) => {
        const { description ,end_date} = req.body;
        createTask({ description, end_date })
        .then((task) => {
            return res.status(201).send(task);
        })
        .catch((err) =>{
            console.log('error importante en el instante');
            return res.status(500).send('hubo un error');
        });
        
    },

    updateTask: (req, res) => {
        return res.send('updateTask');
    },

    deleteTask: (req, res) => {
        return res.send('deleteTask');
    },




};