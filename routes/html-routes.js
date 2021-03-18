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
    let loggedIn = false;
    if (req.user) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    res.render("home", {
      loggedIn: loggedIn,
      profileIcon: "fas fa-user-circle"
    });
  });
  app.get("/classes", (req, res) => {
    let loggedIn = false;
    if (req.user) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }

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
        res.render("classes", { classes: classes, loggedIn: loggedIn });
      });
  });
  app.get("/reviews", (req, res) => {
    let loggedIn = false;
    if (req.user) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    let classReviews = [];
    const gymClasses = [];
    let className;
    let classReviewsExist = false;

    let instructorReviews = [];
    const instructors = [];
    let instructorName;
    let instructorReviewsExist = true;
    db.classes
      .findAll({
        include: [
          {
            model: db.classReviews,
            include: {
              model: db.user
            }
          },
          {
            model: db.user,
            include: {
              model: db.instructorReviews,
              include: { all: true }
              //   include: [
              //     {
              //       model: db.user,
              //       as: "author"
              //     },
              //     {
              //       model: db.user,
              //       as: "reviewedInstructor"
              //     }
              //   ]
            }
          }
        ]
      })
      .then(results => {
        // Loop through each class
        results.forEach(result => {
          //   Grab array of class reviews from each class
          const rawClassReviews = result.dataValues.classReviews;
          if (rawClassReviews.length > 0) {
            classReviewsExist = true;
            classReviews = [];
            className = result.dataValues.name;
            // Loop through array of class reviews
            rawClassReviews.forEach(rawClassReview => {
              // Push each review to classReviews
              rawClassReview.dataValues.author =
                rawClassReview.dataValues.user.dataValues.firstName +
                " " +
                rawClassReview.dataValues.user.dataValues.lastName;
              if (rawClassReview.dataValues.rating === 5) {
                rawClassReview.dataValues.ratingFive = true;
                rawClassReview.dataValues.ratingFour = false;
                rawClassReview.dataValues.ratingThree = false;
                rawClassReview.dataValues.ratingTwo = false;
                rawClassReview.dataValues.ratingOne = false;
              } else if (rawClassReview.dataValues.rating === 4) {
                rawClassReview.dataValues.ratingFive = false;
                rawClassReview.dataValues.ratingFour = true;
                rawClassReview.dataValues.ratingThree = false;
                rawClassReview.dataValues.ratingTwo = false;
                rawClassReview.dataValues.ratingOne = false;
              } else if (rawClassReview.dataValues.rating === 3) {
                rawClassReview.dataValues.ratingFive = false;
                rawClassReview.dataValues.ratingFour = false;
                rawClassReview.dataValues.ratingThree = true;
                rawClassReview.dataValues.ratingTwo = false;
                rawClassReview.dataValues.ratingOne = false;
              } else if (rawClassReview.dataValues.rating === 2) {
                rawClassReview.dataValues.ratingFive = false;
                rawClassReview.dataValues.ratingFour = false;
                rawClassReview.dataValues.ratingThree = false;
                rawClassReview.dataValues.ratingTwo = true;
                rawClassReview.dataValues.ratingOne = false;
              } else {
                rawClassReview.dataValues.ratingFive = false;
                rawClassReview.dataValues.ratingFour = false;
                rawClassReview.dataValues.ratingThree = false;
                rawClassReview.dataValues.ratingTwo = false;
                rawClassReview.dataValues.ratingOne = true;
              }
              classReviews.push(rawClassReview.dataValues);
            });
            const gymClass = {
              className: className,
              classReviews: classReviews
            };
            gymClasses.push(gymClass);
          }

          const rawInstructorReviews = result.dataValues.user.instructorReviews;
          if (rawInstructorReviews.length > 0) {
            instructorReviewsExist = true;
            instructorReviews = [];
            instructorName =
              result.dataValues.user.firstName +
              " " +
              result.dataValues.user.lastName;
            // Loop through array of instructor reviews
            rawInstructorReviews.forEach(rawInstructorReview => {
              //   console.log(rawInstructorReview);
              // Push each review to instructorReviews
              //   rawInstructorReview.dataValues.author =
              //     rawClassReview.dataValues.user.dataValues.firstName +
              //     " " +
              //     rawClassReview.dataValues.user.dataValues.lastName;
              if (rawInstructorReview.dataValues.rating === 5) {
                rawInstructorReview.dataValues.ratingFive = true;
                rawInstructorReview.dataValues.ratingFour = false;
                rawInstructorReview.dataValues.ratingThree = false;
                rawInstructorReview.dataValues.ratingTwo = false;
                rawInstructorReview.dataValues.ratingOne = false;
              } else if (rawInstructorReview.dataValues.rating === 4) {
                rawInstructorReview.dataValues.ratingFive = false;
                rawInstructorReview.dataValues.ratingFour = true;
                rawInstructorReview.dataValues.ratingThree = false;
                rawInstructorReview.dataValues.ratingTwo = false;
                rawInstructorReview.dataValues.ratingOne = false;
              } else if (rawInstructorReview.dataValues.rating === 3) {
                rawInstructorReview.dataValues.ratingFive = false;
                rawInstructorReview.dataValues.ratingFour = false;
                rawInstructorReview.dataValues.ratingThree = true;
                rawInstructorReview.dataValues.ratingTwo = false;
                rawInstructorReview.dataValues.ratingOne = false;
              } else if (rawInstructorReview.dataValues.rating === 2) {
                rawInstructorReview.dataValues.ratingFive = false;
                rawInstructorReview.dataValues.ratingFour = false;
                rawInstructorReview.dataValues.ratingThree = false;
                rawInstructorReview.dataValues.ratingTwo = true;
                rawInstructorReview.dataValues.ratingOne = false;
              } else {
                rawInstructorReview.dataValues.ratingFive = false;
                rawInstructorReview.dataValues.ratingFour = false;
                rawInstructorReview.dataValues.ratingThree = false;
                rawInstructorReview.dataValues.ratingTwo = false;
                rawInstructorReview.dataValues.ratingOne = true;
              }
              instructorReviews.push(rawInstructorReview.dataValues);
            });
            const instructor = {
              instructorName: instructorName,
              instructorReviews: instructorReviews
            };
            instructors.push(instructor);
          }
        });
        res.render("reviews", {
          loggedIn: loggedIn,
          gymClasses: gymClasses,
          classReviewsExist: classReviewsExist,
          instructors: instructors,
          instructorReviewsExist: instructorReviewsExist
        });
      });
  });
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    } else {
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    }
  });
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    } else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, (req, res) => {
    let loggedIn = false;
    if (req.user) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    db.user
      .findAll({
        include: [db.classes],
        where: { id: req.user.id }
      })
      .then(results => {
        let userType;
        let classDate;
        let classInstructor;
        const instructorClasses = [];
        const memberClasses = [];
        const firstName = results[0].dataValues.firstName;
        const lastName = results[0].dataValues.lastName;
        const email = results[0].dataValues.email;
        rawJoinDate = results[0].dataValues.createdAt;
        const dateJoined = moment(rawJoinDate).format(
          "dddd, MMMM Do, yyyy, h:mma"
        );
        if (results[0].dataValues.instructor === true) {
          userType = "Instructor";
          db.classes
            .findAll({
              where: {
                instructorId: req.user.id
              }
            })
            .then(results => {
              if (results.length > 0) {
                results.forEach(result => {
                  rawClassDate = result.dataValues.startTime;
                  classDate = moment(rawClassDate).format(
                    "dddd, MMMM Do, h:mma"
                  );
                  const instructorClass = {
                    classDate: classDate,
                    name: result.dataValues.name,
                    description: result.dataValues.description,
                    price: result.dataValues.price
                  };
                  instructorClasses.push(instructorClass);
                });
                res.render("profile", {
                  loggedIn: loggedIn,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  userType: userType,
                  dateJoined: dateJoined,
                  instructorClasses: instructorClasses,
                  instructor: true,
                  hasClasses: true
                });
              } else {
                res.render("profile", {
                  loggedIn: loggedIn,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
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
              const resultArr = result.dataValues.classes;
              for (let i = 0; i < resultArr.length; i++) {
                rawClassDate = resultArr[i].dataValues.startTime;
                classDate = moment(rawClassDate).format("dddd, MMMM Do, h:mma");
                const memberClass = {
                  classDate: classDate,
                  name: resultArr[i].dataValues.name,
                  description: resultArr[i].dataValues.description,
                  price: resultArr[i].dataValues.price,
                  id: resultArr[i].dataValues.id
                };
                db.user
                  .findOne({
                    where: {
                      id: resultArr[i].dataValues.instructorId
                    }
                  })
                  .then(result => {
                    classInstructor =
                      result.dataValues.firstName +
                      " " +
                      result.dataValues.lastName;
                    memberClass.classInstructor = classInstructor;
                    memberClasses.push(memberClass);
                    if (i === resultArr.length - 1) {
                      res.render("profile", {
                        loggedIn: loggedIn,
                        firstName: results[0].dataValues.firstName,
                        lastName: results[0].dataValues.lastName,
                        email: results[0].dataValues.email,
                        userType: userType,
                        dateJoined: dateJoined,
                        memberClasses: memberClasses,
                        member: true,
                        hasClasses: true
                      });
                    }
                  });
              }
            } else {
              res.render("profile", {
                loggedIn: loggedIn,
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
  // Get all existing bookings
  app.get("/userclasses", (req, res) => {
    db.userclasses.findAll({}).then(results => {
      res.json({ results });
    });
  });
  // Get req.user
  app.get("/api/user_data", (req, res) => {
    if (req.user === undefined) {
      // The user is not logged in
      res.json({
        isLoggedIn: false
      });
    } else {
      res.json({
        user: req.user
      });
    }
  });
};
