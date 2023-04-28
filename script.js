document.body.addEventListener('click', function(event){
    const clickedNode = event.target;
    const isPixel = clickedNode.classList.contains('pixel');

    if(isPixel){
        clickedNode.style.backgroundColor = 'red';
    }
})

const paletteColors = ['red','blue'];

const paletteDiv = document.body.querySelector('#palette');

for(let i = 0; i < paletteColors.length; i++){
    const newPalDiv = document.createElement('div');
    newPalDiv.style.backgroundColor = paletteColors[i];
    newPalDiv.style.borderRadius = '20px';
    newPalDiv.style.width = '25px';
    newPalDiv.style.height = '25px';
    newPalDiv.style.margin = '10px';
    paletteDiv.append(newPalDiv);
}