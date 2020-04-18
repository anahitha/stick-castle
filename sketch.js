const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7;
var ground;

function setup() {
  var canvas = createCanvas (1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,400,1200,20);
  box1 = new Box (350, 50, 100, 270);
  box2 = new Box (650, 50, 100, 270);
  box3 = new Box (520, 50, 200, 200);
  box4 = new Box (220, 50, 200, 100);
  box5 = new Box (780, 50, 200, 100);
  box6 = new Box (80, 50, 20, 350);
  box7 = new Box (880, 50, 20, 350);

}

function draw() {
  background("black");
    Engine.update(engine);
    box1.display();
    box2.display ();
    box3.display ();
    box4.display ();
    box5.display ();
    box6.display ();
    box7.display ();
    

    
    
   
    ground.display();

  drawSprites();
}