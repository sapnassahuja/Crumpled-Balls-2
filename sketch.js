
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var dustbin;
var ground;


function preload()
{
	
}

function setup() {
  createCanvas(2000,700);
    engine = Engine.create();
	world = engine.world;
  paper = new Paper(100,350,70);	
  dustbin = new Dustbin(600,700);
  ground = new Ground(400,700,2000,20);
  Engine.run(engine);
}


function draw() {
  background("white");
 dustbin.display();
  paper.display();
  ground.display();
  keyPressed();
  
  
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:10,y:-25});
  }
}



