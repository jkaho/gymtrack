$(document).ready(() => {
  // Getting references to our form and inputs
  const addClassForm = $("form.add-class");
  const classNameInput = $("input#className-input");
  const classDescriptionInput = $("textarea#classDescription-input");
  const classDateInput = $("input#classDate-input");
  const classStartInput = $("input#startTime-input");
  const classEndInput = $("input#endTime-input");
  const classPriceInput = $("input#classPrice-input");

  let instructorId;

  addClassForm.on("submit", event => {
    event.preventDefault();
    $.get("/api/user_data").then(result => {
      instructorId = result.authorId;
      const classData = {
        name: classNameInput.val().trim(),
        description: classDescriptionInput.val().trim(),
        startTime: classDateInput.val() + " " + classStartInput.val() + ":00",
        endTime: classDateInput.val() + " " + classEndInput.val() + ":00",
        price: classPriceInput.val(),
        instructorId: instructorId
      };
      console.log(classData);

      if (
        !classData.name ||
        !classData.description ||
        !classData.startTime ||
        !classData.endTime ||
        !classData.price
      ) {
        return;
      }

      addClass(
        classData.name,
        classData.description,
        classData.startTime,
        classData.endTime,
        classData.price,
        classData.instructorId
      );
      classNameInput.val("");
      classDescriptionInput.val("");
      classDateInput.val("");
      classStartInput.val("");
      classEndInput.val("");
      classPriceInput.val("");
    });
  });

  function addClass(
    name,
    description,
    startTime,
    endTime,
    price,
    instructorId
  ) {
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
      $("#add-success-modal-bg").css("display", "block")
    ).catch(err => {
      console.log(err);
      $("#error-modal-bg").css("display", "block");
    });
  }

  $("#add-success-btn").on("click", () => {
    $("#add-success-modal-bg").css("display", "none");
  });

  $("#error-ok-btn").on("click", () => {
    $("#error-modal-bg").css("display", "none");
  });

  const currentDate = moment().format("YYYY-MM-DD");
  classDateInput.attr("min", currentDate);
});
