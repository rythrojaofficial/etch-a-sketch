
let rows;
let grid;
// defaults, will change with user input 
let isMouseHover = false;
let isMouseDown = false;
let cellDimension = 24 ;
let cellColor = '#000000';
let drawn;



// user inputs 
let colorPicker = document.getElementById('input-color');
    colorPicker.oninput = () => {
        cellColor = document.getElementById('input-color').value;;
        displayColor = document.querySelector('#color-display');
        displayColor.textContent = `${cellColor}`;
};


document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);


gridSketchpad(20);

const generateBySlider = document.getElementById('input-dimensions-slider');
        generateBySlider.oninput = () =>{
            cellDimension = (480/generateBySlider.value)
            gridSketchpad(generateBySlider.value);
            let yxyDisplay = document.querySelector('#yxy-display');
            yxyDisplay.textContent = `${generateBySlider.value} x ${generateBySlider.value}`;
            

        }
       
        

function gridSketchpad(dimensions){
    grid = document.createElement('div');
    grid.className = 'grid';
    // creates grid of the specified number of columns 
    for (let i = 0; i < dimensions; ++i){
        let column = document.createElement('div');
            column.className = 'column';

        // creates column of the specified number of cells
        for (let j = 0; j < dimensions; ++j){
            let cell = document.createElement('div');
                cell.className = 'cell';
                cell.textContent = " ";
                cell.style.height = `${cellDimension}px`;
                cell.style.width = `${cellDimension}px`;               
                    

            column.appendChild(cell);

            cell.addEventListener('mouseover', ()=>{
                if (isMouseDown === true){
                    cell.style.backgroundColor = `${cellColor}`;
                    
                }
            });
            
            

        };
        grid.appendChild(column);
        

    }
    // adds grid to sketchpad
    document.getElementById('sketchpad').replaceChildren(grid)
}






