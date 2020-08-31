var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(200,200,20,20);
  object1.shapeColor="green";
  object2 = createSprite(50,350,15,10);
  object2.shapeColor="green";
  object3 = createSprite(350,50,15,30);
  object3.shapeColor="green"
  object4 = createSprite(250,325,50,20);
  object4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  object1.x = World.mouseX;
   object1.y = World.mouseY;

  if(isTouching(object1,object2)){
    object1.shapeColor = "red";
    object2.shapeColor = "red";
  }

    else{
      object1.shapeColor = "green";
      object2.shapeColor = "green";
    }
    
  

 drawSprites();
  }

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  return true;
}
else {
 return false;
}
}