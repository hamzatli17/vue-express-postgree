'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class inscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inscriptions.init({
   // name: Sequelize.STRING,
    user_id: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING,
    //  allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
   //   allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    //  allowNull: false,
    },
    validated: {
      type: Sequelize.BOOLEAN,
      //allowNull: false,
    },
    baerer_token: {
      type: Sequelize.STRING,
    
    },
    validation_date: {
      type: Sequelize.STRING,
    
    },
  }, {
    sequelize,
    modelName: 'inscriptions',
  });
  return inscriptions;
};