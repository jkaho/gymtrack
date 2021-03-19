$(document).ready(() => {
  let classId;
  $(".edit-class-btn").on("click", function(e) {
    e.preventDefault();
    console.log(this);
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
    //     $.post(
    //       "/api/edit_class",
    //       {
    //         id: classId,
    //         name: $("#title-check").val(),
    //         description: $("#description-check").val(),
    //         startTime:
    //           $("#date-check").val() + " " + $("#starttime-check").val() + ":00",
    //         endTime:
    //           $("#date-check").val() + " " + $("#endtime-check").val() + ":00",
    //         price: $("#price-check").val()
    //       },
    //       classUpdated()
    //     ).catch(err => console.log(err));
    //   });
    $.ajax({
      url: `/api/classes/${classId}`,
      method: "PUT",
      body: {
        name: $("#title-check").val(),
        description: $("#description-check").val(),
        startTime:
          $("#date-check").val() + " " + $("#starttime-check").val() + ":00",
        endTime:
          $("#date-check").val() + " " + $("#endtime-check").val() + ":00",
        price: $("#price-check").val()
      },
      success: classUpdated()
    }).catch(err => console.log(err));
  });

  $(".delete-class-btn").on("click", function(e) {
    e.preventDefault();
    console.log(this);
    classId = parseInt(this.getAttribute("id").split("-")[3]);
    $.ajax({
      url: `/api/classes/${classId}`,
      method: "DELETE",
      success: classDeleted()
    });
  });

  function classUpdated() {
    console.log("successfully updated!");
  }

  function classDeleted() {
    console.log("successfully deleted.");
    window.location.replace("/profile");
  }
});
