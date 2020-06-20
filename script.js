$(document).ready(function () {
  var formControl = $(".form-control");
  var time = moment().format("H");
  var container = $(".container");

  var showTodo;
  var button = $(".save-button");
  // var currentDate = $("#currentDay");
  //gives current date in my
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  function tellTime() {
    for (var i = 0; i <= 23; i++) {
      if (time === i) {
        $(".form-control").addClass("present");
      } else if (time < i) {
        $(".form-control").addClass("past");
      } else {
        $(".form-control").addClass("future");
      }
    }
    console.log(time);
  }

  tellTime();
});
