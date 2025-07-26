var figlet = require("figlet");

figlet("sambhav", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    c;
    console.dir(err);
    return;
  }
  console.log(data);
});

module.exports = figlet;
