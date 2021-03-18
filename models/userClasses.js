// Creates InstructorReviews model
module.exports = function(sequelize, DataTypes) {
  const UserClasses = sequelize.define(
    "userclasses",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Classes",
          key: "id"
        }
      }
    },
    { freezeTableName: true }
  );

  return UserClasses;
};
