export function hola5() {
    var parrafo = document.createElement("div");
    var texto = document.createTextNode("hola5, aparezco al final por que fue por body.append, desde modulo3.js");
    parrafo.appendChild(texto);
    document.body.append(parrafo);
    //se agrega el parrafo hasta el final del documento html
}