const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var taskSchema = new Schema({
    descricao: String,
    status: Number
});

var modelTask = mongoose.model("Task", taskSchema);

module.exports = modelTask;