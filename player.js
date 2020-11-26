class Player{
    constructor(){

    }
    getcount(){
        var  playerCountref = database.ref('playerCount')
        playerCountref.on('value',function(data){
            playerCount = data.val()
        })
    }
    updateState(Count){
        database.ref('/').update({playerCount:Count})
    }
update(Name){
var playerIndex = 'player'+playerCount
database.ref(playerIndex).set({
    Name:Name 
})
}



}
