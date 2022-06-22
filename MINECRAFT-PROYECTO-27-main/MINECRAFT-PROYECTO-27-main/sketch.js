var playerPaddle, computerPaddle, ball;
var paddle1, paddle2, ballImage, bg;
var edges;


function preload(){
    paddle1=loadImage("B1.png")
    paddle2=loadImage("B2.png")
    ballImage=loadImage("Ball2.png")
    bg=loadImage("TT.png")
}

function setup(){
    playerPaddle = createSprite(375, 200, 10, 70);
    computerPaddle = createSprite(20, 200, 10, 70);
    ball = createSprite(200,200,10,10);
    playerPaddle.addImage("B1",paddle1);
    playerPaddle.scale=0.4;
    computerPaddle.addImage("B2",paddle2);
    computerPaddle.scale=0.4;

    ball.addImage("Ball2.png", ballImage);
    ball.scale=0.4;

    edges=createEdgeSprites();
    
  
}

function draw(){
    background(bg);

    textSize(15);
    fill("black");
    text("Presiona la barra espaciadora para iniciar el juego",30,150)

    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[2]);
    
    // Rebotar en la paleta
    ball.bounceOff(playerPaddle);
    ball.bounceOff(computerPaddle);
    
    // Agregar movimiento a la paleta
    playerPaddle.y=mouseY;
    
    if(keyDown("space")){  
        ball.velocityX = 6;
        ball.velocityY = 6;
    }
    // Llamar a la función a continuación
    
    
    drawSprites();
}

       
function drawnet(num){
    // Agregar un bucle para crear la red
                       {
        strokeWeight(3)
        stroke("black")
        line(200, 20*i, 200, 10+20*i);
    }
}
