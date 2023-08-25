const express = require('express');
const router = express.Router();
const jwt= REQUIRE('jsonwebtoken');
const SECRET_KEY='mi_clave_super_cool';

// creacionn de token de autenticacion
router.post('/aut',(req, res)=>{

    const body= req.body;

    if(body.nombre=== 'Pepito'&& body.password ==='gatito59'){

        const token = jwt.sign(body,SECRET_KEY,{expiresIn: '3m'});

        return response.send(token);
    
    }
    return res.status(401).send('No autorizado')

});

module.exports={
router
}