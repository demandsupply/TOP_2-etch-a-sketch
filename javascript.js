const grid = document.querySelector(".grid-container");
const btn = document.querySelector(".btn");
const pixelsPerSide = 16;
console.log("start value: " + pixelsPerSide)


btn.addEventListener("click", () => {
    const pixelsPerSide = parseInt(document.getElementById("size").value);
    console.log(pixelsPerSide)
    if(isNaN(pixelsPerSide)) {
        alert("insert a number");
    }
    if (pixelsPerSide < 1 || pixelsPerSide > 100) {
        alert("insert a number between 1 and 100");
    }
    console.log("final value: " + pixelsPerSide)
    clearGrid(grid);
    createGrid(pixelsPerSide);

})

function createGrid(pixelsPerSide) {
    let pixels = pixelsPerSide * pixelsPerSide;
    let pixelSize = grid.clientWidth / pixelsPerSide;
    console.log("grid size is " + pixelSize);
    
    for (let i = 0; i < pixels; i++) {
        let pixel = document.createElement("div");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.style.backgroundColor = "yellow";
        pixel.innerText = i + 1;
        pixel.classList.add("pixel");
        grid.appendChild(pixel);
    }
}

function clearGrid(grid) {
    grid.innerText = "";
}

createGrid(pixelsPerSide);