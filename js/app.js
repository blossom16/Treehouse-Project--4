/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game = '';
const startButton = document.getElementById("btn__reset"); 

startButton.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
})


const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (e) => {
    
    if (e.target.tagName === 'BUTTON') {
        
        game.handleInteraction(e.target);
    }
});
