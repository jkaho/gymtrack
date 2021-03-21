$(document).ready(() => {
  const avgRatingDiv = $(".avg-rating-div");
  avgRatingDiv.forEach(div => {
    const avgRating = div.attr("id").split("-")[3];
    if (avgRating > 0 && avgRating <= 1) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    } else if (avgRating > 0.5 && avgRating <= 1) {

    } else if (avgRating > 1 && avgRating <= 0.5) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    } else if (avgRating > 0 && avgRating <= 0.5) {

    }
  });
});
