const button = document.querySelector(".cat");
button.addEventListener("click", createGrid);

function createGrid() {
    
    let container = document.querySelector(".container");
    let numOfRows = prompt("Enter number of rows <= 100.");

    // Make sure that the user`s input is under 100;
    while (numOfRows > 100) {
        numOfRows = prompt("Enter number of rows <= 100.");
    }
    
    // Set value of the variable --columns-row in CSS with the value of the variable numOfRows
    document.documentElement.style.setProperty("--columns-row", numOfRows);

    for (let i =  0; i < numOfRows ** 2; i++) {
      let div = document.createElement("div");
      div.classList = "square";
      container.appendChild(div);
      // Add hover effect when passing mouse over squares
      div.addEventListener("mouseenter", () => {
        div.style.background = '#009999';
      })
    }
  }
  
// Function and button to reset all squares to default
const reset = document.querySelector(".reset");
reset.addEventListener('click', resetAll)

function resetAll() {
        let square = document.querySelectorAll(".square");
        square.forEach(box => box.style.backgroundColor = 'white');
}