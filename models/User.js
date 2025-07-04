const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: {
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
});

module.exports = User;
