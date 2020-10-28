//Antes que nada, insertamos estas equiteques en el documento, para que el navagador incluya
//el resto de los archivos de este programa
document.write("<script type='text/javascript' src='programa2_2.js'></script>");
document.write("<script type='text/javascript' src='programa2_3.js'></script>");


funcion2_1();
//funcion2_3();		//no se puede invocar esta función

function funcion2_1() {
	document.write("función2_1 en el archivo programa2_1<br>");
}

for (i = 1; i <= 2; i++)
	document.write("este código está en el archivo programa2_1.js<br>");
document.write("<p>");

