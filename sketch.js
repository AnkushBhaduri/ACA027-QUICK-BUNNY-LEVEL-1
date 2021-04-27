var bunny;
var carrot;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
//(color pink is bunny while color orange is carrot.Brown Represents bricks.)
function setup() {
  createCanvas(600,600);
  edges = createEdgeSprites();
  bunny=createSprite(100,500,20,20);
  bunny
.shapeColor="pink"
 carrot=createSprite(500,100,40,40);
 carrot.shapeColor="orange";
 
 obs1=createSprite(80,280,120,20);
 obs1.shapeColor="brown";
 obs2=createSprite(10,330,120,20);
 obs2.shapeColor="brown";
 obs3=createSprite(100,330,120,20);
 obs3.shapeColor="brown";
 obs4=createSprite(290,330,150,20);
 obs4.shapeColor="brown";
 obs5=createSprite(450,330,120,20);
 obs5.shapeColor="brown";
 obs6=createSprite(610,330,120,20);
 obs6.shapeColor="brown";
 obs7 = createSprite(230,280,120,20);
 obs7.shapeColor="brown";
 obs8 = createSprite(380,280,120,20);
 obs8.shapeColor="brown";
 obs9 = createSprite(520,280,120,20);
 obs9.shapeColor="brown";
}

function draw() {
  background("green"); 
   
   obs1.bounceOff(edges[0]);
   obs1.bounceOff(edges[1]);
   obs2.bounceOff(edges[0]);
   obs2.bounceOff(edges[1]);
  if(keyDown("left"))
bunny.x=bunny.x-4;
if(keyDown("right"))
bunny.x=bunny.x+4;
if(keyDown("up"))
bunny.y=bunny.y-4;
if(keyDown("down"))
bunny.y=bunny.y+4;
textSize(30)
if(bunny.isTouching(obs2))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs1))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs3))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs4))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs5))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs6))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs7))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs8))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs9)){
   text("YOU LOSE",300,300);
   bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(carrot)){
  text("YOU WIN !",300,300);

}
 

  drawSprites();

}
