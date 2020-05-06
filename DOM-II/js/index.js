// Your code goes here

// #1 MOUSEOVER
let myNavs = document.querySelectorAll(".nav-link");
for(let i=0; i<myNavs.length; i++)
{myNavs[i].addEventListener("mouseover", function(){
myNavs[i].style.color = "red";
})}

// #2 MOUSEOUT
let mouseOut = document.querySelectorAll(".nav-link");
for(let i=0; i<myNavs.length; i++)
{mouseOut[i].addEventListener("mouseout", function(){
mouseOut[i].style.color = "black";
})}


// #3 ONLOAD
let onLoad = document.querySelectorAll(".nav-link");
for(let i=0; i<myNavs.length; i++)
{onLoad[i].addEventListener("onload", function(){
})}
console.log('Navigation bar has loaded!', onLoad);


// #4 MAKE TEXT INPUT FIELD CAPITAL WHEN YOU CLICK OFF IT
document.getElementById("bigName").addEventListener("change", makeDestinationCaps);
function makeDestinationCaps() {
var makeCaps = document.getElementById("bigName");
makeCaps.value = makeCaps.value.toUpperCase();
}

// #5 MOUSEENTER
let footerList = document.getElementById("footerList");

footerList.addEventListener("mouseenter", function( event ) {   
  event.target.style.color = "black";
  setTimeout(function() {
    event.target.style.color = "";
  }, 300);
}, false);

// #6 MOUSEOVER
footerList.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "green";
  setTimeout(function() {
    event.target.style.color = "";
  }, 300);
}, false);


// #7 FOCUS

const pwColor = document.querySelector('input[type="password"]');
pwColor.addEventListener('focus', (event) => {
    event.target.style.background = 'yellow';
})
pwColor.addEventListener('blur', (event) => {
    event.target.style.background = '';    
  });

 
// #8  AUXCLICK

let button = document.querySelector('button');
let html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.onclick = function() {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
}

button.oncontextmenu = function(e) {
  e.preventDefault();
}



// #9 CONTEXT MENU

noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

// #10  MOUSEDOWN, MOUSEMOVE, MOUSEUP

let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');


myPics.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  });

  myPics.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
  });

  
window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}