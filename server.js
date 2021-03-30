// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const compression = require("compression");

// Requiring passport as we've configured it
const passport = require("./config/passport");
//Loads the handlebars module
const handlebars = require("express-handlebars");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Compress all responses
app.use(compression());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars as the default templating engine.
app.engine(
  "handlebars",
  handlebars({
    layoutsDir: __dirname + "/views/layouts"
  })
);
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/classes-api-routes.js")(app);
require("./routes/classReviews-api-routes.js")(app);
require("./routes/instructorReviews-api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
