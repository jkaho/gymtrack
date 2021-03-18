// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Route for getting all instructor reviews
  app.get("/api/instructor_reviews", (res, req) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        title: req.body.title,
        review: req.body.review,
        rating: req.body.ratingdescription,
        authorId: req.user.id,
        instructorId: req.instructor.id //Not sure if it's req.instructor
      });
    }
  });
  // Route for adding new class reviews
  app.post("/api/add_instructor_review", (req, res) => {
    db.instructorReviews
      .create({
        title: req.body.reviewTitle,
        review: req.body.reviewText,
        rating: req.body.rating,
        authorId: req.body.authorId,
        instructorId: req.body.instructorId //Not sure if it's req.instructor
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
