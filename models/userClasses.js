// Creates userClasses model
module.exports = function(sequelize, DataTypes) {
  const UserClasses = sequelize.define("userClasses", {
    freezeTableName: true
  });

  return UserClasses;
};
