/* eslint-disable cambookMsgcase */
$(document).ready(() => {
  let currentId;
  const bookWithdrawBtn = $(".book-withdraw");
  const notificationEl = $("#notification");
  const cancelBtn = $(".withdraw");
  const confirmationModal = $("#booking-confirmation-modal-bg");
  const withdrawModal = $("#withdraw-confirmation-modal-bg");
  const searchBar = $("#class-search");
  // Option to cancel classes from profile page
  // $(withdrawBtn).each(function () {
  //   $(this).click(e => {
  //     e.preventDefault();
  //   })
  // })

  searchBar.on("keyup", e => {
    e.preventDefault();
    const searchText = e.target.value;
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
      // Search result display
      // If search bar empty, show all classes
      if (searchText.length === 0) {
        for (i = 0; i < allClasses.length; i++) {
          $(`h3:contains('${allClasses[i]}')`)
            .parent()
            .parent()
            .fadeIn();
        }
      } else {
        // Hide classes that don't have matching text in their names
        for (i = 0; i < notMatchedClasses.length; i++) {
          $(`h3:contains('${notMatchedClasses[i]}')`)
            .parent()
            .parent()
            .fadeOut();
        }
        // Display classes with matching text
        for (i = 0; i < matchedClasses.length; i++) {
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
          currentId = this.getAttribute("data-id");
          // Send request, and switch button attributes and display after being clicked
          const action = $(this).text();
          if (action === "Book now") {
            confirmationModal.css("display", "block");
          } else {
            withdrawModal.css("display", "block");
          }
        });
      }
    });

    $("#booking-confirm").on("click", () => {
      addToClass(currentId);
    });

    $("#booking-go-back").on("click", () => {
      confirmationModal.css("display", "none");
    });

    $("#withdraw-confirm").on("click", () => {
      withdrawFromClass(currentId);
    });

    $("#withdraw-go-back").on("click", () => {
      withdrawModal.css("display", "none");
    });

    $(cancelBtn).each(function() {
      $(this).click(e => {
        e.preventDefault();
        const classIdVal = this.getAttribute("data-id");
        $.post("/api/withdraw", {
          classId: classIdVal
        })
          .done(() => {
            location.reload();
          })
          .catch(err => {
            console.log(err);
            $("#error-modal-bg").css("display", "block");
          });
      });
    });
  });

  // Function to check booking status and alter buttons' text display and attributes accordingly
  function InitialClass(thisClassId) {
    $.getJSON("api/user_data").then(data => {
      // Get current userId-classId combination
      const thisUserClass = data.authorId + "-" + thisClassId;
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
      .text("Book now")
      .removeClass("withdraw")
      .addClass("book");
  }
  // Clear book class and append 'withdraw' class
  function withdrawBtn(id) {
    $("[data-id =" + id + "]")
      .text("Withdraw booking")
      .removeClass("book")
      .addClass("withdraw");
  }
  // Add user to class
  function addToClass(classId) {
    $.post(
      "/api/booking",
      {
        classId: classId
      },
      afterBooking(classId)
    )
      .done(() =>
        // eslint-disable-next-line implicit-arrow-linebreak
        bookingNotification("Booking confirmed!", "black", 4000)
      )
      .catch(err => {
        console.log(err);
        $("#error-modal-bg").css("display", "block");
      });
  }

  // Withdraw user from class
  function withdrawFromClass(classId) {
    $.post(
      "/api/withdraw",
      {
        classId: classId
      },
      afterWithdraw(classId)
    )
      .done(() => bookingNotification("Booking withdrawn", "black", 4000))
      .catch(err => {
        console.log(err);
        $("#error-modal-bg").css("display", "block");
      });
  }

  $("#error-ok-btn").on("click", () => {
    $("#error-modal-bg").css("display", "none");
  });

  function afterBooking(classId) {
    withdrawBtn(classId);
    confirmationModal.css("display", "none");
  }

  function afterWithdraw(classId) {
    bookBtn(classId);
    withdrawModal.css("display", "none");
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

  /* Withdraw button on member profile page */
  $(".profile-withdraw-btn").on("click", function(e) {
    e.preventDefault();
    classId = this.id.split("-")[2];
    $("#withdraw-p-confirmation-modal-bg").css("display", "block");
  });

  $("#withdraw-p-go-back").on("click", () => {
    $("#withdraw-p-confirmation-modal-bg").css("display", "none");
  });

  $("#withdraw-p-confirm").on("click", () => {
    $.post(
      "/api/withdraw",
      {
        classId: classId
      },
      withdrawSuccessMessage()
    ).catch(err => {
      console.log(err);
      $("#error-modal-bg").css("display", "block");
    });
  });

  function withdrawSuccessMessage() {
    $("#withdraw-success-modal-bg").css("display", "block");
    $("#withdraw-p-confirmation-modal-bg").css("display", "none");
  }

  $("#withdraw-success-btn").on("click", () => {
    $("#withdraw-success-modal-bg").css("display", "none");
    window.location.replace("/profile");
  });
});
