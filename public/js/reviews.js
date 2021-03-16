$(".toggle").on("click", event => {
  event.preventDefault();
  const toggleBtn = event.target;
  let otherToggleBtn;
  if (toggleBtn.id === "class-toggle") {
    otherToggleBtn = toggleBtn.nextElementSibling;
  } else {
    otherToggleBtn = toggleBtn.previousElementSibling;
  }
  toggleBtn.setAttribute(
    "style",
    "background-color: rgb(255, 89, 0); border: none; color: white;"
  );
  otherToggleBtn.setAttribute(
    "style",
    "background-color: white; border: solid 1px black; color: black;"
  );
});
