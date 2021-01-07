'use strict';

const { User, Collection } = require('../models');



module.exports = {
  up: async (queryInterface, Sequelize) => {

    const demoUser = await User.findOne({ where: { username: 'demouser' } });

    const demoCollections = await Collection.findAll({
        where: {userId: demoUser.id }
      });




 /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('SpotCollections', [
        { collectionId: demoCollections[0].id, spotId: 1, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[0].id, spotId: 2, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[0].id, spotId: 3, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[0].id, spotId: 4, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[0].id, spotId: 5, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[1].id, spotId: 6, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[1].id, spotId: 7, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[1].id, spotId: 8, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[1].id, spotId: 9, createdAt: new Date(), updatedAt: new Date()},
        { collectionId: demoCollections[1].id, spotId: 10, createdAt: new Date(), updatedAt: new Date()},

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('SpotCollections', null, {});
  }
};
