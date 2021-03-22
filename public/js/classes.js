$(document).ready(() => {
  // Class description responsiveness
  const responsiveClassDataDiv = $(".sm-table");
  const classDataDiv = $(".lg-table");

  changeClassDataFormat();

  $(window).resize(() => {
    changeClassDataFormat();
  });

  function changeClassDataFormat() {
    if ($(window).width() > 599) {
      classDataDiv.css("display", "block");
      responsiveClassDataDiv.css("display", "none");
    } else {
      responsiveClassDataDiv.css("display", "block");
      classDataDiv.css("display", "none");
    }
  }

  // Shows average stars for each class
  const avgRatingDiv = $(".avg-rating-div");
  avgRatingDiv.each(function() {
    const avgRating = parseFloat(
      $(this)
        .attr("id")
        .split("-")[3]
    );
    let ratingStars;
    if (avgRating > 0 && avgRating < 1.25) {
      ratingStars = $("<i class='fas fa-star'></i>");
    } else if (avgRating >= 1.25 && avgRating < 1.75) {
      ratingStars = $(
        "<div class='avg-star-div'><i class='fas fa-star'></i><i class='fas fa-star-half'></i></div>"
      );
    } else if (avgRating >= 1.75 && avgRating < 2.25) {
      ratingStars = $(
        "<div class='avg-star-div'><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else if (avgRating >= 2.25 && avgRating < 2.75) {
      ratingStars = $(
        "<div class='avg-star-div'><i class='fas fa-star'><i class='fas fa-star'></i><i class='fas fa-star-half'></i></div>"
      );
    } else if (avgRating >= 2.75 && avgRating < 3.25) {
      ratingStars = $(
        "<div class='avg-star-div'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else if (avgRating >= 3.25 && avgRating < 3.75) {
      ratingStars = $(
        "<div class='avg-star-div'><i class='fas fa-star'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half'></i></div>"
      );
    } else if (avgRating >= 3.75 && avgRating < 4.25) {
      ratingStars = $(
        "<div class='avg-star-div'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else if (avgRating >= 4.25 && avgRating < 4.75) {
      ratingStars = $(
        "<div class='avg-star-div'><i class='fas fa-star'><i class='fas fa-star'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half'></i></div>"
      );
    } else if (avgRating >= 4.75 && avgRating <= 5) {
      ratingStars = $(
        "<div class='avg-star-div'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div>"
      );
    } else {
      ratingStars = $("<p class='no-star-rating'>No reviews</p>");
    }
    this.append(ratingStars[0]);
  });
});
