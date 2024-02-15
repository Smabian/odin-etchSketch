
function createGrid (gridsize) {

    let itemSize = calculateGridItemSize(gridsize);
    
    for(let i=0;i<(gridsize*gridsize);i++){
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
    let itemSize = 960 / gridSize;
    return itemSize;
}

function clearGrid () {
    document.getElementById("container").innerHTML="";
}

let sizeButton = document.getElementById("sizeButton");

sizeButton.addEventListener("click", function (){
    clearGrid();
    let gridSize = prompt("Enter the level of Detail you want (0 = low Detail | 100 = High Detail):");
    if (gridSize > 100) {
        alert("Level of Detail to High, please choose lower Detail Level");
    } else {
        createGrid(gridSize);
    }
});