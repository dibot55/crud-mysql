// promise por que node no sabe si es una bd externa o interna, pero ambos te da latencia
const mysql = require('mysql2/promise'); //promesa puede que se resuelva o puede que no

const config = require('../config')

async function query (sql, params){
    const connection = await mysql.createConnection(config.db); //realiza la coneccion a base de datos
    //El [results, ] son los resultados de connection y son arrays node js no sabe cuantos datos puede recibir
    const [results, ] = await connection.execute(sql, params);

    return results;
};

//exportamos
module.exports = {
    query
};