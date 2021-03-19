$(document).ready(() => {
  let classId;
  $(".edit-class-btn").on("click", function(e) {
    e.preventDefault();
    $("#add-class-form").css("z-index", "0");
    classId = parseInt(this.getAttribute("id").split("-")[3]);
    const className = $("#class-no-" + classId + " .class-name-span").text();
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

    $("#title-check").val(className);
    $("#description-check").val(classDescription);
    $("#date-check").val(classDate);
    $("#starttime-check").val(classStart);
    $("#endtime-check").val(classEnd);
    $("#price-check").val(classPrice);
    $("#edit-modal-bg").css("display", "block");
  });

  $("#go-back-profile").on("click", () => {
    $("#edit-modal-bg").css("display", "none");
    $("#add-class-form").css("z-index", "10");
  });

  $("#confirm-edit").on("click", e => {
    e.preventDefault();
    const classData = {
      name: $("#title-check").val(),
      description: $("#description-check").val(),
      startTime: $("#date-check").val() + " " + $("#starttime-check").val(),
      endTime: $("#date-check").val() + " " + $("#endtime-check").val(),
      price: parseInt($("#price-check").val())
    };

    updateClass(
      classData.name,
      classData.description,
      classData.startTime,
      classData.endTime,
      classData.price
    );
  });

  $(".delete-class-btn").on("click", function(e) {
    e.preventDefault();
    classId = parseInt(this.getAttribute("id").split("-")[3]);
    $.ajax({
      url: `/api/classes/${classId}`,
      method: "DELETE",
      success: classDeleted()
    });
  });

  function updateClass(name, description, startTime, endTime, price) {
    $.ajax({
      url: `/api/classes/${classId}`,
      method: "PUT",
      data: {
        name: name,
        description: description,
        startTime: startTime,
        endTime: endTime,
        price: price
      },
      success: classUpdated()
    });
  }
  function classUpdated() {
    console.log("successfully updated!");
    window.location.replace("/profile");
  }

  function classDeleted() {
    console.log("successfully deleted.");
    window.location.replace("/profile");
  }
});
