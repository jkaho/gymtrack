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
