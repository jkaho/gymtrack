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

  let classOptions;
  let instructorOptions;
  let rating;
  let isStarClicked = false;
  let authorId;

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

  // Functionality for exiting review modals
  $("#exit-instructor-review").on("click", () => {
    isStarClicked = false;
    rating = 0;
    $("#instructor-modal-bg").css("display", "none");
  });

  $("#exit-class-review").on("click", () => {
    isStarClicked = false;
    rating = 0;
    $("#class-modal-bg").css("display", "none");
  });

  // Grabbing data from modal forms to make HTTP POST request
  $("#add-class-review").on("click", event => {
    event.preventDefault();
    // Add confirmation "Are you sure you want to leave this review?" -> reload page and show new review
    const classId = $("#class-reviews-list")
      .val()
      .split("-")[1];
    const classReview = {
      classId: parseInt(classId),
      reviewTitle: $("#class-review-title-input").val(),
      reviewText: $("#class-review-text-input").val(),
      rating: rating,
      authorId: authorId
    };

    if (
      classReview.classId === "classes" ||
      !classReview.reviewTitle ||
      !classReview.reviewText ||
      !classReview.rating ||
      classReview.rating === 0
    ) {
      return;
    }

    const confirmationModal = $("#confirmation-modal-bg");
    const confirmTitle = $("<h5>" + classReview.reviewTitle + "</h5>");
    let confirmRating;
    if (classReview.rating === 1) {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i></div>"
      );
    } else if (classReview.rating === 2) {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else if (classReview.rating === 3) {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else if (classReview.rating === 4) {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    }
    const confirmText = $(
      "<div class='review-para'>" + classReview.reviewText + "</div>"
    );
    $(".confirmation-review").empty();
    $(".confirmation-review").append(confirmTitle, confirmRating, confirmText);
    confirmationModal.css("display", "block");

    $("#go-back").on("click", () => {
      confirmationModal.css("display", "none");
      $("#class-review-title-input").val(classReview.reviewTitle);
      $("#class-review-text-input").val(classReview.reviewText);
      $("#class-review-modal").css("display", "block");
    });

    $("#confirm-review").on("click", () => {
      addClassReview(
        classReview.classId,
        classReview.reviewTitle,
        classReview.reviewText,
        classReview.rating,
        classReview.authorId
      );
      rating = 0;
      $("#class-review-title-input").val("");
      $("#class-review-text-input").val("");
    });
  });

  $("#add-instructor-review").on("click", event => {
    event.preventDefault();
    // Add confirmation "Are you sure you want to leave this review?" -> reload page and show new review
    const instructorId = $("#instructor-reviews-list")
      .val()
      .split("-")[1];
    const instructorReview = {
      instructorId: parseInt(instructorId),
      reviewTitle: $("#instructor-review-title-input").val(),
      reviewText: $("#instructor-review-text-input").val(),
      rating: rating,
      authorId: authorId
    };

    if (
      instructorReview.instructorId === "instructors" ||
      !instructorReview.reviewTitle ||
      !instructorReview.reviewText ||
      !instructorReview.rating ||
      instructorReview.rating === 0
    ) {
      return;
    }

    const confirmationModal = $("#confirmation-modal-bg");
    const confirmTitle = $("<h5>" + instructorReview.reviewTitle + "</h5>");
    let confirmRating;
    if (instructorReview.rating === 1) {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i></div>"
      );
    } else if (instructorReview.rating === 2) {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else if (instructorReview.rating === 3) {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else if (instructorReview.rating === 4) {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else {
      confirmRating = $(
        "<div class='confirm-stars'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    }
    const confirmText = $(
      "<div class='review-para'>" + instructorReview.reviewText + "</div>"
    );
    $(".confirmation-review").empty();
    $(".confirmation-review").append(confirmTitle, confirmRating, confirmText);
    confirmationModal.css("display", "block");

    $("#go-back").on("click", () => {
      confirmationModal.css("display", "none");
      $("#instructor-review-title-input").val(instructorReview.reviewTitle);
      $("#instructor-review-text-input").val(instructorReview.reviewText);
      $("#instructor-review-modal").css("display", "block");
    });

    $("#confirm-review").on("click", () => {
      addInstructorReview(
        instructorReview.instructorId,
        instructorReview.reviewTitle,
        instructorReview.reviewText,
        instructorReview.rating,
        instructorReview.authorId
      );
      rating = 0;
      $("#instructor-review-title-input").val("");
      $("#instructor-review-text-input").val("");
    });
  });

  $(".add-review").on("click", event => {
    $.ajax({
      url: "/api/user_data",
      method: "GET"
    }).then(result => {
      if (result.isLoggedIn === true) {
        authorId = result.authorId;
        if (event.target.id === "add-class-review-link") {
          $.get("/api/classlist").then(result => {
            classOptions = result;
            const classSelect = $("#class-reviews-list");
            classSelect.empty();
            if (classOptions.length < 1) {
              const classOption = $(
                "<option value='no-classes'>No classes</option"
              );
              classSelect.append(classOption);
            } else {
              result.forEach(gymClass => {
                const classOption = $(
                  "<option value='class-" +
                    gymClass.id +
                    "'>" +
                    gymClass.name +
                    "</option>"
                );
                classSelect.append(classOption);
              });
            }
            $("#class-modal-bg").css("display", "block");
          });
        } else {
          $.get("/api/instructorlist").then(result => {
            instructorOptions = result;
            const instructorSelect = $("#instructor-reviews-list");
            instructorSelect.empty();
            if (instructorOptions.length < 1) {
              const instructorOption = $(
                "<option value='no-instructors'>No instructors</option"
              );
              instructorOptions.append(instructorOption);
            } else {
              result.forEach(instructor => {
                const instructorOption = $(
                  "<option value='instructor-" +
                    instructor.instructorId +
                    "'>" +
                    instructor.instructorName +
                    "</option>"
                );
                instructorSelect.append(instructorOption);
              });
            }
            $("#instructor-modal-bg").css("display", "block");
          });
        }
      } else {
        window.location.replace("/login");
      }
    });
  });

  function addClassReview(classId, reviewTitle, reviewText, rating, authorId) {
    $.post("/api/add_class_review", {
      classId: classId,
      reviewTitle: reviewTitle,
      reviewText: reviewText,
      rating: rating,
      authorId: authorId
    })
      .then(() => {
        $("#confirmation-modal-bg").css("display", "none");
      })
      // If there's an error, log the error
      .catch(err => {
        console.log(err);
      });
  }

  function addInstructorReview(
    instructorId,
    reviewTitle,
    reviewText,
    rating,
    authorId
  ) {
    $.post("/api/add_instructor_review", {
      instructorId: instructorId,
      reviewTitle: reviewTitle,
      reviewText: reviewText,
      rating: rating,
      authorId: authorId
    })
      .then(() => {
        $("#confirmation-modal-bg").css("display", "none");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
