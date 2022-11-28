// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(50);
  fill(100,0,0);
  rect(30, 20, 1120, 450);

  for(let i = 0; i < 9; i++){
   //noStroke();
   noStroke();
   fill(255);
   triangle(320, i*50+20 ,320, i*50+70, 400, i*50+45);
   fill(255);
   rect(30, 20, 290,450)
   
  } 

}
let img;
function preload() {
  img = loadImage('soccerball.jpg');
}

function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  
  image(img, 0, 0);
}