"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Spots",
      [
        // 1
        {
          name: "P Mac's",
          description:
            "At Dublin's trendy intersection of Stephen and Digges lies one of the hippest gastropubs in town! You enter a hive of activity, a bustling bar blasting loud rock music with mostly millennials immersed in lively conversation.",
          imgUrl: "restaurant-image-1.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 2
        {
          name: "The Boxty House",
          description:
            "Gallagher's Boxty House is the home of traditional Irish food. As well as our Boxty dishes, we serve stews, coddle, steaks and fresh seafood",
          imgUrl: "restaurant-image-2.jpg",
          type: "Traditional Irish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 3
        {
          name: "The Pig's Ear",
          description:
            "At The Pig's Ear - We offer our full a la carte menu for both Lunch & Dinner as well as our great value set lunch & early evening menus. Our aim is to provide a great quality dining experience in relaxed,informal surroundings with an emphasis on good value for money.",
          imgUrl: "restaurant-image-3.jpg",
          type: "Traditional Irish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 4
        {
          name: "Klaw",
          description:
            "This place is in temple bar area just very small place only have 4 tables and a bar along the way can sit 6. You will need to come at the right time to get seats or you just have to wait.",
          imgUrl: "restaurant-image-4.jpg",
          type: "Seafood",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 5
        {
          name: "The Old Mill",
          description:
            "Stick to the Irish specialties, and go before 6pm so you can get the 'lunch' menu (same as dinner more or less but cheaper).",
          imgUrl: "restaurant-image-5.jpg",
          type: "Traditional Irish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 6
        {
          name: "The Vintage Kitchen",
          description:
            "Just make sure to come hungry. Portions are very good size. Price is very reasonable for the quantity and especially the quality.",
          imgUrl: "restaurant-image-6.jpg",
          type: "Traditional Irish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 7
        {
          name: "Elephant & Castle",
          description:
            "We specialize in American Classic food with a twist . All our dishes are made to order and prepared in house.",
          imgUrl: "restaurant-image-7.jpg",
          type: "American",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 8
        {
          name: "Featherblade",
          description: "Steak, Seafood, Cocktails, Wine, Beer",
          imgUrl: "restaurant-image-8.jpg",
          type: "Steakhouse",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 9
        {
          name: "The Brazen Head",
          description:
            "Irelands Oldest Pub established in 1198. A short walk from Christchurch and the Guinness Brewery",
          imgUrl: "restaurant-image-9.jpg",
          type: "Traditional Irish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 10
        {
          name: "Il Vicoletto",
          description:
            " Intimate place that seats about 30 people.  It's a wonderful place with very personable staff. ",
          imgUrl: "restaurant-image-10.jpg",
          type: "Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 11
        {
          name: "Potager",
          description:
            "'Potager' is the French word for a kitchen garden so it’s the perfect name for this restaurant to Dublin’s north, in the city’s garden heartland.",
          imgUrl: "restaurant-image-11.jpg",
          type: "Seafood",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 12
        {
          name: "Chapter One",
          description:
            "It’s a special-occasion restaurant where chef Ross Lewis uses the best ingredients from Ireland’s fields, farms, and waves. The restaurant is a favorite with posh diners and lawyers from the nearby Four Courts, so tables on Friday and Saturday nights are like hen’s teeth. Lunch and pre-theatre sittings are easier to bag.",
          imgUrl: "restaurant-image-12.jpg",
          type: "Traditional Irish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 13
        {
          name: "Mr. Fox",
          description:
            "In a workaday part of Parnell Square, chef Anthony Smith has put together a punchy set of plates at a smart basement restaurant. Look for the signature meat tartare (venison or beef), luscious meat jeweled with red currants and topped with sunchoke crisps. Desserts are clever riffs on sweetshop staples and childhood favorites.",
          imgUrl: "restaurant-image-13.jpg",
          type: "Traditional Irish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 14
        {
          name: "The Long Hall",
          description:
            "The bar has been open for more than 250 years and the interior has remained unchanged since 1881—there are elaborately carved wooden partitions, antique clocks, and mismatched chandeliers. These gorgeous Victorian features make for a cozy, welcoming pub—the kind where you want to settle in for the night and post up with a near-perfect pint of Guinness.",
          imgUrl: "restaurant-image-14.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 15
        {
          name: "The Cobblestone",
          description:
            "If you want to hear a lively, authentic traditional session that is aimed as much at locals as it is at visitors, this is the place for you.",
          imgUrl: "restaurant-image-15.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 16
        {
          name: "Drop Dead Twice",
          description:
            "Painted in jagged shards of yellow and black, Drop Dead Twice stands out on a street known best for its antique shops and music school. Inside, you'll find two experiences: the Tap Room, an unpretentious Dublin boozer downstairs, and BYO Cocktail Bar, an upstairs mixology den where you provide the liquor.",
          imgUrl: "restaurant-image-16.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 17
        {
          name: "The Palace Bar",
          description:
            "Right on the cusp of the district on Fleet Street, it's one of the oldest pubs in the city, and most definitely one of the finest. The folks drinking here have been frequenting the Palace ever since they were allowed through its doors, and in addition to the old regulars, you'll find professors and students from nearby Trinity, sports fans, and those of a more literary persuasion—this used to be the favored pub of Patrick Kavanagh and Flann O’Brien, among others. ",
          imgUrl: "restaurant-image-17.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 18
        {
          name: "Mulligan's",
          description:
            "In Ireland, the phrase 'auld lad pub' describes a classic old-school bar—you know, the kind where you’ll find a couple of men sipping their pints of Guinness. Mulligan’s is one of those spots. A little shabby around the edges and full of character, the joint looks as though it hasn't changed over the last 200 years. There’s dark wood everywhere, low, rickety bar stools, and glossy-red Lincrusta on the walls. It’s rumored that James Joyce wrote some of Ulysses while propped up inside.",
          imgUrl: "restaurant-image-18.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 19
        {
          name: "Farrier & Draper",
          description:
            "With colorful mismatched furniture and art covering every inch of its navy walls, Farrier and Draper feels like an eccentric country mansion. There are several rooms, one of which leads directly into the beautiful Powerscourt Centre (one of the best shopping experiences in the city), a bar with brown leather stools and a floor-to-ceiling display of liquor bottles; the Georgian Room, with plush armchairs; and the Gallery Room, with high ceilings, a fireplace, and the aforementioned art. On a chilly day, cozy up by the crackling hearth and you’ll be in heaven.",
          imgUrl: "restaurant-image-19.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 20
        {
          name: "Vintage Cocktail Club",
          description:
            "With nearly 80 options, the cocktail menu can be a little overwhelming at first. Drinks are divided into eras; there's a strong focus on classics from the early- to mid-1800s, and some particularly special sours.",
          imgUrl: "restaurant-image-20.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 21
        {
          name: "Toners Pub",
          description:
            "Toners is said to be the only spot where W.B. Yeats would occasionally imbibe. In the main space, there are weathered partitions along the length of the bar, giving you a sense of privacy as you perch on your cushioned leather stool. There’s also a fairly sizable beer garden out the back, which is heavenly on sunny days and heated on the colder ones. The bar stocks a nice selection of spirits, including some good gins—goblets of Bombay Sapphire and tonic will keep you going for a while—as well as local beer.",
          imgUrl: "restaurant-image-21.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 22
        {
          name: "9 Below",
          description:
            "9 Below is all about sleek, stylish, and opulent cocktails in an elegant atmosphere. Set in a converted basement on Stephen’s Green, the bar has original vaulted ceilings, Art Deco velvet seats, and moody lighting.",
          imgUrl: "restaurant-image-22.jpg",
          type: "Bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 23
        {
          name: "Fish Shop",
          description:
            "The pioneering restaurateurs have moved out of Dublin to start a new restaurant in Tramore, but their Benburb Street chip shop and wine bar is still one of the best places in Dublin to eat fish and seafood. ",
          imgUrl: "restaurant-image-23.jpg",
          type: "Seafood",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 24
        {
          name: "Bastible",
          description:
            "Former Noma chef Cúán Greene helms the impressive restaurant from fellow chef Barry Fitzgerald. Bastible opened on a shoestring on a fairly unfashionable corner slightly out of town, but it has established itself as a groundbreaking restaurant. The furniture and decor are basic but the food is not. Greene cooks wild game, the freshest seafood, and foraged and farmed herbs. ",
          imgUrl: "restaurant-image-24.jpg",
          type: "Seafood",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 25
        {
          name: "Luncheonette",
          description:
            "College dining halls aren’t typically known for great food, but sculptor and cook Jennie Moran has made Luncheonette a gem for those in the know. The canteen at the National College of Art and Design offers better food than many mid-range restaurants, and it’s a good deal cheaper too. Menus change frequently but you won’t find many other schools serving dishes like a Lambay Island venison burger with smoked creme fraiche and peppercorn aioli. ",
          imgUrl: "restaurant-image-25.jpg",
          type: "American",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 26
        {
          name: "Camerino Bakery",
          description:
            "A sandwich can be a joyless wedge of fuel or, in the hands of Caryna Camerino, a handheld wonder. The Canadian cook first fell into baking as therapy to destress from her day job, which required her to fire people during Ireland’s last recession. She has been spreading joy from her friendly take-out bakery on Capel Street ever since, stuffing home-baked focaccias with ingredients like marinated kale, avocado, radish, and lemon mayo. ",
          imgUrl: "restaurant-image-26.jpg",
          type: "Bakery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 27
        {
          name: "Queen of Tarts",
          description:
            "Queen of Tarts is named appropriately, as this two-storey, confection-filled café is straight out of a fairy tale.",
          imgUrl: "restaurant-image-27.jpg",
          type: "Bakery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 28
        {
          name: "Mannings",
          description:
            "Mannings Bakery on Thomas Street – near the Guinness Storehouse – is a family-owned independent bakery that has been in operation for over 60 years. They produce handmade sweet and savoury baked goods every day, available from their stores in Tallaght, Blanchardstown and the city centre.",
          imgUrl: "restaurant-image-28.jpg",
          type: "Bakery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 29
        {
          name: "Pi Pizza",
          description:
            "Pi Pizza creates some of Dublin’s best pizza by slowly fermenting the dough before a fast spin in a wood-fired oven, leaving blisters of char on the crust. The ‘nduja with honey and Parmesan is a firm favorite, while another winner joins braised portobello mushrooms with pickled shimeji mushrooms and fresh herbs. ",
          imgUrl: "restaurant-image-29.jpg",
          type: "Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 30
        {
          name: "Etto",
          description:
            "It’s small and noisy (especially as the night lengthens and more wine is poured), but Etto has been crammed with happy eaters since it opened. The energetic Italian menu includes fiendish flavors like pig trotter carpaccio and mussels with nduja, fennel, and samphire.",
          imgUrl: "restaurant-image-30.jpg",
          type: "Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 31
        {
          name: "Las Tapas de Lola",
          description:
            "Named after owner Vanessa Murphy’s mother, this restaurant is a love letter to all things Spanish and flavorful. Murphy and her Spanish partner Anna Cadrera make regular pilgrimages to Spain for inspiration and ingredients, and pack it all into a lively menu of small plates. ",
          imgUrl: "restaurant-image-31.jpg",
          type: "Spanish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // 32
        {
          name: "Dax Restaurant",
          description:
            "Graham Neville is Dublin’s best chef without a Michelin star. In 2017, he teamed up with French owner Olivier Meisonnave of Dax, a basement restaurant named after Meisonnave’s home village in southwest France. The partnership transformed what was a reliable business lunch spot for those with flush expense accounts into something a lot more creative. Neville’s prawn-stuffed courgette flower is a true summer treat.",
          imgUrl: "restaurant-image-32.jpg",
          type: "French",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE "Spots_id_seq" RESTART WITH 1;');
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
