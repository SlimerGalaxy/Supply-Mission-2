var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

	
	
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	rect1 = createSprite(width/2-50,650,200,20);
	rect1.shapeColor=color("red");
	rect1Body = Bodies.rectangle(width/2-50,650,200,20, {isStatic:true});
	World.add(world, rect1Body);

	rect2 = createSprite(width/2-150,610,20,100);
    rect2.shapeColor=color("red");
	rect2Body = Bodies.rectangle(width/2-150,610,20,100, {isStatic:true});
	World.add(world, rect2Body);

	rect3 = createSprite(width/2+50,610,20,100);
	rect3.shapeColor=color("red");
	rect3Body = Bodies.rectangle(width/2+50,610,20,100, {isStatic:true});
	World.add(world, rect3Body);
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 
	Matter.Body.setStatic(packageBody,false);
    }
}



