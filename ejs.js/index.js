const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const instaData = require("./data.json");

app.set("view engine", "ejs"); // view engine is templete of the website

app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.send("hi root is listening ");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6 + 1);
  res.render("rolldice.ejs", { diceVal });
});
// app.get("/ig/:username", (req, res) => {
//   let { username } = req.params;
//   console.log(username);
//   let followers = ["sambhav", "nihariha", "kiran ", "etc "];
//   res.render("insta.ejs", { username, followers });
// });

app.get("/ig/:username", (req, res) => {
  const instaData = require("./data.json");
  let { username } = req.params;
  console.log(instaData);
  let data = instaData[username];

  res.render("insta.ejs", { data });
  console.log(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
