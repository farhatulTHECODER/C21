var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 100, 50, 50);
  movingrect = createSprite(400,400,30,30);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  //movingrect.velocityY=-5;
  //fixedrect.velocityY=5;
  gobj1=createSprite(100,100,20,20);
  gobj2=createSprite(200,200,20,20);
}

function draw() {
  background(255,255,255);  
 movingrect.x = mouseX;
  movingrect.y = mouseY;
  if (isTouching(gobj1,movingrect)) {
    gobj1.shapeColor = "red";
    movingrect.shapeColor = "black";
  } else {
    gobj1.shapeColor = "green";
    movingrect.shapeColor = "brown";
  }
 // bounceOff(fixedrect,movingrect);

  drawSprites();
}
