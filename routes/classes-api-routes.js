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
  
  //route for getting one class
  app.get("/api/classlist", (req, res) => {
    db.calsses.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbclasses) => res.json(dbclasses));
  }

  // Route for adding new gym classes
  app.post("/api/classes", (req, res) => {
    db.classes.create({
      name: req.body.name,
      description: req.body.description,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      adminId: req.instructor.id
    }).catch(err => {
      res.status(401).json(err);
    });
  });

    //route for editing classes 
    app.put("/api/classes", (req,res) => {
      db.classes.update(
      {
        name: req.body.name,
        descrption: req.body.description,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        adminId: req.instructor.id,
      },
      {
        where:{
          id: req.body.id,
        },
      }
      ).then((dbclasses) => res.json(dbclasses))
      .catch((err) => res.json(err));
    });
  
    //route for deleting classes
    app.delete("/api/classes/:id", (req, res) => {
      //specify which class to delete 
      db.classes.destroy({
        where: {
          id: req.params.id,
        },
      }).then((dbclasses) => res.json(dbclasses));
    });
};

