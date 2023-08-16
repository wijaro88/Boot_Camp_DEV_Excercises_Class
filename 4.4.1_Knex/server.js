const express = require('express');
const server = express();
const port = 3000;
const Routes = require ('./routes');



server.use('/clients',Routes.ClienteRoutes);
server.use('/products',Routes.ProductRoutes);
server.use('/sales',Routes.SalesRoutes);





server.listen(port, () => {
    console.log(`Running Server port: ${port}`);
});
