var sea, seaImg;
var ship,  shipImg1, shipImg2, shipImg3, shipImg4;


function preload(){

  seaImg = loadImage("sea.png");
  shipImg1 = loadImage("ship-1.png")
  shipImg2 = loadImage("ship-2.png")
  shipImg3 = loadImage("ship-3.png")
  shipImg4 = loadImage("ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  sea.addImage(seaImg);
  ship.addImage(shipImg1, shipImg2, shipImg3, shipImg4)
}

function draw() {
  background("blue");
    drawSprites();

    if (sea.x < 0) {

      sea.x = sea.width/2
    }
}
