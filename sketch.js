var helicopterIMG, helicopterSprite, packageSprite,packageIMG, boxBaseSprite, boxStandSprite1, boxStandSprite2 ;
var packageBody,ground, boxBase,boxStand1,boxStand2;
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
	rectMode(CENTER);
	


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200,10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});

	boxBaseSprite = createSprite(width/2, 660, 200, 20);
	boxStandSprite1 = createSprite(width/2.6, 610, 20, 100);
	boxStandSprite2 = createSprite(width/2.77+200, 610, 20, 100);
	boxBaseSprite.shapeColor=color("red");
	boxStandSprite1.shapeColor = color("red");
	boxStandSprite2.shapeColor = color("red");


	boxBase = Bodies.rectangle(width/4, 660, 200, 20 , {isStatic:true} );
	boxStand1 = Bodies.rectangle(width/4, 660, 20, 100 , {isStatic:true} );
	boxStand2 = Bodies.rectangle(width/4 + 200, 660, 20, 100 , {isStatic:true} );

	

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
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:false});
		World.add(world, packageBody);
		
	  }
	
}



