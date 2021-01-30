function addListeners() {
  $("div")
    .on("mouseenter", ".card-img-overlay", function () {
      $(this).removeClass("hidden");
    })
    .on("mouseleave", ".card-img-overlay", function () {
      $(this).addClass("hidden");
    })
    .on("click", ".card", function () {
      let id = $(this).children()[2].innerHTML;
      window.location.href = `${window.location.origin}/id/${id}`;
    });
}

$(document).ready(addListeners());
