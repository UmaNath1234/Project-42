var iss, issImg;
var spaceCraft, scImg, sc2, sc3, sc4, sc2Img, sc3Img, sc4Img;
var space, spaceImg;
var hasDocked = false;

function preload(){
  issImg = loadImage("iss.png");
  spaceImg = loadImage("spacebg.jpg");
  scImg = loadImage("spaceCraft1.png");
  sc2Img = loadImage("spaceCraft2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  space = createSprite(0,0,0,0)
  space.addImage(spaceImg);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);

  spaceCraft = createSprite(400,400,10,10);
  spaceCraft.addImage(scImg);
  spaceCraft.scale = 0.3;

  


}

function draw() {
  background(spaceImg);
  
  if(!hasDocked){
    spaceCraft.x = Math.round(random(285,300));
  }

  if(keyDown(LEFT_ARROW)){
    spaceCraft.x = spaceCraft.x -30;
  }

  if(keyDown(RIGHT_ARROW)){
    spaceCraft.x = spaceCraft.x +30;
  }
  
  if(keyDown(UP_ARROW)){
    spaceCraft.y = spaceCraft.y -10;
    spaceCraft.addImage(sc2Img);
  }

  if(keyDown(DOWN_ARROW)){
    spaceCraft.y = spaceCraft.y +10;
  }

  if(spaceCraft.x === 400 && spaceCraft.y === 200){
    hasDocked = true;
    textSize(100);
    fill(255);
    text("Docking is Successful");
  }
  drawSprites();
}