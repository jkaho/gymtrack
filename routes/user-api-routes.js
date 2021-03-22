// Requiring our models and configured passport
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Route for login
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
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

  // Route for get logged in member's data
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // If the user is not logged in, send back an empty object
      res.json({
        isLoggedIn: false
      });
    } else {
      // Otherwise send back data
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
    db.user
      .findAll({
        where: {
          instructor: true
        }
      })
      .then(result => {
        const instructorDataset = [];

        result.forEach(instructor => {
          const instructorName =
            instructor.firstName + " " + instructor.lastName;
          const instructorData = {
            instructorName: instructorName,
            instructorId: instructor.id
          };
          instructorDataset.push(instructorData);
        });
        res.json(instructorDataset);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // Route for getting class information for individual users
  app.get("/userclasses", (req, res) => {
    db.userclasses.findAll({}).then(results => {
      res.json({ results });
    });
  });
};
