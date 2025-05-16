const grid = document.querySelector(".grid-container");
const btn = document.querySelector(".btn");
const pixelsPerSide = 16;
let standardContainerSize = 800;
console.log("start value: " + pixelsPerSide)


btn.addEventListener("click", () => {
    const pixelsPerSide = parseInt(document.getElementById("size").value);
    console.log(pixelsPerSide)
    if(isNaN(pixelsPerSide)) {
        alert("insert a number");
        return;
    }
    if (pixelsPerSide < 1 || pixelsPerSide > 100) {
        alert("insert a number between 1 and 100");
        return;
    }
    console.log("final value: " + pixelsPerSide)
    let adjustedContainerSize = checkSizes(pixelsPerSide, standardContainerSize)
    console.log("final container size: " + adjustedContainerSize)

    clearGrid(grid);
    grid.style.width = adjustedContainerSize + "px";
    grid.style.height = adjustedContainerSize + "px";
    createGrid(pixelsPerSide, adjustedContainerSize);
    drawPixels(grid);

})

function checkSizes(divisor, dividend) {
    if (dividend % divisor === 0) {
        console.log("no remainder");
        return dividend;
    } else {
        console.log(`${dividend} / ${divisor} is equal to ${dividend/divisor}`)
        return obtainWidth(divisor, dividend);
    }
}

function obtainWidth(divisor, dividend) {
    let smallerDividend = dividend;
    let biggerDividend = dividend;
    while(true) {
        if (biggerDividend % divisor === 0) {
            console.log(`${biggerDividend} / ${divisor} is equal to ${biggerDividend/divisor}`)
            return biggerDividend;
        } else biggerDividend++;

        if (smallerDividend % divisor === 0) {
            console.log(`${smallerDividend} / ${divisor} is equal to ${smallerDividend/divisor}`)
            return smallerDividend;
        } else smallerDividend--;
    }
}

function createGrid(pixelsPerSide, adjustedContainerSize) {
    let pixels = pixelsPerSide * pixelsPerSide;
    let pixelSize = adjustedContainerSize / pixelsPerSide;
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

function drawPixels(grid) {
    const pixelsArray = grid.querySelectorAll("div");
    pixelsArray.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            // pixel.style.backgroundColor = "black";
            pixel.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        })
    })
}

function randomColor() {
    return Math.floor(Math.random() * 255)
}

function clearGrid(grid) {
    grid.innerText = "";
}



createGrid(pixelsPerSide, standardContainerSize);
drawPixels(grid);
