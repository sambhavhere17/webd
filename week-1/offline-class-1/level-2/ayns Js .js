function savetoDb(data, sucess, failure) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  if (internetspeed >= 4) {
    sucess();
  } else {
    failure();
  }
}

savetoDb(
  //CALL back Hell

  "apna college",
  () => {
    console.log(" sucess :your data is saved ");
    savetoDb(
      "sambhav jain ",
      () => {
        console.log(" sucess :your data is saved ");
      },
      () => {
        console.log(" failure : week connection  ");
      }
    );
  },
  () => {
    console.log(" failure : week connection  ");
  }
);
