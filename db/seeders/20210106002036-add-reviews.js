'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Reviews', [
        {	spotId:	1	,	userId:	1	,	stars:	5	,	title:	"Amazing Spot!"	,	body:	"The food deserves 5 stars, the service deserves 5 stars, the atmosphere deserves 5 stars!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	1	,	userId:	1	,	stars:	5	,	title:	"My favorite spot in the city!"	,	body:	"This is hands down my new favorite spot!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	2	,	userId:	1	,	stars:	4	,	title:	"Absolutely amazing!"	,	body:	"Trust me, this place is the best!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	2	,	userId:	1	,	stars:	3	,	title:	"Meh."	,	body:	"Fine. Kind of far away."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	3	,	userId:	1	,	stars:	2	,	title:	"Don't go here"	,	body:	"Wouldn't recommend my enemy to go to this place."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	3	,	userId:	2	,	stars:	5	,	title:	"5/5! Would Recommend!"	,	body:	"Do yourself a favor and please visit here!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	4	,	userId:	2	,	stars:	5	,	title:	"BEST SPOT IN TOWN"	,	body:	"Look no further- you have found the best spot in town!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	4	,	userId:	2	,	stars:	4	,	title:	"Great food!"	,	body:	"Come for the drinks, stay for the food!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	5	,	userId:	2	,	stars:	4	,	title:	"Chef is a cool dude. "	,	body:	"Chill environment and the chef is a good person."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	5	,	userId:	2	,	stars:	3	,	title:	"It was fine. "	,	body:	"Fine- not much else to say..."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	6	,	userId:	2	,	stars:	2	,	title:	"Service was terrible"	,	body:	"Everyone was rude and no one was helpful!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	6	,	userId:	2	,	stars:	1	,	title:	"Stay away...."	,	body:	"Just don't go here. "	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
