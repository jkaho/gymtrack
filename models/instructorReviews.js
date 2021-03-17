// Creates InstructorReviews model
module.exports = function(sequelize, DataTypes) {
  const InstructorReviews = sequelize.define(
    "instructorReviews",
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
        // Rating out of 5 stars
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );

  InstructorReviews.associate = models => {
    InstructorReviews.belongsTo(models.user, {
      // Instructor review can only belong to one user (member)
      foreignKey: {
        allowNull: false
      },
      as: "authorId"
    });
    InstructorReviews.belongsTo(models.user, {
      // Instructor review can only refer to one user (instructor)
      foreignKey: {
        allowNull: false
      },
      as: "instructorId"
    });
  };
  return InstructorReviews;
};
