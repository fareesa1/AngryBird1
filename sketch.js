const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var bird2;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;
var bgImage = "sprites/bgimage.jpg"

function preload() {
   backgroundImg = loadImage("sprites/bgimage.jpg")
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    pig1.image = loadImage("sprites/Qeen_Pig.png")
    
    log1 = new Log(810,260,300, PI/2);

   

    bird = new Bird(200,50);
    bird1 = new Bird(150,150);

bird2 = new Bird(100,150)
bird.image = loadImage("sprites/birdYellow.webp")

    bird2 = new Bird(100,150);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
if (bird.body.position.x > 500){bird.image = loadImage("sprites/birdYellowHappy.webp")}


    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

   
    
    bird.display();
    bird1.display()
    bird2.display()
    platform.display();
    //log6.display();
    slingshot.display();
    console.log(bird.body.speed);    
}

function mouseDragged(){      
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}


