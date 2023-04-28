// Color Helpers
// Note: It is not crucial that you understand the math here
const generateRandomColor = () => Math.floor(Math.random()*16777215).toString(16);
const invertColor = (colorHex) => (Number(`0x1${colorHex}`) ^ 0xFFFFFF).toString(16).substr(0, 6);

// Sets the background and text color of an DOM node
const assignRandomColors = function(node) {
  const color = generateRandomColor();
  node.style.backgroundColor = '#' + color;
  node.style.color = '#' + invertColor(color);
};

// DO:
// Using a for/of loop, get and loop over all <p> tags on the page 
// and call assignRandomColors with the node as an argument
// (hint: what CSS selector can you use to target elements by their node/tag name?)
const allPTags = document.body.querySelectorAll('p');
for(let item of allPTags){
  assignRandomColors(item);
}

document.body.addEventListener('click', (event) => {
  const clickedNode = event.target; // This will be a <p> DOM node

  let count = parseInt(clickedNode.textContent);
  count++;

  // DO:
  // Set the text inside the clicked node to the count
  clickedNode.textContent = count;

  // DO:
  // Check if the clicked node has the class "odd"
  // (hint: check out the `node.classList` documentation)
  let isOdd = clickedNode.classList.contains('odd');
  
  // If the node has the class, get and loop over 
  // all the nodes **on the page** with the "odd" class
  // (hint: what CSS selector can you use to target elements by the class(s) they have?) 
  // and call assignRandomColors with the node as an argument
  if(isOdd){
    const allOdds = document.body.querySelectorAll('.odd');
    for(let oddItem of allOdds){
      assignRandomColors(oddItem);
    }
  }
  // If the node does not have that class
  // get and loop over all the nodes in the clicked nodes <section> 
  // (hint: nodes have a parentNode property)
  // and call assignRandomColors with the node as an argument
  if(!isOdd){
    const currSectionId = clickedNode.parentNode.id;
    const currSection = document.querySelector('#'+currSectionId);
    const nodesInSection = currSection.querySelectorAll('p');
    for(let sectionItem of nodesInSection){
      assignRandomColors(sectionItem);
    }
  } 
});
