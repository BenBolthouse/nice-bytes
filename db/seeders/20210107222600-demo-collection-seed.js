'use strict';

const { User } = require('../models');



module.exports = {
  up: async (queryInterface, Sequelize) => {

    const demoUser =  await User.findOne({ where: { username: 'demouser' } });

      return queryInterface.bulkInsert('Collections', [
        { userId: demoUser.id, name: 'Want To Visit', createdAt: new Date(), updatedAt: new Date() },
        { userId: demoUser.id, name: 'Have Visited', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Collections', null, {});
  }
};
