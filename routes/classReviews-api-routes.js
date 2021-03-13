// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Route for adding new class reviews
  app.post("/api/add_review", (req, res) => {
    db.ClassReviews.create({
      review: req.body.review,
      rating: req.body.ratingdescription,
      createdAt: req.body.createdAt, // maybe current date/time? moment.js?
      authorId: req.user.id,
      classId: req.class.id //Not sure if it's req.class
    }).catch(err => {
      res.status(401).json(err);
    });
  });
};
