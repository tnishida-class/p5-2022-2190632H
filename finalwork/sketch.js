// 最終課題を制作しよう
let img;
function preload() {
  img = loadImage('soccerball.jpg');
}
let x,y;

function balloon(t,x,y,c)//t=text, c=color
{
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;
  fill(c);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  textSize(50);
  text(t, p+x, h + p + y);
  
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=600;
  y=300;
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
 image(img, x, y, 200, 200);
 if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; } 
  if(keyIsDown(" ".charCodeAt(0))){ x-= 10; } 

  balloon("FIFA World Cup Qatar 2022",250, 200, 10);
}


