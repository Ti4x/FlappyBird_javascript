var bird;

function setup() {
  createCanvas(400,600);
  
  bird = new Player();
}

function draw() {
  background(0); // Posizionato qui nel draw() mi consente di non avere la scia di palline
  bird.show();
  bird.update();
  bird.move();
}