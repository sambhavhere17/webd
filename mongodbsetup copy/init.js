const mongoose = require("mongoose");
const Chat = require("./chat.js");
main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
Chat.insertMany([
  {
    from: "neha",
    to: "sambhav",
    message: "how are you ? ",
    created_at: new Date(),
  },
  {
    from: "sambhav",
    to: "neha",
    message: "i love you to ",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "sambhav",
    message: "aur kya kar rahi ho  ",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "sambhav",
    message: "aur sunao kya kar rahai hao ",
    created_at: new Date(),
  },
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
