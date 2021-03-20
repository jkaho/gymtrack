$(document).ready(() => {
  let classId;
  let className;
  let classDescription;
  let classDate;
  let classStart;
  let classEnd;
  let classPrice;

  $(".edit-class-btn").on("click", function(e) {
    e.preventDefault();
    $("#add-class-form").css("z-index", "0");
    classId = parseInt(this.getAttribute("id").split("-")[3]);
    className = $("#class-no-" + classId + " .class-name-span").text();
    classDescription = $(
      "#class-no-" + classId + " .description-container p"
    ).text();
    classDate = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[0];
    classStart = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[1];
    classEnd = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[2];
    classPrice = parseInt(
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

  $("#edit-undo-btn").on("click", () => {
    $("#title-check").val(className);
    $("#description-check").val(classDescription);
    $("#date-check").val(classDate);
    $("#starttime-check").val(classStart);
    $("#endtime-check").val(classEnd);
    $("#price-check").val(classPrice);

    const prevClassStart = classDate + " " + classStart;
    const prevClassEnd = classDate + " " + classEnd;

    updateClass(
      className,
      classDescription,
      prevClassStart,
      prevClassEnd,
      classPrice
    );
  });

  $("#edit-success-btn").on("click", () => {
    $("#add-class-form").css("z-index", "10");
    $("#update-success-modal-bg").css("display", "none");
    window.location.replace("/profile");
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
      success: classUpdated(),
      error: showErrorMessage()
    });
  }

  function showErrorMessage() {
    $("#error-modal-bg").css("display", "block");
  }

  $("#error-ok-btn").on("click", () => {
    $("#error-modal-bg").css("display", "none");
  });

  function classUpdated() {
    if ($("#edit-modal-bg").css("display") === "block") {
      $("#edit-modal-bg").css("display", "none");
      $("#update-success-modal-bg").css("display", "block");
    } else {
      $("#edit-modal-bg").css("display", "block");
      $("#update-success-modal-bg").css("display", "none");
    }
  }

  $(".delete-class-btn").on("click", function(e) {
    e.preventDefault();
    classId = parseInt(this.getAttribute("id").split("-")[3]);

    $("#add-class-form").css("z-index", "0");
    $("#delete-confirm-modal-bg").css("display", "block");
  });

  $("#delete-goback-btn").on("click", () => {
    $("#add-class-form").css("z-index", "10");
    $("#delete-confirm-modal-bg").css("display", "none");
  });

  $("#delete-confirm-btn").on("click", () => {
    $.ajax({
      url: `/api/classes/${classId}`,
      method: "DELETE",
      success: classDeleted(),
      error: showErrorMessage()
    });
  });

  $("#delete-undo-btn").on("click", () => {
    className = $("#class-no-" + classId + " .class-name-span").text();
    classDescription = $(
      "#class-no-" + classId + " .description-container p"
    ).text();
    classDate = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[0];
    classStart = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[1];
    classEnd = $("#class-no-" + classId + " .class-date-span")
      .attr("value")
      .split(" ")[2];
    classPrice = parseInt(
      $("#class-no-" + classId + " .class-price-p")
        .text()
        .slice(1)
    );

    const prevClassStartD = classDate + " " + classStart;
    const prevClassEndD = classDate + " " + classEnd;

    addDeletedClass(
      className,
      classDescription,
      prevClassStartD,
      prevClassEndD,
      classPrice
    );
  });

  $("#delete-success-btn").on("click", () => {
    $("#add-class-form").css("z-index", "10");
    $("#delete-success-modal-bg").css("display", "none");
    window.location.replace("/profile");
  });

  function classDeleted() {
    $("#delete-confirm-modal-bg").css("display", "none");
    $("#delete-success-modal-bg").css("display", "block");
  }

  function addDeletedClass(name, description, startTime, endTime, price) {
    $.get("/api/user_data").then(results => {
      const instructorId = results.authorId;
      $.post(
        "/api/add_class",
        {
          name: name,
          description: description,
          startTime: startTime,
          endTime: endTime,
          price: price,
          instructorId: instructorId
        },
        addDeletedClassSuccess()
      ).catch(err => {
        console.log(err);
        showErrorMessage();
      });
    });
  }

  function addDeletedClassSuccess() {
    $("#delete-success-modal-bg").css("display", "none");
    $("#delete-undo-modal-bg").css("display", "block");
  }

  $("#delete-undo-success-btn").on("click", () => {
    $("#add-class-form").css("z-index", "0");
    $("#delete-undo-modal-bg").css("display", "none");
    window.location.replace("/profile");
  });
});
