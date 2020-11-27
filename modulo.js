//archivo en el que muestra el uso de export general

export default class ObjetoGUI {
    constructor(ancho, alto) {
        this.alto = alto;
        this.ancho = ancho;
        this.canvas_ref = 0;
        this.crear_pizarra(alto,ancho);
    }
     
    cuadrado()
    {
        var canvas = document.getElementById(0);
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(100,100, 150, 150);
        console.log("hola");
    }
      
    circulo()
    {
        var canvas = document.getElementById(0);
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }

    limpiar()
    {
        var canvas = document.getElementById(0);
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0,0,800,600);
    }

    //funcion asistente del constructor
    //se encarga de hacer el canvas con sus botones
    crear_pizarra(alto,ancho)
    {
        var canv = document.createElement('canvas');
        canv.id = this.canvas_ref;        
        canv.width=this.ancho;
        canv.height=this.alto;
        document.body.appendChild(canv);
        //////////////////////////////////////
        var boton1 = document.createElement('button');
        boton1.width=150;
        boton1.height=80;
        boton1.textContent="cuadrado";
        boton1.addEventListener("click", this.cuadrado);
        document.body.appendChild(boton1);

     
        var boton2 = document.createElement('button');
        boton2.width=150;
        boton2.height=80;
        boton2.textContent="circulo";
        boton2.addEventListener("click", this.circulo);
        document.body.appendChild(boton2);
        
        var boton3 = document.createElement('button');
        boton3.width=150;
        boton3.height=80;
        boton3.textContent="limpiar";
        boton3.addEventListener("click", this.limpiar);
        document.body.appendChild(boton3);
    }
  }