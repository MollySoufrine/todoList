$(document).ready(function () {
  var date;
  var time;
  var storedTodo;
  var button = $("#save-button");

  //gives current date in my
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $(window).on("load", function () {
    date = moment().format("YYYY-MM-DD, h:mm:ss a");
    time = moment().format("H");
  });

  function savedTodo() {}
  button.value = localStorage.getItem("");
  button.click("input", function () {
    localStorage.setItem("", button.value);
  });
  tellTime();
  // console.log(dateString);
});
