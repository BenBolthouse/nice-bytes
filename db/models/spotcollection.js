'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpotCollection = sequelize.define('SpotCollection', {
    collectionId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {});
  return SpotCollection;
};