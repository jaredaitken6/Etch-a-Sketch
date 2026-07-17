let gridContainer = document.querySelector('.grid-container');
let gridRow;
let squareDiv;
let gridSquare;
let gridSizeButton = document.querySelector('.grid-size-button');
let gridSizeInput;
let menu = document.querySelector('.menu');
let randomColor;

// create grid
for (let index = 0; index < 8; index++) {
    gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    gridContainer.appendChild(gridRow); 

    for (let index = 0; index < 8; index++) {
        squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-square');
        gridRow.appendChild(squareDiv); 
    }

}

// hover to change square color
gridSquare  = document.querySelectorAll('.grid-square');

gridSquare.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        element.setAttribute('style', `background-color: ${randomColor}`); 
    });
});

// when pixel size button is clicked
gridSizeButton.addEventListener('click', () => {
    do {
        gridSizeInput = prompt('How many squares per side?', 'Numbers 100 or below');
    } while (gridSizeInput > 100);  

    gridContainer.remove();

    gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    menu.after(gridContainer);

    // create new grid
    for (let index = 0; index < gridSizeInput; index++) {
        gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow); 

        for (let index = 0; index < gridSizeInput; index++) {
            squareDiv = document.createElement('div');
            squareDiv.classList.add('grid-square');
            gridRow.appendChild(squareDiv); 
        }

    }

    // hover to change square color
    gridSquare  = document.querySelectorAll('.grid-square');

    gridSquare.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            element.setAttribute('style', `background-color: ${randomColor}`); 
        });
    });

});





