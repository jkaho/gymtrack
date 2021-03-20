// Creates ClassReviews model
module.exports = function(sequelize, DataTypes) {
  const ClassReviews = sequelize.define(
    "classReviews",
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 250]
        }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
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
