// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Route for adding new class reviews
  app.get("/api/classlist", (req, res) => {
    db.classes
      .findAll({})
      .then(result => res.json(result))
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/api/add_class_review", (req, res) => {
    db.classReviews
      .create({
        title: req.body.reviewTitle,
        review: req.body.reviewText,
        rating: req.body.rating,
        authorId: req.body.authorId,
        classId: req.body.classId //Not sure if it's req.class
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
