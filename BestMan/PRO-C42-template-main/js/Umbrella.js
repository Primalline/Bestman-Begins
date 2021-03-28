class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        //load Image for BestMan
        this.image = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", "Walking Frame/walking_3.png", "Walking Frame/walking_4.png");
        this.image2 = loadImage("bat/Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        animation(this.image,pos.x,pos.y+70,50,50);

        if(frameCount > 200){
            image(this.image2, pos.x, pos.y+70, 300,700);
        }
    }
}
