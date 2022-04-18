
'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'inscriptions',
      [
        {
            user_id:1,
            name:'jones',
            lastName:' john',
            email:'hamzatli787@gmail.com',
            validated:'false',
            baerer_token:'Null',
            validation_date:'NULL',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            user_id:2,
            name:'james',
            lastName:' kooo',
            email:'james.koo@email.com',
            validated:'false',
            baerer_token:'Null',
            validation_date:'NULL',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          user_id:1,
          password: 'qwerty12',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('inscriptions', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('users', null, bulkDeleteOptions);
  }
};
