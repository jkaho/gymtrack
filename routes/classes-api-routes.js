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
        price: req.body.price,
        instructorId: req.body.instructorId
      })
      .then(() => res.status(200))
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for joining classes
  app.post("/api/booking", (req, res) => {
    if (!req.user) {
      res.redirect("/login");
    } else {
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
    }
  });

  // Route for joining classes
  app.post("/api/withdraw", (req, res) => {
    if (!req.user) {
      res.redirect("/login");
    } else {
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
    }
  });

  // Route for editing classes
  app.put("/api/classes/:id", (req, res) => {
    db.classes
      .update(
        {
          name: req.body.name,
          descrption: req.body.description,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          instructorId: req.body.instructorId
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(() => res.status(200))
      .catch(err => res.json(err));
  });

  // Route for deleting classes
  app.delete("/api/classes/:id", (req, res) => {
    //specify which class to delete
    db.classes
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => res.status(200));
  });
};
