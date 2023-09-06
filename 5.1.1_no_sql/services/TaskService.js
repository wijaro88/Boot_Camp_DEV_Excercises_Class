const Task = require('../models/Tasks');

const findALLTask = async () => {
    return await Task.find();
};
const createTask = async (task) => {
    return await Task.create(task);
};
module.exports = {
    findALLTask,
    createTask,
};