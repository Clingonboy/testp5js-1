let c1;
let percorsoFile = './Carte/';
let estensione = '.jpg';
let semi = ['B', 'C', 'D', 'S'];
let nomiFileCarte = [];
let mazzo = [];
for (let x in semi){
    for(let y = 1; y <= 13; y++){
        nomiFileCarte.push(percorsoFile + y + semi[x] + estensione);
    }
}


/*
Funzione che carica le carte e popola il mazzo
questa funzione fa parte della libreria p5js
*/
function preload(){
    c1 = loadImage('./Carte/1B.jpg');
    console.log(nomiFileCarte);
    for (let x in semi){
        for(let y = 1; y <= 13; y++){
            mazzo.push(new Carta(semi[x], y, loadImage(percorsoFile + y + semi[x] + estensione)));
        }
    }
    console.log(mazzo.length);
}

/*
Funzione che inizializza lo stato iniziale
questa funzione fa parte della libreria p5js
*/
function setup() { 
    canvas = createCanvas(400, 400);
    bgcolor = color(200);
} 

/*
Funzione che continua a ridiregnare il camva,
è in continuo loop, ogni volta che viene cambiato
qualcosa il canvas si aggiorna.
questa funzione fa parte della libreria p5js
*/
function draw() { 
   background(bgcolor);
   fill(255,0,175);
   cc = ellipse(200, 200, 50, 50);
   image(c1, 20,20, 50,133);
   image(c1, 300,300, 25, 66);
   image(mazzo[30].imgCarta, 0, 0, 50, 133);
   drawAllCards()
}

/*
Funzione di test che disegna tutte le carte in ordine
partendo dal punto 0,0 
*/
function drawAllCards(){
    let x1 = 0
    let y1 = 0
    mazzo.forEach((carta) =>{
        image(carta.imgCarta, x1, y1, 25, 66)
        carta.x = x1
        carta.y = y1
        x1 += 25
        if(x1 >= 325){
            x1 = 0
            y1 += 70
        }
    })
}
