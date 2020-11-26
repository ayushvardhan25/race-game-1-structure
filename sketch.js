var  database;
var game,form,player
var gameState = 0
var playerCount

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new GameState()
game.getState()
game.start()
 
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}

