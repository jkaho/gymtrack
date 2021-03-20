// Creates Classes model
module.exports = function(sequelize, DataTypes) {
  const Classes = sequelize.define(
    "classes",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 30]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 200]
        }
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );

  Classes.associate = models => {
    Classes.hasMany(models.classReviews, {
      // Class can have many class reviews
      foreignKey: {
        name: "classId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });
    Classes.belongsTo(models.user, {
      // Class can only have one user (instructor)
      foreignKey: {
        name: "instructorId",
        allowNull: false
      }
    });
    Classes.belongsToMany(
      models.user,
      // User (member) can take many classes, class can have many users (members)
      { through: "userClasses" },
      {
        onDelete: "CASCADE"
      }
    );
  };
  return Classes;
};
