const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


 var engine;
 var world;
var particles ;
var plinkos = [];
var division=[];
var divisionHeight=300;
var score =0;
var count=0;
var gameState = "PLAY";
function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


    for (var k = 0; k <=width; k = k + 80)
     {
      division.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
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
 


function draw() 
{
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  text("500",20,520)
  text("500",100,520)
  text("500",180,520)
  text("500",260,520)
  text("100",340,520)
  text("100",420,520)
  text("100",500,520)
  text("200",580,520)
  text("200",665,520)
  text("200",750,520)

  Engine.update(engine);
 

  for (var k = 0; k < division.length; k++) 
  {
   
   division[k].display();
  }
  
  for (var i = 0; i < plinkos.length; i++)
  {
   
   plinkos[i].display();
   
  }


  if(gameState==="END")
  {
    fill("red")
    textSize(50)
    text("GAMEOVER",200,200)
  }

   if(particles!=null)
   {
    particles.display();

    if(particles.body.position.y>700)
    {
     if(particles.body.position.x<300)
     {
       score=score+500
       particles=null
        if(count>=5)gameState="END"
     }
      else if(particles.body.position.x<600 && particles.body.position.x>301)
      {
        score=score+100
        particles=null
        if(count>=5)gameState="END"
      }

     else if(particles.body.position.x<900 && particles.body.position.x>601)
     {
       score=score+200
       particles=null
       if(count>=5)gameState="END"
     }
    }
   }
  
 
  }
 // ground.display();
    function mousePressed()
    {
      if(gameState!=="END")
      {
        count++;
       particles = new Particle(mouseX,10,10,10)
      }
    }
