'use strict';

const bcrypt = require("bcrypt");
const { secret } = require('../../config');

module.exports = {
  up: async (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [
        { username: "NotGenAgain", email: "gen@notagain.com", firstName: "Gen", lastName: "Yoka", passwordHash: await bcrypt.hash(`password1:${secret}`, 10),	createdAt :	new Date()	,	updatedAt :	new Date()	},
        { username: "reesespieces", email: "mitch@reeses.com", firstName: "Mitch", lastName: "Yeezy", passwordHash: await bcrypt.hash(`password1:${secret}`, 10),	createdAt :	new Date()	,	updatedAt :	new Date()	},
        { username: "albumcover", email: "analbumcover@jeopardy.com", firstName: "Alec", lastName: "Trebec", passwordHash: await bcrypt.hash(`password1:${secret}`, 10)	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
        { username: "demouser", email: "demo@demo.com", firstName: "demo",  lastName: "mcdemorson", passwordHash: await bcrypt.hash(`password1:${secret}`, 10), createdAt: new Date(), updatedAt: new Date() }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
