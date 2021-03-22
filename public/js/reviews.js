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
        "background-color: rgb(66, 98, 214); border: none; color: white;"
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
    $("#instructor-review-title-input").val("");
    $("#instructor-review-text-input").val("");
    $("#class-modal-bg").css("display", "none");
    $("#instructor-modal-bg").css("display", "none");
  });

  $("#exit-class-review").on("click", () => {
    isStarClicked = false;
    rating = 0;
    $("#class-review-title-input").val("");
    $("#class-review-text-input").val("");
    $("#class-modal-bg").css("display", "none");
    $("#instructor-modal-bg").css("display", "none");
  });

  // Grabbing data from class review form to show on confirmation modal
  const confirmationModal = $("#confirmation-modal-bg");
  let classReview = {};
  $("#add-class-review").on("click", event => {
    event.preventDefault();
    $("#class-modal-bg").css("display", "none");
    $("#instructor-modal-bg").css("display", "none");
    const classId = $("#class-reviews-list")
      .val()
      .split("-")[1];
    classReview = {
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
      showInputErrorMessage();
      return;
    }

    const confirmTitle = $(
      "<h5 id='confirm-class'>" + classReview.reviewTitle + "</h5>"
    );
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
  });

  // Grabbing data from class review form to show on confirmation modal
  let instructorReview = {};
  $("#add-instructor-review").on("click", event => {
    event.preventDefault();
    $("#instructor-modal-bg").css("display", "none");
    $("#class-modal-bg").css("display", "none");
    // Add confirmation "Are you sure you want to leave this review?" -> reload page and show new review
    const instructorId = $("#instructor-reviews-list")
      .val()
      .split("-")[1];
    instructorReview = {
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
      showInputErrorMessage();
      return;
    }

    const confirmTitle = $(
      "<h5 id='confirm-instructor'>" + instructorReview.reviewTitle + "</h5>"
    );
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
  });

  // Event for confirming review
  $("#confirm-review").on("click", () => {
    if ($(".confirmation-review h5").attr("id") === "confirm-class") {
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
    } else {
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
    }
  });

  // Event for exiting out of adding review
  $("#go-back").on("click", () => {
    if ($(".confirmation-review h5").attr("id") === "confirm-class") {
      confirmationModal.css("display", "none");
      $("#class-review-title-input").val(classReview.reviewTitle);
      $("#class-review-text-input").val(classReview.reviewText);
      $("#class-modal-bg").css("display", "block");
    } else {
      confirmationModal.css("display", "none");
      $("#instructor-review-title-input").val(instructorReview.reviewTitle);
      $("#instructor-review-text-input").val(instructorReview.reviewText);
      $("#instructor-modal-bg").css("display", "block");
    }
  });

  // 'Write a review' button
  $(".add-review").on("click", event => {
    $.ajax({
      url: "/api/user_data",
      method: "GET"
    })
      .then(result => {
        if (result.isLoggedIn === true) {
          authorId = result.authorId;
          if (event.target.id === "add-class-review-link") {
            $.get("/api/classlist")
              .then(result => {
                classOptions = result;
                const classSelect = $("#class-reviews-list");
                classSelect.empty();
                // $("#class-review-title-input").val("");
                // $("#class-review-text-input").val("");
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
              })
              .catch(err => {
                console.log(err);
                showErrorMessage();
              });
          } else {
            $.get("/api/instructorlist")
              .then(result => {
                instructorOptions = result;
                const instructorSelect = $("#instructor-reviews-list");
                instructorSelect.empty();
                // $("#instructor-review-title-input").val("");
                // $("#instructor-review-text-input").val("");
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
              })
              .catch(err => {
                console.log(err);
                showErrorMessage();
              });
          }
        } else {
          window.location.replace("/login");
        }
      })
      .catch(err => {
        console.log(err);
        showErrorMessage();
      });
  });

  // Request to add a class review
  function addClassReview(classId, reviewTitle, reviewText, rating, authorId) {
    $.post(
      "/api/add_class_review",
      {
        classId: classId,
        reviewTitle: reviewTitle,
        reviewText: reviewText,
        rating: rating,
        authorId: authorId
      },
      showSuccessMessage()
    ).catch(err => {
      console.log(err);
      showErrorMessage();
    });
  }

  // Request to add an instructor review
  function addInstructorReview(
    instructorId,
    reviewTitle,
    reviewText,
    rating,
    authorId
  ) {
    $.post(
      "/api/add_instructor_review",
      {
        instructorId: instructorId,
        reviewTitle: reviewTitle,
        reviewText: reviewText,
        rating: rating,
        authorId: authorId
      },
      showSuccessMessage()
    )
      // If there's an error, log the error
      .catch(err => {
        console.log(err);
        showErrorMessage();
      });
  }

  // Show 'add review' success message
  function showSuccessMessage() {
    $("#confirmation-modal-bg").css("display", "none");
    $("#success-modal-bg").css("display", "block");
  }

  $("#ok-success").on("click", () => {
    $("#success-modal-bg").css("display", "none");
    window.location.replace("/reviews");
  });

  // Show error when user does not include a value on all inputs
  function showInputErrorMessage() {
    confirmationModal.css("display", "none");
    $("#input-error-modal-bg").css("display", "block");
  }

  $("#input-error-ok-btn").on("click", () => {
    $("#input-error-modal-bg").css("display", "none");
  });

  // Filters
  // Per class
  $.get("/api/classlist").then(result => {
    const classOptions = result;
    const classFilter = $("#filter-class");

    // classSelect.empty();
    // // $("#class-review-title-input").val("");
    // // $("#class-review-text-input").val("");
    if (classOptions.length < 1) {
      const classOption = $("<option value='no-classes'>No classes</option>");
      classFilter.append(classOption);
    } else {
      classFilter.append("<option value='All'>All</option>");
      result.forEach(gymClass => {
        const classOption = $("<option>" + gymClass.name + "</option>");
        classFilter.append(classOption);
      });
    }
    // Class filter
    $(classFilter).change(event => {
      event.preventDefault();
      const className = $(classFilter).val();
      result.forEach(gymClass => {
        $(`h4:contains('${gymClass.name}')`)
          .parent()
          .parent()
          .parent()
          .parent()
          .fadeOut();
      });
      $(`h4:contains('${className}')`)
        .parent()
        .parent()
        .parent()
        .parent()
        .fadeIn();
      if (classFilter.val() === "All") {
        classOptions.forEach(eachClass => {
          $(`h4:contains('${eachClass.name}')`)
            .parent()
            .parent()
            .parent()
            .parent()
            .fadeIn();
        });
      }
    });

    $("#clear-filter-class").on("click", event => {
      classFilter.val("All");
      event.preventDefault();
      classOptions.forEach(eachClass => {
        $(`h4:contains('${eachClass.name}')`)
          .parent()
          .parent()
          .parent()
          .parent()
          .fadeIn();
      });
    });
  });

  // Rating filter for classes
  $.get("/api/classReviews").then(result => {
    classOptions = result;
    const ratingFilterClass = $("#filter-class-rating");
    // classSelect.empty();
    // // $("#class-review-title-input").val("");
    // // $("#class-review-text-input").val("");
    if (classOptions.length < 1) {
      const classOption = $("<option value='no-classes'>No classes</option>");
      classesFilter.append(classOption);
    } else {
      ratingFilterClass.append("<option data-id='All'>All</option>");
      ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"].forEach(score => {
        const scoreOption = $(
          "<option value='" + score + "'>" + score + "</option>"
        );
        ratingFilterClass.append(scoreOption);
      });
    }
    $(ratingFilterClass).change(event => {
      event.preventDefault();
      const classRating = $(ratingFilterClass).val();
      ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"].forEach(score => {
        $("[data-id= '" + score + "']")
          .parent()
          .parent()
          .fadeOut();
      });
      $("[data-id ='" + classRating + "']")
        .parent()
        .parent()
        .fadeIn();
      if (ratingFilterClass.val() === "All") {
        ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"].forEach(
          score => {
            $("[data-id ='" + score + "']")
              .parent()
              .parent()
              .fadeIn();
          }
        );
      }
    });
    $("#clear-filter-class").on("click", event => {
      event.preventDefault();
      ratingFilterClass.val("All");
      ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"].forEach(score => {
        $("[data-id ='" + score + "']")
          .parent()
          .parent()
          .fadeIn();
      });
    });
  });

  // Per Instructor
  $.get("/api/instructorlist").then(result => {
    const instructorOptions = result;
    const instructorFilter = $("#filter-instructor");
    // Append option menu
    if (instructorOptions.length < 1) {
      const instructorOption = $(
        "<option value='no-instructors'>No instructors</option>"
      );
      instructorFilter.append(instructorOption);
    } else {
      instructorFilter.append("<option value='All'>All</option>");
      result.forEach(instructor => {
        // For some reason it won't append if I name the constant other than "classOption"
        const classOption = $(
          "<option>" + instructor.instructorName + "</option>"
        );
        instructorFilter.append(classOption);
      });
    }
    // Instructor filter
    $(instructorFilter).change(event => {
      event.preventDefault();
      const instructorName = $(instructorFilter).val();
      result.forEach(instructor => {
        $(`h4:contains('${instructor.instructorName}')`)
          .parent()
          .parent()
          .parent()
          .parent()
          .fadeOut();
      });
      $(`h4:contains('${instructorName}')`)
        .parent()
        .parent()
        .parent()
        .parent()
        .fadeIn();
      if (instructorFilter.val() === "All") {
        instructorOptions.forEach(eachInstructor => {
          $(`h4:contains('${eachInstructor.instructorName}')`)
            .parent()
            .parent()
            .parent()
            .parent()
            .fadeIn();
        });
      }
    });
    //  Clear filter and show all
    $("#clear-filter-instructor").on("click", event => {
      instructorFilter.val("All");
      event.preventDefault();
      instructorOptions.forEach(eachInstructor => {
        $(`h4:contains('${eachInstructor.instructorName}')`)
          .parent()
          .parent()
          .parent()
          .parent()
          .fadeIn();
      });
    });
  });
  // Rating filter for instructors
  $.get("/api/instructorReviews").then(result => {
    instructorOptions = result;
    const ratingFilterInstructor = $("#filter-instructor-rating");
    // classSelect.empty();
    // // $("#class-review-title-input").val("");
    // // $("#class-review-text-input").val("");
    if (instructorOptions.length < 1) {
      const instructorOption = $(
        "<option value='no-classes'>No instructors</option>"
      );
      instructorFilter.append(instructorOption);
    } else {
      ratingFilterInstructor.append("<option data-id='All'>All</option>");
      ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"].forEach(score => {
        const scoreOption = $(
          "<option value='" + score + "'>" + score + "</option>"
        );
        ratingFilterInstructor.append(scoreOption);
      });
    }
    $(ratingFilterInstructor).change(event => {
      event.preventDefault();
      const instructorRating = $(ratingFilterInstructor).val();
      ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"].forEach(score => {
        $("[data-id= '" + score + "']")
          .parent()
          .parent()
          .parent()
          .parent()
          .fadeOut();
      });
      $("[data-id ='" + instructorRating + "']")
        .parent()
        .parent()
        .parent()
        .parent()
        .fadeIn();
      if (ratingFilterInstructor.val() === "All") {
        ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"].forEach(
          score => {
            $("[data-id ='" + score + "']")
              .parent()
              .parent()
              .parent()
              .parent()
              .fadeIn();
          }
        );
      }
    });
    $("#clear-filter-instructor").on("click", event => {
      event.preventDefault();
      ratingFilterInstructor.val("All");
      ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"].forEach(score => {
        $("[data-id ='" + score + "']")
          .parent()
          .parent()
          .parent()
          .parent()
          .fadeIn();
      });
    });
  });
});
