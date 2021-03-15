// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models");

module.exports = function(app) {
  //   app.get("/", (req, res) => {
  //     let userStatus = "Log In";
  //     if (req.user) {
  //       userStatus = "Log Out";
  //     } else {
  //       userStatus = "Log In";
  //     }
  //     res.json({ userStatus: userStatus });
  //   });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/classes", (req, res) => {
    const classes = [];
    db.classes.findAll({}).then(results => {
      results.forEach(result => classes.push(result.dataValues));
    });
    res.render("classes", { classes: classes });
  });
  app.get("/reviews", (req, res) => {
    const classReviews = [];
    db.classReviews.findAll({}).then(results => {
      results.forEach(result => classReviews.push(result.dataValues));
    });
    res.render("reviews", db.ClassReviews);
    const instructorReviews = [];
    db.instructorReviews.findAll({}).then(results => {
      results.forEach(result => instructorReviews.push(result.dataValues));
    });
    res.render("reviews", db.InstructorReviews);
  });
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", (req, res) => {
    const users = [];
    db.user.findAll({}).then(results => {
      results.forEach(result => users.push(result.dataValues));
      console.log(results[0].dataValues);
      console.log(users[0].firstName, users[0].lastName, users[0].email);
      res.render("user", {
        firstname: users[0].firstName,
        lastname: users[0].lastName,
        email: users[0].email
      });
    });
  });
};
// const classReviews = [];
// db.classReviews.findAll({}).then(results => {
//   results.forEach(result => classReviews.push(result.dataValues));
// });
