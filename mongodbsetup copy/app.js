const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const Chat = require("./chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); // ✅ Needed for form data
app.use(express.static(path.join(__dirname, "views"))); // for css (better to use "public" folder)

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();

  res.render("index.ejs", { chats });
});

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", async (req, res) => {
  const { from, to, message } = req.body;
  await Chat.create({ from, to, message, created_at: new Date() });
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("root is working");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
