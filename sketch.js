var gamestate=0;
var playercount=0;
var allPlayers;
var player1;
var database;
var cars,car1,car2,car3,car4;
var car1img,car2img,car3img,car4img,track;


function preload()
{
  track=loadImage("images/track.png");
  car1img=loadImage("images/car1.png");
  car2img=loadImage("images/car2.png");
  car3img=loadImage("images/car3.png");
  car4img=loadImage("images/car4.png");
}

function setup(){
  database = firebase.database();
  
  canvas=createCanvas(displayWidth-20,displayHeight-30);
game=new game();
game.getState();
game.start();
  
}

function draw(){
  background("white");
  
   if(playercount==4)
   {
     game.update(1);
   }
   if(gamestate==1)
   {
     clear();
     game.play();
     
   }
   if(gamestate==2)
   {
     game.update(2);
   }
 
}

