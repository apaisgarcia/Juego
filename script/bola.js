
class Bola{

    constructor(p) {

        this.spriteBola= p. createSprite(300,400);
        this.spriteBola.addAnimation('bola','images/assets/bola/bola2.png','images/assets/bola/bola5.png');
        this.spriteBola.changeAnimation('bola');


    }
}