//archivo en el que muestra el uso de export general

function hola6() {
    var linea = document.createElement("hr");
    var parrafo = document.createElement("div");
    var texto = document.createTextNode("Haciendo uso del import * y del export {...}; hola6, aparezco al final por que fue por body.append, desde modulo4.js");
    document.body.append(linea);
    parrafo.appendChild(texto);
    document.body.append(parrafo);
    //se agrega el parrafo hasta el final del documento html
}

function mensaje(){
    var msj = document.createElement("div");
    var txt = document.createTextNode("mensaje1,esta funcion esta en modulo4.js");
    msj.appendChild(txt);
    document.body.append(msj);
}

function mensaje2(){
    var msj = document.createElement("div");
    var txt = document.createTextNode("mensaje2,esta funcion esta en modulo4.js");
    msj.appendChild(txt);
    document.body.append(msj);
}
//se exportan las funciones al final, en lugar de añadir export a cada una al inicio
export {hola6, mensaje, mensaje2};