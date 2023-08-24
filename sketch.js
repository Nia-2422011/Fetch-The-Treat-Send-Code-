var treat1, treat1Img; 
var dogBowl, dogBowlImg;
var life1, life1Img; 
//var obstacle1, obstacle1Img; 
var reset, resetImg;
var canvas;
var classtreat1, classtreat1Img;
var classobstacle1;
var backgroundImg;
X = 100;
Y = 650;
var player, playerImg;


// Function Preload 
function preload () {
// Loading Images 
//background('#ffe6cc');
playerImg = loadImage("./assets/Dog.png");
treat1Img = loadImage("./assets/Treat1.png");
dogBowlImg = loadImage ("./assets/DogBowl.png");
life1Img = loadImage("./assets/life1.png");
obstacle1Img = loadImage("./assets/Obstacle1.png");
resetImg = loadImage("./assets/reset.png");
backgroundImg = loadImage("./assets/Grass.jpg")
}


// Function Setup 
function setup () {
// Creating Sprites 
//Canvas 
canvas = createCanvas(1450,750 );

//Treat1
treat1 = createSprite(375,250,100,100);
treat1.addImage(treat1Img);
treat1.scale = 0.1;
//Treat2
treat1 = createSprite(740,600,100,100);
treat1.addImage(treat1Img);
treat1.scale = 0.1;
//Treat3
treat1 = createSprite(990,200,100,100);
treat1.addImage(treat1Img);
treat1.scale = 0.1;
//Treat4
treat1 = createSprite(1240,600,100,100);
treat1.addImage(treat1Img);
treat1.scale = 0.1;
//DogBowl
dogBowl = createSprite(1390,500,100,100);
dogBowl.addImage(dogBowlImg);
dogBowl.scale = 0.2;
//Life1
life1 = createSprite(50,50,100,100);
life1.addImage(life1Img);
life1.scale = 0.1;
//Life2
life2 = createSprite(100,50,100,100);
life2.addImage(life1Img);
life2.scale = 0.1;
//Life3
life3 = createSprite(150,50,100,100);
life3.addImage(life1Img);
life3.scale = 0.1;
//Obstacle1
obstacle1 = createSprite(500,500,100,100);
obstacle1.addImage(obstacle1Img);
obstacle1.scale = 0.2;
//Reset 
reset = createSprite(1390,50,100,100);
reset.addImage(resetImg);
reset.scale = 0.1;

player = createSprite(X,Y,100,100);
player.addImage(playerImg);
player.scale = 0.2;


}





// Function Draw 
function draw () {
  

// Creating Dog Sprite ( Player )



//Dog Movements 

if (keyIsDown(LEFT_ARROW)) {
    player.velocityX -= 5;
  }
if (keyIsDown(RIGHT_ARROW)) {
  player.velocityX += 5;
  }
if (keyIsDown(UP_ARROW)) {
  player.velocityY -= 5;
  }
if (keyIsDown(DOWN_ARROW)) {
  player.velocityY += 5;
  }



  

// Rect 
//rect(1100,65,85,400);
fill('brown');
rect(950,300,85,400);
fill('brown');
rect(700,65,85,400);
fill('brown');
rect(450,300,85,400);
fill('brown');
rect(200,65,85,400);
fill('brown');
rect(1200,65,85,400);
fill('brown');

drawSprites();
}
