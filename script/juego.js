const s = (p) => {
    var bola;
   var jug1 = new Player(p,"jugador1");
   var jug2 = new Player(p,"jugador2");
   var bolita=new Bola(p);

    p.preload = function () {


    }
    p.setup = function () {
        p.createCanvas(700,900);



    }
    p.draw = function () {
        p.background(155);
   //  jugador1.setSpeed(2,0);j
        moverJugadores();
     // jugador2Teclado();
       p.drawSprites();



    }

    function moverJugadores() {
        if (p.keyIsDown(p.RIGHT_ARROW)){
            console.log("voy a la derecha");
           jug1.moveRight(p);
        }
        if (p.keyIsDown(p.LEFT_ARROW)) {
            jug1.moveLeft();

        }
        if (p.keyIsDown(65)){
            console.log("voy a la derecha");
            jug2.moveLeft();
        }
        if (p.keyIsDown(68)) {
            jug2.moveRight(p);
        }

    }
    /*
    p.keyTyped = function () {

        if (p.key === 'a') {
            jug2.moveLeft();
        } else if (p.key === 'd') {
            jug2.moveRight();
        }
    }
*/



}
var myp5 = new p5(s,'myContainer');





