class Dustbin {
    constructor(x, y) {
      
      
     
      this.x = x;
      this.y = y;
      this.dustbinWidth = 100;
      this.dustbinHeight = 100;
      this.bodythickness = 20;
      this.image = loadImage("dustbingreen.png");
      this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth,this.bodythickness,{isStatic:true});
      this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight,this.bodythickness,this.dustbinHeight,{isStatic:true});
      this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight,this.bodythickness,this.dustbinHeight,{isStatic:true});
      
      World.add(world,this.leftBody);
      World.add(world,this.rightBody);
      World.add(world,this.bottomBody);
    }
    display(){
      var posBottom = this.bottomBody.position;
      var posLeft = this.leftBody.position;
      var posRight = this.rightBody.position;
      push(); 
      translate(posLeft.x,posLeft.y); 
      rectMode(CENTER); 
      angleMode(RADIANS);
       fill("white"); 
       rotate(this.angle);
       pop ();

       push(); 
      translate(posRight.x,posRight.y); 
      rectMode(CENTER); 
      angleMode(RADIANS);
       fill("white"); 
       rotate(-1*this.angle);
       pop ();

       push(); 
      translate(posBottom.x,posBottom.y); 
      rectMode(CENTER); 
       fill("white"); 
       image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
       pop ();

      
      
    }
  };