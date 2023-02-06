//Ayuda a conectar con la base de datos

//mysql manda las consultas paginadas, de 1 en uno, de 50 en 50, de 100 en 100 etc.
function getOffSet(currentPage = 1, listPerPage){
    return(currentPage - 1) * [listPerPage];
};

//si esta vacia o tiene algo la consulta
function emptyRows(rows){
    if (!rows){//si no tiene filas se retorna un arreglo vacia
        return [];
    }
    return rows;
};

module.exports = {
    getOffSet,
    emptyRows
}