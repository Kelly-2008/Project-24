
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var side1, side2, side3;

var paper;

var ground;

function setup() {
	createCanvas(1200 , 700);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(70,645,10);
  
  ground = new Ground(400, 680, 1700, 20);

  side1 = new Dustbin(1000, 605, 20, 130);
  side2 = new Dustbin(1170, 605, 20, 130);
  side3 = new Dustbin(1085, 660, 150, 20);

	Engine.run(engine);
  
}


function draw() {
 
  background("olive");
  Engine.update(engine);

  paper.display();

  ground.display();

  side1.display();
  side2.display();
  side3.display();

  keyPressed();

}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
     Matter.Body.applyForce(paper.body, paper.body.position, {x:0.5, y: -1.5});
	}
}