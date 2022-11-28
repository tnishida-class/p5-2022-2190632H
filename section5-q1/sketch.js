// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Snow Man",100, 100, 50);
  
  
  }

 
   



function balloon(t,x,y,c)//t=text, c=color
{
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(c);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  fill(50);
  triangle(x+30,y+22,x+50,y+35,x+70,y+22);
  fill(255);
  text(t, p+x, h + p+y);
  
}
