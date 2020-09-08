class player{
constructor(){
this.index=null;
this.name=null;
this.distance=0;

}
updatePlayer()
{
    var playername="players/player"+this.index;
        database.ref(playername).set({
        name:this.name,
        distance:this.distance
    })
}

updateplayercount(count)
{
    database.ref('/').update({
        playercount:count
    })
}
getcount()
{
    database.ref('playercount').on("value",function(data)
    {
        playercount=data.val();
    })
}
static getallPlayers()
{
    database.ref('players').on("value",function(data)
    {
        allPlayers=data.val();
    })
}

}