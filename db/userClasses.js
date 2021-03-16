// const User = require("./user");
// const Classes = require("./classes");

// // Creates userClasses model
// module.exports = function(sequelize, DataTypes) {
//   const UserClasses = sequelize.define(
//     "userClasses",
//     {},
//     {
//       freezeTableName: true
//     }
//   );

//   UserClasses.associate = models => {
//     User.belongsToMany(
//       models.classes,
//       // User (member) can take many classes, class can have many users (members)
//       { through: "userClasses" },
//       {
//         onDelete: "CASCADE"
//       }
//     );
//     Classes.belongsToMany(
//       models.user,
//       // User (member) can take many classes, class can have many users (members)
//       { through: "userClasses" },
//       {
//         onDelete: "CASCADE"
//       }
//     );
//   };
//   return UserClasses;
// };
