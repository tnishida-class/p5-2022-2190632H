// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){ //{}内を8回繰り返す
    for(let j = 0; j < 8; j++){ //{}内を8回繰り返す
      if((i+j)% 2 == 0){fill(255)} //i+jが偶数だったら白
      else{fill(125) // 奇数だったら灰色
      rect(i*8 , j*8, 8, 8) //四角形を書く
      if(j<3){fill(255,0,0)};
      ellipse((i*8)+4, (j*8)+4, 7);
      if(j>4){fill(51)};
      ellipse((i*8)+4, (j*8)+4, 7);

    }

  
      }
     
    }
  
  }