class Ball
{
  constructor(x, y, r) 
  {
    let options = {
      isStatic:false,
      restitution:1
    };
    

    
    this.body = Bodies.circle(x, y, r, options);
    
    this.r=r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    //push();
    //push helps you to apply a new change on a particular object
    ellipseMode(RADIUS);
    stroke(255);
    fill("white");
    ellipse(pos.x, pos.y, this.r, this.r);
    //pop();
    //restore original state
  }
  
}


