var fixedRect,movingRect
var rect1,rect2

function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(200, 200, 50, 50);
  movingRect = createSprite(100,200,50,100)
  rect1 = createSprite(200,100,30,30)
  rect2 = createSprite(200,200,30,30)
  rect1.velocityY = 1
  fixedRect.velocityX=-1
  movingRect.velocityX=1
}

function draw() {
  background(0);  
 /* movingRect.x=mouseX
  movingRect.y=mouseY
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }*/
  /*if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX*(-1)
    fixedRect.velocityX = fixedRect.velocityX*(-1)
  }*/
  isTouching(fixedRect, rect2)
  bounceOff(rect2,rect1)

  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
}
function bounceOff(movingRect,fixedRect){
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX*(-1)
    fixedRect.velocityX = fixedRect.velocityX*(-1)
  }
   if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
     movingRect.velocityY = movingRect.velocityY*(-1)
     fixedRect.velocityY = fixedRect.velocityY*(-1)
   }
}