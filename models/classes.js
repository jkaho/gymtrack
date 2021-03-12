// Creates Classes model
module.exports = function(sequelize, DataTypes) {
  const Classes = sequelize.define(
    "classes",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );

  Classes.associate = models => {
    Classes.hasMany(models.classReviews, {
      // Class can have many class reviews
      onDelete: "CASCADE"
    });
    Classes.belongsTo(models.user, {
      // Class can only have one user (instructor)
      foreignKey: {
        name: "instructorId",
        allowNull: false
      }
    });
  };
  return Classes;
};
