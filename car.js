class Cars
{
  constructor()
  {
    this.x = 200;
    this.y = 300;
    this.width = 50;
    this.height = 90;
    this.image = loadImage("car.png");
  }
  display()
  {
    image(this.image,this.x,this.y,this.width,this.height);
  }
}