'use strict';

const { User } = require('../models');



module.exports = {
  up: async (queryInterface, Sequelize) => {

    const demoUser =  await User.findOne({ where: { username: 'demouser' } });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Collections', [
        { userId: demoUser.id, name: 'Want To Visit', createdAt: new Date(), updatedAt: new Date() },
        { userId: demoUser.id, name: 'Have Visted', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Collections', null, {});
  }
};
