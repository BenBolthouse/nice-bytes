'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Collections', [
        { userId: 1, name: 'Want To Visit', createdAt: new Date(), updatedAt: new Date() },
        { userId: 1, name: 'Have Visited', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE "Collections_id_seq" RESTART WITH 1;');
    return queryInterface.bulkDelete('Collections', null, {});
  }
};
