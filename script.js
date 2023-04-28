document.body.addEventListener('click', function(event){
    const clickedNode = event.target;
    const isPixel = clickedNode.classList.contains('pixel');

    if(isPixel){
        clickedNode.style.backgroundColor = selectedColor;
    }
})

const canvasDiv = document.body.querySelector('#canvas');
const pixelDimensions = 50;
const pixelSize = 500 / pixelDimensions;

for(let i = 0; i < pixelDimensions; i++){
    //define row
    const newPixelRow = document.createElement('section');
    newPixelRow.setAttribute('class','pixelRow');
    newPixelRow.style.display = 'flex';
    for(let j = 0; j < pixelDimensions; j++){
        //define pixel
        const newPixelDiv = document.createElement('div');
        newPixelDiv.setAttribute('class','pixel');
        newPixelDiv.style.borderColor = 'silver';
        newPixelDiv.style.borderStyle = 'solid';
        newPixelDiv.style.borderWidth = '1px';
        newPixelDiv.style.width = pixelSize-2 + 'px';
        newPixelDiv.style.height = pixelSize-2 + 'px';
        newPixelRow.append(newPixelDiv);
    }
    canvasDiv.append(newPixelRow);
}

const paletteColors = ['red','blue','green','yellow','white','black'];
const paletteDiv = document.body.querySelector('#palette');

for(let i = 0; i < paletteColors.length; i++){
    const newPalDiv = document.createElement('div');
    newPalDiv.setAttribute('class','palColor');
    newPalDiv.style.backgroundColor = paletteColors[i];
    newPalDiv.style.borderRadius = '20px';
    newPalDiv.style.borderColor = 'silver';
    newPalDiv.style.borderStyle = 'solid';
    newPalDiv.style.borderWidth = '4px';
    newPalDiv.style.width = '25px';
    newPalDiv.style.height = '25px';
    newPalDiv.style.margin = '10px';
    paletteDiv.append(newPalDiv);
}

const colorNodes = document.body.querySelectorAll('.palColor');
let selectedColor = 'red';

document.body.addEventListener('click', function(event){
    const clickedColor = event.target;
    const currColor = clickedColor.style.backgroundColor;
    selectedColor = currColor;
})