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
    let loggedIn = false;
    db.classes
      .findAll({
        include: [db.user]
      })
      .then(results => {
        if (req.user) {
          loggedIn = true;
        } else {
          loggedIn = false;
        }
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
        res.render("classes", { classes: classes, loggedIn: loggedIn });
      });
  });
  app.get("/reviews", (req, res) => {
    let classReviews = [];
    const gymClasses = [];
    let className;
    let classReviewsExist = false;
    db.classes
      .findAll({
        include: {
          model: db.classReviews,
          include: db.user
        }
      })
      .then(results => {
        console.log(results);
        // Loop through each class
        results.forEach(result => {
          // Grab array of class reviews from each class
          const rawClassReviews = result.dataValues.classReviews;
          if (rawClassReviews.length > 0) {
            classReviewsExist = true;
            classReviews = [];
            className = result.dataValues.name;
            // Loop through array class reviews
            rawClassReviews.forEach(rawClassReview => {
              // Push each review to classReviews
              rawClassReview.dataValues.author =
                rawClassReview.dataValues.user.dataValues.firstName +
                " " +
                rawClassReview.dataValues.user.dataValues.lastName;
              classReviews.push(rawClassReview.dataValues);
            });
            const gymClass = {
              className: className,
              classReviews: classReviews
            };
            gymClasses.push(gymClass);
          }
        });
        res.render("reviews", {
          gymClasses: gymClasses,
          classReviewsExist: classReviewsExist
        });
      });
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
    let classInstructor;
    const instructorClasses = [];
    const memberClasses = [];
    db.user
      .findAll({
        include: [db.classes],
        where: { id: req.user.id }
      })
      .then(results => {
        rawJoinDate = results[0].dataValues.createdAt;
        dateJoined = moment(rawJoinDate).format("dddd, MMMM Do, yyyy, h:mma");
        if (results[0].dataValues.instructor === true) {
          userType = "Instructor";
          results.forEach(result => {
            if (result.dataValues.classes.length > 0) {
              result.dataValues.classes.forEach(item => {
                rawClassDate = item.dataValues.startTime;
                classDate = moment(rawClassDate).format("dddd, MMMM Do, h:mma");
                const instructorClass = {
                  classDate: classDate,
                  name: item.dataValues.name,
                  description: item.dataValues.description,
                  price: item.dataValues.price
                };
                instructorClasses.push(instructorClass);
              });
              res.render("profile", {
                firstName: results[0].dataValues.firstName,
                lastName: results[0].dataValues.lastName,
                email: results[0].dataValues.email,
                userType: userType,
                dateJoined: dateJoined,
                instructorClasses: instructorClasses,
                instructor: true,
                hasClasses: true
              });
            } else {
              res.render("profile", {
                firstName: results[0].dataValues.firstName,
                lastName: results[0].dataValues.lastName,
                email: results[0].dataValues.email,
                userType: userType,
                dateJoined: dateJoined,
                instructor: true,
                hasClasses: false
              });
            }
          });
        } else {
          userType = "Member";
          results.forEach(result => {
            if (result.dataValues.classes.length > 0) {
              result.dataValues.classes.forEach(item => {
                rawClassDate = item.dataValues.startTime;
                classDate = moment(rawClassDate).format("dddd, MMMM Do, h:mma");
                const memberClass = {
                  classDate: classDate,
                  name: item.dataValues.name,
                  description: item.dataValues.description,
                  price: item.dataValues.price
                };
                db.user
                  .findOne({
                    where: {
                      id: item.dataValues.instructorId
                    }
                  })
                  .then(result => {
                    classInstructor =
                      result.dataValues.firstName +
                      " " +
                      result.dataValues.lastName;
                    memberClass.classInstructor = classInstructor;
                    memberClasses.push(memberClass);
                    res.render("profile", {
                      firstName: results[0].dataValues.firstName,
                      lastName: results[0].dataValues.lastName,
                      email: results[0].dataValues.email,
                      userType: userType,
                      dateJoined: dateJoined,
                      memberClasses: memberClasses,
                      member: true,
                      hasClasses: true
                    });
                  });
              });
            } else {
              res.render("profile", {
                firstName: results[0].dataValues.firstName,
                lastName: results[0].dataValues.lastName,
                email: results[0].dataValues.email,
                userType: userType,
                dateJoined: dateJoined,
                member: true,
                hasClasses: false
              });
            }
          });
        }
      });
  });
  app.get("/add-class", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/add-class.html"));
  });
};
