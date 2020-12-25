
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  groundImg=loadImage("ground.png")
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.jpg");
 
}



function setup() {
  createCanvas(600,350)
  //creating monkey
  monkey=createSprite(80,260,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.2

  ground = createSprite(300,350,600,10)
  ground.addAnimation("ground",groundImg)
  ground.scale=0.7
  ground1=createSprite(300,300,600,10)
  ground1.visible=false
  
  bananaGroup=createGroup()
  bananascore=0
}


function draw() {
  background("skyblue")
  text("bananas collected "+bananascore,450,30)
  ground.velocityX=-2
  if(ground.x<250){
    ground.x=300
  }
  if (keyDown("space")){
    monkey.velocityY=-10 
  }
  monkey.velocityY=monkey.velocityY+0.8
  if(monkey.isTouching(bananaGroup)){
    bananascore++
    bananaGroup.destroyEach()
  }
  monkey.collide(ground1)
  sponBananas()
drawSprites()
  
}
function sponBananas(){
  if(frameCount %80 ===0){
    banana=createSprite(620,120,50,50)
    banana.addImage(bananaImage)
    banana.scale=0.3
    banana.velocityX=-2
    banana.lifetime=300
    bananaGroup.add(banana)
  }
}





