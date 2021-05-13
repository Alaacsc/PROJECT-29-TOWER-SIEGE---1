const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(660,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  
  //level one
  blocky01 = new Block(600,175,30,40);
  blocky02 = new Block(630,175,30,40);
  blocky03 = new Block(660,175,30,40);
  blocky04 = new Block(690,175,30,40);
  blocky05 = new Block(720,175,30,40);
  //level two
  blocky06 = new Block(630,135,30,40);
  blocky07 = new Block(660,135,30,40);
  blocky08 = new Block(690,135,30,40);
  //level three
  blocky09 = new Block(660,115,30,40);

  polygon = new Polygon(50,200,20,20);

  slingShot = new SlingShot(polygon.body,{x:100,y:200});

}
function draw() {
  background(255, 242, 125); 
 
  textSize(20);
  fill("black");

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill(212, 0, 0);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(252, 111, 3);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(252, 194, 3);
  block13.display();
  block14.display();
  block15.display();
  fill(22, 219, 0);
  block16.display();

  fill(16, 0, 191);
  blocky01.display();
  blocky02.display();
  blocky03.display();
  blocky04.display();
  blocky05.display();
  fill(118, 0, 196);
  blocky06.display();
  blocky07.display();
  blocky08.display();
  fill(194, 0, 139);
  blocky09.display();

  slingShot.display();
  //polygon.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
