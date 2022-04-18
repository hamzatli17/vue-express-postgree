'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
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
      createdAt: {
      
        type: Sequelize.DATE
      },
      updatedAt: {
      
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inscriptions');
  }
};