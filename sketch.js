var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  score=0;
  survivalTime=0;
  
  ground = createSprite(0,400,1500,10);
  
  monkey=createSprite(90,370,10,10);
  monkey.addAnimation("money_running",monkey_running);
  monkey.scale=0.1;

  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background(rgb(50,300,250));

  if(keyDown("space")&&monkey.y>=350){
    
    monkey.velocityY=-10;
  }
   monkey.velocityY=monkey.velocityY+0.3
    monkey.collide(ground);
  
  ground.velocityX=-7;
  ground.x = ground.width/2;
  
  if(World.frameCount%200===0){
    fruits();
  }
  
  if(World.frameCount%300===0){
    stones();
    fruits();
  }
  
   fill("magenta");
  text("score: " + score,500,50);
  
  fill("black");
   survivalTime=Math.round(frameCount/frameRate());
  text("survival Time: " + survivalTime,350,50);
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score = score +1;
  }
  
  drawSprites();
  
}

function fruits(){
  banana = createSprite(670,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  banana.lifetime=600;
  FoodGroup.add(banana);
  
}

function stones(){
obstacle = createSprite(670,380,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-4;
  obstacel.scale=0.2;
  obstacle.lifetime=600;
  obstacleGroup.add(obstacle);
}