/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */




const startButton = document.getElementById("btn__reset"); 
let game;

startButton.addEventListener("click", () =>{
    game = new Game();
    game.startGame();
})


const keyboardKeys = document.querySelectorAll('.key');

keyboardKeys.forEach(button => {
    button.addEventListener('click', () =>{
        game.handleInteraction(button)
        }
    )
})