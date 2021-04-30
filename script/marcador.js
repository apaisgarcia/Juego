import {jug1,jug2} from "./sketch.js";
export var timer;
const r = (p) => {

   timer=0;
    p.preload = function () {
    }
    p.setup = function () {
    p.createCanvas(300,900);

    }
    p.draw = function () {
    p.background(51);
    p.textSize(32);
    p.fill(255);
    p.text("MARCADOR", 65, 80);
    pantallaPuntuar();



    }


function pantallaPuntuar() {

    p.textSize(32);
    p.fill(0, 102, 153);
    p.text("Player 1", 85, 180);
    p.fill('green');
    p.text("Score", 35, 250);
    p.fill('green');
    p.text(jug1.points, 230, 250);
    p.fill(0, 102, 153);
    p.text("Player 2",85, 380);
    p.fill('green');
    p.text("Score", 35, 450);
    p.fill('green');
    p.text(jug2.points, 230, 450);

    p.fill(0, 102, 153);
    p.text("Time:", 85, 650);
    if ((p.frameCount % 60 === 0) && timer >= 0) {

        timer++;
    }
   let strtimer=timer.toFixed(2);

   p.text(timer, 220, 650);



}

}
var myp5 = new p5(r,'gameMarcador');