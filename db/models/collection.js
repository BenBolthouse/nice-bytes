'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
    Collection.belongsTo(models.user { foreignKey: 'userId'});

    const columnMapping = {
      through: 'SpotCollection',
      otherKey: 'spotId',
      foreignKey: 'collectionId'
    }

    Collection.belongToMany(models.Spot, columnMapping);
  };
  return Collection;
};
