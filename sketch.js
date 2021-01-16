
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function preload()
{
bg = loadImage("galaxy.png");
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

 ground = new Ground(100,790,960,20);

for(var i = 0;i<=width;i=i+70){
	divisions.push(new Division(i,height-divisionHeight,10,550))
	
}



for(var j = 40;j<=width;j=j+50){
	plinkos.push(new Plinko(j,75))
}
for(var j = 15;j<=width-10;j=j+50){
	plinkos.push(new Plinko(j,175))
}
 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  
  if(frameCount%60===0){
	particles.push(new Particle(random(random(0,480),width/2+10),10,10));
}
  

 
 ground.display();



for(var i=0;i<divisions.length;i++){
	divisions[i].display();
}

for (var i=0;i<particles.length;i++){
	particles[i].display();
}

for (var i=0;i<plinkos.length;i++){
	plinkos[i].display();
}

  drawSprites();

  
  
  
 
}

