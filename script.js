$(document).ready(function () {
  var hour = moment().hours();

  var showTodo = $(".todo");

  var button = $(".save-button");
  // var currentDate = $("#currentDay");
  //gives current date in my
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  var index = 0;

  function tellTime() {
    for (i = 9; i <= 16; i++) {
      if (hour == i) {
        $($(".description")[index]).addClass("present");
      } else if (hour > i) {
        $($(".description")[index]).addClass("past");
      } else {
        $($(".description")[index]).addClass("future");
      }
      index++;
    }
    console.log(hour);
    console.log(index);
  }

  $(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
  });
  // get current number of hours
  var currentHour = moment().hours();

  $("#hour-9 .description").val(localStorage.getItem("hour"));
  // $("#hour-10 .description").val(localStorage.getItem("hour"));
  // $("#hour-11 .description").val(localStorage.getItem("hour"));
  // $("#hour-12 .description").val(localStorage.getItem("hour"));
  // $("#hour-1 .description").val(localStorage.getItem("hour"));
  // $("#hour-2 .description").val(localStorage.getItem("hour"));
  // $("#hour-3 .description").val(localStorage.getItem("hour"));
  // $("#hour-4 .description").val(localStorage.getItem("hour"));

  tellTime();
});
