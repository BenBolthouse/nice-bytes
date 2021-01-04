'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpotCollection = sequelize.define('SpotCollection', {
    collectionId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {});
  SpotCollection.associate = function(models) {
    // associations can be defined here
  };
  return SpotCollection;
};