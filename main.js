//#region FILL CANVAS
const canvas = document.querySelector(".canvas");
function createElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  return newDiv;
}
function fillCanvas(width) {
  let totalSquares = width * width;
  for (let i = 0; i < totalSquares; i++) {
    canvas.appendChild(createElement());
  }
}
fillCanvas(16);
//#endregion

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = "black";
  });
});
