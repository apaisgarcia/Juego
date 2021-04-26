var jug1 ;
var jug2;
var bolita;
var game;
const s = (p) => {


    p.preload = function () {

        //Aquí sólo haremos un newGame

        jug1 = new Player(p,"jugador1");
        jug2 = new Player(p,"jugador2");
        bolita=new Bola(p);  //VER ESTO
      //  game= new Game(p,2,10); // en un futuro haremos el new Game
    }
    p.setup = function () {
        p.createCanvas(700,900);
        bolita.empezarJuego(p); //VER ESTO


    }
    p.draw = function () {

        p.background(155);

        moverJugadores();
     //VER LO DE ABAJO

      if(bolita.collideBorder(p)===1){
          jug2.points++;
          reiniciarPunto()
          console.log( "Puntuacion Jugador Uno" ,jug2.points);
      }else if (bolita.collideBorder(p)===2){
          jug1.points++;
          reiniciarPunto();
         console.log("Puntación Jugador Dos",jug1.points);
      }
      else if(bolita.collideBorder(p)===0){
          //console.log("choco en laterales");
      }

     // bolita.collidePlayerXY(p, jug1);
    //  bolita.collidePlayerXY(p, jug2);

        bolita.collidePlayerAngle(jug1);
        bolita.collidePlayerAngle(jug2);


        jug1.spritePlayer.debug = p.mouseIsPressed;
        jug2.spritePlayer.debug = p.mouseIsPressed;
        bolita.spriteBola.debug = p.mouseIsPressed;
       /* if(bola.collideBorders();) 1 punto jugador1
        else if puntojugador2
        else seguimos*/
     // jugador2Teclado();
       p.drawSprites();



    }
    function reiniciarPunto(){
        p.noLoop();
        jug1.posicionInicial('jugador1');
        jug2.posicionInicial('jugador2');
        bolita.empezarJuego(p);
        p.loop();

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


}
var myp5 = new p5(s,'gameContainer');





