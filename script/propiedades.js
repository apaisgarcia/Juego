function propiedades(){

    alert(
        " Navegador : " + navigator.appCodeName + "\n" +
        " Idioma : " + navigator.language + "\n" +
        " Version Navegador : " + navigator.appVersion + "\n" +
        " Navegador Online : " + navigator.onLine + "\n" +
        " Cookies Disponibles : " + navigator.cookieEnabled + "\n" +
        " Identificación del Usuario : " + navigator.userAgent


    );


}
function  valida_envia() {
    if(document.fvalida.name.value.length==0){
        alert("Tiene que escribir su nombre")
        document.fvalida.name.focus()
        return 0;

    }
    if(document.fvalida.surname.value.length==0){
        alert("Tiene que escribir su apellido")
        document.fvalida.surname.focus()
        return 0;

    }

        let email=document.fvalida.email.value

        email =pruebaemail(email)
        document.fvalida.email.value=email


    let nif=document.fvalida.nif.value

    nif =isValidNif(nif)






    let edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value=edad
    if (edad==""){
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    }else{
        if (edad<=0 || edad>=105){
            alert("Debe estar entre 1 y 105 años")
            document.fvalida.edad.focus()
            return 0;
        }
    }
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
    location.href = "juego.html";
}
function isValidNif(abc){
    dni=abc.substring(0,abc.length-1);
    let i=abc.charAt(abc.length-1);
    if (!isNaN(i)) {
        //alert('Falta la letra');
        return false;
    }else{
        cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
        posicion = dni % 23;
        letra = cadena.substring(posicion,posicion+1);
        if (letra!=i.toUpperCase()){
            alert("Nif no válido, puedes entrar igual en el Juego");
            document.fvalida.nif.focus()
            return 0;

        }
    }
    //alert("Nif válido")
    return true;
}
function validarEntero(valor){
    if(valor >=1){
        return valor;
    }else
    {
        return valor;
    }
}
function pruebaemail (valor){
    let re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(!re.exec(valor)){

        alert('email no valido, pero puedes acceder igual al juego');
        document.fvalida.email.focus()
        return 0;
    }

}
function autor() {

    alert(
        " Autora: Alia Pais 2021 " + "\n" +
        " Idioma Juego: Castellano " + "\n" +
        " Información sobre el Código en GitHub :https://apaisgarcia.github.io/Juego " + "\n" +
        " Realizado para : M6- Desarrollo Web Entorno Cliente " + "\n"

    );

}
function cformulario() {
    alert(
        "Debes cubrir el formulario para entrar en el Juego" + "\n"+
        " GRACIAS"+ "\n"
    );

}
