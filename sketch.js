var moving,gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(800,400);
  moving=createSprite(300,100,50,100);
  moving.shapeColor="green";
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(400,100,50,50);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(400,500,50,50);
  gameObject4.shapeColor="green";

  gameObject3.velocityY=5;
  gameObject4.velocityY=-5;
}

function draw() {
  background("black");
moving.x=World.mouseX;
moving.y=World.mouseY;
if(isTouching(moving,gameObject1)){
  moving.shapeColor="yellow";
  gameObject1.shapeColor="yellow";

}else{
  moving.shapeColor="green";
  gameObject1.shapeColor="green";

}
bounceOff(gameObject3,gameObject4);
  drawSprites();
}

