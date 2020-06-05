class Enemy
{
  constructor()
  {
    this.x = random(50,350);
    this.y = -100;
    this.width = 200;
    this.height = 120;
    this.image = loadImage("enemy.png");
  }
  display()
  {
    image(this.image,this.x,this.y,this.width,this.height);
  }
}