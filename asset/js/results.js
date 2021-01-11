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

  let pg_count = 1;
  let query = $("#query").text();
  $("#more-btn").click(function () {
    pg_count += 1;
    $.ajax({
      url: `http://www.omdbapi.com/?apikey=ced9c61a&s=${query}&page=${pg_count}`,
    }).done((resp) => {
      if (resp.Response === "False") {
        // $(this).addClass("invisible");
        $(this).unbind("click");
        $(this)
          .removeClass("btn-outline-info btn")
          .addClass("alert alert-warning text-center font-weight-bold");
        $(this).html("Sorry! No more results found");
        // $(".footer").prepend("<div>No more results</div>");
      } else {
        // more results are available
        resp.Search.forEach((element) => {
          $(".row").append(`
            <div class="col d-flex justify-content-center text-center">
                <div class="card text-center text-white my-4" style="width: 18rem">
                    <img
                    class="card-img"
                    src="${element.Poster}"
                    alt="card image cap"
                    />
                    <div class="card-img-overlay hidden">
                        <h3 class="card-title">${element.Title}</h3>
                        <p class="card-text">${element.Year}</p>
                    </div>
                </div>
            </div>`);
        });
      }
    });
  });

  function details() {
    console.log("working");
    // let BASE_URI = window.location.href;
    // let ID_URI = BASE_URI + `/${id}`;

    // window.location.href = ID_URI;
  }
});
