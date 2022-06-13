const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let sliceImage = new Image();
sliceImage.src = '../images/pizzanobackground.png';

let plateImage = new Image();
plateImage.src = '../images/platoremoved.png'

let cutterImage = new Image();
cutterImage = '../images/pizza cutter.png'
 
const pizzas = [];



class Objeto {
    constructor(x,y,ancho,alto,imagen,ctx){
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.imagen = imagen;
        this.ctx = ctx;
    }
    dibujar() {
        ctx.drawImage(this.imagen,this.x,this.y,this.ancho,this.alto);
    }
    borrar() {
        ctx.clearRect(this.x, this.y, this.ancho, this.alto);
    }
}

const cutter = new Objeto(550,550,10,20,cutterImage,ctx);

const plato = new Objeto(440,540,120,60,plateImage, ctx);

 const crearPizzas = () => {
        const randomPositionPizzaX = Math.floor(Math.random() * 920);
        //const randomPositionPizzaY = Math.floor(Math.random() * 220);
        const pizza = new Objeto(
          randomPositionPizzaX,
          randomPositionPizzaY = 0,
          80,
          80,
          sliceImage,
          ctx
        );
        pizzas.push(pizza);
      }
    

const party = () => {
    for (let pizza of pizzas){
        pizza.borrar();
        pizza.y +=5;
        pizza.dibujar();
    }
}


  const cargaInicial = () => {
      
    plato.dibujar();
    cutter.dibujar();
      setInterval(party,200);
      setInterval(crearPizzas, 2500);
  }
  
  const moverPlato = (e) => {
    plato.borrar();
    if (e.key === "ArrowLeft") {
      plato.x -= 15;
    }
    if (e.key === "ArrowRight") {
      plato.x += 15;
    }  
    plato.dibujar();
  };

  const dispararCutter = (e) => {
    cutter.borrar();
    if (e.key === "Space") {
      cutter.y -= 15; 
    }
    cutter.dibujar();
  };

window.addEventListener("load", cargaInicial);
window.addEventListener("keydown", moverPlato);
//window.addEventListener("keydown", dispararCutter);


