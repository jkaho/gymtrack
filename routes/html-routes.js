// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

const moment = require("moment");

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
    let instructorName;
    let classDate;
    db.classes
      .findAll({
        include: [db.user]
      })
      .then(results => {
        results.forEach(result => {
          instructorName =
            result.dataValues.user.firstName +
            " " +
            result.dataValues.user.lastName;
          rawDate = result.dataValues.startTime;
          classDate = moment(rawDate).format("dddd, MMMM Do, h:mma");
          result.dataValues.instructorName = instructorName;
          result.dataValues.classDate = classDate;
          classes.push(result.dataValues);
        });
        res.render("classes", { classes: classes });
      });
  });
  app.get("/reviews", (req, res) => {
    db.classReviews.findAll({}).then(results => {
      results.forEach(result => {
        // console.log(result);
        // console.log(result.dataValues.review);
        res.render("reviews", { reviews: result.dataValues.review });
      });
    });
    // const instructorReviews = [];
    // db.instructorReviews.findAll({}).then(results => {
    //   results.forEach(result => instructorReviews.push(result.dataValues));
    // });
    // res.render("reviews", { reviews: instructorReviews });
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
  app.get("/profile", isAuthenticated, (req, res) => {
    let userType;
    let dateJoined;
    let classDate;
    let hasClasses;
    let instructorClasses = [];
    db.user
      .findAll({
        where: { id: req.user.id }
      })
      .then(result => {
        rawJoinDate = result[0].dataValues.createdAt;
        dateJoined = moment(rawJoinDate).format("dddd, MMMM Do, yyyy, h:mma");
        if (result[0].dataValues.instructor === true) {
          userType = "Instructor";
          db.user
            .findAll({
              include: [db.classes],
              where: {
                id: req.user.id
              }
            })
            .then(results => {
              results.forEach(result => {
                result.dataValues.classes.forEach(item => {
                  rawClassDate = item.dataValues.startTime;
                  classDate = moment(rawClassDate).format(
                    "dddd, MMMM Do, h:mma"
                  );
                  const instructorClass = {
                    classDate: classDate,
                    name: item.dataValues.name,
                    description: item.dataValues.description,
                    price: item.dataValues.price
                  };
                  instructorClasses.push(instructorClass);
                });

                const numberOfClasses = instructorClasses.length;
                if (numberOfClasses > 0) {
                  hasClasses = true;
                } else {
                  hasClasses = false;
                }
              });
              res.render("profile", {
                firstName: result[0].dataValues.firstName,
                lastName: result[0].dataValues.lastName,
                email: result[0].dataValues.email,
                userType: userType,
                dateJoined: dateJoined,
                instructorClasses,
                instructor: true,
                hasClasses: hasClasses
              });
            });
        } else {
          userType = "Member";
        }
      });
  });
};
