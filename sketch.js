var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("apple.png");
 LeavesImg = loadImage("leaf.png");
}


function setup(){

  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  fallingApple()
  fallingLeaveas()
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x= mouseX
  drawSprites();

}
function fallingApple(){
if(frameCount %80===0){
 var Apple=createSprite(200,20)
 Apple.addImage(AppleImg);
Apple.velocityY=4;
Apple.scale=0.1
Apple.x=Math.round(random(30,400));
}

}
function fallingLeaveas(){
if(frameCount %80===0){
var Leaveas=createSprite(30,20);
Leaveas.addImage(LeavesImg);
Leaveas.velocityY=4;
Leaveas.scale=0.1
Leaveas.x=Math.round(random(30,400));
}
}
