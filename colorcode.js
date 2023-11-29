function RGBToHSL(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0)
    h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}



function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}





document.addEventListener('click', (e) => {
  // Get element class(es)
  let elementClass = e.target.className;
  // If element has class(es)
  if (elementClass !== '') {

    console.log(elementClass);
    if (elementClass == "footer") { }
    else if (elementClass == "stable") { }
    else if (elementClass == "middle") { }
    else if (elementClass == "head") { }
    else if (elementClass == "picker") { }
    else if (elementClass == "hex") { }
    else if (elementClass == "rgb") { }
    else if (elementClass == "hsl") { }
    else if (elementClass == "hex_in") { }
    else if (elementClass == "gradient") { }
    else if (elementClass == "line") { }
    else if (elementClass == "click") { }
    else if (elementClass == "navbar") { }
    else if (elementClass == "value") { }
    else if (elementClass == "value2") { }
    else if (elementClass == "value3") { }
    else {
      myDivObj = document.querySelector(`.${elementClass}`);
      let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;
      document.getElementById("rgb_value").innerHTML = myDivObjBgColor;

      var rgbColor = myDivObjBgColor;
      rgbArr = rgbColor.substring(4, rgbColor.length - 1).replace(/ /g, '').split(',');

      let a = rgbArr[0];
      let b = rgbArr[1];
      let c = rgbArr[2];
      Number(a)
      Number(b)
      Number(c)
      document.getElementById("hex_value").innerHTML = rgbToHex(Number(a), Number(b), Number(c));
      document.getElementById("fill").style.backgroundColor = rgbToHex(Number(a), Number(b), Number(c));

      document.getElementById("hsl_value").innerHTML = RGBToHSL(Number(a), Number(b), Number(c))

    }

  }
  // If element has no classes
  else {
    console.log('An element without a class was clicked');
  }
}
);





function updateCursor(event) {
  const gradientColor = getGradientColor(event);

  // Print the cursor pointer background color codes to the console
  console.log("RGB:", gradientColor.rgb);
  console.log("HSL:", gradientColor.hsl);
  console.log("Hex:", gradientColor.hex);
}

function resetCursor() {
  // You can add additional actions when the mouse leaves the div
}

function getGradientColor(event) {
  const gradientDiv = document.querySelector('.colorpicker');
  const xPercent = (event.clientX - gradientDiv.offsetLeft) / gradientDiv.clientWidth;
  const yPercent = (event.clientY - gradientDiv.offsetTop) / gradientDiv.clientHeight;

  const color1 = [255, 126, 95]; // #ff7e5f
  const color2 = [254, 180, 123]; // #feb47b

  const r = Math.round(color1[0] + (color2[0] - color1[0]) * xPercent);
  const g = Math.round(color1[1] + (color2[1] - color1[1]) * yPercent);
  const b = Math.round(color1[2] + (color2[2] - color1[2]) * xPercent);

  const rgbValue = `rgb(${r}, ${g}, ${b})`;
  const hslValue = rgbToHsl(r, g, b);
  const hexValue = rgbToHex(r, g, b);

  return {
    rgb: rgbValue,
    hsl: hslValue,
    hex: hexValue
  };
}

function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}


let val1 = document.getElementById("hex_in");
val1.addEventListener("input",()=>{
  document.querySelector(".found").style.backgroundColor = val1.value;
})

let val2 = document.getElementById("gradient");
val2.addEventListener("input",()=>{
  document.querySelector(".found").style.backgroundImage = val2.value;
  console.log(val2.value)
})



const btn = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.auto');

btn.addEventListener("click", () => {
  navbarLinks.classList.toggle('active');
  console.log("click")
});




















