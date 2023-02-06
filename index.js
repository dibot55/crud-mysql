const express = require('express');
const app = express();

const port = 3000;
const programming_languajesRouter = require('./routes/programmingLanguajes');

app.use(express.json());// podemos recibir peticiones en json

// habilita el middleware urlencoded
app.use(
    express.urlencoded({
        extended: true
    })
);

//ruta que procese el formulario en .json
app.get('/', (request, response)=>{
    response.json({message: "ok"});
});

//importamos la consulta
app.use('/lenguajes', programming_languajesRouter);

app.use((error, request, response, next) => {
    const statusCode = error.statusCode || 500;//estado de respuesta http
})

//servidor
app.listen(port, ()=>{
    console.log(`App escuchando en http://localhost:${port}`);
});
