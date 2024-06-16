const mysql2 = require('mysql2')
const express = require('express')
const bodyParser = require('body-parser')
const {ViewEngine} = require('./config/viewEngine')
const {DBConnection} = require('./config/Db')
const {Route} = require('./route/Route1')
const {RouteAPI} = require('./route/RouteAPI')
var cors = require('cors')


const app = express()
const port = 8000
const allowedOrigins = process.env.ALLOWED_ORIGINS || ['http://localhost:3000']; // Replace with your frontend origin

app.use(cors({
  credentials: true, // Adjust based on authentication needs
  origin: allowedOrigins,
}));

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
