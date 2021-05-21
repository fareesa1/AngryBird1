class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/Stone_log.png");
    Matter.Body.setAngle(this.body, angle);
  }
}