/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: HTML 5 Canvas
(c) Copyright by BRS with Nyros. 
**/

/* Get Our Elements */
const canvas = document.getElementById("draw");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const ctx = canvas.getContext("2d"); // 2 prams - context type and context attributes

// Default theme
let chathams_blue = "#1A4B84";

// Apply some properties to ctx
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

// Init
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing) return; // Check for mouse click
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath(); //Begin a new path

  // Start drawing the line
  ctx.moveTo(lastX, lastY);
  console.log(`LAST X - ${lastX}`);
  console.log(`LAST Y - ${lastY}`);

  // Go to current mouse location
  ctx.lineTo(e.offsetX, e.offsetY);
  console.log(`CURRENT X - ${e.offsetX}`);
  console.log(`CURRENT Y - ${e.offsetY}`);

  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

// Event Listeners
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; //Mouse cursor's coordinates
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// Set theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

console.log("hello world");

let num = 10;
num == 10;

function addNum(a = 10, b = 20) {
  return a + b;
}
