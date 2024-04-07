const container = document.querySelector("#container");
const box = document.createElement("div");
``
// Create the grid
function gridNew(){
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < 16; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}

// changes the color of the divs when you hover
function hover(){
    let column = document.querySelectorAll(".column");
    for(let i = 0; i < column.length; i++){
        column[i].addEventListener('mouseover', (e) => {
            column[i].setAttribute("style","background:black;");
        });
    }
}

gridNew();
hover();

function clear(){
    let column = document.querySelectorAll(".column");
    for (let i = 0; i < column.length; i++){
        column[i].setAttribute("style","background:white;");
    }
}

function resizeGrid(newSize){
    container.textContent= "";
    for (let i = 0; i < newSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < newSize; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", (e)=> {
    clear();
});

let selectButton= document.querySelector("#size");
selectButton.addEventListener("click", (e)=> {
    let newSize = prompt("Number of squares per side(1-99):");
    resizeGrid(newSize);
    hover();
});

//change the color of the backgroud
const randButton = documet.querySelector('#rand');
randButton.addEventListener("click", (e)=> {
    
});