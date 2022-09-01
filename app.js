const container = document.querySelector(".container");

let gridSize = 16;

for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    div.classList = 'square'
    container.appendChild(div);
}