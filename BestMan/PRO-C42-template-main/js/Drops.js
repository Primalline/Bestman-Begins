class Drop{
    constructor(x, y){
        var options = {
            isStatic : false
        }

        this.drop = Bodies.circle(x, y, 10, options);
        this.radius = 10;
        World.add(world, this.drop);
    }

    display(){
        var pos = this.drop.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 10, 10);
    }
}