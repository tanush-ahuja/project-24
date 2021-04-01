class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density': 2.0,
      };

      this.body = Bodies.rectangle(x,y,100,60,options)
      this.width = 100;
      this.height = 60;
      World.add(world, this.body)
      
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push()
        translate(pos.x , pos.y);
        rotate(angle)
        strokeWeight(3.2)
        stroke("red");
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();


        
    
    }
}