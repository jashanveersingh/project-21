var car ,wall,thickness;
var  bullet,speed,weigth;



function setup() {

  
  createCanvas(1600,400)
  speed=random(55,90)
  weight=random(400,1500)
thickness=random(22,83)


  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor=color(255);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight = random(30,52);

}


function draw() {
  background(0); 
  
  


  hasCollided();


if (hascollided (bullet ,wall)){}

bullet.velocityX=0;
var damage=0.5* weigth* speed* spreed/(thickness*thickess*thickness);

if (damage>10)
{

    wall.shapeColor=color(255,0,0);

}



if(damage<10){
  
  

wall.shapeColor=color(0,255,0);


}







drawSprites();

}


function hasCollided(Lbullet,Lwall){

bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{

return true



}

return false;


}

