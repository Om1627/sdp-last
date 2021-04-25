class Boxgreen{
    constructor(x,y,width,height){
       
        
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage("images.jpg")
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        if (this.body.speed<15) {
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("green");
            strokeWeight(5);
            image(this.image,0,0,this.width,this.height);  
            pop();  
        } else {
            World.remove(world,this.body);
            score++
           
        }
        
    }
}
