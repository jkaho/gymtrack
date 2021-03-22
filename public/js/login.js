$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        // Takes user to the profile page after logging in
        // window.location.replace("/profile");
        // Takes user to the page they were previously on after logging in
        window.location.replace(document.referrer);
      })
      .catch(err => {
        console.log(err);
        showLoginErrorMessage();
      });
  }

  //   function showErrorMessage() {
  //     $("#error-modal-bg").css("display", "block");
  //   }

  //   $("#error-ok-btn").on("click", () => {
  //     $("#error-modal-bg").css("display", "none");
  //   });

  function showLoginErrorMessage() {
    $("#login-error-modal-bg").css("display", "block");
  }

  $("#login-error-ok-btn").on("click", () => {
    $("#login-error-modal-bg").css("display", "none");
  });
});
