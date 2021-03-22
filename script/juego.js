const s = (p) => {

    var jugador1;
    var jugador2;

    p.preload = function () {


    }
    p.setup = function () {
        p.createCanvas(700,1000);
      //  p.createSprite(400,200,50,50);
        jugador1=p.createSprite(100,100);
        jugador2=p.createSprite(100,600);
        jugador1.addAnimation('run','images/assets/chico/walk/Run__000.png','images/assets/chico/walk/Run__009.png');
        jugador2.addAnimation('walk','images/assets/chica/walk/Run (1).png','images/assets/chica/walk/Run (8).png');
        jugador1.changeAnimation('run');
        jugador2.changeAnimation('walk');
    }
    p.draw = function () {
        p.background(155);





       //  jugador1.setSpeed(2,0);
        if(p.keyIsDown(p.RIGHT_ARROW)){
            console.log("voy a la derecha");
            jugador1.mirrorX(+1);
            jugador1.position.x = jugador1.position.x+5;
        }
        if(p.keyIsDown(p.LEFT_ARROW)){
            console.log("voy a la iaquierda");
            jugador1.mirrorX(-1);
            jugador1.position.x= jugador1.position.x-5;
        }
        p.drawSprites();
    }





}
var myp5 = new p5(s,'myContainer');