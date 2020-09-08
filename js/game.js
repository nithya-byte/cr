class game
{
constructor(){}
getState()
{
    database.ref('gamestate').on(
        "value",function(data){
            gamestate=data.val();
        
    })
}

update(state)
{
    database.ref('/').update({gamestate:state});
}

async start()
{
    if(gamestate==0)
    {
    player1= new player();
    var playercountref=await database.ref('playercount').once("value");
    if(playercountref.exists())
    {
        playercount=playercountref.val();
        player1.getcount();
    }
   
    form= new form();
    form.display();
    }
    car1= createSprite(100,200);
    car1.addImage("car1",car1img);
    car2=createSprite(300,200);
    car2.addImage("car2",car2img);
    car3=createSprite(500,200);
    car3.addImage("car3",car3img);
    car4=createSprite(700,200);
    car4.addImage("car4",car4img);
    cars=[car1,car2,car3,car4];
}
play()
{
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    player.getallPlayers();
    
    if(allPlayers!=undefined)
    {
        background("#c68767");
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index=0;
        var x=0;
        var y;
        for(var plr in allPlayers)
        {
            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index==player1.index)
            {
                cars[index-1].shapeColor="red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y
            }
        }
    }
    
    if(keyIsDown(UP_ARROW) && player1.index !== null){
        player1.distance +=50
        player1.updatePlayer();
        
      }

      if(player1.distance>3860)
      {
          gamestate=2;
      }
      drawSprites();
}
end()
{
    game.update(2);
}
}