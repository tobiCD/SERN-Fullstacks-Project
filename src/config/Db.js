const mysql2 = require('mysql2/promise')

const DBConnection = mysql2.createPool({
    port : 3307,
    host :'localhost',  
    user :'root',
    password :'123456',
    database : 'BookingCare',
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
})

module.exports = {DBConnection}