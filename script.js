let gridContainer = document.querySelector('.grid-container');
let gridRow;
let squareDiv;

for (let index = 0; index < 4; index++) {
    gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    gridContainer.appendChild(gridRow); 

    for (let index = 0; index < 4; index++) {
        squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-square');
        gridRow.appendChild(squareDiv); 
    }

}


console.log(gridContainer);
    
