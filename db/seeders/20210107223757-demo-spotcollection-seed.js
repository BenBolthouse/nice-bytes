"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SpotCollections",
      [
        {
          collectionId: 1,
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 1,
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 1,
          spotId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 1,
          spotId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 1,
          spotId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 2,
          spotId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 2,
          spotId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 2,
          spotId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 2,
          spotId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          collectionId: 2,
          spotId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      'ALTER SEQUENCE "SpotCollections_id_seq" RESTART WITH 1;'
    );
    return queryInterface.bulkDelete("SpotCollections", {}, {});
  },
};
