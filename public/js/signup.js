$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstNameInput = $("input#firstname-input");
  const lastNameInput = $("input#lastname-input");
  const dobInput = $("input#dob-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, validate the email and password are not blank
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
    // If there is an email and password, run the signUpUser function
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

  // Request to sign up for account
  function signUpUser(firstName, lastName, dob, email, password) {
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: email,
      password: password
    })
      .then(() => {
        // Redirect to login if successful
        loginUser(email, password);
      })
      .catch(err => {
        console.log(err);
        showLoginErrorMessage();
      });
  }

  // Request to log in
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        // Take user to profile page if successful
        window.location.replace("/profile");
      })
      .catch(err => {
        console.log(err);
        showErrorMessage();
      });
  }

  // Show error modal
  function showErrorMessage() {
    $("#error-modal-bg").css("display", "block");
  }

  $("#error-ok-btn").on("click", () => {
    $("#error-modal-bg").css("display", "none");
  });
});
