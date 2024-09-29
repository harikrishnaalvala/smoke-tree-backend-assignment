const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost:3306/mydatabase'); // Use your credentials

const Address = sequelize.define('Address', {
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Address;
