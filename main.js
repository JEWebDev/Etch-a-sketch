//#region FILL CANVAS
const canvas = document.querySelector(".canvas");
const gridBtn = document.querySelector(".grid-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const clearBtn = document.querySelector(".clear-btn");
let rainbowMode = false;
gridBtn.addEventListener("click", setNewDensity);

rainbowBtn.addEventListener("click", () => {
  if (rainbowMode === false) {
    rainbowMode = true;
  } else {
    rainbowMode = false;
  }
});
clearBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

function generateRandomRGB() {}
function getNewSize() {
  let newSize = parseInt(prompt("Enter new width (Max: 100)"));
  if (newSize > 100) {
    newSize = parseInt(prompt("Enter new width (Max: 100)"));
  }
  return newSize;
}
function setNewDensity() {
  let newSize = getNewSize();
  fillCanvas(newSize);
}
function createElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  return newDiv;
}
function fillCanvas(width) {
  canvas.innerHTML = "";
  let totalSquares = width * width;
  canvas.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${width}, 1fr)`;
  for (let i = 0; i < totalSquares; i++) {
    canvas.appendChild(createElement());
  }
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      console.log(red, green, blue);
      if (rainbowMode) {
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      } else {
        e.target.style.backgroundColor = "black";
      }
    });
  });
}
fillCanvas(16);
//#endregion
