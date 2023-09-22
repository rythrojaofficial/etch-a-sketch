// ===================
// create a looping function that
// appends a div to a grid at each column 
// and row specified
// ====================
let columns;
let rows;
let grid;
let isMouseHover = false;
let isMouseDown = false;

gridSketchpad(16,16);

const generateSketchpad = document.getElementById("generate-sketchpad");
    generateSketchpad.addEventListener('click', () =>{
        columns = document.getElementById('input-columns').value;
        rows = document.getElementById('input-rows').value;
        gridSketchpad(columns,rows);
    });


function gridSketchpad(numberOfRows,numberOfColumns){
    grid = document.createElement('div');
    grid.className = 'grid';
    // creates grid of the specified number of columns 
    for (let i = 0; i < numberOfRows; ++i){
        let column = document.createElement('div');
            column.className = 'column';

        // creates column of the specified number of cells
        for (let j = 0; j < numberOfColumns; ++j){
            let cell = document.createElement('div');
                cell.className = 'cell';
                cell.textContent = " ";
                
                
                
                    

            column.appendChild(cell);

            cell.addEventListener('mouseover', ()=>{
                if (isMouseDown === true){
                    cell.className = 'cellDrawn'
                }
                
            });
            

    }
        grid.appendChild(column);
        

    }
    // adds grid to sketchpad
    document.getElementById('sketchpad').replaceChildren(grid)
}

document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);




