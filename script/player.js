
const POINTS=0;
const HEIGHT=110;
const WIDTH=80;

class Player {
    constructor(p,strPlayer) {
        this.name = name;
        this.points = POINTS;
      //  this.spritePlayer=this.spritePlayer;


        if (strPlayer=== "jugador1") {

            this.spritePlayer= p.createSprite(100, 100);
            this.spritePlayer.addAnimation('run', 'images/assets/chico/walk/Run__000.png', 'images/assets/chico/walk/Run__009.png');
            this.spritePlayer.changeAnimation('run');
        }else if (strPlayer ==="jugador2") {
            this.spritePlayer =p.createSprite(100, 800);
            this.spritePlayer.addAnimation('walk', 'images/assets/chica/walk/Run (1).png', 'images/assets/chica/walk/Run (8).png');
            this.spritePlayer.changeAnimation('walk');
        } else {
            console.log('Jugador no valido');
        }

    }

    moveLeft() {

        this.spritePlayer.mirrorX(-1);
        this.spritePlayer.position.x = this.spritePlayer.position.x - 5;

    }

    moveRight() {


       this.spritePlayer.mirrorX(+1);
       this.spritePlayer.position.x = this.spritePlayer.position.x  + 5;

    }
}