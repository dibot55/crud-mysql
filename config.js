//importar las variables de entorno .env
require('dotenv').config({path: './.env'});

//configuracion de la base de datos
const config = {
    db: {
        host: process.env.HOSTNAME,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    listPerPage: 10
};

module.exports = config; //exportamos el objeto config 