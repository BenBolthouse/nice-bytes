"use strict";
const Review = require("./review");

module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define("Spot", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    type: DataTypes.STRING,
  });
  Spot.associate = function (models) {
    const columnMapping = {
      through: "SpotCollection",
      otherKey: "collectionId",
      foreignKey: "spotId",
    };
    Spot.belongsToMany(models.Collection, columnMapping);
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
  };
  // Spot.prototype.averageRating = async function () {
  //   console.log("THIS", this.id, Review);
  //   let reviews = Review.findAll({ where: { spotId: this.id } });
  //   console.log(reviews);
  //   // let spots = Spot.findAll({
  //   //   where: { id: this.id },
  //   //   include: { model: Review },
  //   // });
  //   console.log(spots);
  //   // let average,
  //   //   sum = null;
  //   // for (let spot of spots) {
  //   //   sum += spot.stars;
  //   // }
  //   // average = sum / spots.length;
  //   // return spotId;
  // };
  return Spot;
};
