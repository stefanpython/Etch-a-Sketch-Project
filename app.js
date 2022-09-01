function createGrid() {
    
    let container = document.querySelector(".container");
    let numOfRows = 16; //prompt("Enter number of rows <= 100.");
    
    // Replace the --columns-row value in css with numOfRows value
    document.documentElement.style.setProperty("--columns-row", numOfRows);

    for (let i =  0; i < numOfRows ** 2; i++) {
      let div = document.createElement("div");
      container.appendChild(div);
    
    }
  }
  
  createGrid();