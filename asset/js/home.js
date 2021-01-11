$(document).ready(function () {
  $("body").keypress(function (event) {
    // console.log(event.originalEvent.key);
    $("#name").value += "y";
    $("#name").focus();
  });
});
