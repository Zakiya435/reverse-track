var car,enemy;
var gameState = 1;
function preload()
{
  bg = loadImage("track.png");
}
function setup() 
{
  createCanvas(400, 400);
  car = new Cars();
  enemy = new Enemy();
}

function draw() 
{
  background(bg);
  car.display();
  enemy.display();
  if(gameState === 1)
  {
    car.x = mouseX;
    enemy.y += 10;
  }
  
  if(enemy.y == 400) 
  {
    enemy.y = -20;
    enemy.x = Math.round(random(10, 390));
  }
  
  if(enemy.x - car.x < car.width / 2 + enemy.width / 2 &&
    car.x - enemy.x < car.width / 2 + enemy.width / 2 &&
    enemy.y - car.y < car.height / 2 + enemy.height / 2 &&
    car.y - enemy.y < car.height / 2 + enemy.height / 2) 
  {

      gameState = 0;
  }
  if(gameState === 0)
  {
    textSize(30);
    fill("white");
    text("YOU LOSE!!",100,200);
  }
}