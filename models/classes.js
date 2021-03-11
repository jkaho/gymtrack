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
    Classes.hasMany(models.UserClasses, {
      onDelete: "CASCADE"
    });
    Classes.hasMany(models.ClassReviews, {
      onDelete: "CASCADE"
    });
    Classes.belongsTo(models.User, {
      foreignKey: {
        name: "instructorId",
        allowNull: false
      }
    });
  };
  return Classes;
};
