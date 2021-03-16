const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myEngine, myWorld, ground

function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200, 390, 400, 20, options);
  World.add(myWorld,ground)

  var anyname={
    restitution:1
  }
  ball=Bodies.circle(200,50,20,anyname)
  World.add(myWorld,ball)
}

function draw() {
  background("grey");

  Engine.update(myEngine)

 fill("red")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

  fill("teal")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}