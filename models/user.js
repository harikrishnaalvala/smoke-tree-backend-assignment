const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost:3306/mydatabase'); // Configure this for your database

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
