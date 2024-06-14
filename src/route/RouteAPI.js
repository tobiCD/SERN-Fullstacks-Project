const express = require('express')
const Routeapi = express.Router()
const {HomePage ,CURD ,PostCrud ,GetEditCrud,GetUpdateDone} = require('../controllers/HomeControllers')
const {hangleUserLogin } = require('../controllers/userController')

 const RouteAPI = (app)=>{
    Routeapi.get('/login',hangleUserLogin),

    app.use('/api',Routeapi)


}

module.exports = {RouteAPI}