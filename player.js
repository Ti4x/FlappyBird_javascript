function Player() {

  this.x = 80;
  this.y = height / 2;
  
  this.gravity = 5;
  this.speed = 2;
  
  this.dim = 20;
  
  this.show = function() {
    fill(255);
    ellipse(this.x,this.y,this.dim,this.dim);
  }
  
  this.update = function() {
    //console.log("[MOVE] OK")
    if (this.y < height) {
      this.y += this.gravity;
      console.log("[GRAVITY] OK: " + this.gravity);
    }
    
  }

  this.move = function() {
    function keyPressed() {
      console.log("[KEYPRESSERD] OK");
      /* Pressione dello spazio (keyCode = 32 --> oppure keyCode = spacebar) */
      if (keyCode == SPACEBAR) {
        console.log("[SPACE] OK")
        this.y += this.speed;
      }
    }
  }
  
}