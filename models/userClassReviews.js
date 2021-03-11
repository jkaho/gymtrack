// Creates UserClassReviews model
module.exports = function(sequelize) {
  const UserClassReviews = sequelize.define("userClassReviews", {
    freezeTableName: true
  });

  return UserClassReviews;
};
