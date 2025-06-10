function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
      resolve("Good connection: Data saved");
    } else {
      reject("Week connection: Data not Saved");
    }
  });
}

savetoDb("sambhav")
  .then((result) => {
    console.log("Data 1 Saved");
    console.log("result: ", result);
    return savetoDb("apna college");
  })
  .then((result) => {
    console.log("Data 2 Saved");
    console.log("result: ", result);
    return savetoDb("niharika");
  })
  .then((result) => {
    console.log("Data 3 Saved");
    console.log("result: ", result);
  })
  .catch((err) => {
    console.log("promise rejected");
    console.log("error: ", err);
  });

console.log("Code worked sucessfull");
