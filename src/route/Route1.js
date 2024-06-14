const express = require('express')
const Route1 = express.Router()
const {HomePage ,CURD ,PostCrud ,GetEditCrud,GetUpdateDone} = require('../controllers/HomeControllers')


const Route = (app) => {
    Route1.get('/' , HomePage),
    Route1.get('/crud',CURD),
    Route1.post('/postCrud',PostCrud),
    Route1.get('/edit/:id',GetEditCrud),
    Route1.post('/edit',GetUpdateDone),

    app.use('/', Route1);
    
}


module.exports = {Route}