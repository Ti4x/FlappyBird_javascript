function Player() {

  this.x = 80;
  this.y = height / 2;

  this.gravity = 0.6;
  this.speed = 0;
  this.upForce = -20;

  this.dim = 20;

  this.show = function() {
    fill(255);
    ellipse(this.x,this.y,this.dim,this.dim);
  }

  this.update = function() {
    this.speed += this.gravity;
    this.y += this.speed;

    //console.log("[MOVE] OK")
    if (this.y > height) {
      //console.log("[TERRENO] Urtato il terreno");
      this.speed = 0;
      this.y = height;
    }

    if (this.y < 0) {
      //console.log("[TERRENO] Urtato il bordo");
      this.speed = 0;
      this.y = 0;
    }
  }

  this.jump = function() {
    //console.log("[SPACE] OK")
    this.speed += this.upForce;
  }

}
