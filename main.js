
function createGrid (gridsize) {

    let itemSize = calculateGridItemSize(gridsize);
    
    for(let i=0;i<gridsize;i++){
        let gridItem = document.createElement("div");
        gridItem.style.width = itemSize + "px";
        gridItem.style.height = itemSize + "px";
        let gridRoot = document.getElementById("container");
        gridRoot.appendChild(gridItem);
    }

    let gridSelection = document.querySelectorAll("#container div");    
    
    counter = gridSelection.length;
    for (let i=0;i<counter;i++) {
    gridSelection[i].addEventListener("mouseover", function() {
            hoverEffect(gridSelection[i],'blue');
    });
}

}

function hoverEffect (item, color) {
    item.style.backgroundColor = color;
}

function calculateGridItemSize (gridSize) {
    let itemPerRow = Math.sqrt(gridSize);
    console.log(itemPerRow);
    let itemSize = 960 / itemPerRow;
    return itemSize;
}

let sizeButton = document.getElementById("sizeButton");

sizeButton.addEventListener("click", function (){
    let gridSize = prompt("Enter the number of Grids you want to use");
    createGrid(gridSize);
});