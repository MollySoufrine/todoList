$(document).ready(function () {
  var todoList = $(".form-control");
  //class name of each table row this way I can access all of them

  todoList.each(function () {
    if (this.moment === "past") {
      this.style.color = ".past";
    } else if (this.moment === "future") {
      this.style.color = ".future";
    } else {
      this.style.color = ".present";
    }
  });
});
