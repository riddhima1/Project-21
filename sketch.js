


//creating variables for the cars.
var bullet1;
//creating variables for the walls.
var wall1;

//creating borders.
var border1,border2,border3,border4;
var speed, weight;
var thickness,height;

function setup() {
  createCanvas(1600,800);

speed = random(55,90);
weight = random(400,1500);
thickness = random(22,83);

 // creating our walls for detecting the collision;
wall1 = createSprite(1200,300,thickness,height/2);
wall1.shapeColor = "black";

// creating our cars.
bullet1 = createSprite(150, 280,40, 10);
bullet1.shapeColor = "white";
bullet1.velocityX = speed;

//creating the borders for decoration;
border1 = createSprite(800,5,1600,10);
border1.shapeColor = "black";

border2 = createSprite(5,300,10,590);
border2.shapeColor = "black";

border3 = createSprite(1345,300,10,590                                                                                            );
border3.shapeColor = "black";

border4 = createSprite(800,600,1600,10);
border4.shapeColor = "black";

}

function draw() {
  background("teal");  

  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet1, wall1))
  {
  	bullet1.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall1.shapeColor=color(255,0,0);
		
	}

	if(damage<10)
	{
		wall1.shapeColor=color(0,255,0);
	}
	
  }

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
