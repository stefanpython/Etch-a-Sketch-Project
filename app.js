function createGrid() {
    
    let container = document.querySelector(".container");
    let numOfRows = 16; //prompt("Enter number of rows <= 100.");
    
    // Set value of the variable --columns-row in CSS with the value of the variable numOfRows
    document.documentElement.style.setProperty("--columns-row", numOfRows);

    for (let i =  0; i < numOfRows ** 2; i++) {
      let div = document.createElement("div");
      container.appendChild(div);
      div.addEventListener("mouseenter", () => {
        div.style.background = '#009999';
      })
    }
  }
  
  createGrid();