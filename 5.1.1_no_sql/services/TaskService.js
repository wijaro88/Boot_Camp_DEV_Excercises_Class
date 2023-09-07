const Task = require('../models/Task');

const findALLTasks = async () => {
    return await Task.find();
};
const createTask = async (task) => {
    return await Task.create(task);
};
module.exports = {
    findALLTasks,
    createTask,
};