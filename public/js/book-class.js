/* eslint-disable cambookMsgcase */
$(document).ready(() => {
  const bookWithdrawBtn = $(".book-withdraw");
  const notificationEl = $("#notification");
  const cancelBtn = $(".withdraw");
  const searchBar = $("#class-search");
  // Option to cancel classes from profile page
  // $(withdrawBtn).each(function () {
  //   $(this).click(e => {
  //     e.preventDefault();
  //   })
  // })
  // Set timer to search class every 0.4s

  searchBar.on("keyup", e => {
    e.preventDefault();
    const searchText = e.target.value;

    console.log(searchText);
    console.log($("[data-id =" + 2 + "]").text());
    getClasses();
    const allClasses = [];
    const matchedClasses = [];
    async function getClasses() {
      // Get all existing classes
      await $.get("/api/classlist").then(res => {
        for (let i = 0; i < res.length; i++) {
          allClasses.push(res[i].name);
        }
      });
      // Get matching classes
      console.log(searchText);
      if (searchText) {
        await $.get(`/api/search_classes/${searchText}`).then(
          searchedClasses => {
            $(searchedClasses).each(i => {
              matchedClasses.push(searchedClasses[i].name);
            });
          }
        );
      }
      // Get classes that did not match the search text
      const notMatchedClasses = $(allClasses)
        .not(matchedClasses)
        .get();
      console.log(notMatchedClasses);
      // Search result display
      // If search bar empty, show all classes
      if (searchText.length === 0) {
        for (i = 0; i < allClasses.length; i++) {
          console.log(allClasses[i]);
          $(`h3:contains('${allClasses[i]}')`)
            .parent()
            .parent()
            .fadeIn();
        }
      } else {
        for (i = 0; i < notMatchedClasses.length; i++) {
          console.log(notMatchedClasses[i]);
          $(`h3:contains('${notMatchedClasses[i]}')`)
            .parent()
            .parent()
            .fadeOut();
        }
        for (i = 0; i < matchedClasses.length; i++) {
          console.log(matchedClasses[i]);
          $(`h3:contains('${matchedClasses[i]}')`)
            .parent()
            .parent()
            .fadeIn();
        }
      }
    }
  });
  $.getJSON("api/user_data").then(data => {
    // Check log in status
    $(bookWithdrawBtn).each(function() {
      // Grab class Id
      const classIdVal = this.getAttribute("data-id");
      // If not logged in, clicking the booking button will redirect to the log in page
      if (data.isLoggedIn === false) {
        $(this).click(e => {
          e.preventDefault();
          window.location.replace("/login");
        });
        // If logged in
      } else {
        // Assign button text and functions for each class
        InitialClass(classIdVal);
        $(this).click(e => {
          e.preventDefault();
          // Send request, and switch button attributes and display after being clicked
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
      }
    });
    $(cancelBtn).each(function() {
      $(this).click(e => {
        e.preventDefault();
        const classIdVal = this.getAttribute("data-id");
        $.post("/api/withdraw", {
          classId: classIdVal
        }).done(() => {
          location.reload();
        });
      });
    });
  });
  // Function to check booking status and alter buttons' text display and attributes accordingly
  function InitialClass(thisClassId) {
    $.getJSON("api/user_data").then(data => {
      // Get current userId-classId combination
      const thisUserClass = data.user.id + "-" + thisClassId;
      // Get all userId-classId combinations and compare to the current combination
      $.get("/userclasses").then(res => {
        for (i = 0; i < res.results.length; i++) {
          const existingUserClass =
            res.results[i].userId + "-" + res.results[i].classId;
          // If the combination already exists, create option to withdraw from the class
          if (existingUserClass === thisUserClass) {
            withdrawBtn(thisClassId);
            return;
          }
        }
        // Create option to make a booking to the class
        bookBtn(thisClassId);
      });
    });
  }

  // Clear withdraw class and append 'book' class
  function bookBtn(id) {
    $("[data-id =" + id + "]")
      .text("Book Now")
      .removeClass("withdraw")
      .addClass("book");
  }
  // Clear book class and append 'withdraw' class
  function withdrawBtn(id) {
    $("[data-id =" + id + "]")
      .text("Withdraw Booking")
      .removeClass("book")
      .addClass("withdraw");
  }
  // Function for feedback notification for booking and withdrawing confirmations
  function bookingNotification(text, colour, duration) {
    const message = $(
      `<div id="bookSuccess" style="position: fixed; background: ${colour};">${text}</div>`
    );
    $(notificationEl).append(message);
    // Close notification by clicking anywhere on the page
    $("body").click(e => {
      e.preventDefault;
      $(message).remove();
    });
    // Set notification display time with the argument in duration (in ms)
    setTimeout(() => {
      $(message).remove();
    }, duration);
  }
});
