
const SPEED_BALL =5;

class Bola{

    constructor(p) {

        this.speed = SPEED_BALL;
       // this.spriteBola.maxSpeed =20;
        this.spriteBola= p.createSprite(500,500);
        this.spriteBola.addAnimation('bola','images/assets/bola/bola2.png','images/assets/bola/bola5.png');
        this.spriteBola.changeAnimation('bola');


    }

    empezarJuego(p){

        this.spriteBola.position.x =p.width/2;
        this.spriteBola.position.y =p.height/2;
        let  orientacion=p.random(0,1);
      let angle=p.random(210,330);

       let angle2=p.random(30,150);
        this.spriteBola.setSpeed(this.speed,angle2);

       // console.log("orientacion" ,orientacion);
       if(orientacion< 0.50) //angulo hacia abajo Jugador 1
        {
         this.spriteBola.setSpeed(this.speed,angle);
          //  console.log(" angle " ,angle);

        }
        else if(orientacion>=0.50) //angulo hacia arriba jugador 2
        {
            this.spriteBola.setSpeed(this.speed,angle2);
           // console.log(" angle2 " ,angle2);
        }
    }

   collideBorder(p)
    {

        if ( this.spriteBola.position.x < (this.spriteBola.width/2) ){
            //borde derecho
            this.spriteBola.velocity.x = (this.spriteBola.velocity.x)*-1;
           // angle =150;
           // this.spriteBola.setSpeed(this.speed,angle )
            return 0;
        }
        else if (this.spriteBola.position.x > p.width - (this.spriteBola.width/2))
        {
            this.spriteBola.velocity.x = (this.spriteBola.velocity.x)*-1;
            //this.spriteBola.setSpeed(this.speed,angle);
            return 0;
        }
        else if ( this.spriteBola.position.y < this.spriteBola.height/2){
            this.spriteBola.velocity.y = (this.spriteBola.velocity.y)*-1;
            return 1;
        }
        else if ( this.spriteBola.position.y > p.height - (this.spriteBola.height/2)){
          //  console.log("Hola, ",p.height - (this.spriteBola.height/2));
           // console.log("fallo antes ",this.spriteBola.velocity.y);
            this.spriteBola.velocity.y = p.abs ((this.spriteBola.velocity.y))*-1;
            //this.spriteBola.velocity.y =-1;
           // console.log("fallo despues",this.spriteBola.velocity.y);
            return 2;


           // this.spriteBola.velocity.y =-3;


        }
    }



}