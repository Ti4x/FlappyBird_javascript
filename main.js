var bird;
var wall = [];
var pause;

function setup() {
  createCanvas(400,600);

  bird = new Player();
  wall.push(new Ostacolo());
  pause = false;
}

function draw() {
  //console.log("Array wall: " + wall.length);
  background(0); // Posizionato qui nel draw() mi consente di non avere la scia di palline

  /* Player */
  bird.show();


    bird.update();

    /* Ostacoli */

    if (frameCount % 120 == 0) {
      wall.push(new Ostacolo());
    }

    for (var i = 0; i < wall.length; i++) {

      wall[i].show();
      wall[i].update();

      /* Distruggo fli ostacoli fuori dalla mappa */
      if (wall[i].x < -50) {
        wall.splice(i, 1);
        //console.log("Uscito: " + i);
      }
    }



}

function keyPressed() {
  //console.log("[KEYPRESSERD] OK");
  /* Pressione dello spazio (keyCode = 32 --> oppure keyCode = spacebar) */
  if (keyCode == 32) {
    bird.jump();
  }


}
