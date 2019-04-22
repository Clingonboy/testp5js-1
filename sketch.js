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

function setup() { 
    canvas = createCanvas(400, 400);
    bgcolor = color(200);
} 

function draw() { 
   background(bgcolor);
   fill(255,0,175);
   cc = ellipse(200, 200, 50, 50);
   image(c1, 20,20, 50,133);
   image(c1, 300,300, 25, 66);
   image(mazzo[30].imgCarta, 0, 0, 50, 133);
}
