const { Sequelize } = require('sequelize');
const config = require('../config/default.js');

const sequelize = new Sequelize(config.database.DATABASE, config.database.USERNAME, config.database.PASSWORD, {
  host: config.database.HOST,
  dialect: 'mysql',
  timezone: '+08:00' //东八时区
});

try {
    sequelize.authenticate().then(res => {
        console.log('Connection has been established successfully.');
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize