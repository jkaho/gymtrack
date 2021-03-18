// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  // Route for login
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
    // console.log(req.user);
  });

  // Route for signup
  app.post("/api/signup", (req, res) => {
    db.user
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        email: req.body.email,
        password: req.body.password
      })
      .then(() => {
        res.redirect("/profile");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for get member data, for the one that's logged in
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({
        isLoggedIn: false
      });
    } else {
      // Otherwise send back the user's info
      const userName = req.user.firstName + " " + req.user.lastName;
      res.json({
        isLoggedIn: true,
        userName: userName,
        authorId: req.user.id
      });
    }
  });

  // Route for getting all instructors
  app.get("/api/instructorlist", (req, res) => {
    db.classes
      .findAll({
        include: [
          {
            model: db.user
          }
        ]
      })
      .then(result => {
        const instructorIdArr = [];
        const instructorDataset = [];

        result.forEach(gymClass => {
          const instructorName =
            gymClass.dataValues.user.firstName +
            " " +
            gymClass.dataValues.user.lastName;
          if (!instructorIdArr.includes(gymClass.dataValues.user.id)) {
            instructorIdArr.push(gymClass.dataValues.user.id);
            const instructorData = {
              instructorName: instructorName,
              instructorId: gymClass.dataValues.user.id
            };
            instructorDataset.push(instructorData);
          }
        });
        res.json(instructorDataset);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
};
