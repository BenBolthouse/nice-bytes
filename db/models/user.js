'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Collection, { foreignKey: 'userId', as: 'collections'});
    User.hasMany(models.Review, { foreignKey: 'userId', as: 'reviews'});
    User.hasOne(models.Collection, { foreignKey: 'userId', as: 'favorites'});
    User.hasOne(models.Collection, { foreignKey: 'userId', as: 'visited'});
  };
  return User;
};
