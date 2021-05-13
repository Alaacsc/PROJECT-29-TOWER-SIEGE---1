class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: polygon,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,23,7);
            if(pointA.x<220){
            strokeWeight(10);
            line(polygon.x-20, polygon.y, pointB.x-10, pointB.y);
            line(polygon.x-20, polygon.y, pointB.x+20, pointB.y);
            }
            else{
            strokeWeight(4);
            line(polygon.x-20, polygon.y, pointB.x-10, pointB.y);
            line(polygon.x-20, polygon.y, pointB.x+20, pointB.y);
            }
            pop();

        }
    }
    
}