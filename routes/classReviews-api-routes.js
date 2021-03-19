// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.get("/api/classReviews", (req, res) => {
    console.log("get request through");
    db.classReviews
      .findAll({})
      .then(dbclassReviews => res.json(dbclassReviews));
  });

  // Route for adding new class reviews
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

  //route for editing classes
  app.put("/api/classReviews", (req, res) => {
    db.classReviews
      .update(
        {
          title: req.body.title,
          review: req.body.review,
          rating: req.body.ratingdescription,
          authorId: req.authorId.id,
          classId: req.classId.id
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(dbclassReviews => res.json(dbclassReviews))
      .catch(err => res.json(err));
  });

  //route for deleting classes
  app.delete("/api/classReviews/:id", (req, res) => {
    //specify which class to delete
    db.classReviews
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbclassReviews => res.json(dbclassReviews));
  });
};
