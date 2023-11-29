const btn = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.auto');

btn.addEventListener("click", () => {
  navbarLinks.classList.toggle('active');
  console.log("click")
});


function createDuplicate() {
  // Clone the custom div
  const originalCustom = document.querySelector('.custom');
  const newCustom = originalCustom.cloneNode(true);

  // Reset the input color value and hex color display for the new custom div
  const newInputColor = newCustom.querySelector('input');
  const newHexColor = newCustom.querySelector('.hex');
  newInputColor.value = '#000000'; // Set default color
  newHexColor.textContent = '#000000';

  // Attach the new custom div to the get div
  document.querySelector('.get').appendChild(newCustom);
}

function updateHexColor(input) {
  // Get the hex display element
  const hexDisplay = input.nextElementSibling;

  // Update the hex display with the selected color
  hexDisplay.textContent = input.value;
}

function deleteCustom(deleteButton) {
  // Get the parent custom div and remove it
  const customDiv = deleteButton.parentElement;
  customDiv.remove();
}





function updateHexColor(input) {
  // Get the hex display element
  const hexDisplay = input.nextElementSibling;

  // Update the hex display with the selected color
  hexDisplay.textContent = input.value;

  // Update the background when the color is changed
  updateBackground();
}

function createDuplicate() {
  // Clone the custom div
  const originalCustom = document.querySelector('.custom');
  const newCustom = originalCustom.cloneNode(true);

  // Reset the input color value and hex color display for the new custom div
  const newInputColor = newCustom.querySelector('input');
  const newHexColor = newCustom.querySelector('.hex');
  newInputColor.value = '#000000'; // Set default color
  newHexColor.textContent = '#000000';

  // Attach the new custom div to the get div
  document.querySelector('.get').appendChild(newCustom);

  // Update the background when a new input is created
  updateBackground();
}

function deleteCustom(deleteButton) {
  // Get the parent custom div
  const customDiv = deleteButton.parentElement;

  // Remove the custom div
  customDiv.remove();

  // Update the background when an input is deleted
  updateBackground();
}

function updateBackground() {
  // Get all the input color values from existing custom divs
  const inputColors = document.querySelectorAll('.custom input');
  const inputPercentages = document.querySelectorAll('.custom .percentage');

  // Create a gradient string based on the input color values
  const gradient = `linear-gradient(90deg, ${[...inputColors].map(input => input.value).join(', ')})`;


  // Apply the gradient as the background to the .display div
  document.querySelector('.display').style.background = gradient;
}

// ... (your existing code)

// // Event listener for the .display element
// document.querySelector('.display').addEventListener('click', () => {
//   const displayStyle = getComputedStyle(document.querySelector('.display'));
//   const backgroundValue = displayStyle.background;
//   document.getElementById("code").innerHTML = `Current Gradient Background: ${displayStyle.background}`;

// });

// // Add an initial degree variable
// let gradientDegree = 0;

// function updateBackground() {
//   // Get all the input color values from existing custom divs
//   const inputColors = document.querySelectorAll('.custom input');

//   // Create a gradient string based on the input color values and the current degree
//   const gradient = `linear-gradient(${gradientDegree}deg, ${[...inputColors].map(input => input.value).join(', ')})`;

//   // Apply the gradient as the background to the .display div
//   document.querySelector('.display').style.background = gradient;
// }

// // Function to update the gradient degree and call updateBackground
// function updateGradientDegree(rotation) {
//   gradientDegree = 0;
//   gradientDegree += rotation;
//   updateBackground();
// }

// // Event listeners for each arrow icon
// document.querySelector('.fa-arrow-up').addEventListener('click', () => updateGradientDegree(0));
// document.querySelector('.fa-arrow-down').addEventListener('click', () => updateGradientDegree(180));
// document.querySelector('.fa-arrow-right').addEventListener('click', () => updateGradientDegree(90));
// document.querySelector('.fa-arrow-left').addEventListener('click', () => updateGradientDegree(270));
// document.querySelector('.fa-arrow-up.rightup').addEventListener('click', () => updateGradientDegree(45));
// document.querySelector('.fa-arrow-up.rightdown').addEventListener('click', () => updateGradientDegree(135));
// document.querySelector('.fa-arrow-down.leftdown').addEventListener('click', () => updateGradientDegree(315));
// document.querySelector('.fa-arrow-up.leftup').addEventListener('click', () => updateGradientDegree(225));

// // ... (your existing code)






// Your existing code...

// Event listener for the .display element
document.querySelector('.display').addEventListener('click', () => {
  const displayStyle = getComputedStyle(document.querySelector('.display'));
  const backgroundValue = displayStyle.background;
  document.getElementById("code").innerHTML = `Current Gradient Background: ${backgroundValue}`;
});

// Event listener for the .display2 element
document.querySelector('.display2').addEventListener('click', () => {
  const display2Style = getComputedStyle(document.querySelector('.display2'));
  const backgroundValue = display2Style.background;
  document.getElementById("code2").innerHTML = `Current Gradient Background: ${backgroundValue}`;
});

// Add an initial degree variable for linear gradient
let gradientDegree = 0;

// Add an initial radius variable for radial gradient
let gradientRadius = 0;



function updateBackground() {
  // Get all the input color values from existing custom divs
  const inputColors = document.querySelectorAll('.custom input');

  // Create a linear gradient string based on the input color values and the current degree
  const linearGradient = `linear-gradient(${gradientDegree}deg, ${[...inputColors].map(input => input.value).join(', ')})`;

  // Create a radial gradient string based on the input color values and the current radius
  const radialGradient = `radial-gradient(circle at center, ${[...inputColors].map(input => input.value).join(', ')})`;

  // Apply the appropriate gradient as the background to the corresponding display div
  document.querySelector('.display').style.background = linearGradient;
  document.querySelector('.display2').style.background = radialGradient;
}

// Function to update the gradient degree and call updateBackground for linear gradient
function updateGradientDegree(rotation) {
  gradientDegree = 0;
  gradientDegree += rotation;
  updateBackground();
}

// Function to update the gradient radius and call updateBackground for radial gradient
function updateGradientRadius(increase) {
  gradientRadius += increase;
  updateBackground();
}

// Event listeners for each arrow icon for linear gradient
document.querySelector('.fa-arrow-up').addEventListener('click', () => updateGradientDegree(0));
document.querySelector('.fa-arrow-down').addEventListener('click', () => updateGradientDegree(180));
document.querySelector('.fa-arrow-right').addEventListener('click', () => updateGradientDegree(90));
document.querySelector('.fa-arrow-left').addEventListener('click', () => updateGradientDegree(270));
document.querySelector('.fa-arrow-up.rightup').addEventListener('click', () => updateGradientDegree(45));
document.querySelector('.fa-arrow-up.rightdown').addEventListener('click', () => updateGradientDegree(135));
document.querySelector('.fa-arrow-down.leftdown').addEventListener('click', () => updateGradientDegree(315));
document.querySelector('.fa-arrow-up.leftup').addEventListener('click', () => updateGradientDegree(225));






function sliderChange(val) {
  document.getElementById("value").innerHTML = val + " deg";
  updateGradientDegree(val)
}




// Update the hex display when the color is changed
function updateHexColor(input) {
  const hexDisplay = input.nextElementSibling;
  hexDisplay.textContent = input.value;
  updateBackground(); // Call updateBackground when the color is changed
}

// Function to update the gradient degree and call updateBackground for linear gradient
function updateGradientDegree(rotation) {
  gradientDegree = 0;
  gradientDegree += rotation;
  updateBackground();
}

// Function to update the gradient radius and call updateBackground for radial gradient
function updateGradientRadius(increase) {
  gradientRadius += increase;
  updateBackground();
}

// Function to update the radial gradient based on x and y coordinates
function updateradial(x, y) {
  const inputColors = document.querySelectorAll('.custom input');
  const radialGradient = `radial-gradient(closest-side at ${x}% ${y}%, ${[...inputColors].map(input => input.value).join(', ')})`;
  document.querySelector('.display2').style.background = radialGradient;
}

// Event listeners for sliders and arrows
document.getElementById('myRange2').addEventListener('input', (event) => {
  const val = event.target.value;
  document.getElementById('value2').innerHTML = 'X axis ' + val + '%';
  x = val;
  updateradial(x, y);
});

document.getElementById('myRange3').addEventListener('input', (event) => {
  const val = event.target.value;
  document.getElementById('value3').innerHTML = 'Y axis ' + val + '%';
  y = val;
  updateradial(x, y);
});






