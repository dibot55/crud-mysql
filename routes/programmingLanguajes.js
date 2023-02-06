//enruta las consultas con las paginas que la solicitan
const express = require('express');
const router = express.Router();

const programming_languajes = require('../services/programmingLenguaje');

//------------------------------------RUTAS---------------------------------------------------
//CRUD con MYSQL
//create
router.post('/', async function (request, response, next){
    try{
        response.json(await programming_languajes.create(request.body));
    } catch (error) {
        console.error("Este es el error: " + error.message);
        next(error);
    }
})

//read
router.get('/', async function (request, response, next) {
    try{
        response.json( await programming_languajes.read(request.query.page));
    }catch(error){
        console.error("Este es el error: " + error.message);
        next(error);
    }
})

//update
router.put('/', async function (request, response, next){
    try{
        response.json(await programming_languajes.update(request.params.id ,request.body)); 
        //se necesita de un id y de un body
        //tambien podrias utilizar el request.body.id
    } catch (error) {
        console.error("Este es el error: " + error.message);
        next(error);
    }
})

//delete 
router.delete('/', async function (request, response, next){
    try{
        response.json(await programming_languajes.delet(request.query.id)); 
        //se necesita de un id y de un body
        //puedes usar request.params.id 
    } catch (error) {
        console.error("Este es el error: " + error.message);
        next(error);
    }
});
module.exports = router;