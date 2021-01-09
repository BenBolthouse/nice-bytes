'use strict';

const bcrypt = require("bcrypt");
const { secret } = require('../../config');

module.exports = {
  up: async (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [
      {	username:	"demouser"	,	email :	"demo@demo.com"	,	firstName :	"Demo"	,	lastName:	"Mcdemoson"	,	passwordHash :	"password1"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"NotGenAgain"	,	email :	"gen@notagain.com"	,	firstName :	"Gen"	,	lastName:	"Yoka"	,	passwordHash :	"password1"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"reesespieces"	,	email :	"mitch@reeses.com"	,	firstName :	"Mitch"	,	lastName:	"Yeezy"	,	passwordHash :	"password2"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"albumcover"	,	email :	"analbumcover@jeopardy.com"	,	firstName :	"Alec"	,	lastName:	"Trebec"	,	passwordHash :	"password3"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"sirfickle"	,	email :	"sirben@tang.com"	,	firstName :	"Kendrick"	,	lastName:	"Jamin"	,	passwordHash :	"password1"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"monalspeedy"	,	email :	"monalspeedy@gmail.com"	,	firstName :	"Sandra"	,	lastName:	"Coates"	,	passwordHash :	"password2"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"pantherloco"	,	email :	"pantherloco@gmail.com"	,	firstName :	"Samir"	,	lastName:	"Whitney"	,	passwordHash :	"password3"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"bravovisual"	,	email :	"bravovisual@gmail.com"	,	firstName :	"Orson"	,	lastName:	"Eilish"	,	passwordHash :	"password1"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"ninjafortunate"	,	email :	"ninjafortunate@gmail.com"	,	firstName :	"Chris"	,	lastName:	"Salt"	,	passwordHash :	"password2"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"predictorhardy"	,	email :	"predictorhardy@gmail.com"	,	firstName :	"Ed"	,	lastName:	"Hughes"	,	passwordHash :	"password3"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},
      {	username:	"chiliastawesome"	,	email :	"chiliastawesome@gmail.com"	,	firstName :	"Ken"	,	lastName:	"McCarthy"	,	passwordHash :	"password1"	,	createdAt :	new Date()	,	updatedAt :	new Date()	},  
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
