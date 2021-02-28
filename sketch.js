
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,300,30);
	World.add(world, roof);

	startBobPositionX=width/2;
	startBobPositionY=height/4 + 500;
	bobDiameter=40;


	bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2= new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	World.add(world, rope1);

	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	World.add(world, rope2);

	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	World.add(world, rope3);

	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	World.add(world, rope4);

	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);
	World.add(world, rope5);

  
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  roof.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}


function drawLine() {
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	roofBodyX=roofBodyPosition.x + roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y + roofBodyOffset.y;
	stroke(255);
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);;
    
}


