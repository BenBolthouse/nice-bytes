'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      return queryInterface.bulkInsert('Reviews', [
        {	spotId:	1	,	userId:	1	,	stars:	5	,	title:	"Amazing Spot!"	,	body:	"The food deserves 5 stars, the service deserves 5 stars, the atmosphere deserves 5 stars!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	1	,	userId:	2	,	stars:	5	,	title:	"My favorite spot in the city!"	,	body:	"This is hands down my new favorite spot!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	2	,	userId:	3	,	stars:	4	,	title:	"Absolutely amazing!"	,	body:	"Trust me, this place is the best!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	2	,	userId:	4	,	stars:	3	,	title:	"Meh."	,	body:	"Fine. Kind of far away."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	3	,	userId:	5	,	stars:	2	,	title:	"Don't go here"	,	body:	"Wouldn't recommend my enemy to go to this place."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	3	,	userId:	6	,	stars:	5	,	title:	"5/5! Would Recommend!"	,	body:	"Do yourself a favor and please visit here!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	4	,	userId:	7	,	stars:	5	,	title:	"BEST SPOT IN TOWN"	,	body:	"Look no further- you have found the best spot in town!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	4	,	userId:	8	,	stars:	4	,	title:	"Great food!"	,	body:	"Come for the drinks, stay for the food!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	5	,	userId:	9	,	stars:	4	,	title:	"Chef is a cool dude. "	,	body:	"Chill environment and the chef is a good person."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	5	,	userId:	10	,	stars:	3	,	title:	"It was fine. "	,	body:	"Fine- not much else to say..."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	6	,	userId:	1	,	stars:	2	,	title:	"Service was terrible"	,	body:	"Everyone was rude and no one was helpful!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	6	,	userId:	2	,	stars:	1	,	title:	"Stay away...."	,	body:	"Just don't go here. "	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	6	,	userId:	3	,	stars:	5	,	title:	"The best!"	,	body:	"Impossible to describe how amazing my experience was! You just have to go."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	7	,	userId:	4	,	stars:	4	,	title:	"Would recommend it"	,	body:	"Great spot with classic dishes. I would recommend anyone to go"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	8	,	userId:	5	,	stars:	4	,	title:	"Classic spot"	,	body:	"A spot you can come any day of the week and have a great time"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	8	,	userId:	6	,	stars:	5	,	title:	"Mi Fav"	,	body:	"I come here everyday and so should you!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	9	,	userId:	7	,	stars:	3	,	title:	"Pretty average"	,	body:	"Come here or don't, I don't care"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	9	,	userId:	8	,	stars:	3	,	title:	"Good, not great"	,	body:	"Some good food, but average experience overall"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	10	,	userId:	9	,	stars:	4	,	title:	"Get the meatball sub!"	,	body:	"The meatball sub is the best thing on the menu! You need to get it if you go!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	10	,	userId:	10	,	stars:	5	,	title:	"Good vibes"	,	body:	"The Beach Boys would love it here. It has lots of good vibrations."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	11	,	userId:	1	,	stars:	4	,	title:	"Cool place"	,	body:	"This spot was made for all the cool, hip, chillers out there"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	12	,	userId:	2	,	stars:	4	,	title:	"My mom really likes it"	,	body:	"My family comes here whenever my mom can't decide what to eat"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	13	,	userId:	3	,	stars:	5	,	title:	"A hidden gem"	,	body:	"The best place, but no one knows it yet. So don't tell anyone or else it'll be spoiled!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	13	,	userId:	4	,	stars:	2	,	title:	"Horrible"	,	body:	"The only reason it is not a 1 is because my server was very kind"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	14	,	userId:	5	,	stars:	1	,	title:	"The worst!"	,	body:	"I would have rated it a 0 if this AMAZING website would allow that"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	15	,	userId:	6	,	stars:	4	,	title:	"Chill spot"	,	body:	"Whever I am looking to relax and have a great meal with a pint, this is where I come."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	16	,	userId:	7	,	stars:	2	,	title:	"Start over"	,	body:	"This place needs to rethink their plan and start over. Or just consider doing something else entirely"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	16	,	userId:	8	,	stars:	5	,	title:	"Lovely Staff"	,	body:	"The friendliest people in Dublin work here! It is such a joy to enjoy a meal with warm, kind people."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	16	,	userId:	9	,	stars:	4	,	title:	"Loved it"	,	body:	"So glad I found this place from this website!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	17	,	userId:	10	,	stars:	2	,	title:	"Nope"	,	body:	"I need a drink after coming to this spot. At least, I can come to this fantastic website and find another one!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	18	,	userId:	1	,	stars:	5	,	title:	"Great for celebrations!"	,	body:	"I held my birthday party celebration here and it was a smash hit! I want to celebrate every big event here in the future!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	19	,	userId:	2	,	stars:	5	,	title:	"Simply the best"	,	body:	"I am going to sing praises for this spot for the rest of its days!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	20	,	userId:	3	,	stars:	3	,	title:	"Totally fine"	,	body:	"Not a whole lot to say. The place did its job and nothing more"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	21	,	userId:	4	,	stars:	4	,	title:	"Pretty good"	,	body:	"Great to have more of these restaurants popping up in the neighborhood!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	22	,	userId:	5	,	stars:	5	,	title:	"Tourist friendly"	,	body:	"Might not be for everyone, but if you are a tourist, they really know how to treat you!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	23	,	userId:	6	,	stars:	3	,	title:	"Tourist trap"	,	body:	"Only tourists go here, but no one from Ireland would actually ever walk through those doors"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	24	,	userId:	7	,	stars:	5	,	title:	"I enjoyed it"	,	body:	"If I enjoyed it, I think you will too! Go check it out and see for yourself!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	24	,	userId:	8	,	stars:	5	,	title:	"The go-to place"	,	body:	"This is the go to place here! The food is amazing and the service is first rate!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	25	,	userId:	9	,	stars:	4	,	title:	"Good spot"	,	body:	"My birthday dinner was good and the service was good"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	26	,	userId:	10	,	stars:	3	,	title:	"Not bad"	,	body:	"The outdoor area is not great. They should consider adding some heaters for the winter"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	27	,	userId:	1	,	stars:	5	,	title:	"Everything was delicious"	,	body:	"Everything was delicious. It was very pricey though."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	28	,	userId:	2	,	stars:	4	,	title:	"I recommend it"	,	body:	"Get the mushroom toast! I recommend it!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	29	,	userId:	3	,	stars:	5	,	title:	"Fantastic"	,	body:	"The restaurant did a fantastic job at accommodating my friends and I. The food was incredible and it was reasonably priced!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	30	,	userId:	4	,	stars:	4	,	title:	"Really good, but expensive"	,	body:	"Never disappoints! Outdoor seating had heaters and service was great, but it is pretty expensive."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	30	,	userId:	5	,	stars:	3	,	title:	"Odd experience"	,	body:	"We had to wait 15 minutes outside despite the reservation time, and server was unfamiliar with the bartenders ability so ordering was a little challenging at first. "	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	30	,	userId:	6	,	stars:	5	,	title:	"Amazing!"	,	body:	"Amazing food in a relaxed atmosphere. Thank you for a memorable experience for my family!" 	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	30	,	userId:	7	,	stars:	5	,	title:	"Great place!"	,	body:	"Fantastic food. Great atmosphere, the decorations and the floating lights are awesome. Definitely going back for the drinks."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	31	,	userId:	8	,	stars:	3	,	title:	"Bad service"	,	body:	"Took forever for my water to arrive and it took my server even longer to get to the table"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	32	,	userId:	9	,	stars:	5	,	title:	"Wonderful"	,	body:	"The food was wonderful. I can't wait to go back and try other dishes on the menu. Would recommend to all my friends to go there."	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
        {	spotId:	32	,	userId:	10	,	stars:	5	,	title:	"Lovely Staff"	,	body:	"Lovely space and attentive server!!!"	,	createdAt:	new Date()	,	updatedAt:	new Date()	},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
