const button = document.querySelector(".cat");
button.addEventListener("click", () => {
        createGrid();
});



function createGrid() {
    
    let container = document.querySelector(".container");
    container.innerHTML = '';

    let numOfRows = prompt("Enter number of rows less than 100.");

    // Make sure that the user`s input is under 100;
    while (numOfRows > 100) {
        numOfRows = prompt("Enter number of rows less than 100.");
    }
    
    // Set value of the variable --columns-row in CSS with the value of the variable numOfRows
    document.documentElement.style.setProperty("--columns-row", numOfRows);

    for (let i =  0; i < numOfRows ** 2; i++) {

      let div = document.createElement("div");
      div.classList = "square";
      container.appendChild(div);

      // Add hover effect when passing mouse over squares
      div.addEventListener("mouseenter", () => {
        div.style.background = randomColor(); // Added randomColor function to change color on each square
      })
    }
  }
  
// Function to reset all squares to default when reset button is pressed
const reset = document.querySelector(".reset");
reset.addEventListener('click', resetAll)

function resetAll() {
        let square = document.querySelectorAll(".square");
        square.forEach(box => box.style.backgroundColor = 'white');
}

// Function to change to random color
function randomColor() {

  let x = Math.floor(Math.random() * 256);
  let y = 70 + Math.floor(Math.random() * 256);
  let z = 20 + Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
}