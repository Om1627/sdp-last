const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var score=0;
var gamestate="onSling";
var bg;

function preload(){
  bg=loadImage("bg.png")
}
function setup() {
  createCanvas(1200,700);
 engine=Engine.create();
 world=engine.world;
 score=0;
 ball = new Particle(110,450,35);
slingshot = new Slingshot(ball.body,{x:100,y:475});
ground = new Ground(600,650,1200,20);
box1 = new Boxgreen(400,600,80,80);
box2 = new Boxgreen(480,600,80,80);
box3 = new Boxgreen(560,600,80,80);
box4 = new Box(440,505,70,70);
box5 = new Box(510,505,70,70);
box6 = new Box(475,450,60,60);
ground2 = new Ground(800,270,800,20);
box7 = new Boxorg(680,230,80,80);
box8 = new Boxorg(740,230,80,80);
box9 = new Boxorg(800,230,80,80);
box10 = new Boxorg(860,230,80,80);
box11= new Boxorg(920,230,80,80);
box12 = new Boxgreen(740,150,60,60);
box13 = new Boxgreen(800,150,60,60);
box14 = new Boxgreen(860,150,60,60);
box15 = new Box(770,90,60,60);
box16 = new Box(830,90,60,60);
box17 = new Box(800,30,60,60);
box18 = new Boxim(1100,230);
box19 = new Boxim(1050,230);
box20 = new Boxim(1000,230);
box21 = new Boxim(1050,180);
box22 = new Boxim(1050,130);
box23 = new Boxim(1050,80);
box24 = new Boxim(1050,30);
box25 = new Boxim(500,30);
box26 = new Boxim(500,80);
box27 = new Boxim(500,130);
box28 = new Boxim(500,180);
box29 = new Boxim(550,230);
box30 = new Boxim(450,230);
box31 = new Boxim(300,600);
box32 = new Boxim(500,230);
box33 = new Boxim(300,550);
box34 = new Boxim(300,500);
box35 = new Boxim(300,450);
box36 = new Boxim(300,400);
box37 = new Boxim(300,350);
}



function draw() {
  background(bg); 
  text("Score "+ score,width-300,50)
  Engine.update(engine); 
 
  ground.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  ball.display();
  slingshot.display();

}
   
function mouseDragged(){
  if(gamestate!="launched"){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
  
}
function mouseReleased(){
  slingshot.fly();              
  gamestate="launched"                             
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(ball.body,{x:100,y:475})
    slingshot.attach(ball.body);
    
    gamestate="onSling"
    
  }
}











