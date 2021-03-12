// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// Creates User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
      // Add validation (must be over 18)
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  User.associate = models => {
    User.hasMany(models.classes, {
      // User (instructor) can have many classes
      foreignKey: {
        name: "instructorId",
        allowNull: false
      },
      onDelete: "SET NULL"
    });
    User.belongsToMany(
      models.classes,
      // User (member) can take many classes, class can have many users (members)
      { through: "userClasses" },
      {
        onDelete: "CASCADE"
      }
    );
    User.hasMany(models.classReviews, {
      // User (member) can create many class reviews
      foreignKey: {
        name: "authorId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });
    User.hasMany(models.instructorReviews, {
      // User (member) can create many instructor reviews
      foreignKey: {
        name: "authorId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });
    User.hasMany(models.instructorReviews, {
      // Many instructor reviews can be written about a user (instructor)
      foreignKey: {
        name: "instructorId",
        allowNull: false
      },
      onDelete: "CASCADE"
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
