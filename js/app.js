/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




let game ='';
const startBtn = document.getElementById("btn__reset");


startBtn.addEventListener('click', function() {
 game = new Game()
 game.resetGame();
 game.startGame();

});

let buttons = document.querySelectorAll('.key');

buttons.forEach(button =>{

    button.addEventListener('click', function() {
    game.handleInteraction(this)
          
        })

})