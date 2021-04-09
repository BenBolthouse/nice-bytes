"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      spotId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      stars: DataTypes.INTEGER,
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  Review.averageRating = async function (spotId) {
    let reviews = await this.findAll({ where: { spotId: spotId } });
    let sum = 0;
    for (let review of reviews) {
      sum += review.stars;
    }
    return (sum / reviews.length).toFixed(1);
  };
  return Review;
};
