'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Spots', [
        { name:	"P Mac's",	description:	"At Dublin's trendy intersection of Stephen and Digges lies one of the hippest gastropubs in town! You enter a hive of activity, a bustling bar blasting loud rock music with mostly millennials immersed in lively conversation.",	imgUrl:	"/images/restaurant-image-1.jpg",	type:	"Pub",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name:	"The Boxty House",	description:	"Gallagher's Boxty House is the home of traditional Irish food. As well as our Boxty dishes, we serve stews, coddle, steaks and fresh seafood",	imgUrl:	"/images/restaurant-image-2.jpg",	type:	"Traditional Irish",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name:	"The Pig's Ear",	description:	"At The Pig's Ear - We offer our full a la carte menu for both Lunch & Dinner as well as our great value set lunch & early evening menus. Our aim is to provide a great quality dining experience in relaxed,informal surroundings with an emphasis on good value for money.",	imgUrl:	"/images/restaurant-image-3.jpg",	type:	"Traditional Irish",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name:	"Klaw",	description:	"This place is in temple bar area just very small place only have 4 tables and a bar along the way can sit 6. You will need to come at the right time to get seats or you just have to wait.",	imgUrl:	"/images/restaurant-image-4.jpg",	type:	"Seafood",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name:	"The Old Mill",	description:	"Stick to the Irish specialties, and go before 6pm so you can get the 'lunch' menu (same as dinner more or less but cheaper).",	imgUrl:	"/images/restaurant-image-5.jpg",	type:	"Traditional Irish",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name:	"The Vintage Kitchen",	description:	"Just make sure to come hungry. Portions are very good size. Price is very reasonable for the quantity and especially the quality.",	imgUrl:	"/images/restaurant-image-6.jpg",	type:	"Traditional Irish",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name:	"Elephant & Castle", 	description:	"We specialize in American Classic food with a twist . All our dishes are made to order and prepared in house.",	imgUrl:	"/images/restaurant-image-7.jpg",	type:	"Burgers",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name:	"Featherblade",	description:	"Steak, Seafood, Cocktails, Wine, Beer",	imgUrl: "/images/restaurant-image-8.jpg",	type:	"Steakhouse",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name:	"The Brazen Head",	description:	"Irelands Oldest Pub established in 1198. A short walk from Christchurch and the Guinness Brewery",	imgUrl:	"/images/restaurant-image-9.jpg",	type:	"Traditional Irish",	createdAt:	new Date(),	updatedAt:	new Date() },
        { name: "Il Vicoletto",	description:	" Intimate place that seats about 30 people.  It's a wonderful place with very personable staff. ",	imgUrl:	"/images/restaurant-image-10.jpg",	type:	"Italian",	createdAt:	new Date(),	updatedAt:	new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Spots', null, {});
  }
};
