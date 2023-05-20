


let tituloMensaje=document.getElementById("titulo-mensaje");
let parrafo=document.getElementById("parrafo");
let muñeco=document.getElementById("muñeco");
let btnCopiar=document.getElementById("copiar");

function encriptar() {

    let mensaje = document.getElementById("mensaje").value;
    mensaje=mensaje.toLowerCase();

    let mensajeEncriptado = mensaje
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (mensaje.length != 0) {
        document.getElementById("mensaje").value = mensajeEncriptado;
        tituloMensaje.textContent = " Texto encriptado con exito";
        tituloMensaje.style.color = "#343A40"
        parrafo.textContent = "";
        muñeco.src = "img/cerrado.jpg";
        muñeco.style.width = "90%";
        muñeco.style.borderRadius = "50%";
        btnCopiar.style.display = "block";

    } else {
        tituloMensaje.textContent = " Debes ingresar un texto";
        tituloMensaje.style.color = "red"
    }

}

function desencriptar(){
    
    let mensaje = document.getElementById("mensaje").value;
    let mensajeDesencriptado =mensaje
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (mensaje.length != 0) {
        document.getElementById("mensaje").value = mensajeDesencriptado;
        tituloMensaje.textContent = " Texto desencriptado con exito";
        tituloMensaje.style.color = "#343A40"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        muñeco.src = "img/abierto.jpg";
        muñeco.style.width = "90%";
        btnCopiar.style.display = "block";

    } else {
        tituloMensaje.textContent = " Debes ingresar un texto encriptado";
        tituloMensaje.style.color = "red"
    }
    
 }

function copiar(){
    let mensajeCopiado=document.getElementById("mensaje").value;
    navigator.clipboard.writeText(mensajeCopiado);
    console.log(mensajeCopiado);
}



 
