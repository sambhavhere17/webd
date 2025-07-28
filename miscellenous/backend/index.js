const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { User, password } = req.query;
  res.send(`Standard get response , Welcome user ${User}`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Standard post request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
