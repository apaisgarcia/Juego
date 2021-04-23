const TIME_GAME=50;
const POINTS_WIN_GAME=10;
class Game  {

    constructor(p, numberPlayers,difficultLevel) {

        this.playerOne = new Player(p, "Jugador1");
        this.playerTwo=new Player(p,"Jugador2");
        this.pointsWinGame=POINTS_WIN_GAME;
    //    this.backgroundImage
    //    this.backgroundMusic
        this.numberPlayers=numberPlayers;
        this.difficultLevel=difficultLevel;
        this.ballGame = new Bola(p);
        this.timeGame= TIME_GAME;

    }


}