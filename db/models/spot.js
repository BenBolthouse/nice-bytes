"use strict";
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
  return Spot;
};
