const container = document.querySelector(".container");

let gridSize = 16;

for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    div.style.cssText = "border: 1px groove #ede9dd; height: 35px; width: 35px";
    div.classList = 'square'
    container.appendChild(div);
}