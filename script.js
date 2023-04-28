//Change pixel color on click
document.body.addEventListener('click', function(event){
    const clickedNode = event.target;
    const isPixel = clickedNode.classList.contains('pixel');

    if(isPixel){
        clickedNode.style.backgroundColor = selectedColor;
        clickedNode.style.borderColor = selectedColor;
    }
})

//Create canvas grid
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

//Palette setup
const paletteColors = ['black','silver','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua','aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','grey','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','rebeccapurple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];
const paletteDiv = document.body.querySelector('#palette');
//Create individual palette colors
for(let i = 0; i < paletteColors.length; i++){
    const newPalDiv = document.createElement('div');
    newPalDiv.setAttribute('class','palColor');
    newPalDiv.style.backgroundColor = paletteColors[i];
    newPalDiv.style.borderRadius = '10px';
    newPalDiv.style.borderColor = 'silver';
    newPalDiv.style.borderStyle = 'solid';
    newPalDiv.style.borderWidth = '3px';
    newPalDiv.style.width = '18px';
    newPalDiv.style.height = '18px';
    newPalDiv.style.margin = '5px';
    paletteDiv.append(newPalDiv);
}


//Change selected color logic
const colorNodes = document.body.querySelectorAll('.palColor');
let selectedColor = 'red';
const colorIndicator = document.body.querySelector('#selected-color-box');
colorIndicator.style.backgroundColor = 'red';

const colorPicker = document.body.querySelector('#colorPicker');

//Color Picker Logic
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  selectedColor = event.target.value;
  colorIndicator.style.backgroundColor = selectedColor;
}

document.body.addEventListener('click', function(event){
    const clickedColor = event.target;
    const isPaletteColor = clickedColor.classList.contains('palColor');
    if(isPaletteColor){
        const currColor = clickedColor.style.backgroundColor;
        selectedColor = currColor;

        colorIndicator.style.backgroundColor = currColor;
    }
})

