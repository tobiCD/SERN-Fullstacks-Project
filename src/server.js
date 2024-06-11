const mysql2 = require('mysql2')
const express = require('express')
const bodyParser = require('body-parser')
const {ViewEngine} = require('./config/viewEngine')
const {DBConnection} = require('./config/Db')
const {Route} = require('./route/Route1')

const app = express()
const port = 3000


Route(app)
ViewEngine(app)
DBConnection(app)

app.listen(port , () =>{
    console.log(`Server running in port ${port}`)
})
