
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var bananaGroup
var survivalTime=0



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}




 
  
  

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  gameOverImg=loadImage("gameOver.png");
 
}



function setup() {
   createCanvas(600,500);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=width/2; 
  
  
  
 
  
  invisibleGround=createSprite(400,355,900,10);
  invisibleGround.visible=false;
  

  bananaGroup=createGroup();
  score=0;
  
}


function draw() {
  background("blue");
  text("Score:"+score,500,50);
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
    
    survivalTime=Math.ceil(frameCount/frameRate())
    text("SurvivalTime:"+survivalTime,100,50);
    
    if(keyDown("space")&& monkey.y>=110){
      monkey.velocityY=-12; 
    }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(invisibleGround);
  
 if(bananaGroup.isTouching(monkey)){
      score=score+1;
   bananaGroup.destroyEach();
    }    
  banana();
  spamobstacle();
  drawSprites(); 
}
function banana(){
  if (frameCount % 80 === 0) {
 var  banana=createSprite(200,200,800,30);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  banana.y=  Math.round(random(80,120));
    banana.lifetime=100;
   
   
    
    bananaGroup.add(banana);
   
}
  
} 
function spamobstacle(){
    if (frameCount % 100 === 0) {
  var  obstacle=createSprite(200,330,20,20);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-3;
  
  

  
    
  }
}
