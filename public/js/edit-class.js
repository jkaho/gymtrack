$(document).ready(() => {
  $(".edit-class-btn").on("click", function(e) {
    e.preventDefault();
    $("#add-class-form").css("z-index", "0");
    const classId = parseInt(this.getAttribute("id").split("-")[3]);
    const classTitle = $("#class-no-" + classId + " .class-name-span").text();
    const classDescription = $(
      "#class-no-" + classId + " .description-container p"
    ).text();
    const classDate = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[0];
    const classStart = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[1];
    const classEnd = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[2];
    const classPrice = parseInt(
      $("#class-no-" + classId + " .class-price-p")
        .text()
        .slice(1)
    );

    $("#title-check").val(classTitle);
    $("#description-check").val(classDescription);
    $("#date-check").val(classDate);
    $("#starttime-check").val(classStart);
    $("#endtime-check").val(classEnd);
    $("#price-check").val(classPrice);
    $("#edit-modal-bg").css("display", "block");
  });

  $("#go-back-profile").on("click", () => {
    $("#edit-modal-bg").css("display", "none");
  });

  $("#confirm-edit").on("click", () => {
    
  })
});
