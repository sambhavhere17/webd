const express = require("express");
const app = express();
const port = 3000;
console.log(app); // this is the app the express built now tha app will listen to out commond

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/message", (req, res) => {
  res.send("how are you ");
});

app.get("/hi", (req, res) => {
  res.send("Hi");
});

app.get("/:username/:id", (req, res) => {
  //variable request according to the username

  let { username, id } = req.params;
  console.log(req.params);

  res.send(`Welcome to the page of @ ${username}`);
});

//query string for searching things on website

app.get("/search", (req, res) => {
  let { q } = req.query;

  res.send(`search results for query: ${q}`);
  console.log(q);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
