function Ostacolo() {

  this.x = width;
  /* Altezza del buco degli ostacoli */
  this.h = 180;
  /* Larghezza dell'ostacolo */
  this.d = 20;

  this.speed = 2;

  this.a = random(10, height - this.h);
  this.b = (height - this.h) - this.a;


  this.show = function() {
    /* Calcolo la dimensione dell'oggetto */
    fill(255);
    /* Ostacolo inferiore */
    rect(this.x, height, this.d, -this.b);
    /* Ostacolo superiore */
    rect(this.x, 0, this.d, this.a);
    //console.log("a: " + this.a + ", b: " + this.b + " TOT: "+ (this.a + this.b + this.h));
  }

  this.update = function() {
    this.x -= this.speed;
  }
}
