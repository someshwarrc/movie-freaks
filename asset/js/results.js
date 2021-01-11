$(document).ready(() => {
  $("div.card-img-overlay").hover(
    function () {
      $(this).removeClass("hidden");
    },
    function () {
      $(this).addClass("hidden");
    }
  );

  $("div.card").click(function () {
    let id = $(this).children()[2].innerHTML;
    window.location.href = `${window.location.origin}/id/${id}`;
  });
});
