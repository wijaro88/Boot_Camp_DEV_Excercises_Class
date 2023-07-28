const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('hola mundo');
});

app.post('/',(req, res)=>{
   const body = req.body;
   body.mensaje = 'petición atendida'
   body.jajaja= 'ya casi entendemos'
   res.send(body);

});

app.listen(port, ()=> {
    console.log(`aplicación escuchando en el puerto ${port}`);

});