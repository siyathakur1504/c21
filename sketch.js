function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 100, 50, 50);
  fixedRect=createSprite(400, 800, 40, 20);
  movingRect.shapeColor="black";
  fixedRect.shapeColor="black";
  //movingRect.velocityY=5;
  //fixedRect.velocityY=-5;
  gObs1=createSprite(600,200,50,30);
  gObs2=createSprite(600,100,50,30);
}

function draw() {
  background(255,255,255);  
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
 if(isTouching(gObs1, movingRect)){
  movingRect.shapeColor="pink";
  gObs1.shapeColor="pink";
 }
 else{
  movingRect.shapeColor="black";
  gObs1.shapeColor="black";
 }
  //bounceOff(movingRect,fixedRect)
  drawSprites();
}
