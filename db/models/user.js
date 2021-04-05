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
    User.hasMany(models.Collection, { foreignKey: 'userId', as: '_collections'});
    User.hasMany(models.Review, { foreignKey: 'userId', as: '_reviews'});
  };
  User.prototype.collections = function() {
    return this._collections.filter(c => c.name !== "Want To Visit" && c.name !== "Have Visited");
  }
  User.prototype.favorites = function() {
    return this._collections.filter(c => c.name === "Want To Visit")[0];
  }
  User.prototype.visited = function() {
    return this._collections.filter(c => c.name === "Have Visited")[0];
  }
  return User;
};
