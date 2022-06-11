const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const sliceImage = new Image();
sliceImage.src = '../images/pizzanobackground.png';
 
let sliceOfPizzaX = 0;
let sliceOfPizzaY = 0;

//const cutterImage = new Image();
//cutterImage.src = '../images/pizza cutter.png';

sliceImage.onload = function(){
ctx.drawImage (sliceImage,sliceOfPizzaX,sliceOfPizzaY, 80, 80);
//ctx.drawImage (cutterImage,250,50,50,50);

}

function randomSlices (){
    ctx.drawImage (sliceImage,sliceOfPizzaX,sliceOfPizzaY, 80, 80);
    
    sliceOfPizzaX += 100;
    setInverval(sliceImage,1000);
   
}
randomSlices();
