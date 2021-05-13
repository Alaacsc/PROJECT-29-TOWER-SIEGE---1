class Polygon{
    constructor(x, y,width,height) {
        var options = {
                     
        }
        //polygon_img = loadImage("polygon.png");
        this.body = Bodies.circle(x, y,20,20,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        Matter.Body.setAngle(this.body, angle);
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img,polygon.position.x,polygon.position.y,40,40);
        pop();
      }
}
