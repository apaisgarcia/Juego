// noinspection ES6UnusedImports

export var jug1;
export var jug2;
var bolita;
var game;
var img;
var img2;

import {timer} from "./marcador.js" ;
import {ArraySettings,colorFondo,numeroPuntos,dificultad} from "./formulario.js" ;


const s = (p) => {


    p.preload = function () {

        //Aquí sólo haremos un newGame

        jug1 = new Player(p,"jugador1");
        jug2 = new Player(p,"jugador2");

        bolita=new Bola(p);  //VER ESTO

      //  game= new Game(p,2,10); // en un futuro haremos el new Game
    }
    p.setup = function () {
        img=p.loadImage('images/assets/desierto.png');
        img2=p.loadImage('images/assets/galactico.png');
        p.createCanvas(700,900);

        bolita.empezarJuego(p); //VER ESTO
        console.log(" console Array ",ArraySettings);

    }
    p.draw = function () {

     /*   if(araystrns[0] == true){
            puedo jugar

        }
        else if(dsfjdsklldfs == false)
        {
            fondo y mensaje con p.text
        }*/
       // console.log(" console Array draw ",ArraySettings);
        if(colorFondo==1){

            p.background(img);
            console.log("valor c " ,colorFondo);
        }else if (colorFondo==2) {
            p.background(img2);
            console.log("valor " ,colorFondo);
        }else{
            p.background(51);
        }

        moverJugadores();
     //VER LO DE ABAJO

      if(bolita.collideBorder(p)===1){
          jug2.points++;
          console.log("puntuacion 2", jug2.points);
          if(numeroPuntos==1){
                 if(jug2.points===10){
                     console.log("dificultad ", dificultad);
                 // let opcion = confirm("FELICIDADES  Player 2, HAS GANADO !!! \n" +"PUNTUACIÓN : "+ jug2.points );

                  setTimeout(confirm("FELICIDADES  Player 2, HAS GANADO !!! \n" +"PUNTUACIÓN : "+ jug2.points) , 1000);
                  //Gana jugador 2
                  reiniciarPartida();
                 }
                 else {

                     reiniciarPunto()
                 }
         }else if (numeroPuntos==2) {
              if (jug2.points === 5) {
                  console.log("dificultad ", dificultad);
                  // let opcion = confirm("FELICIDADES  Player 2, HAS GANADO !!! \n" +"PUNTUACIÓN : "+ jug2.points );

                  setTimeout(confirm("FELICIDADES  Player 2, HAS GANADO !!! \n" + "PUNTUACIÓN : " + jug2.points), 1000);
                  //Gana jugador 2
                  reiniciarPartida();
              } else {

                  reiniciarPunto()
              }
          }else if(numeroPuntos==3){
              console.log("dificultad ", dificultad);
                  if(jug2.points===3){
                      // let opcion = confirm("FELICIDADES  Player 2, HAS GANADO !!! \n" +"PUNTUACIÓN : "+ jug2.points );

                      setTimeout(confirm("FELICIDADES  Player 2, HAS GANADO !!! \n" +"PUNTUACIÓN : "+ jug2.points) , 1000);
                      //Gana jugador 2
                      reiniciarPartida();
                  }
                  else {

                      reiniciarPunto()
                  }
              }


      }else if (bolita.collideBorder(p)===2){
          jug1.points++;
          console.log("puntuacion 1", jug1.points);
          if (jug1.points===10){
            //  let opcion = confirm(" FELICIDADES Player 1 , HAS GANADO !!! \n" +" PUNTUACIÓN : "+ jug1.points );

             // setTimeout(reiniciarPartida() , 2000);
              setTimeout(confirm("FELICIDADES  Player 1, HAS GANADO !!! \n" +"PUNTUACIÓN : "+ jug1.points ) , 1000);
              reiniciarPartida();
          }else{
              reiniciarPunto();
          }

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

       p.drawSprites();



    }
    function reiniciarPartida(){
        p.noLoop();
        jug1.posicionInicial('jugador1');
        jug2.posicionInicial('jugador2');
        bolita.empezarJuego(p);
        jug1.points=0;
        jug2.points =0;


        p.loop();

    }
    function reiniciarPunto(){
        p.noLoop();
        jug1.posicionInicial('jugador1');
        jug2.posicionInicial('jugador2');
        bolita.empezarJuego(p);
        p.loop();

    }
    function moverJugadores(velocidad) {
        if (p.keyIsDown(p.RIGHT_ARROW)){
            if(dificultad==1){
                jug1.moveRight(p,7);
                console.log("voy a la derecha" ,dificultad);

            }
            else if(dificultad==2){
                jug1.moveRight(p,13);
                console.log("voy a la derecha" ,dificultad);
            }
            else if(dificultad==3){
                jug1.moveRight(p,18);
                console.log("voy a la derecha" ,dificultad);
            }



        }
        if (p.keyIsDown(p.LEFT_ARROW)) {
            if(dificultad==1){
            jug1.moveLeft(7);
            }else if(dificultad==2){
                jug1.moveLeft(13);

            }else if(dificultad==3){
                jug1.moveLeft(18);
            }

        }
        if (p.keyIsDown(65)){
            if(dificultad==1){
                jug2.moveLeft(7);
            }else if(dificultad==2){
                jug2.moveLeft(13);

            }else if(dificultad==3){
                jug2.moveLeft(18);
            }
        }
        if (p.keyIsDown(68)) {
            if(dificultad==1){
                jug2.moveRight(p,7);
            }else if(dificultad==2){
                jug2.moveRight(p,13);

            }else if(dificultad==3){
                jug2.moveRight(p,18);
            }
        }

    }


}
var myp5 = new p5(s,'gameContainer');





