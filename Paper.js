class Paper {
    constructor(x, y,r) {
     
        var options ={
         isStatic:false,
         restitution:0.2,
         friction:0.3,
         density:1.2
        }
        this.r = r;
      this.x = x;
      this.y = y;
        this.image = loadImage("paper.png");
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("white");
      imageMode(CENTER);
      image(this.image,0, 0,this.r,this.r);
    pop();
     
    }
  }