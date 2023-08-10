const express = require('express');
const app = express();
const port = 3000;
const Routes = require ('./routes');

app.use(express.json());

app.use('clientes',Routes.ClienteRoutes);

app.listen(port, () => {
    console.log(`Running Server port: ${port}`);
});
