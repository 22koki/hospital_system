const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './hospital_management.db', // Path to your SQLite database file
});

module.exports = sequelize;