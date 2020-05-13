const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,body;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options={
        restitution: 1.5
    }

    ball = Bodies.circle(300,200,20,ball_options);
    World.add(world,ball);
    
    var body_options ={
        restitution: 1.95
    }

    body = Bodies.rectangle(100,150,100,40,body_options);
    World.add(world,body);

    console.log(body);
}

function draw(){
    background(0);
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    rectMode(CENTER);
    rect(body.position.x,body.position.y,75,15);
}
