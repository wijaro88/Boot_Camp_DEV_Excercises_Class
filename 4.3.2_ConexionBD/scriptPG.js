const pg = require('pg')

const Pool = pg.Pool;
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'ABARROTES',
    user:'postgres',//root
    password:'root'

});

pool.query(`insert into cliente (id_cliente, nombre, apellido, email, telefono, direccion, codigo_postal, barrio) values (16, 'Cob', 'Kuhnwald', 'ckuhnwald0@shareasale.com', 7, null, 1, 'guadaajara');`,(error,results)=> {
    if(error){
        console.log('Ocurrio un error');
        console.log(error);
        return;
    }
    console.log(results.rows);

});