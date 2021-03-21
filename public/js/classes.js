$(document).ready(() => {
  const avgRatingDiv = $(".avg-rating-div");
  avgRatingDiv.forEach(div => {
    const avgRating = div.attr("id").split("-")[3];
  })
};