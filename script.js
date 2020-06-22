$(document).ready(function () {
  // var hour = moment().hours();
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });
  // var showTodo = $(".todo");

  // var button = $(".save-button");
  // var currentDate = $("#currentDay");
  //gives current date in my
  // $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  var index = 0;

  function tellTime() {
    var hour = moment().hours();
    for (i = 9; i <= 16; i++) {
      if (hour == i) {
        $($(".description")[index]).addClass("present");
      } else if (hour > i) {
        $($(".description")[index]).addClass("past");
      } else {
        $($(".description")[index]).addClass("future");
      }
      index++;
      console.log(hour);
      console.log(index);
    }
  }

  // $(".saveBtn").on("click", function () {
  //   // get nearby values
  //   var value = $(this).siblings(".description").val();
  //   var time = $(this).parent().attr("id");

  //   // save in localStorage
  //   localStorage.setItem(time, value);
  // });
  // get current number of hours
  // var currentHour = moment().hours();

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));

  tellTime();
});
