const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String

},{
    timestamps:true
});

const Task = mongoose.model('Task', taskSchema);


module.exports= Task;