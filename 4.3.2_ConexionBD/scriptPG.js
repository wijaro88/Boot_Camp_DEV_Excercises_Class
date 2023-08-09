const pg = require('pg')

const Pool = pg.Pool;
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'ABARROTES',
    user:'postgres',//root
    password:'root'

});

pool.query(`SELECT * FROM venta`,(error,results)=> {
    if(error){
        console.log('Ocurrio un error');
        console.log(error);
        return;
    }
    console.log(results.rows);

});

const id = 5;
const nombre = 'Pedro';
const primer_apellido = 'Pascal';

pool.query('INSERT INTO cliente VALUES($1, $2, $3)', [id, nombre, primer_apellido], (error, results) => {
    if(error){
        console.log('Ocurrió un error');
        console.log(error);
        return;
    }
    console.log(results.rows);
});