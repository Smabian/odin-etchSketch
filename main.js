
function createGrid () {

    for(let i=0;i<16;i++){
        let gridItem = document.createElement("div");
        let gridRoot = document.getElementById("container");
        gridRoot.appendChild(gridItem);
    }
}

function hoverEffect (item, color) {
    gridItem[item].style.backgroundColor = color;
}

createGrid();

let gridItem = document.querySelectorAll("#container div");

counter = gridItem.length;
for (let i=0;i<counter;i++) {
   gridItem[i].addEventListener("mouseover", function() {
        hoverEffect(i,'blue');
   });
}