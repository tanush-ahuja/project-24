class Rubber {
    constructor(x, y,r) {
      var options = {
        'restitution' : 0.3,
        'friction': 5.0,
        'density': 1.0,

    }
    this.x = x
    this.y = y
    this.r = r
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
    World.add(world,this.body)
}
display(){
var rubberPos = this.body.position;
push()
translate(rubberPos.x,rubberPos.y);
ellipseMode(CENTER);
strokeWeight(3)
stroke("darkpurple");
fill("darkblue");
ellipse(0,0,this.r,this.r);
pop()

}
}