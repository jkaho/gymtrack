const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    (email, password, done) => {
      // When a user tries to sign in this code runs
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

          //If the email exists
          bcrypt.compare(password, hash, (err, result) => {
            // If the input password was correct
            if (result === true) {
              return done(null, dbUser);
            }
            // If incorrect password
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
