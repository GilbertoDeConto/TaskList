const express = require('express');
const ws = require('./ws');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
});

ws(app);

app.listen(3000, () => {
    console.log("Server 3000");
})