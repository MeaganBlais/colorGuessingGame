let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for(let i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    reset();
  });
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

// easyBtn.addEventListener("click", function() {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(let i = 0; i < squares.length; i++) {
//     if(colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function () {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

// resetButton.addEventListener("click", function() {
//   // generate new colors
//   colors = generateRandomColors(6);
//   //pick a new random color from array
//   pickedColor = pickColor();
//   //change colorDisplay to match picked colour
//   colorDisplay.textContent = pickedColor;
//   //change colours of squares
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//   }
//   h1.style.backgroundColor = "#232323";
// });

colorDisplay.textContent = pickedColor;

for(let i = 0; i <= squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    let answer = this.style.backgroundColor;
    //compare color to pickedColor
    if (answer === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(answer);
      h1.style.backgroundColor = answer;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(let i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make array
  let arr = [];
	//add num random color to arr
  for(let i = 0; i < num; i++) {
  //push random color into arr
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}