let h1 = document.querySelector("h1");

function changeColour(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed to " + color);
    }, delay);
  });
}

changeColour("red", 1000)
  .then((result) => {
    console.log("color changed");
    console.log("request", result);

    return changeColour("blue", 2000);
  })
  .then((result) => {
    console.log("color changed");
    console.log("request", result);

    return changeColour("green", 3000);
  })
  .then((result) => {
    console.log("color changed");
    console.log("request", result);
  });
