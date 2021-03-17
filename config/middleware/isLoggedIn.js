// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    logInHTML =
      "<li class='nav-item'><a class='nav-link' href='/login'><span id='log-in-out'>Log In</span></a></li>";
    return logInHTML;
  }
  logOutHTML =
    "<li class='nav-item'><a id='profile-link' class='nav-link' href='/profile'>Profile</a></li>" +
    "<li class='nav-item'><a class='nav-link' href='/logout'><span id='log-in-out'>Log Out</span></a></li>" +
    "<li class='nav-item'><a class='nav-link' href='/login'><span id='log-in-out'>Log In</span></a></li>";
  return logOutHTML;
};
