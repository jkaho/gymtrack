// Custom middleware to restrict users from accessing a page

// Used for profile page access
// Only used if the user types in the /profile route in the url as the profile link does not display for logged out users
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/login");
};
