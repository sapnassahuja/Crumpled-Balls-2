class Dustbin {
    constructor(x, y) {
      
     
      this.x = x;
      this.y = y;
      this.dustbinWidth = 50;
      this.dustbinHeight = 100;
      this.bodythickness = 20;
      this.image = loadImage("dustbingreen.png")
      this.Body = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight,this.bodythickness,{isStatic:true});
      
      
      World.add(world,this.Body);
    }
    display(){
      var pos =this.Body.position;
      imageMode(CENTER);
      fill("White");
      image(this.image,pos.x, pos.y, this.width, this.height);
      
    }
  };