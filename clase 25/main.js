var ball,ballImage;
var edges;
var paddle,imagenPaddle;
var fondito;
var red,blue,green,yellow;
var grupoA;
var puntuacion=0;
function preload(){
  ballImage=loadImage("ball.png");
  imagenPaddle=loadImage("paddle.png");
  fondito=loadImage("bg.jpg");
blue=loadImage("blue.png");
red=loadImage("red.png");
green=loadImage("green.png");
yellow=loadImage("yellow.png");
}

function setup() {
    createCanvas(700 , 700 );
     
    ball=createSprite(300,550,100,100);
  ball.addImage(ballImage);
  ball.scale=0.1;

  paddle=createSprite(340,600,100,15);//crateSprite(x,y,ancho,alto);
  paddle.shapeColor="white";
  paddle.addImage(imagenPaddle);
paddle.scale=0.1

grupoA=createGroup();
alien(75,green);
  alien(75+40,red);
  alien(75+80,red);
  alien(75+120,yellow);
  alien(75+160,blue);
  alien(75+200,yellow);
  alien(75+240,red);
    edges=createEdgeSprites();//bolaloca
}

function draw() {
  // Fill the canvas with light gray, covering up previous images
  background(fondito);
  textSize(40);
  fill("black");
  text("press space to star",155,400);
 text("puntuacion: "+puntuacion,410,680);
  
 
  //background(0,250,154);



if(keyDown("space")){
  ball.velocityX=-10
  ball.velocityY=10
  
}



  gamplay();
    drawSprites(); 
  
    
}

function alien(y,alienImage){
var x=100;
  for(var a=0;a<=6;a++)
  {
    var rarito=createSprite(x,y,50,25);
    x+=rarito.width+40;
rarito.addImage("colorAlien",alienImage);
rarito.scale=0.1;
console.log(a);
grupoA.add(rarito);
}
}

function golpa(ball,grupoA){
grupoA.remove();
puntuacion+=5
}
function gamplay(){
  paddle.x=mouseX;
  
//aqui son las colisiones
ball.bounceOff(edges[0]);
ball.bounceOff(edges[1]);
ball.bounceOff(edges[2]);
//ball.bounceOff(edges[3]);

if(paddle.x<60){
  paddle.x=60;
  } 
if(paddle.x>645){
  paddle.x=645
}
  ball.bounceOff(paddle);
  ball.bounceOff(grupoA,golpa)
  
}


