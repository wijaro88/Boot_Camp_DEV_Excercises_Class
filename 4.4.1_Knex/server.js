const express = require('express');
const server = express();
const port = 3000;
const Routes = require ('./routes');





server.use(express.json());
server.use('/api/v1', Routes);

// host => localhost:3000/api/


server.listen(port, () => {
    console.log(`Running Server port: ${port}`);
});
