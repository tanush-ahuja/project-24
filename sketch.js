var hammer, plane, iron, sand1,sand2,sand3,sand4,sand5,stone,rubber
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400,350);
	plane = new Plane(400,690,800,20);
	iron = new Iron(300,200);
	sand1 = new Sand(305,250,10)
	sand2 = new Sand(335,245,10);
	sand3 = new Sand(340,250,10);
	stone = new Stone(400,350,100,97);
	rubber = new Rubber(200,250,70);
	sand4 = new Sand(289,230,10);
	sand5 = new Sand(320,230,10);




  
}


function draw() {

  background(0);
  Engine.update(engine)
  hammer.display()
  plane.display()
  iron.display()
  sand1.display();
  sand2.display();
  sand3.display();
  stone.display();
  rubber.display();
  sand4.display();
  sand5.display();
  drawSprites();
 
}



