const axios = require("axios");

const express = require("express");
const app = express();
const port = 3000;
const OMDBAPI = "http://www.omdbapi.com/";

app.use(express.static("./asset/"));
app.use(express.static("./views"));
app.set("view engine", "ejs");
app.use(
  express.urlencoded({
    extended: true,
  })
);

app
  .route("/")
  .get((req, res) => {
    // res.send("hello");
    res.render("home", { root: __dirname });
  })
  .post((req, res) => {
    let search = req.body.name;
    res.redirect(`/${search}`);
  });

app.get("/:search", (req, res) => {
  query = req.params.search;

  axios
    .get(OMDBAPI, {
      params: {
        apikey: "ced9c61a",
        s: query,
        page: 1,
      },
    })
    .then((resp) => {
      res.render("results", {
        success: resp.data.Response === "True" ? true : false,
        query: query,
        results: resp.data.Search,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/id/:id", (req, res) => {
  //   res.send(`Search ${req.params.search} ${req.params.id}`);
  axios
    .get(OMDBAPI, {
      params: {
        apikey: "ced9c61a",
        i: req.params.id,
        plot: "full",
      },
    })
    .then((resp) => {
      res.render("details", {
        success: resp.data.Response === "True" ? true : false,
        title: resp.data.Title,
        details: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, function () {
  console.log(`your app has started on port http://localhost:${port}`);
});
