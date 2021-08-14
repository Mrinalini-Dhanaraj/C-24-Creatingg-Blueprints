const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

let engine;
let world;

var tower;
var cannon;
var ground;
var angle;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  angle = -PI/4;

  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(0,height-1, width*2,1);
  cannon = new Cannon(180, 110, 100, 50, angle);

}

function draw() 
{
  background(189);
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);
    tower.display();
    ground.display();
    cannon.display();

 
}

