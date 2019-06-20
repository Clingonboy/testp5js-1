let mazzo = [];
let players = [];
let offsetX = 0;
let offsetY = 0;

function preload() {
  // seme , valore, immagine carta
  let c1 = new Carta("B", 1, loadImage("./Carte/1B.jpg"));
  let c2 = new Carta("D", 1, loadImage("./Carte/1D.jpg"));
  let c3 = new Carta("C", 1, loadImage("./Carte/1C.jpg"));
  c1.x = 100;
  c1.y = 200;
  c2.x = 200;
  c2.y = 200;
  c3.x = 300;
  c3.y = 200;
  mazzo.push(c1);
  mazzo.push(c2);
  mazzo.push(c3);
  console.log(mazzo.length);
  m1 = {
    carte: mazzo
  };
  players.push(m1);
}

function setup() {
  canvas = createCanvas(700, 700);
  bgcolor = color(200);
}

function draw() {
  background(bgcolor);
  drawAllCardsFromConteiner(players);
  updateCarte();
}

/**
 *Metod that draw all 'cards' inside a given container arrey
 * the arrey have to contain object with a property 'carte'
 * the property carte have to be an array of 'Carta' object.
 */
function drawAllCardsFromConteiner(containers) {
  //controllo che il conteiner non sia vuoto
  if (containers.length < 1) {
    return;
  }
  containers.forEach(container => {
    if (container.carte.length > 0) {
      container.carte.forEach(carta => {
        image(carta.imgCarta, carta.x, carta.y, carta.w, carta.h);
      });
    }
  });
}

function mousePressed() {
  if (players.lenght < 1) {
    return;
  }
  players.forEach(player => {
    if (player.carte.length > 0) {
      player.carte.forEach(carta => {
        if (carta.isOnMe(mouseX, mouseY)) {
          carta.dragging = true;
          offsetX = mouseX - carta.x;
          offsetY = mouseY - carta.y;
        }
      });
    }
  });
}

function mouseReleased() {
  if (players.lenght < 1) {
    return;
  }
  players.forEach(player => {
    if (player.carte.length > 0) {
      player.carte.forEach(carta => {
        carta.dragging = false;
        
      });
    }
  });
}

function updateCarte() {
  if (players.lenght < 1) {
    return;
  }
  players.forEach(player => {
    if (player.carte.length > 0) {
      player.carte.forEach(carta => {
        if (carta.dragging) {
          carta.x = mouseX - offsetX;
          carta.y = mouseY - offsetY;
        }
      });
    }
  });
}
