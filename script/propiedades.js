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
    if(document.fvalida.email.value.length==0){
        alert("Tiene que escribir su email")

        document.fvalida.email.focus()
        return 0;

    }
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
    location.href = "juego.html";
}
function autor() {

    alert(
        " Autora: Alia Pais 2021 " + "\n" +
        " Idioma Juego: Castellano " + "\n" +
        " Información sobre el Código en GitHub :https://apaisgarcia.github.io/Juego " + "\n" +
        " Realizado para : M6- Desarrollo Web Entorno Cliente " + "\n"

    );

}