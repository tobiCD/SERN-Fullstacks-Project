const express = require('express')
const Route1 = express.Router()
const {HomePage} = require('../controllers/HomeControllers')


const Route = (app) => {
    Route1.get('/' , HomePage)
    app.use('/', Route1);
}


module.exports = {Route}