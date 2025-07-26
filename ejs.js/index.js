const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs"); // view engine is templete of the website

app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.send("hi root is listening ");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
