const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var ground1, division
var ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9, ground10;
var particle
var engine, world
var END = 0
var PLAY = 1
var START = 2
var gameState = START
var thescorething
var amountofthingsleft = 0

function preload(){

}

function setup() {
   createCanvas(800, 800);
   engine = Engine.create();
   world = engine.world;
   ground1 = new Ground(40,height,80,20);
   ground2 = new Ground(120,height,80,20)
   ground3 = new Ground(200,height,80,20)
   ground4 = new Ground(280,height,80,20)
   ground5 = new Ground(360,height,80,20)
   ground6 = new Ground(440,height,80,20)
   ground7 = new Ground(520,height,80,20)
   ground8 = new Ground(600,height,80,20)
   ground9 = new Ground(680,height,80,20)
   ground10 = new Ground(760,height,80,20)
   for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    { 
      plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("score:"+ score, 40, 45)
  text("500",25,600)
  text("500",105,600)
  text("500",185,600)
  text("100",265,600)
  text("100",345,600)
  text("100",425,600)
  text("100",505,600)
  text("200",585,600)
  text("200",665,600)
  text("200",745,600)
 //text("Score : "+score,20,30);
  Engine.update(engine);
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  if(gameState == END){
    text("Game has ended", 350, 400)
  }
  if(particle != null){
    particle.display();
    if(particle.body.position.y > 500){
     if(particle.body.position.x > 240 && particle.body.position.x < 660){
       score = score + 100
       particle = null
     }
     if(particle.body.position.x > 660){
      score = score + 200
      particle = null
    }
    if(particle.body.position.x < 240){
      score = score + 500
      particle = null
    }
    }
  }
   ground1.display();
   ground2.display();
   ground3.display();
   ground4.display();
   ground5.display();
   ground6.display();
   ground7.display();
   ground8.display();
   ground9.display();
   ground10.display();
}

function mousePressed(){
  if(gameState == START&&amountofthingsleft < 5){
   particle = new Particle(mouseX, 10,10);
   amountofthingsleft = amountofthingsleft + 1
  }
  else{
    gameState = END
  }
}