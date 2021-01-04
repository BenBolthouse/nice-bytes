'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
     const columnMapping = {
      through: 'SpotCollection',
      otherKey: 'collectionId',
      foreignKey: 'spotId'
    }

    Spot.belongToMany(models.Collection, columnMapping);
    Spot.hasMany(models.Review, {foreignKey: 'spotId' });
  };
  return Spot;
};
