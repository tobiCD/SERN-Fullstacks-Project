const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('BookingCare', 'tobi1', 'Dang.khoi1', {
    host: 'localhost',
    dialect: 'mysql', 
    database : 'BookingCare',
    username :'tobi1',
    password : 'Dang.khoi1',
    port : '3306',
  });
  const DBConnection = async (app)=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
module.exports = {DBConnection}