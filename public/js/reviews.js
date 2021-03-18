$(document).ready(() => {
  // Buttons toggle between class and instructor reviews
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

  // Rating star functionality on hover and click
  let rating;
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

  let isStarClicked = false;
  $(".rate-star").on("click", event => {
    isStarClicked = true;
    if (event.target.id === "star-one") {
      rating = 1;
      $("#star-one").css("color", "black");
      $("#star-two").css("color", "rgb(218, 210, 210)");
      $("#star-three").css("color", "rgb(218, 210, 210)");
      $("#star-four").css("color", "rgb(218, 210, 210)");
      $("#star-five").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-two") {
      rating = 2;
      $("#star-one").css("color", "black");
      $("#star-two").css("color", "black");
      $("#star-three").css("color", "rgb(218, 210, 210)");
      $("#star-four").css("color", "rgb(218, 210, 210)");
      $("#star-five").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-three") {
      rating = 3;
      $("#star-one").css("color", "black");
      $("#star-two").css("color", "black");
      $("#star-three").css("color", "black");
      $("#star-four").css("color", "rgb(218, 210, 210)");
      $("#star-five").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-four") {
      rating = 4;
      $("#star-one").css("color", "black");
      $("#star-two").css("color", "black");
      $("#star-three").css("color", "black");
      $("#star-four").css("color", "black");
      $("#star-five").css("color", "rgb(218, 210, 210)");
    } else {
      rating = 5;
      $("#star-one").css("color", "black");
      $("#star-two").css("color", "black");
      $("#star-three").css("color", "black");
      $("#star-four").css("color", "black");
      $("#star-five").css("color", "black");
    }
  });

  $(".rate-star").on("mouseout", () => {
    if (!isStarClicked) {
      $(".rate-star").each(function() {
        this.setAttribute("style", "color: rgb(218, 210, 210)");
      });
    } else {
      if (rating === 1) {
        $("#star-one").css("color", "black");
        $("#star-two").css("color", "rgb(218, 210, 210)");
        $("#star-three").css("color", "rgb(218, 210, 210)");
        $("#star-four").css("color", "rgb(218, 210, 210)");
        $("#star-five").css("color", "rgb(218, 210, 210)");
      } else if (rating === 2) {
        $("#star-one").css("color", "black");
        $("#star-two").css("color", "black");
        $("#star-three").css("color", "rgb(218, 210, 210)");
        $("#star-four").css("color", "rgb(218, 210, 210)");
        $("#star-five").css("color", "rgb(218, 210, 210)");
      } else if (rating === 3) {
        $("#star-one").css("color", "black");
        $("#star-two").css("color", "black");
        $("#star-three").css("color", "black");
        $("#star-four").css("color", "rgb(218, 210, 210)");
        $("#star-five").css("color", "rgb(218, 210, 210)");
      } else if (rating === 4) {
        $("#star-one").css("color", "black");
        $("#star-two").css("color", "black");
        $("#star-three").css("color", "black");
        $("#star-four").css("color", "black");
        $("#star-five").css("color", "rgb(218, 210, 210)");
      } else {
        $("#star-one").css("color", "black");
        $("#star-two").css("color", "black");
        $("#star-three").css("color", "black");
        $("#star-four").css("color", "black");
        $("#star-five").css("color", "black");
      }
    }
  });

  // Functionality for 'Write a review' links
  $("#add-class-review-link").on("click", () => {
    $("#class-modal-bg").css("display", "block");
  });

  $("#add-instructor-review-link").on("click", () => {
    $("#instructor-modal-bg").css("display", "block");
  });

  // Functionality for exiting review modals
  $("#exit-instructor-review").on("click", () => {
    $("#instructor-modal-bg").css("display", "none");
  });

  $("#exit-class-review").on("click", () => {
    $("#class-modal-bg").css("display", "none");
  });

  // Grabbing data from form to make HTTP POST request
  $("#add-class-review").on("click", event => {
    event.preventDefault();
    console.log($("#class-reviews-list").val());
    console.log(rating);
    console.log($("#class-review-title-input").val());
    console.log($("#class-review-text-input").val());
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
