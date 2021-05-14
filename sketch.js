var canvas;
var music;
var rect1;
var rect2;
var rect3;
var rect4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    rect1 = createSprite(100,550,190,50);
    rect1.shapeColor="red";
    rect2 = createSprite(300,550,190,50);
    rect2.shapeColor="blue";    
    rect3 = createSprite(500,550,190,50);
    rect3.shapeColor="green";
    rect4 = createSprite(700,550,190,50);
    rect4.shapeColor="brown";
    ball = createSprite(400,300,50,50);
    ball.velocityX=4;
    ball.velocityY=5

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("yellow");


    if(ball.isTouching(rect1)){
        ball.shapeColor="red";
    }


    if(ball.isTouching(rect2)){
        ball.shapeColor="blue";
    }


    if(ball.isTouching(rect3)){
        ball.shapeColor="green";
        //ball.velocityX=0;
        //ball.velocityY=0;
    }


    if(ball.isTouching(rect4)){
        ball.shapeColor="brown";
    }


   // ball.bounceOff(topEdge);
    //ball.bounceOff(rightEdge);
    //ball.bounceOff(leftEdge);
    ball.bounceOff(rect1);
    ball.bounceOff(rect2);
    ball.bounceOff(rect3);
    ball.bounceOff(rect4);


    //ball.velocityX=4
    //ball.velocityY=5

    drawSprites();
    //create edgeSprite
    createEdgeSprites();




    //add condition to check if box touching surface and make it box
}
