$(document).ready(function () {
  var hour = moment().hours();

  var showTodo = $(".todo");
  showTodo.value = localStorage.getItem("text");

  var button = $(".save-button");
  // var currentDate = $("#currentDay");
  //gives current date in my
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  var index = 0;

  function tellTime() {
    for (i = 9; i <= 16; i++) {
      if (hour == i) {
        $($(".form-control")[index]).addClass("present");
      } else if (hour < i) {
        $($(".form-control")[index]).addClass("past");
      } else {
        $($(".form-control")[index]).addClass("future");
      }
      index++;
    }
    console.log(hour);
    console.log(index);
  }

  $(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".save").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
  });
  console.log(localStorage.getItem([0]));
  // get current number of hours
  var currentHour = moment().hours();

  $(".save").val(localStorage.getItem("hour"));

  tellTime();
});
