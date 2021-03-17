$(document).ready(() => {
  $(".toggle").on("click", event => {
    event.preventDefault();
    const toggleBtn = event.target;
    let otherToggleBtn;
    if (toggleBtn.id === "class-toggle") {
      otherToggleBtn = toggleBtn.nextElementSibling;
      toggleBtn.setAttribute(
        "style",
        "background-color: rgb(255, 89, 0); border: none; color: white;"
      );
      otherToggleBtn.setAttribute(
        "style",
        "background-color: white; border: solid 1px black; color: black;"
      );
      $("#class-reviews").css("display", "block");
      $("#instructor-reviews").css("display", "none");
    } else {
      otherToggleBtn = toggleBtn.previousElementSibling;
      toggleBtn.setAttribute(
        "style",
        "background-color: rgb(0, 174, 255); border: none; color: white;"
      );
      otherToggleBtn.setAttribute(
        "style",
        "background-color: white; border: solid 1px black; color: black;"
      );
      $("#instructor-reviews").css("display", "block");
      $("#class-reviews").css("display", "none");
    }
  });

  $(".rate-star").on("mouseover", function() {
    if (this.id === "star-one") {
      this.setAttribute("style", "color: black");
      $("#star-two").css("color", "rgb(218, 210, 210)");
      $("#star-three").css("color", "rgb(218, 210, 210)");
      $("#star-four").css("color", "rgb(218, 210, 210)");
      $("#star-five").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-two") {
      $("#star-one").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-three").css("color", "rgb(218, 210, 210)");
      $("#star-four").css("color", "rgb(218, 210, 210)");
      $("#star-five").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-three") {
      $("#star-one").css("color", "black");
      $("#star-two").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-four").css("color", "rgb(218, 210, 210)");
      $("#star-five").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-four") {
      $("#star-one").css("color", "black");
      $("#star-two").css("color", "black");
      $("#star-three").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-five").css("color", "rgb(218, 210, 210)");
    } else {
      $("#star-one").css("color", "black");
      $("#star-two").css("color", "black");
      $("#star-three").css("color", "black");
      $("#star-four").css("color", "black");
      this.setAttribute("style", "color: black");
    }
  });

  $(".rate-star").on("mouseout", () => {
    $(".rate-star").each(function() {
      this.setAttribute("style", "color: rgb(218, 210, 210)");
    });
  });

  //   $(".add-review").on("click", () => {
  //     $.ajax({
  //       url: "/api/user_data",
  //       method: "GET"
  //     }).then(result => {
  //       if (result.isLoggedIn === true) {

  //       } else {
  //         window.location.replace("/");
  //       }
  //     });
  //   });
});
