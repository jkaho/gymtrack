// Requiring our models
const db = require("../models");

module.exports = function(app) {
  // New route for getting all instructor reviews
  app.get("/api/instructorReviews", (req, res) => {
    db.instructorReviews
      .findAll({})
      .then(dbinstructorReviews => res.json(dbinstructorReviews));
  });

  // Route for adding instructor reviews
  app.post("/api/add_instructor_review", (req, res) => {
    db.instructorReviews
      .create({
        title: req.body.reviewTitle,
        review: req.body.reviewText,
        rating: req.body.rating,
        authorId: req.body.authorId,
        instructorId: req.body.instructorId
      })
      .then(() => res.status(200))
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
