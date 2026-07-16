let gridContainer = document.querySelector('.grid-container');
let gridRow;
let squareDiv;
let gridSquare = document.querySelector('.grid-square');

// create grid
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

console.log(gridSquare); // is null

// gridSquare.addEventListener('mouseenter', () => {
//     gridSquare.classList.toggle('toggle-color'); 
// });
    
