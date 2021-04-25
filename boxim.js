
class Boxim{
    constructor(x,y){
        var options={
            density:50
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
        this.image=loadImage("Metal Box.png")
    }
    score(){
        while(this.body.speed===20){
            score++
        }
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        

        if (this.body.speed<20) {
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            
            image(this.image,0,0,50,50);
            pop();  
        } else {
            World.remove(world,this.body);
            this.score()
        }
        
        
    }
}