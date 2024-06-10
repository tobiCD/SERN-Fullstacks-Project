const mysql2 = require('mysql2')
const express = require('express')
const bodyParser = require('body-parser')
const {ViewEngine} = require('./config/viewEngine')
const {DBConnection} = require('./config/Db')
const app = express()
const port = 3000

ViewEngine(app)
app.listen(port , () =>{
    console.log(`Server running in port ${port}`)
})
