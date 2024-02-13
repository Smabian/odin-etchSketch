
function createGrid () {

    for(i=0;i<16;i++){
        let gridItem = document.createElement("div");
        let gridRoot = document.getElementById("container");
        gridRoot.appendChild(gridItem);
        console.log("Grid #"+i+" created");
    }
}

createGrid();