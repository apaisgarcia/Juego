
export var ArraySettings=[];

export var numeroPuntos;
export var colorFondo;
export var dificultad;
var sonido;
var fname;
var lname;
document.getElementById("boton1").onclick=comprobarSettings;
function comprobarSettings(){


     numeroPuntos=document.getElementById("numeroPuntos").value;

     colorFondo=document.getElementById("colorFondo").value;

     dificultad=document.getElementById("dificultad").value;
     sonido=document.getElementById("sonido").value;
    if (validacion() == true);
    {
        document.getElementById("colorFondo").disabled = true;
        document.getElementById("numeroPuntos").disabled = true;
        document.getElementById("dificultad").disabled = true;
        document.getElementById("sonido").disabled = true;
        document.getElementById("boton1").disabled = true;
        ArraySettings.push(false);
        ArraySettings.push(numeroPuntos);
        ArraySettings.push(colorFondo);
        ArraySettings.push(dificultad);
        ArraySettings.push(sonido);
    }
    console.log(" Array  settings en formulario" ,ArraySettings);
    console.log("estoy en settings");


}
function validacion(){

    if ( numeroPuntos===0) {
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
