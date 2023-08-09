const express = require('express');
const app = express();
const port = 3000;
constroutes = require ('./routes');

app.use(express.json());

app.use('./clientes',routes_clientes);


app.listen(port, () => {
    console.log(`Running Server port: ${port}`);
});