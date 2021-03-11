// Creates UserClasses model
module.exports = function(sequelize) {
  const UserClasses = sequelize.define("userClasses", {
    freezeTableName: true
  });

  UserClasses.associate = models => {
    Classes.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      }
    });
    Classes.belongsTo(models.User, {
      foreignKey: {
        name: "classId",
        allowNull: false
      }
    });
  };

  return UserClasses;
};
