const mysql2 = require('mysql2')
const express = require('express')
const bodyParser = require('body-parser')
const {ViewEngine} = require('./config/viewEngine')
const {DBConnection} = require('./config/Db')
const {Route} = require('./route/Route1')
const {RouteAPI} = require('./route/RouteAPI')


const app = express()
const port = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
Route(app)
ViewEngine(app)
DBConnection()
RouteAPI(app)
app.set('view engine', 'ejs');
app.listen(port , () =>{
    console.log(`Server running in port ${port}`)
})
