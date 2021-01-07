'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Users', [
        {	username:	"NotGenAgain"	,	email :	"gen@notagain.com"	,	firstName :	"Gen"	,	lastName:	"Yoka"	,	passwordHash :	"password1"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
        {	username:	"reesespieces"	,	email :	"mitch@reeses.com"	,	firstName :	"Mitch"	,	lastName:	"Yeezy"	,	passwordHash :	"password2"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
        {	username:	"albumcover"	,	email :	"analbumcover@jeopardy.com"	,	firstName :	"Alec"	,	lastName:	"Trebec"	,	passwordHash :	"password3"	,	createdAt :	new Date()	,	updatedAt :	new Date()	}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
