const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../models");

// Using a local strategy to sign in with email & password
passport.use(
  new LocalStrategy(
    // Users sign up / log in with email
    {
      usernameField: "email"
    },
    (email, password, done) => {
      // When user attempts to log in, check for user's email
      db.user
        .findOne({
          where: {
            email: email
          }
        })
        .then(dbUser => {
          // If the email does not exist
          if (!dbUser) {
            console.log("Incorrect Email");
            return done(null, false, {
              message: "Incorrect email."
            });
          }
          const hash = dbUser.password.toString();

          // If the email exists, validate the password
          bcrypt.compare(password, hash, (err, result) => {
            // If the input password is correct
            if (result === true) {
              return done(null, dbUser);
            }
            // If password is incorrect
            console.log("Incorrect password");
            return done(null, false, {
              message: "Incorrect password."
            });
          });
        });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
