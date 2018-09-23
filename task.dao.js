const mongoose = require('mongoose');
const Task = require("./task.model");

module.exports.salvar = (tsk, fnRetorno) => {
    mongoose.connect("mongodb://localhost:27017/task");
    let i = new Task(tsk);
    i.save((e, r) =>{
        mongoose.disconnect();
        fnRetorno();
    });
}
module.exports.listar = (status, retorno) =>{
    mongoose.connect("mongodb://localhost:27017/task");

    Task.find({status : status},(erro, result) => {
        mongoose.disconnect();
        retorno(result);
    });
    
}

module.exports.atualizar = (task, fnRetorno) => {
    mongoose.connect("mongodb://localhost:27017/task");

    Task.findByIdAndUpdate(task._id, task, (e,r) => {
        mongoose.disconnect();
        fnRetorno();
    })
}
