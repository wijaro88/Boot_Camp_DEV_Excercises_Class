const alumnos = [
    {
        id: 1,
        nombre: 'Héctor',
        apellido: 'Robayo',
    },
    {
        id: 2,
        nombre: '   Marco',
        apellido: 'Quijano',
    },
    {
        id: 3,
        nombre: 'David',
        apellido: 'Ballesteros',
    }
]

module.exports = {
    getAlumnos: (req, res) => {

        console.log(req.query);
        if('limit' in req.query){
            res.status(200);
            if(req.query.limit > alumnos.length){
                res.send(alumnos)
                return;
            }else{
                res.send(alumnos.slice(0, req.query.limit));
                return;
            }
            
        }

        res.status(200);
        res.send(alumnos);
    },

    getOneAlumno: (req, res) => {
        const id = req.params.idAlumno;
        for(let i = 0; i < alumnos.length; i++){
            if(alumnos[i].id == id){
                res.status(200);
                res.send(alumnos[i]);
                return;
            }
        }
        res.status(404);
        res.send({
            mensaje: 'Alumno no encontrado'
        });
    },

    createAlumno: (req, res) => {
        const body = req.body;
        if(!('id' in body)){
            res.status(400);
            res.send({
                mensaje: 'La información no contiene el id.'
            });
            return;
        }
    
        if(typeof(body.id) != 'number'){
            res.status(400);
            res.send({
                mensaje: 'El tipo de dato del id es incorrecto.'
            });
            return;
        }
    
        if(!(body.hasOwnProperty('nombre'))){
            res.status(400);
            res.send({
                mensaje: 'La información no contiene el nombre.'
            });
            return;
        }
    
        if(!(body.hasOwnProperty('apellido'))){
            res.status(400);
            res.send({
                mensaje: 'La información no contiene el apellido.'
            });
            return;
        }
    
        alumnos.push({
            id: body.id,
            nombre: body.nombre,
            apellido: body.apellido
        });
    
        res.status(201);
        res.send({
            mensaje: 'Alumno creado'
        });
    
    }
}