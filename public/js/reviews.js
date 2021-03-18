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

  let rating;
  let isStarClicked = false;

  // Rating star functionality on hover and click (for class reviews)
  $(".rate-star-c").on("mouseover", function() {
    if (this.id === "star-one-c") {
      this.setAttribute("style", "color: black");
      $("#star-two-c").css("color", "rgb(218, 210, 210)");
      $("#star-three-c").css("color", "rgb(218, 210, 210)");
      $("#star-four-c").css("color", "rgb(218, 210, 210)");
      $("#star-five-c").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-two-c") {
      $("#star-one-c").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-three-c").css("color", "rgb(218, 210, 210)");
      $("#star-four-c").css("color", "rgb(218, 210, 210)");
      $("#star-five-c").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-three-c") {
      $("#star-one-c").css("color", "black");
      $("#star-two-c").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-four-c").css("color", "rgb(218, 210, 210)");
      $("#star-five-c").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-four-c") {
      $("#star-one-c").css("color", "black");
      $("#star-two-c").css("color", "black");
      $("#star-three-c").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-five-c").css("color", "rgb(218, 210, 210)");
    } else {
      $("#star-one-c").css("color", "black");
      $("#star-two-c").css("color", "black");
      $("#star-three-c").css("color", "black");
      $("#star-four-c").css("color", "black");
      this.setAttribute("style", "color: black");
    }
  });

  $(".rate-star-c").on("click", event => {
    isStarClicked = true;
    if (event.target.id === "star-one-c") {
      rating = 1;
      $("#star-one-c").css("color", "black");
      $("#star-two-c").css("color", "rgb(218, 210, 210)");
      $("#star-three-c").css("color", "rgb(218, 210, 210)");
      $("#star-four-c").css("color", "rgb(218, 210, 210)");
      $("#star-five-c").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-two-c") {
      rating = 2;
      $("#star-one-c").css("color", "black");
      $("#star-two-c").css("color", "black");
      $("#star-three-c").css("color", "rgb(218, 210, 210)");
      $("#star-four-c").css("color", "rgb(218, 210, 210)");
      $("#star-five-c").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-three-c") {
      rating = 3;
      $("#star-one-c").css("color", "black");
      $("#star-two-c").css("color", "black");
      $("#star-three-c").css("color", "black");
      $("#star-four-c").css("color", "rgb(218, 210, 210)");
      $("#star-five-c").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-four-c") {
      rating = 4;
      $("#star-one-c").css("color", "black");
      $("#star-two-c").css("color", "black");
      $("#star-three-c").css("color", "black");
      $("#star-four-c").css("color", "black");
      $("#star-five-c").css("color", "rgb(218, 210, 210)");
    } else {
      rating = 5;
      $("#star-one-c").css("color", "black");
      $("#star-two-c").css("color", "black");
      $("#star-three-c").css("color", "black");
      $("#star-four-c").css("color", "black");
      $("#star-five-c").css("color", "black");
    }
  });

  $(".rate-star-c").on("mouseout", () => {
    if (!isStarClicked) {
      $(".rate-star-c").each(function() {
        this.setAttribute("style", "color: rgb(218, 210, 210)");
      });
    } else {
      if (rating === 1) {
        $("#star-one-c").css("color", "black");
        $("#star-two-c").css("color", "rgb(218, 210, 210)");
        $("#star-three-c").css("color", "rgb(218, 210, 210)");
        $("#star-four-c").css("color", "rgb(218, 210, 210)");
        $("#star-five-c").css("color", "rgb(218, 210, 210)");
      } else if (rating === 2) {
        $("#star-one-c").css("color", "black");
        $("#star-two-c").css("color", "black");
        $("#star-three-c").css("color", "rgb(218, 210, 210)");
        $("#star-four-c").css("color", "rgb(218, 210, 210)");
        $("#star-five-c").css("color", "rgb(218, 210, 210)");
      } else if (rating === 3) {
        $("#star-one-c").css("color", "black");
        $("#star-two-c").css("color", "black");
        $("#star-three-c").css("color", "black");
        $("#star-four-c").css("color", "rgb(218, 210, 210)");
        $("#star-five-c").css("color", "rgb(218, 210, 210)");
      } else if (rating === 4) {
        $("#star-one-c").css("color", "black");
        $("#star-two-c").css("color", "black");
        $("#star-three-c").css("color", "black");
        $("#star-four-c").css("color", "black");
        $("#star-five-c").css("color", "rgb(218, 210, 210)");
      } else {
        $("#star-one-c").css("color", "black");
        $("#star-two-c").css("color", "black");
        $("#star-three-c").css("color", "black");
        $("#star-four-c").css("color", "black");
        $("#star-five-c").css("color", "black");
      }
    }
  });

  // Rating star functionality on hover and click (for instructor reviews)
  $(".rate-star-i").on("mouseover", function() {
    if (this.id === "star-one-i") {
      this.setAttribute("style", "color: black");
      $("#star-two-i").css("color", "rgb(218, 210, 210)");
      $("#star-three-i").css("color", "rgb(218, 210, 210)");
      $("#star-four-i").css("color", "rgb(218, 210, 210)");
      $("#star-five-i").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-two-i") {
      $("#star-one-i").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-three-i").css("color", "rgb(218, 210, 210)");
      $("#star-four-i").css("color", "rgb(218, 210, 210)");
      $("#star-five-i").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-three-i") {
      $("#star-one-i").css("color", "black");
      $("#star-two-i").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-four-i").css("color", "rgb(218, 210, 210)");
      $("#star-five-i").css("color", "rgb(218, 210, 210)");
    } else if (this.id === "star-four-i") {
      $("#star-one-i").css("color", "black");
      $("#star-two-i").css("color", "black");
      $("#star-three-i").css("color", "black");
      this.setAttribute("style", "color: black");
      $("#star-five-i").css("color", "rgb(218, 210, 210)");
    } else {
      $("#star-one-i").css("color", "black");
      $("#star-two-i").css("color", "black");
      $("#star-three-i").css("color", "black");
      $("#star-four-i").css("color", "black");
      this.setAttribute("style", "color: black");
    }
  });

  $(".rate-star-i").on("click", event => {
    isStarClicked = true;
    if (event.target.id === "star-one-i") {
      rating = 1;
      $("#star-one-i").css("color", "black");
      $("#star-two-i").css("color", "rgb(218, 210, 210)");
      $("#star-three-i").css("color", "rgb(218, 210, 210)");
      $("#star-four-i").css("color", "rgb(218, 210, 210)");
      $("#star-five-i").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-two-i") {
      rating = 2;
      $("#star-one-i").css("color", "black");
      $("#star-two-i").css("color", "black");
      $("#star-three-i").css("color", "rgb(218, 210, 210)");
      $("#star-four-i").css("color", "rgb(218, 210, 210)");
      $("#star-five-i").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-three-i") {
      rating = 3;
      $("#star-one-i").css("color", "black");
      $("#star-two-i").css("color", "black");
      $("#star-three-i").css("color", "black");
      $("#star-four-i").css("color", "rgb(218, 210, 210)");
      $("#star-five-i").css("color", "rgb(218, 210, 210)");
    } else if (event.target.id === "star-four-i") {
      rating = 4;
      $("#star-one-i").css("color", "black");
      $("#star-two-i").css("color", "black");
      $("#star-three-i").css("color", "black");
      $("#star-four-i").css("color", "black");
      $("#star-five-i").css("color", "rgb(218, 210, 210)");
    } else {
      rating = 5;
      $("#star-one-i").css("color", "black");
      $("#star-two-i").css("color", "black");
      $("#star-three-i").css("color", "black");
      $("#star-four-i").css("color", "black");
      $("#star-five-i").css("color", "black");
    }
  });

  $(".rate-star-i").on("mouseout", () => {
    if (!isStarClicked) {
      $(".rate-star-i").each(function() {
        this.setAttribute("style", "color: rgb(218, 210, 210)");
      });
    } else {
      if (rating === 1) {
        $("#star-one-i").css("color", "black");
        $("#star-two-i").css("color", "rgb(218, 210, 210)");
        $("#star-three-i").css("color", "rgb(218, 210, 210)");
        $("#star-four-i").css("color", "rgb(218, 210, 210)");
        $("#star-five-i").css("color", "rgb(218, 210, 210)");
      } else if (rating === 2) {
        $("#star-one-i").css("color", "black");
        $("#star-two-i").css("color", "black");
        $("#star-three-i").css("color", "rgb(218, 210, 210)");
        $("#star-four-i").css("color", "rgb(218, 210, 210)");
        $("#star-five-i").css("color", "rgb(218, 210, 210)");
      } else if (rating === 3) {
        $("#star-one-i").css("color", "black");
        $("#star-two-i").css("color", "black");
        $("#star-three-i").css("color", "black");
        $("#star-four-i").css("color", "rgb(218, 210, 210)");
        $("#star-five-i").css("color", "rgb(218, 210, 210)");
      } else if (rating === 4) {
        $("#star-one-i").css("color", "black");
        $("#star-two-i").css("color", "black");
        $("#star-three-i").css("color", "black");
        $("#star-four-i").css("color", "black");
        $("#star-five-i").css("color", "rgb(218, 210, 210)");
      } else {
        $("#star-one-i").css("color", "black");
        $("#star-two-i").css("color", "black");
        $("#star-three-i").css("color", "black");
        $("#star-four-i").css("color", "black");
        $("#star-five-i").css("color", "black");
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
    isStarClicked = false;
    $("#instructor-modal-bg").css("display", "none");
  });

  $("#exit-class-review").on("click", () => {
    isStarClicked = false;
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

  $("#add-instructor-review").on("click", event => {
    event.preventDefault();
    console.log($("#instructor-reviews-list").val());
    console.log(rating);
    console.log($("#instructor-review-title-input").val());
    console.log($("#instructor-review-text-input").val());
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
