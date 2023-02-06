// Modelo -> MCV
const db = require('./db');
const helper = require('../helper');
const config = require('../config');
//------------------------------------------------CONSULTAS-------------------------------------
//crud
//create
async function create(programming_languajes){
    const resultado = await db.query(`
        INSERT INTO lenguajes_programacion (nombre, anio_salida, github_rank)
        values (
            "${programming_languajes.nombre}", 
            "${programming_languajes.anio_salida}",
            "${programming_languajes.github_rank}"
            )
    `);

    //errores
    let message = "Error al crear el lenguaje de programacion";
    if(resultado.affectedRows){
    message = "El lenguaje se ha creado con exito";
    } else {
        return {message};
    }
}

//read
async function read(page = 1){
    const offSet = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(`
        SELECT * FROM  lenguajes_programacion LIMIT ${offSet}, ${config.listPerPage}
    `);//impide que le cargen muchos registros al usuario

    const data = helper.emptyRows(rows);//devuelve solo los que tienen datos
    const metadata = {page};

    return {
        data,
        metadata
    };
};

// put / update
async function update(id, programmingLanguajes){ //mandamos el id y el body
    const resultado = await db.query(`
        UPDATE lenguajes_programacion
            SET nombre = "${programmingLanguajes.nombre}",
                anio_salida = "${programmingLanguajes.anio_salida}",
                github_rank = "${programmingLanguajes.github_rank}"
            WHERE id = "${id}"
    `);
};

// DELETE
async function delet(id){
    const resultado = await db.query(`
        DELETE FROM lenguajes_programacion WHERE id = "${id}"
    `);
};

module.exports = {
    read,
    create,
    update,
    delet
};