export function hola(){
    document.write("modulo1,funcion hola en archivo externo del html<br>");
    //write no se ejecutan en carga asincrona, por lo que ocurre un error.
}

export function hola2() {
    var parrafo = document.createElement("div");
    var texto = document.createTextNode("hola2, aparezco al final por que fue por body.append, desde modulo1.js");
    parrafo.appendChild(texto);
    document.body.append(parrafo);
    //se agrega el parrafo hasta el final del documento html   
}

export function hola3() {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode("modulo3,funcion hola3 en archivo externo del html usando DOM id");
    parrafo.appendChild(texto);
    var par = document.getElementById("5");
    parrafo.style.fontWeight="normal"; //quitamos el efecto bold heredado del padre
    par.append(parrafo);
}

import {hola4} from './modulo2.js'
import {hola5} from './modulo3.js' 
hola4();
hola5();