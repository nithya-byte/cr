class form{
constructor(){
    this.input=createInput("name");
    this.greeting=createElement("h3");
    this.button=createButton("play");
}

hide()
{
    this.input.hide();
    this.greeting.hide();
    this.button.hide();
}
    display()
    {
var title=createElement("h2");
title.html('car racing game');
title.position(displayWidth/2-50,0);

this.input.position(displayWidth/2-40,displayHeight/2-80);
this.button.position(displayWidth/2+30,displayHeight/2);

this.button.mousePressed(()=>
{
    this.input.hide();
    this.button.hide();
   
    player1.name=this.input.value();
    
    playercount=playercount+1;
    player1.index=playercount;
    player1.updatePlayer();
    player1.updateplayercount(playercount);
    this.greeting.html("hello" +player1.name);
    this.greeting.position(displayWidth/2-70,displayHeight/4);
})
    }
}