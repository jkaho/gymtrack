// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Route for getting all classes
  app.get("/api/classlist", (req, res) => {
    db.classes
      .findAll({})
      .then(result => res.json(result))
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // Route for adding new gym classes
  app.post("/api/add_class", (req, res) => {
    db.classes
      .create({
        name: req.body.name,
        description: req.body.description,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        adminId: req.instructor.id
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  // Route for joining classes
  app.post("/api/booking", (req, res) => {
    db.userclasses
      .create({
        userId: req.user.id,
        classId: req.body.classId
      })
      .then(() => {
        res.redirect("/profile");
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  // Route for joining classes
  app.post("/api/withdraw", (req, res) => {
    db.userclasses
      .destroy({
        where: {
          userId: req.user.id,
          classId: req.body.classId
        }
      })
      .then(() => {
        res.redirect("/profile");
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
};
