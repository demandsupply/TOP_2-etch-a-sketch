const grid = document.querySelector(".grid-container");

const pixelsPerSide = 16;
let pixels = pixelsPerSide * pixelsPerSide;
let pixelSize = grid.clientWidth / pixelsPerSide;
console.log("grid size is " + pixelSize);

for (let i = 0; i < pixels; i++) {
    let pixel = document.createElement("div");
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    pixel.style.backgroundColor = "yellow";
    pixel.innerText = i;
    pixel.classList.add("pixel");
    grid.appendChild(pixel);
}