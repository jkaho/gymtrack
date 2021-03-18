// Creates InstructorReviews model
module.exports = function(sequelize, DataTypes) {
  const UserClasses = sequelize.define(
    "userclasses",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      classId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );

  return UserClasses;
};
