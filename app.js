const button = document.querySelector("button");
button.addEventListener("click", createGrid);

function createGrid() {
    
    let container = document.querySelector(".container");
    let numOfRows = prompt("Enter number of rows <= 100.");

    while (numOfRows > 100) {
        numOfRows = prompt("Enter number of rows <= 100.");
    }
    
    // Set value of the variable --columns-row in CSS with the value of the variable numOfRows
    document.documentElement.style.setProperty("--columns-row", numOfRows);

    for (let i =  0; i < numOfRows ** 2; i++) {
      let div = document.createElement("div");
      container.appendChild(div);
      // Add hover effect when passing mouse over squares
      div.addEventListener("mouseenter", () => {
        div.style.background = '#009999';
      })
    }
  }
  

