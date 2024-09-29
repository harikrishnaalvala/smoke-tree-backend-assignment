const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import the sequelize instance

app.use(bodyParser.json());
const User = require('./models/user');
const Address = require('./models/address');
app.get('/', (req, res) => {
    res.send('Welcome to User-Address app!');
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  

User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

// Sync the models with the database
sequelize.sync();
app.post('/register', async (req, res) => {
    const { name, address } = req.body;
    try {
      const user = await User.create({ name });
      await Address.create({ address, userId: user.id });
      res.status(201).send('User and Address created successfully!');
    } catch (error) {
      res.status(500).send('Error creating user and address');
    }
  });
  

