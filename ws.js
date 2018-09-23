const dao = require('./task.dao')

module.exports = (app) => {
    app.route("/salvar").post((req, resp) => {
        console.log(req.body);
        dao.salvar(req.body, () => {
            resp.end();
        });
        
    });
    app.route("/listar").get ((req, resp) => {

        let status = req.query.status;

        dao.listar(status, (retorno) =>{
            resp.json(retorno);
        })
    });
    app.route("/atualizar").post ((req, resp) => {
        dao.atualizar(req.body, () => {
            resp.end();
        })
    });
}
