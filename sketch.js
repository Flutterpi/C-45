var PLAY = 1;
var END = 0;
var gameState = PLAY;
var counterCake = 0;
var counterSmoothie = 0;
var score=0;
var gameOver, restart;
var rand;



function preload()
{
    backgroundImg = loadImage("images/bg1.jpg");
    bunnyImg = loadImage("images/bunny1.png");
    bunnyFull = loadImage("images/bunny3.png")
    pandaImg = loadImage("images/panda2.png");
    pandaFull = loadImage("images/panda3.png");
    smoothieImg = loadImage("images/smoothie.png");
    cakeImg = loadImage("images/cake.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 
 bunny = createSprite(1171,482,10,10)
 bunny.addImage(bunnyImg);
 bunny.addAnimation("bunnyFull",bunnyFull)
 bunny.scale = 0.70;

 panda = createSprite(325,442,10,10)
 panda.addImage(pandaImg);
 panda.addAnimation("pandaFull",pandaFull)
 panda.scale = 0.37;

 cakeGroup = new Group();
 smoothieGroup = new Group();

 rand = Math.round(random(1,2))




 /*ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.width /2;
 ground.velocityX = -(6 + 3*score/100);
 */
 
}

function draw() {
 background(backgroundImg);

 if ((frameCount%30===0))
 {
    rand = Math.round(random(1,2))
     
     if (rand===1)
     {
         var tempCake = spawnCakes()

         console.log(counterCake);

         if (keyDown("LEFT_ARROW"))
         {
             var tempFood = spawnCakes();
            
             tempFood.velocityX = -6;
             counterCake = counterCake+1
             tempCake.destroy()

             if(counterCake>=10)
            {
                panda.changeAnimation("pandaFull",pandaFull)
                panda.scale = 3.7;
                
            }
         }
         

     }
     else if (rand===2)
     {
         var tempSmoothie = spawnSmoothies()
        if (keyDown("RIGHT_ARROW"))
        {
            var tempFood = spawnSmoothies();
            console.log(tempFood);
            tempFood.velocityX = 6;
            counterSmoothie = counterSmoothie+1
            tempSmoothie.destroy()
            
            if(counterSmoothie>=10)
            {
                bunny.changeAnimation("bunnyFull",bunnyFull)
                bunny.scale = 3.7;
                
            }
            
        }
     }
    
 }



 drawSprites();
 
 textSize(20)
 fill(0)
 stroke("black")
 text("Panda:" + counterCake,displayWidth/2 -560,displayHeight/2 - 325)
 text("Bunny:" + counterSmoothie,displayWidth/2 + 540,displayHeight/2 - 325)
}


function spawnSmoothies() {
    //if(frameCount % 60 === 0) {
    var smoothie = createSprite(770,485,10,40);
    //food.velocityX = (6 + 3*score/100);
    smoothie.addImage(smoothieImg);
    
    
    //assign scale and lifetime to the obstacle 
    smoothie.scale = 0.5;
    smoothie.lifetime = 70;
    //add each obstacle to the group
    smoothieGroup.add(smoothie);
    //}
    return smoothie;
}
function spawnCakes() {
    //if(frameCount % 60 === 0) {
    var cake = createSprite(770,485,10,40);
    //food.velocityX = (6 + 3*score/100);
    cake.addImage(cakeImg);
    
    //assign scale and lifetime to the obstacle 
    cake.scale = 0.5;
    cake.lifetime = 70;
    //add each obstacle to the group
    cakeGroup.add(cake);
    //}
    return cake;
}


function reset(){
 gameState = PLAY;
 ground.velocityX = -(6 + 3*score/100);
 gameOver.visible = false;
 restart.visible = false;
 
 obstaclesGroup.destroyEach();
 cloudsGroup.destroyEach();
 
 trex.changeAnimation("running",trex_running);
 
 score = 0;
 
}
