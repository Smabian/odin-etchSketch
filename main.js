
function createGrid (gridsize) {

    for(let i=0;i<gridsize;i++){
        let gridItem = document.createElement("div");
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

let sizeButton = document.getElementById("sizeButton");

sizeButton.addEventListener("click", function (){
    let gridSize = prompt("Enter the number of Grids you want to use");
    createGrid(gridSize);
});