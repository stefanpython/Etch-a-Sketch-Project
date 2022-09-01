const container = document.querySelector(".container");

let gridSize = 16;

function makeGrid(screenSize) {
    for (let i = 0; i < screenSize ** 2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.background = 'blue';
        container.appendChild(square);
    }
    container.style.gridTemplateColumns = 'repeat(16, auto)';
    container.style.gridTemplateRows = 'repeat(16, auto)';
}

makeGrid(gridSize);