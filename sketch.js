
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
//only to store img and animations
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	//Create the Bodies Here.
	ball=Matter.Bodies.circle(500,400,10)
	World.add(world,ball);

	ground1=new Ground(600,550,1200,20)
	wall1=new Ground(1000,500,10,80)
	wall2=new Ground(1100,500,10,80)
	ball =new Ball(300,100,10)
	
	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}

function draw() {
rectMode(CENTER);
ellipseMode(RADIUS);
background(0);
  
ground1.show()
wall1.show()
wall2.show()
ball.show()
Engine.update(engine);
drawSprites();

}

function keyPressed() { 
	if (keyCode==LEFT_ARROW){
	Matter.Body.applyForce(ball,{x:-0.05,y:0}); 
  }}

  function vForce() { 
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); 
  }