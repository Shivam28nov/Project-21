// sprite objects
var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){

    // creating canvas
    canvas = createCanvas(780,600);

    //create 4 different surfaces
    surface1 = createSprite(100,570,150,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(280,570,150,20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(460,570,150,20);
    surface3.shapeColor = "pink";

    surface4 = createSprite(640,570,150,20);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(375,100,20,20);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 5;

    // to create edge sprite
    edges = createEdgeSprites();

}

function draw() {

    // to give background
    background(rgb(169,169,169));

    // to draw sprites
    drawSprites();

    // bounce off the box with edge
    box.bounceOff(edges);
      
    //add condition to check if box touching surface and make it box
   
    if(box.isTouching(surface1) && box.bounceOff(surface1)){

       box.shapeColor = "blue";
       box.velocityX=0;
       box.velocityY=0;

    }

    if(box.isTouching(surface2) && box.bounceOff(surface2)){

       box.shapeColor = "orange";
       music.stop();
    }

    if(box.isTouching(surface3) && box.bounceOff(surface3)){

       box.shapeColor = "pink";
       music.play();

    }
    
    if(box.isTouching(surface4) && box.bounceOff(surface4)){

       box.shapeColor = "green";
      
    }



}
