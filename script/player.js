
const POINTS=0;
const HEIGHT=110;
const WIDTH=80;

class Player {
    constructor(p,strPlayer) {
        this.name = name;
        this.points = POINTS;
        this.velocidad=62;
      //  this.spritePlayer=this.spritePlayer;


        if (strPlayer=== "jugador1") {

            this.spritePlayer= p.createSprite(300, 100);
            this.spritePlayer.addAnimation('run', 'images/assets/chico/walk/Run__000.png', 'images/assets/chico/walk/Run__008.png');
            this.spritePlayer.changeAnimation('run');
        }else if (strPlayer ==="jugador2") {
            this.spritePlayer =p.createSprite(350, 750);

            this.spritePlayer.addAnimation('walk', 'images/assets/chica/walk/Run (1).png', 'images/assets/chica/walk/Run (8).png');
        //    this.spritePlayer.changeAnimation('walklento');
            this.spritePlayer.changeAnimation('walk');
            this.spritePlayer.animation.frameDelay= 13;
           // this.spritePlayer.walk.= 1;
        } else {
            console.log('Jugador no valido');
        }

    }

    moveLeft() {
        if(this.spritePlayer.position.x >this.velocidad) {
            this.spritePlayer.mirrorX(-1);
            this.spritePlayer.position.x = this.spritePlayer.position.x - 5;
        }
    }

    moveRight(p) {

        if(this.spritePlayer.position.x < p.width - this.velocidad -8) {
            this.spritePlayer.mirrorX(+1);
            this.spritePlayer.position.x = this.spritePlayer.position.x + 5;
        }
    }
}