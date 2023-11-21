const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawImage = (circle1X, circle1Y, circle2X, circle2Y) => {

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.drawImage(img1, 0, 0, window.innerWidth, window.innerHeight );
    context.drawImage(circle1, circle1X, circle1Y, 400, 400 ) 
    context.drawImage(circle2, circle2X, circle2Y, 300, 300 ) 
    // context.drawImage(something, 0,0,600, canvas.height ) 
}

const img1 = new Image()

img1.src = "./img1.jpg";
img1.onload = function()  {
 drawImage(0,0,50,50);
} 

const circle1 = new Image()

circle1.src = "./circle1.png";
circle1.onload = function()  {
   
    drawImage(0,0, 50, 50);

} 

const circle2 = new Image()

circle2.src = "./circle1.png";
circle2.onload = function()  {
   
    drawImage(0,0, 50, 50);

} 

// const something = new Image()

// something.src = "./something.png";
// something.onload = function()  {
   
//     drawImage(0,0, 50, 50);

// } 

window.addEventListener ("resize", function() {
console.log(window.innerWidth, window.innerHeight)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.drawImage(img1, 0, 0, window.innerWidth, window.innerHeight );

})

document.addEventListener ("mousemove", function(event) { 
    console.log("mousemove");
    
const randomXcircle1 = Math.floor(Math.random() * (canvas.width ))
const randomYcircle1 = Math.floor(Math.random() * (canvas.height ))


const randomXcircle2 = Math.floor(Math.random() * (canvas.width ))
const randomYcircle2 = Math.floor(Math.random() * (canvas.height ))
drawImage(randomXcircle1, randomYcircle1, randomXcircle2, randomYcircle2);
})


