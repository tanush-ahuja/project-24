class Plane {
    constructor(x, y,width,height){
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        
        strokeWeight(2)
        stroke("brown");
        fill("orange")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)

    }
}
