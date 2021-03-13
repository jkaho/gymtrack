// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Route for getting all instructor reviews
  add.get("/api/instructor_reviews", (res, req) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        review: req.body.review,
        rating: req.body.ratingdescription,
        createdAt: req.body.createdAt,
        authorId: req.user.id,
        adminId: req.instructor.id //Not sure if it's req.instructor
      });
    }
  });
  // Route for adding new class reviews
  app.post("/api/add_instructor_review", (req, res) => {
    db.InstructorReviews.create({
      review: req.body.review,
      rating: req.body.ratingdescription,
      createdAt: req.body.createdAt, // maybe current date/time? moment.js?
      authorId: req.user.id,
      adminId: req.instructor.id //Not sure if it's req.instructor
    }).catch(err => {
      res.status(401).json(err);
    });
  });
};
