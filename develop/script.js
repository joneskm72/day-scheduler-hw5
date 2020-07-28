$(document).ready(function() {
  // listen for save button clicks
  var value = null;
  var time = null;

  $(".saveBtn").on("click", function(event) {
    // get nearby values
    event.preventDefault();
    value = $(this).siblings(".description").val();
    time = $(this).parent().attr("id");

    console.log("value:", value);
    console.log("time:", time);

    // save the value in localStorage as time
    localStorage.setItem(time, value);
    console.log(localStorage.getItem(time));
  });

  function hourUpdater() {
    // get current number of hours
    const currentHour = moment().hours();
    console.log("current hour:", currentHour);

    // loop over time blocks
    $(".time-block").each(function() {
      const blockHour = parseInt($(this).attr("id").split("-")[1]);
      const textArea = $("textarea");

      console.log("block hour:", blockHour);

      // check if we've moved past this time

      if(currentHour > blockHour) {
        $(this).addClass("past");
      }
       // if the current hour is greater than the block hour
      // then add class "past"

      else if (currentHour === blockHour) {
        $(this).addClass("present");
      }
      // if they are equal
      // then remove class "past" and add class "present"

      else {
        $(this).addClass("future");
      };
      // else
      // remove class "past", remove class "present", add class "future"
      
    });
  }

  hourUpdater();

  const interval = setInterval(function hourUpdater() {
    
  }, 15000);
 
 clearInterval(interval); 
  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds
 
  if(localStorage.getItem("hour-9") !== null) {
    $("#hour-9").children("textarea").text(localStorage.getItem("hour-9"));
  }

  if(localStorage.getItem("hour-10") !== null) {
    $("#hour-10").children("textarea").text(localStorage.getItem("hour-10"));
  }

  if(localStorage.getItem("hour-11") !== null) {
    $("#hour-11").children("textarea").text(localStorage.getItem("hour-11"));
  }

  if(localStorage.getItem("hour-12") !== null) {
    $("#hour-12").children("textarea").text(localStorage.getItem("hour-12"));
  }

  if(localStorage.getItem("hour-13") !== null) {
    $("#hour-13").children("textarea").text(localStorage.getItem("hour-13"));
  }

  if(localStorage.getItem("hour-14") !== null) {
    $("#hour-14").children("textarea").text(localStorage.getItem("hour-14"));
  }

  if(localStorage.getItem("hour-15") !== null) {
    $("#hour-15").children("textarea").text(localStorage.getItem("hour-15"));
  }

  if(localStorage.getItem("hour-16") !== null) {
    $("#hour-16").children("textarea").text(localStorage.getItem("hour-16"));
  }

  if(localStorage.getItem("hour-17") !== null) {
    $("#hour-17").children("textarea").text(localStorage.getItem("hour-17"));
  }

  // $(".time-block").each(function() {
  //   var tempTime = localStorage.getItem($(this).attr("id"));
  //   if(localStorage.getItem(tempTime) !== null) {
  //     $("#" + tempTime).children("textarea").text(localStorage.getItem(tempTime));
  //     console.log(tempTime);
  //     console.log(localStorage.getItem(tempTime));
  //   }
  // });
  // load any saved data from localStorage


  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});