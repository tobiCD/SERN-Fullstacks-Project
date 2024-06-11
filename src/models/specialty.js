'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Specialty.init({
    id  : DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address : DataTypes.STRING,
    gender : DataTypes.STRING,
    roleid : DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};