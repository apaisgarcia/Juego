
export var ArraySettings=[];

export var numeroJugadores;
export var colorFondo;
export var dificultad;
var sonido;
var fname;
var lname;
document.getElementById("boton1").onclick=comprobarSettings;
function comprobarSettings(){


     numeroJugadores=document.getElementById("numeroJugadores").value;
     console.log("num ju", numeroJugadores);
     colorFondo=document.getElementById("colorFondo").value;
    console.log("color fondo" , colorFondo);
     dificultad=document.getElementById("dificultad").value;
     sonido=document.getElementById("sonido").value;
    if (validacion() == true);
    {
        document.getElementById("colorFondo").disabled = true;
        document.getElementById("numeroJugadores").disabled = true;
        document.getElementById("dificultad").disabled = true;
        document.getElementById("sonido").disabled = true;
        document.getElementById("boton1").disabled = true;
        ArraySettings.push(false);
        ArraySettings.push(numeroJugadores);
        ArraySettings.push(colorFondo);
        ArraySettings.push(dificultad);
        ArraySettings.push(sonido);
    }
    console.log(" Array  settings en formulario" ,ArraySettings);
    console.log("estoy en settings");


}
function validacion(){

    if ( numeroJugadores===0) {
        // Se a condición non se cumpre ...
        alert ('el campo debe tener un valor');
        return false;
        console.log("error?");
    }
else if (colorFondo===0) {
        // Se a condición non se cumpre ...
        alert ('el campo debe tener un valor');
        return false;
    }

else if (dificultad===0) {
        // Se a condición non se cumpre ...
        alert ('el campo debe tener un valor');
        return false;
    }


   return true;

}
