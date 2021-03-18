$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstNameInput = $("input#firstname-input");
  const lastNameInput = $("input#lastname-input");
  const dobInput = $("input#dob-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      dob: dobInput.val(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.dob ||
      !userData.email ||
      !userData.password
    ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.firstName,
      userData.lastName,
      userData.dob,
      userData.email,
      userData.password
    );
    firstNameInput.val("");
    lastNameInput.val("");
    dobInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, dob, email, password) {
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: email,
      password: password
    })
      .then(() => {
        // Upon successfully signed up, log in automatically and redirect to the member page
        loginUser(email, password);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
    console.log(err);
  }
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/profile");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
