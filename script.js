$(document).ready(function () {
  var time = moment().hours();

  var showTodo = $(".todo");
  showTodo.value = localStorage.getItem("text");

  var button = $(".save-button");
  // var currentDate = $("#currentDay");
  //gives current date in my
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  var index = 0;

  function tellTime() {
    for (i = 9; i <= 16; i++) {
      if (time == i) {
        index.addClass("present");
      } else if (time < i) {
        index.addClass("past");
      } else {
        index.addClass("future");
      }
      index++;
    }
    console.log(time);
    console.log(index);
  }

  tellTime();
});
