const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

const User = sequelize.define('koa_user', {
  // 在这里定义模型属性
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  sex: {
      type: DataTypes.STRING,
  },
  height: {
      type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  age: {
      type: DataTypes.INTEGER,
  },
}, {
  // 这是其他模型参数
});

User.sync();

module.exports = User;