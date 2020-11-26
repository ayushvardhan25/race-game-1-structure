class Form{
    constructor(){


    }




display(){
var title = createElement('h2')
title.html('CAR RACING GAME')
title.position(120,0)
var input  = createInput('Name')
var Button = createButton('KHELO')
var Greeting = createElement('h1')
input.position(130,180)
Button.position(300,250);
Button.mousePressed(function(){
    input.hide()
    Button.hide()
    var Name = input.value()
    playerCount += 1
    player.update(Name)
    
   player.updateState(playerCount)
    Greeting.html('hello'+Name+'welcome to F1 RACE')
    Greeting.position(130,160)

})













}
















}