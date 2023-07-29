const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//Importando las rutas
const AlumnoRoutes = require('./routes/AlumnoRoutes');

// CRUD
// C -> Create -> HTTP POST
// R -> Read   -> HTTP GET
// U -> Update -> HTTP PUT / HTTP PATCH
// D -> Delete -> HTTP DELETE

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

app.post('/', (req, res) => {
    const body = req.body;
    body.mensaje = 'Petición atendida';
    res.send(body);
});

app.put('/', (req, res) => {
    res.status(400);
    res.send({
        mensaje: 'Error del cliente'
    });
});

app.delete('/', (req, res) => {
    res.statusCode = 500;
    res.send({
        mensaje: 'Error del servidor'
    })
});

app.use('/alumnos', AlumnoRoutes);


app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
});