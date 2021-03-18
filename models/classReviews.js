// Creates ClassReviews model
module.exports = function(sequelize, DataTypes) {
  const ClassReviews = sequelize.define(
    "classReviews",
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
      }
    },
    { freezeTableName: true }
  );

  ClassReviews.associate = models => {
    ClassReviews.belongsTo(models.user, {
      // Class review can only belong to one user (member)
      foreignKey: {
        name: "authorId",
        allowNull: false
      }
    });
    ClassReviews.belongsTo(models.classes, {
      // Class review can only refer to one class
      foreignKey: {
        name: "classId",
        allowNull: false
      }
    });
  };
  return ClassReviews;
};
