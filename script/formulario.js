
function comprobarSettings(){

    let ArraySettings=[];

    let numeroJugadores=document.getElementById("numeroJugadores").value;
    let colorFondo=document.getElementById("colorFondo").value;
    let dificultad=document.getElementById("dificultad").value;
    let sonido=document.getElementById("sonido").value;

    ArraySettings.push(false);
    ArraySettings.push(numeroJugadores);
    ArraySettings.push(colorFondo);
    ArraySettings.push(dificultad);
    ArraySettings.push(sonido);


    console.log(" Array " ,ArraySettings);
}
