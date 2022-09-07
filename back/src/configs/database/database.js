// var mysql = require('mysql');
const { Sequelize } = require('sequelize');
databaseInfo = require('./database_info')

const sequelize = new Sequelize(databaseInfo['database'], databaseInfo['user'], databaseInfo['password'], {
  host: databaseInfo['host'],
  dialect: databaseInfo['dialect']/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

async (req, res) => {
  console.log('Connection has been established successfully.');
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
require('./automate-sequelize.js')

exports.sequelize = sequelize;
