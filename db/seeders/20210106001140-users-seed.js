"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "demouser",
          email: "demo@demo.com",
          firstName: "Demo",
          lastName: "Mcdemoson",
          passwordHash: await bcrypt.hash("password1", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "NotGenAgain",
          email: "gen@notagain.com",
          firstName: "Gen",
          lastName: "Yoka",
          passwordHash: await bcrypt.hash("password1", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "reesespieces",
          email: "mitch@reeses.com",
          firstName: "Mitch",
          lastName: "Yeezy",
          passwordHash: await bcrypt.hash("password2", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "albumcover",
          email: "analbumcover@jeopardy.com",
          firstName: "Alec",
          lastName: "Trebec",
          passwordHash: await bcrypt.hash("password3", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "sirfickle",
          email: "sirben@tang.com",
          firstName: "Kendrick",
          lastName: "Jamin",
          passwordHash: await bcrypt.hash("password1", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "monalspeedy",
          email: "monalspeedy@gmail.com",
          firstName: "Sandra",
          lastName: "Coates",
          passwordHash: await bcrypt.hash("password2", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "pantherloco",
          email: "pantherloco@gmail.com",
          firstName: "Samir",
          lastName: "Whitney",
          passwordHash: await bcrypt.hash("password3", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "bravovisual",
          email: "bravovisual@gmail.com",
          firstName: "Orson",
          lastName: "Eilish",
          passwordHash: await bcrypt.hash("password1", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ninjafortunate",
          email: "ninjafortunate@gmail.com",
          firstName: "Chris",
          lastName: "Salt",
          passwordHash: await bcrypt.hash("password2", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "predictorhardy",
          email: "predictorhardy@gmail.com",
          firstName: "Ed",
          lastName: "Hughes",
          passwordHash: await bcrypt.hash("password3", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "chiliastawesome",
          email: "chiliastawesome@gmail.com",
          firstName: "Ken",
          lastName: "McCarthy",
          passwordHash: await bcrypt.hash("password1", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1;');
    return queryInterface.bulkDelete("Users", null, {});
  },
};
