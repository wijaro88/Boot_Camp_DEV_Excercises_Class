const express = require('express');
const app = express();
const port = 3000;

app.get(`/`, function (req, res) {
    res.send('¡Hola Mundo  :b');
});

app.listen(port, ()=>{
    console.log(`Servidor iniciado y escuchando el puerto ${port}`);
});