'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    user_id: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING,
    //  allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
