/* eslint-disable cambookMsgcase */
$(document).ready(() => {
  const bookingBtns = $(".book-withdraw");
  const notificationEl = $("#notification");
  $(bookingBtns).each(function(i) {
    // Grab class Id
    const classIdVal = this.getAttribute("data-id");
    InitialClass(classIdVal);
    $(this).click(e => {
      e.preventDefault();
      // Switch button class attribute and display
      const action = $(this).text();
      if (action === "Book Now") {
        withdrawBtn(classIdVal);
        $.post("/api/booking", {
          classId: classIdVal
        }).done(() => {
          bookingNotification("Booking confirmed! :D", "lightgreen", 4000);
        });
      } else {
        bookBtn(classIdVal);
        $.post("/api/withdraw", {
          classId: classIdVal
        }).done(() => {
          bookingNotification("Booking withdrawn!", "lightgreen", 4000);
        });
      }
    });
  });

  function InitialClass(thisClassId) {
    $.getJSON("api/user_data").then(data => {
      // Get current userId-classId combination
      const thisUserClass = data.user.id + "-" + thisClassId;
      // Get all userId-classId combinations and compare to the current combination
      $.get("/userclasses").then(res => {
        for (i = 0; i < res.results.length; i++) {
          const existingUserClass =
            res.results[i].userId + "-" + res.results[i].classId;
          if (existingUserClass === thisUserClass) {
            withdrawBtn(thisClassId);
            return;
          }
        }
        bookBtn(thisClassId);
      });
    });
  }

  // Clear withdraw class and append book class
  function bookBtn(id) {
    $("[data-id =" + id + "]")
      .text("Book Now")
      .removeClass("withdraw")
      .addClass("book");
  }
  // Clear book class and append withdraw class
  function withdrawBtn(id) {
    $("[data-id =" + id + "]")
      .text("Withdraw Booking")
      .removeClass("book")
      .addClass("withdraw");
  }

  function bookingNotification(text, colour, duration) {
    const message = $(
      `<div id="bookSuccess" style="position: fixed; background: ${colour};">${text}</div>`
    );
    $(notificationEl).append(message);
    setTimeout(() => {
      $(message).remove();
    }, duration);
  }
});
